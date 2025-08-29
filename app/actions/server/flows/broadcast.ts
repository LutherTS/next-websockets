import { webSocketClients } from "~/server/constants/websocket-clients.js";

import { countAllMessages, findLatestMessages } from "@/reads/messages";
import { findUserByUsername } from "@/reads/users";

import {
  createNewMessage,
  createNewMessageWithUserId,
  deleteExtraMessages,
} from "@/writes/messages";

/**
 * The flow that broadcasts the new messages to all WebSocket clients. (Saved as a flow so that it can be used across Server Functions at will, be them standalone in their own files or inline within Server Components.)
 * @param message The current latest message sent from the client.
 * @param displayUsername The username to be displayed sent from the current session. If it exists, this lets the action know which existing user sent the current message. If it doesn't, this lets the action know the current message was sent from a guest (unauthenticated).
 * @returns
 */
export const broadcastFlow = async (
  message: string,
  displayUsername: string | undefined,
) => {
  console.log(`Message received:`, message);

  if (!displayUsername) {
    console.log("Creating the guest's message.");
    await createNewMessage(message);
  } else {
    console.log("Finding the user.");
    // find the user with that displayUsername as username
    const currentUser = await findUserByUsername(displayUsername);

    if (!currentUser)
      return console.error(
        "It should be impossible that the current user on the app could not be found on the User table in the database.",
      );
    const userId = currentUser.id;

    console.log("Creating the user's message.");
    await createNewMessageWithUserId(message, userId);
  }

  // counts all messages for logs
  const allMessagesCountBefore = await countAllMessages();
  console.info("allMessagesCountBefore:", allMessagesCountBefore);

  // deletes older messages to sustain the database (considered lightweight enough to run without a condition at this time)
  await deleteExtraMessages();

  // counts all messages for logs
  const allMessagesCountAfter = await countAllMessages();
  console.info("allMessagesCountAfter:", allMessagesCountAfter);

  // gets the latest messages from the database
  const messages = await findLatestMessages();

  console.info("webSocketClients:", webSocketClients.size);
  webSocketClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      // sends the whole list of the latest messages
      client.send(JSON.stringify(messages));
    }
  });

  console.info(`Messages broadcasted:`, messages);
};
