"use server";

import { broadcastFlow } from "@/server/utilities/flows/broadcast";

export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
