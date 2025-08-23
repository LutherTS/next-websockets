import { prisma } from "@/prisma/db";

/** Creates a new message in the Prisma database. */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}
