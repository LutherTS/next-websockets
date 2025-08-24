"use server"; // required, among other reasons, to inform React that if this module is to imported on the client (as it does for WebSocketsClientPage), it needs to be imported as reference

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION
 * @param message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @returns
 */
export async function broadcastAction(message: string) {
  await broadcastFlow(message);
}
