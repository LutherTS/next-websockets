import { prisma } from "~/prisma/db";

/**
 * Finds an existing `BetterAuthUser` via its unique `displayUsername`, if such a `BetterAuthUser` exists.
 * @param displayUsername $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA
 * @returns $COMMENT#JSDOC#PAGES#WEBSOCKETS#RETURNS#GETEXISTINGUSERACTION
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
