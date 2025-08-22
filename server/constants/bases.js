import { WebSocketServer } from "ws";

//
/** The WebSocket server to be accessed across the codebase. */
export const wss = new WebSocketServer({ noServer: true });

/** @type {Set<WebSocket>} The list of all WebSocket clients created in order to broadcast the new messages to all of them. */
export const webSocketClients = new Set();
