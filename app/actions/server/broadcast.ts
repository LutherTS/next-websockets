"use server"; // required, among other reasons, to inform React that if this module is to be imported on the client (as it does for WebSocketsClientPage), it needs to be imported as reference

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * The Server Function that triggers broadcasts directly from the client, by passing the new message to the server, and the username of its sender if authenticated.
 * @param message The current latest message sent from the client.
 * @param displayUsername The username to be displayed sent from the current session. If it exists, this lets the action know which existing user sent the current message. If it doesn't, this lets the action know the current message was sent from a guest (unauthenticated).
 * @returns
 */
export async function broadcastAction(
  message: string,
  displayUsername: string | undefined,
) {
  await broadcastFlow(message, displayUsername);
}
