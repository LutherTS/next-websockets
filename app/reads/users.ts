import { prisma } from "~/prisma/db";

/**
 * Finds the existing `User` via its unique username, its existence guaranteed by the fact that `User`s' `username`s and `BetterAuthUser`s' `displayUsername`s are strictly the same and their instances created simultaneously.
 * @param displayUsername The username to be displayed sent from the current session. Here used to find the `User` needed to attach to the message being sent.
 * @returns Either the ID of the `User` in an object if found or `null` otherwise.
 */
export async function findUserByUsername(displayUsername: string) {
  return await prisma.user.findUnique({
    select: {
      id: true,
    },
    where: {
      username: displayUsername,
    },
  });
}
