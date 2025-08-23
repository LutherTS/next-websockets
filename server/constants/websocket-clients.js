/** @type {Set<WebSocket>} $COMMENT#JSDOC#CONSTS#WEBSOCKETCLIENTS */
export const webSocketClients = global.webSocketClients || new Set();

if (process.env.NODE_ENV !== "production") {
  globalThis.webSocketClients = webSocketClients;
}
