import { prisma } from "../../../prisma/db.js";
import { webSocketClients } from "../../constants/websocket-clients.js";

/**
 * $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW
 * @param {string} message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 * @returns
 */
export const broadcastFlow = async (message) => {
  console.log(`Message received:`, message);

  // creates a new message in the database
  await prisma.message.create({
    data: {
      value: message,
    },
  });

  // gets the latests messages from the database
  const messages = (
    await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    })
  )
    .map((e) => e.value)
    .reverse(); // for now

  webSocketClients.forEach((client) => {
    if (
      client.readyState === WebSocket.OPEN
      // && message.toString() !== `{"event":"ping"}`
    ) {
      // sends the whole list of the latest messages
      client.send(JSON.stringify(messages));
    }
  });

  console.log(`Message broadcasted:`, messages);
};
