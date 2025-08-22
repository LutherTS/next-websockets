import { webSocketClients } from "../constants/bases.js";

/**
 * $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW
 * @param {string} message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @returns
 */
export const broadcastFlow = (message) => {
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
