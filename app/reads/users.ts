import { prisma } from "~/prisma/db";

/**
 * Finds the existing `User` via its unique `username`, its existence guaranteed by the fact that `username`s of `User`s and `displayUsername`s of `BetterAuthUser`s are strictly the same and their instances created simultaneously.
 * @param displayUsername $COMMENT#JSDOC#READS#PARAMS#DISPLAYUSERNAMEB
 * @returns $COMMENT#JSDOC#READS#RETURNS#FINDUSERBYUSERNAME
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
