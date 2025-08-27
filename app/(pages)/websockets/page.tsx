import { prisma } from "~/prisma/db";

import { findLatestMessages } from "@/reads/messages";

import WebSocketsClientPage from "./client";

/** $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */
export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  // the idea is that people sign in with their displayUsername
  // which returns their actual username from the database
  async function getExistingUserAction(displayUsername: string) {
    "use server";

    // that's a read: findExistingUserByDisplayUsername
    const existingUser = await prisma.betterAuthUser.findUnique({
      select: {
        username: true,
      },
      where: {
        displayUsername,
      },
    });

    return existingUser;
  }

  async function createNewUserAction(username: string) {
    "use server";

    // write: createNewUserByUsername
    const user = await prisma.user.create({
      data: {
        username,
      },
    });
    console.log("user:", user);
  }

  return (
    <WebSocketsClientPage
      initialMessages={initialMessages}
      getExistingUserAction={getExistingUserAction}
      createNewUserAction={createNewUserAction}
    />
  );
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> via a TypeScript server plugin could be my next project.
*/
