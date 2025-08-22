"use server";

import { broadcastFlow } from "@/server/utilities/flows";

export async function broadcastAction(message: string) {
  console.log("In action.");
  console.log(message);
  broadcastFlow(message);
}
