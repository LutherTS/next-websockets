// const globalForWebSocketClients = global;

// /** @type {Set<WebSocket>} The list of all WebSocket clients created in order to broadcast the new messages to all of them from the server. */
// export const webSocketClients =
//   globalForWebSocketClients.webSocketClients || new Set();

// if (process.env.NODE_ENV !== "production") {
//   globalForWebSocketClients.webSocketClients = webSocketClients;
// }

// constants/websocket-clients.js
console.log("WebSocket clients module initialized");

const globalForWebSocketClients = global;
console.log(
  "Global has webSocketClients:",
  "webSocketClients" in globalForWebSocketClients,
);

if (!globalForWebSocketClients.webSocketClients) {
  console.log("Creating new WebSocket clients Set");
  globalForWebSocketClients.webSocketClients = new Set();
} else {
  console.log(
    "Using existing WebSocket clients Set, size:",
    globalForWebSocketClients.webSocketClients.size,
  );
}

export const webSocketClients = globalForWebSocketClients.webSocketClients;
