import { prisma } from "~/prisma/db";

/**
 * $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE
 * @param message $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE
 */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}

/** $COMMENT#JSDOC#WRITES#DEFS#DELETEEXTRAMESSAGES */
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
