import { webSocketClients } from "../../constants/websocket-clients.js";

import { createNewMessage } from "@/app/writes/messages";

import { findLatestMessages } from "@/app/reads/messages";

/**
 * The flow that broadcasts the new messages to all WebSocket clients.
 * @param message For now, the current latest message.
 * @returns
 */
export const broadcastFlow = async (message: string) => {
  console.log(`Message received:`, message);

  // creates a new message in the database
  await createNewMessage(message);

  // gets the latest messages from the database
  const messages = await findLatestMessages();

  webSocketClients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN
      // && message.toString() !== `{"event":"ping"}`
    ) {
      // sends the whole list of the latest messages
      client.send(JSON.stringify(messages));
    }
  });

  console.log(`Message broadcasted:`, messages);
};
