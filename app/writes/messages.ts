import { prisma } from "@/prisma/db";

export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}
