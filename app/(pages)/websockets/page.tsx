import { findLatestMessages } from "@/app/reads/messages";

import WebSocketsClientPage from "./client";

/** $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */
export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();
  console.log("initialMessages are:", initialMessages);

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}
