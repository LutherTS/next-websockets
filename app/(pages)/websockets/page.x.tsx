import { findLatestMessages } from "@/reads/messages";
import { findExistingUsernameByDisplayUsername } from "@/reads/better-auth-users";

import { createNewUserByUsername } from "@/writes/users";

import WebSocketsClientPage from "./client";

/** The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page. */
export default async function WebSocketsServerPage() {
  /* reads */

  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  /* writes */

  /**
   * Gets or doesn't get an existing `User` from the database in order to decide whether to sign in if a `User` exists or sign up otherwise.
   * @param displayUsername The username to be displayed sent from the current session. Here used to find the `BetterAuthUser` needed to sign in if found or to acknowledge its absence for sign up if nonexistent.
   * @returns Either the `username` of the `BetterAuthUser` in an object if found or `null` otherwise.
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
      // @ts-ignore: .xtsx
      initialMessages
      // @ts-ignore: .xtsx
      getExistingUserAction
      // @ts-ignore: .xtsx
      createNewUserAction
    />
  );
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> could be my next project. Introducing xJSX (eXtra JSX). 
*/
