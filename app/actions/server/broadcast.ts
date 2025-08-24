"use server";

import { broadcastFlow } from "@/server/utilities/flows/broadcast";

/** $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION */
export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
