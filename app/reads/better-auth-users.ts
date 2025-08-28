import { prisma } from "~/prisma/db";

/**
 * Finds an existing `BetterAuthUser` via its unique `displayUsername`, if such a `BetterAuthUser` exists.
 * @param displayUsername The username to be displayed sent from the current session. Here used to find the `BetterAuthUser` needed to sign in if found or to acknowledge its absence for sign up if nonexistent.
 * @returns Either the `username` of the `BetterAuthUser` in an object if found or `null` otherwise.
 */
export async function findExistingUsernameByDisplayUsername(
  displayUsername: string,
) {
  return await prisma.betterAuthUser.findUnique({
    select: {
      username: true,
    },
    where: {
      displayUsername,
    },
  });
}
