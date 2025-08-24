import { webSocketClients } from "../../constants/websocket-clients.js";

import { createNewMessage, deleteExtraMessages } from "@/app/writes/messages";

import { countAllMessages, findLatestMessages } from "@/app/reads/messages";

/**
 * The flow that broadcasts the new messages to all WebSocket clients.
 * @param message For now, the current latest message.
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
    if (
      client.readyState === WebSocket.OPEN
      // && message.toString() !== `{"event":"ping"}`
    ) {
      // sends the whole list of the latest messages
      client.send(JSON.stringify(messages));
    }
  });

  console.log(`Messages broadcasted:`, messages);
};
