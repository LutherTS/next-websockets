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
   * Gets or doesn't not get an existing `User` from the database in order to decide whether to sign in if a `User` exists or sign up otherwise.
   * @param displayUsername The username to be displayed sent from the current session. Here used to find the `BetterAuthUser` needed to sign in if found or to acknowledge its absence for sign up if nonexistent.
   * @returns
   */
  async function getExistingUserAction(displayUsername: string) {
    "use server";

    return await findExistingUsernameByDisplayUsername(displayUsername);
  }

  /**
   * Creates the corresponding `User` to the newly-created `BetterAuthUser` on success of its signing up.
   * @param username The unique `username` of the new `User`, made out of the `displayUsername` initially provided to create a `BetterAuthUser` instance at sign up.
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
