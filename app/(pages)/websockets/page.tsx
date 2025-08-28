import { findLatestMessages } from "@/reads/messages";
import { findExistingUsernameByDisplayUsername } from "@/reads/better-auth-users";

import { createNewUserByUsername } from "@/writes/users";

import WebSocketsClientPage from "./client";

/** $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */
export default async function WebSocketsServerPage() {
  /* reads */

  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  /* writes */

  /**
   * $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#GETEXISTINGUSERACTION
   * @param displayUsername $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA
   * @returns Either the `username` of the `BetterAuthUser` in an object if found or `null` otherwise.
   */
  async function getExistingUserAction(displayUsername: string) {
    "use server";

    return await findExistingUsernameByDisplayUsername(displayUsername);
  }

  /**
   * $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CREATENEWUSERACTION
   * @param username $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#USERNAME
   */
  async function createNewUserAction(username: string) {
    "use server";

    await createNewUserByUsername(username);
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
