import { prisma } from "~/prisma/db";

import { webSocketClients } from "~/server/constants/websocket-clients.js";

import {
  createNewMessage,
  createNewMessageWithUserId,
  deleteExtraMessages,
} from "@/writes/messages";

import { countAllMessages, findLatestMessages } from "@/reads/messages";

/**
 * $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW
 * @param message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @param displayUsername $COMMENT#JSDOC#UTILS#PARAMS#DISPLAYUSERNAME
 * @returns
 */
export const broadcastFlow = async (
  message: string,
  displayUsername: string | undefined,
) => {
  console.log(`Message received:`, message);

  if (!displayUsername)
    // creates a new message in the database
    await createNewMessage(message);
  else {
    console.log("Finding the user...");
    // find the user with that displayUsername as username
    const currentUser = await prisma.user.findUnique({
      select: {
        id: true,
      },
      where: {
        username: displayUsername,
      },
    });
    console.log("currentUser:", currentUser);

    if (!currentUser)
      return console.error(
        "It should be impossible that the current user on the app could not be found on the User table in the database.",
      );

    const userId = currentUser.id;

    console.log("Creating the user's message");
    const userMessage = await createNewMessageWithUserId(message, userId);
    console.log("userMessage:", userMessage);
  }

  // counts all messages for logs
  const allMessagesCountBefore = await countAllMessages();
  console.log("allMessagesCountBefore:", allMessagesCountBefore);

  // deletes older messages to sustain the database (considered lightweight enough to run without a condition at this time)
  await deleteExtraMessages();

  // counts all messages for logs
  const allMessagesCountAfter = await countAllMessages();
  console.log("allMessagesCountAfter:", allMessagesCountAfter);

  // gets the latest messages from the database
  const messages = await findLatestMessages();

  console.log("webSocketClients:", webSocketClients.size);
  webSocketClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      // sends the whole list of the latest messages
      client.send(JSON.stringify(messages));
    }
  });

  console.log(`Messages broadcasted:`, messages);
};
