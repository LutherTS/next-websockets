"use server"; // $COMMENT#REMARKS#USECLIENT

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION
 * @param message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @param displayUsername $COMMENT#JSDOC#UTILS#PARAMS#DISPLAYUSERNAME
 * @returns
 */
export async function broadcastAction(
  message: string,
  displayUsername: string | undefined,
) {
  await broadcastFlow(message, displayUsername);
}
