import { prisma } from "~/prisma/db";

/**
 * $COMMENT#JSDOC#WRITES#DEFS#CREATENEWUSERBYUSERNAME
 * @param username $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#USERNAME
 */
export async function createNewUserByUsername(username: string) {
  await prisma.user.create({
    data: {
      username,
    },
  });
}
