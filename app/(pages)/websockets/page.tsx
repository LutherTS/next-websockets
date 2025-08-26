import { findLatestMessages } from "@/reads/messages";

import { auth } from "~/better-auth/server/auth";

import WebSocketsClientPage from "./client";

/** The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page. */
export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  // testing better-auth on the server
  const data = await auth.api.signUpEmail({
    body: {
      name: "John Doe", // required
      email: "john.doe@example.com", // required
      password: "password1234", // required
      // image: "https://example.com/image.png",
      // callbackURL: "https://example.com/callback",
      username: "John_Doe",
      displayUsername: "John Doe",
    },
  });
  console.log("data", data);

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> via a TypeScript server plugin could be my next project.
*/
