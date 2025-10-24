import { prisma } from "~/prisma/db";

/**
 * $COMMENT#JSDOC#READS#DEFS#FINDUSERBYUSERNAME
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
