import { webSocketClients } from "~/server/constants/websocket-clients.js";

import { createNewMessage, deleteExtraMessages } from "@/writes/messages";

import { countAllMessages, findLatestMessages } from "@/reads/messages";

/**
 * The flow that broadcasts the new messages to all WebSocket clients. (Saved as a flow so that it can be used across Server Functions at will, be them standalone in their own files or inline within Server Components.)
 * @param message The current latest message sent from the client.
 * @returns
 */
export const broadcastFlow = async (message: string) => {
  console.log(`Message received:`, message);

  // creates a new message in the database
  await createNewMessage(message);

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
