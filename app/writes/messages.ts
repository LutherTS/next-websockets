import { prisma } from "@/prisma/db";

/** $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}
