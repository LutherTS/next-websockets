import { webSocketClients } from "../constants/websocket-clients.js";

/**
 * $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW
 * @param {string} message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @returns
 */
export const broadcastFlow = (message) => {
  // console.log("webSocketClients are:", webSocketClients);
  console.log("globalThis is:", globalThis);
  webSocketClients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN
      // && message.toString() !== `{"event":"ping"}`
    ) {
      // This is where the single message is sent. Once the database is in, it will send back the whole list of messages directly from the database (more like the last 50 messages).
      // And it will do so from a Server Action to runs broadcastFlow.
      client.send(message);
    }
  });
};
