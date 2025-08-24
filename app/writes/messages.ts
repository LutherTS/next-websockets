import { prisma } from "@/prisma/db";

/** $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}

export async function deleteExtraMessages() {
  await prisma.$executeRaw`
  DELETE FROM "Message" 
  WHERE id NOT IN (
    SELECT id FROM "Message" 
    ORDER BY "createdAt" DESC 
    LIMIT 5
  )
`;
} // Prod limit will be 1000.
