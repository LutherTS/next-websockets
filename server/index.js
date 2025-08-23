import { parse } from "url";
import { createServer } from "http";

import next from "next";

import { WebSocketServer } from "ws";

import { webSocketClients } from "./constants/websocket-clients.js";
import { webSocketEndpoint } from "./constants/agnostic/bases.js";

// import { broadcastFlow } from "./utilities/flows/broadcast.js";

const nextWrapperServer = next({ dev: process.env.NODE_ENV !== "production" });
const handleRequest = nextWrapperServer.getRequestHandler();

await nextWrapperServer.prepare();

const server = createServer((req, res) => {
  handleRequest(req, res, parse(req.url || "", true));
});

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws) => {
  webSocketClients.add(ws);
  console.log("New client connected.");

  // !! Now handled via server actions.
  // ws.on("message", (message) => {
  //   broadcastFlow(message.toString());
  // });

  ws.on("close", () => {
    webSocketClients.delete(ws);
    console.log("Client disconnected.");
  });
});

server.on("upgrade", (req, socket, head) => {
  const { pathname } = parse(req.url || "/", true);
  const handleUpgrade = nextWrapperServer.getUpgradeHandler();

  if (pathname === "/_next/webpack-hmr" || pathname === "/turbopack-hmr") {
    handleUpgrade(req, socket, head);
  }

  if (pathname === webSocketEndpoint) {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  }
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server listening on port 3000.");
});
