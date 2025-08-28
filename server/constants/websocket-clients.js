const globalForWebSocketClients = global;

if (!globalForWebSocketClients.webSocketClients) {
  globalForWebSocketClients.webSocketClients = new Set();
}

/** @type {Set<WebSocket>} $COMMENT#JSDOC#CONSTS#WEBSOCKETCLIENTS */
export const webSocketClients = globalForWebSocketClients.webSocketClients;
