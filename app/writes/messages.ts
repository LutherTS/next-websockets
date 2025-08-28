import { prisma } from "~/prisma/db";

/**
 * Creates a new `Message` in the Prisma database, attributed to no one since published as a guest.
 * @param message The current latest message sent from the client.
 */
export async function createNewMessage(message: string) {
  await prisma.message.create({
    data: {
      value: message,
    },
  });
}

/**
 * Creates a new `Message` in the Prisma database, assigned to the current user who sent the message.
 * @param message The current latest message sent from the client.
 * @param userId The ID of the current user as found from their unique username.
 */
export async function createNewMessageWithUserId(
  message: string,
  userId: string,
) {
  await prisma.message.create({
    data: {
      value: message,
      userId,
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
