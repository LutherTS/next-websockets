"use server";

import { broadcastFlow } from "@/server/utilities/flows/broadcast";

/** The Server Function that triggers broadcasts directly from the client, by passing the new message to the server. */
export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
