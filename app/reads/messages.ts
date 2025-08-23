import { prisma } from "@/prisma/db";

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
