import { headers } from "next/headers";

import { auth } from "~/better-auth/server/auth";
import { prisma } from "~/prisma/db";

import { findLatestMessages } from "@/reads/messages";

import WebSocketsClientPage from "./client";

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

  const data = await auth.api.signInEmail({
    body: {
      email: "john.doe@example.com", // required
      password: "password1234", // required
      // rememberMe: true,
      // callbackURL: "https://example.com/callback",
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
  console.log("data", data);

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  console.log("session", session); // OK, I get it. You can get the session on the server, but for that the session has to be made on the client, which is where authClient is needed. However, the behavior of authClient can be programmatically made with auth, by returning a response to the client. But that trip to the client is indispensible because it's on the client that the session cookie gets set.

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> via a TypeScript server plugin could be my next project.
*/
