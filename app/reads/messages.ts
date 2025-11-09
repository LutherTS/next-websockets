import { prisma } from "~/prisma/db";

/** Finds the latest messages from the Prisma database. At this time, transforms them directly into an array of objects containing their message, the message's ID, and the username of the user who sent it (with `null` instead if no such user is authenticated). The array is then reversed to display the messages in the correct visual order. */
export async function findLatestMessages() {
  return (
    await prisma.message.findMany({
      select: {
        value: true,
        id: true,
        user: {
          select: {
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    })
  )
    .map((e) => ({
      value: e.value,
      id: e.id,
      username: e.user ? e.user.username : null,
    }))
    .reverse();
}

/** Counts all the messages saved in the database, in order to ascertain its persistence between reboots and deployments. */
export async function countAllMessages() {
  return await prisma.message.count();
}
