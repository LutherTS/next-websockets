import { prisma } from "~/prisma/db";

/**
 * $COMMENT#JSDOC#READS#DEFS#FINDEXISTINGUSERNAMEBYDISPLAYUSERNAME
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
