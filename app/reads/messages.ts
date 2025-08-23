import { prisma } from "@/prisma/db";

/** Finds the latest messages from the Prisma database. At this time, transforms them directly in an array of usable strings. */
export async function findLatestMessages() {
  return (
    await prisma.message.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    })
  )
    .map((e) => e.value)
    .reverse(); // for now
}
