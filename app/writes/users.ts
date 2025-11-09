import { prisma } from "~/prisma/db";

/**
 * Creates a new `User` in the Prisma database, through its provided unique `username`.
 * @param username The unique `username` of the new `User`, made out of the `displayUsername` initially provided to create a `BetterAuthUser` instance at sign up.
 */
export async function createNewUserByUsername(username: string) {
  await prisma.user.create({
    data: {
      username,
    },
  });
}
