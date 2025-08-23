import { findLatestMessages } from "@/app/reads/messages";

import WebSocketsClientPage from "./client";

export default async function WebSocketsServerPage() {
  // gets the latest messages from the database
  const initialMessages = await findLatestMessages();

  return <WebSocketsClientPage initialMessages={initialMessages} />;
}
