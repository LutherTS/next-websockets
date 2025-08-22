import { parse } from "url";
import { createServer } from "http";

import next from "next";

import { wss, webSocketClients } from "./constants/bases.js";
import { broadcastFlow } from "./utilities/flows.js";

const nextWrapperServer = next({ dev: process.env.NODE_ENV !== "production" });
const handleRequest = nextWrapperServer.getRequestHandler();

await nextWrapperServer.prepare();

const server = createServer((req, res) => {
  handleRequest(req, res, parse(req.url || "", true));
});

wss.on("connection", (ws) => {
  webSocketClients.add(ws);
  console.log("New client connected.");

  ws.on("message", (message) => {
    console.log(`Message received: ${message}`);
    broadcastFlow(message.toString());
    console.log(`Message broadcasted: ${message}`);
  });

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

  if (pathname === "/api/ws") {
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  }
});

server.listen(3000);
console.log("Server listening on port 3000.");
