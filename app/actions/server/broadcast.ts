"use server"; // $COMMENT#REMARKS#USECLIENT

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION
 * @param message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @returns
 */
export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
