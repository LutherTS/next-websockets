import { findLatestMessages } from "@/reads/messages";

import WebSocketsClientPage from "./client";

/** $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */
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
