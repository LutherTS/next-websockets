/** @type {Set<WebSocket>} The list of all WebSocket clients created in order to broadcast the new messages to all of them from the server. */
export const webSocketClients = global.webSocketClients || new Set();

if (process.env.NODE_ENV !== "production") {
  globalThis.webSocketClients = webSocketClients;
}
