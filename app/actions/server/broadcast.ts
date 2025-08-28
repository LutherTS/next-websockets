"use server"; // $COMMENT#REMARKS#USECLIENT

import { broadcastFlow } from "@/actions/server/flows/broadcast";

/**
 * $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION
 * @param message $COMMENT#JSDOC#ACTIONS#PARAMS#MESSAGE
 * @param displayUsername $COMMENT#JSDOC#ACTIONS#PARAMS#DISPLAYUSERNAME
 * @returns
 */
export async function broadcastAction(
  message: string,
  displayUsername: string | undefined,
) {
  await broadcastFlow(message, displayUsername);
}
