import { prisma } from "@/prisma/db";

/** Creates a new message in the Prisma database. */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}

/** Deletes older messages from the database to cap the amount of messages it can effectively store. */
export async function deleteExtraMessages() {
  await prisma.$executeRaw`
  DELETE FROM "Message" 
  WHERE id NOT IN (
    SELECT id FROM "Message" 
    ORDER BY "createdAt" DESC 
    LIMIT 1000
  )
`;
}
