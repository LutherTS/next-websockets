import { prisma } from "~/prisma/db";

/**
 * Finds an existing `BetterAuthUser` via its unique `displayUsername`, if such a `BetterAuthUser` exists.
 * @param displayUsername $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA
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
