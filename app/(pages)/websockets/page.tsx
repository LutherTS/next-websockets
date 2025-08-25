import { findLatestMessages } from "@/reads/messages";

import WebSocketsClientPage from "./client";

/** The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page. */
export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}

/* Notes
<WebSocketsClientPage initialMessages />
Turning this syntax into <WebSocketsClientPage initialMessages={initialMessages} /> via a TypeScript server plugin could be my next project.
*/
