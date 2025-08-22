"use server";

import { broadcastFlow } from "@/server/utilities/flows";

export async function broadcastAction(message: string) {
  broadcastFlow(message);
}
