import { headers } from "next/headers";

import { auth } from "~/better-auth/server/auth";

import { findLatestMessages } from "@/reads/messages";

import WebSocketsClientPage from "./client";

import type { APIError } from "better-auth";

/** The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page. */
export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  // testing better-auth on the server
  // const data = await auth.api.signUpEmail({
  //   body: {
  //     name: "John Doe", // required
  //     email: "john.doe@example.com", // required
  //     password: "password1234", // required
  //     // image: "https://example.com/image.png",
  //     // callbackURL: "https://example.com/callback",
  //     username: "John_Doe",
  //     displayUsername: "John Doe",
  //   },
  // });
  // console.log("data", data);
  // const data = await auth.api.signUpEmail({
  //   body: {
  //     name: "Jane Doe", // required
  //     email: "jane.doe@example.com", // required
  //     password: "password1234", // required
  //     // image: "https://example.com/image.png",
  //     // callbackURL: "https://example.com/callback",
  //     username: "Jane_Doe",
  //     displayUsername: "Jane Doe",
  //   },
  // });
  // console.log("data", data);

  // const user = await prisma.betterAuthUser.findUnique({
  //   where: {
  //     email: "john.doe@example.com",
  //   },
  // });
  // console.log("user", user);

  // the idea is that people will signing with their displayUsername
  // consequently, displayUsername will need to be mandatory in the database
  async function testSignInAction(displayUsername: string) {
    "use server";

    const existingUser = displayUsername;

    // console.log("Signing in.");
    // try {
    //   const data = await auth.api.signInEmail({
    //     body: {
    //       email: "john.doe@example.com", // required
    //       password: "password1234", // required
    //       // rememberMe: true,
    //       // callbackURL: "https://example.com/callback",
    //     },
    //     // This endpoint requires session cookies.
    //     headers: await headers(),
    //     asResponse: true, // and there's the session
    //   });
    //   console.log("data", data);
    // } catch (error) {
    //   const apiError = error as APIError;
    //   console.error("error:", apiError);
    //   console.log("error.body:", apiError.body);
    // }
  }

  async function testSignOutAction() {
    "use server";
    console.log("Signing out.");
    try {
      const data = await auth.api.signOut({
        // This endpoint requires session cookies.
        headers: await headers(),
        asResponse: true,
      });
      console.log("data", data);
    } catch (error) {
      const apiError = error as APIError;
      console.error("error:", apiError);
      console.log("error.body:", apiError.body);
    }
  }

  return (
    <WebSocketsClientPage
      initialMessages={initialMessages}
      // testSignInAction={testSignInAction}
      // testSignOutAction={testSignOutAction}
    />
  );
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> via a TypeScript server plugin could be my next project.
*/
