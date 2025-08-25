"use server"; // required, among other reasons, to inform React that if this module is to imported on the client (as it does for WebSocketsClientPage), it needs to be imported as reference

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * The Server Function that triggers broadcasts directly from the client, by passing the new message to the server.
 * @param message The current latest message sent from the client.
 * @returns
 */
export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
