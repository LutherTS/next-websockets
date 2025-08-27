import { prisma } from "~/prisma/db";

/** $COMMENT#JSDOC#READS#DEFS#FINDLATESTMESSAGES */
export async function findLatestMessages() {
  return (
    await prisma.message.findMany({
      select: {
        value: true,
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
    .map((e) => ({ value: e.value, username: e.user ? e.user.username : null }))
    .reverse();
}

/** $COMMENT#JSDOC#READS#DEFS#COUNTALLMESSAGES */
export async function countAllMessages() {
  return await prisma.message.count();
}
