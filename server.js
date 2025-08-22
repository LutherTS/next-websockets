import { parse } from "url";
import { createServer } from "http";

import next from "next";

import { WebSocket, WebSocketServer } from "ws";

const nextWrapperServer = next({ dev: process.env.NODE_ENV !== "production" });
const handleRequest = nextWrapperServer.getRequestHandler();

/** @type {Set<WebSocket>} */
const clients = new Set();

await nextWrapperServer.prepare();

const server = createServer((req, res) => {
  handleRequest(req, res, parse(req.url || "", true));
});

const wss = new WebSocketServer({ noServer: true });

wss.on("connection", (ws) => {
  clients.add(ws);
  console.log("New client connected.");

  ws.on("message", (message, isBinary) => {
    console.log(`Message received: ${message}`);
    clients.forEach((client) => {
      if (
        client.readyState === WebSocket.OPEN &&
        message.toString() !== `{"event":"ping"}`
      ) {
        client.send(message, { binary: isBinary });
      }
    });
  });

  ws.on("close", () => {
    clients.delete(ws);
    console.log("Client disconnected.");
  });
});

server.on("upgrade", (req, socket, head) => {
  const { pathname } = parse(req.url || "/", true);
  const handleUpgrade = nextWrapperServer.getUpgradeHandler();

  if (pathname === "/_next/webpack-hmr" || pathname === "/turbopack-hmr") {
    handleUpgrade(req, socket, head);
  }

  if (pathname === "/api/ws") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  }
});

server.listen(3000);
console.log("Server listening on port 3000");
