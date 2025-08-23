import { prisma } from "../../../prisma/db.js";

import WebSocketsClientPage from "./client";

export default async function WebSocketsServerPage() {
  // gets the latests messages from the database
  const initialMessages = (
    await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    })
  )
    .map((e) => e.value)
    .reverse(); // for now

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}
