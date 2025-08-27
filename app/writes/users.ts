import { prisma } from "~/prisma/db";

/**
 * Creates the corresponding `User` to the newly-created `BetterAuthUser` on success of its signing up.
 * @param username The unique `username` of the new `User`, made out of the `displayUsername` initially provided to create a `BetterAuthUser` instance at sign up.
 */
export async function createNewUserByUsername(username: string) {
  await prisma.user.create({
    data: {
      username,
    },
  });
}
