import { webSocketClients } from "../constants/bases.js";

/**
 *
 * @param {string} message
 * @param {boolean} isBinary
 */
export const broadcast = (message, isBinary) => {
  webSocketClients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN
      // && message.toString() !== `{"event":"ping"}`
    ) {
      // This is where the single message is sent. Once the database is in, it will send back the whole list of messages directly from the database (more like the last 50 messages).
      // And it will do so from a Server Action.
      client.send(message, { binary: isBinary });
    }
  });
}; // eventually that's a flow though
