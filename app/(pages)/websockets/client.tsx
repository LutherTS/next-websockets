"use client"; // required, among other reasons, to inform React that if this module is to imported on the server (as it does for WebSocketsServerPage), it needs to be imported as reference

import { useEffect, useRef, useState, useTransition } from "react";

import { authClient } from "~/better-auth/client/auth";

import { webSocketEndpoint } from "~/server/constants/agnostic/bases.js";

import { broadcastAction } from "@/actions/server/broadcast";

const MESSAGE = "message";
const DISPLAYUSERNAME = "displayusername";
const PASSWORD = "password";

/** The "inner", Client part of the page. A Client Component, it retrieves the initial messages from its parent Server Component, before storing them in React state. It then creates a WebSocket to listen to fresh new data broadcasted from the server, in real-time on the client. */
export default function WebSocketsClientPage({
  initialMessages,
  testSignInAction, // new to test better-auth
  // testSignOutAction, // new to test better-auth
}: {
  initialMessages: string[];
  testSignInAction: (displayUsername: string) => Promise<{
    username: string;
  } | null>;
  // testSignOutAction: () => Promise<void>;
}) {
  // the messages received from the database, on both loading the page via a Server Component and receiving broadcasts from the WebSocket server
  const [messages, setMessages] = useState(initialMessages || []);
  // the connection status obtained from listening on WebSocket events
  const [connectionStatus, setConnectionStatus] = useState<
    "connected" | "disconnected" | "connecting"
  >("connecting");
  // (Both `messages` and `connectionStatus` are obtained live from the client via the WebSocket, hence the reason for client state.)

  const { data: session } = authClient.useSession();
  console.log("session (client):", session);

  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const ws = new WebSocket(
      `${protocol}//${window.location.host}${webSocketEndpoint}`,
    );
    wsRef.current = ws;

    ws.onopen = () => setConnectionStatus("connected");
    ws.onclose = () => setConnectionStatus("disconnected");
    // only missing .onerror

    ws.onmessage = (event) => {
      setMessages(JSON.parse(event.data)); // Now sent directly from the database.
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const [isBroadcastPending, startBroadcastTransition] = useTransition();

  /** The handler that triggers the broadcast. This is where the magic happens. This handler operates both on the client and on the server. Via the `broadcastAction` server action (Server Function), it sends the new message from the client to the server, where `broadcastAction` triggers the broadcast for all WebSocket clients directly from the server, in real-time. */
  const broadcast = (e: React.FormEvent<HTMLFormElement>) => {
    startBroadcastTransition(async () => {
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const message = formData.get(MESSAGE) || "";
      if (typeof message !== "string") return;
      if (!message.trim()) return;

      // the Server Function way
      // OPEN needed because without OPEN the message can't be received... on the client. But even without OPEN the message could be sent. However, since the ID of the connection will probably need to be sent in production, it is best to acknowledge that only connected WebSockets should be able to send messages and effectively trigger new messages.
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        // binds the message to the server action to be handled on the server, though this will be done with FormData instead
        const broadcastActionBound = broadcastAction.bind(null, message);
        // triggers the server action directly on the server with the bound data
        await broadcastActionBound();
      }

      // resetting the form programmatically so that it doesn't erase the input on errors
      form.reset();
    });
  };

  const [isTestSignInPending, startTestSignInTransition] = useTransition();

  const testSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    startTestSignInTransition(async () => {
      // find by displayUsername
      // find the actual username through the displayUsername
      // send the found username to the client
      // use the found username to authenticate on the client
      // await testSignInAction();
      e.preventDefault();

      const form = e.currentTarget;
      const formData = new FormData(form);

      const displayUsername = formData.get(DISPLAYUSERNAME) || "";
      if (typeof displayUsername !== "string") return;
      if (!displayUsername.trim()) return;

      const password = formData.get(PASSWORD) || "";
      if (typeof password !== "string") return;
      if (!password.trim()) return;

      /* next we'll use a server action to decide whether to sign up (if no user) or sign in (if a user exists) */

      const testSignInActionBound = testSignInAction.bind(
        null,
        displayUsername,
      );
      const existingUser = await testSignInActionBound();
      console.log("existingUser:", existingUser);

      // if (existingUser) {
      //   const { username } = existingUser;

      //   await authClient.signIn.username({
      //     username /* : "john_doe" */,
      //     password /* : "password1234" */,
      //   });
      // } else {
      //   authClient.signUp.email({
      //     name: displayUsername,
      //     email: `${displayUsername}@next-websockets.fly.dev/`, // Email is for show. In a complete application, this will actually need to be checked as a real email.
      //     password,
      //     username: displayUsername,
      //     displayUsername,
      //   });
      // }

      // form.reset(); unnecessary since the form no longer exists once the user is signed in
    });
  };

  const [isTestSignOutPending, startTestSignOutTransition] = useTransition();

  const testSignOut = (e: React.FormEvent<HTMLFormElement>) => {
    startTestSignOutTransition(async () => {
      e.preventDefault();
      // await testSignOutAction();
      await authClient.signOut();
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="mx-4 flex h-[80vh] w-full max-w-2xl flex-col rounded-xl border border-gray-200 bg-white shadow-lg">
        <div
          className={`rounded-t-xl px-6 py-3 text-sm font-medium ${
            connectionStatus === "connected"
              ? "border-b border-green-100 bg-green-50 text-green-700"
              : connectionStatus === "disconnected"
                ? "border-b border-red-100 bg-red-50 text-red-700"
                : "border-b border-yellow-100 bg-yellow-50 text-yellow-700"
          }`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${
                connectionStatus === "connected"
                  ? "bg-green-500"
                  : connectionStatus === "disconnected"
                    ? "bg-red-500"
                    : "bg-yellow-500"
              }`}
            ></div>
            Status: {connectionStatus}{" "}
            {connectionStatus === "connected"
              ? session
                ? `as ${session.user.displayUsername} (authenticated)`
                : "as guest (unauthenticated)"
              : null}
          </div>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <p className="font-medium text-gray-800">{message}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={broadcast}
          className="rounded-b-xl border-t border-gray-100 bg-white p-6"
        >
          <div className="flex gap-3">
            <input
              name={MESSAGE}
              type="text"
              className="flex-1 rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              disabled={connectionStatus !== "connected" || isBroadcastPending}
              className={`rounded-lg px-6 py-3 font-medium transition-all ${
                connectionStatus === "connected"
                  ? "bg-blue-500 text-white shadow-sm hover:bg-blue-600 hover:shadow active:bg-blue-700"
                  : "cursor-not-allowed bg-gray-200 text-gray-400"
              }`}
            >
              Send
            </button>
          </div>
        </form>
        {session ? (
          <form
            onSubmit={testSignOut}
            className="rounded-b-xl border-t border-gray-100 bg-white p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <button
                type="submit"
                disabled={
                  connectionStatus !== "connected" || isTestSignOutPending
                }
                className={`grow rounded-lg border border-transparent px-6 py-3 font-medium transition-all ${
                  connectionStatus === "connected"
                    ? "bg-blue-500 text-white shadow-sm hover:bg-blue-600 hover:shadow active:bg-blue-700"
                    : "cursor-not-allowed bg-gray-200 text-gray-400"
                }`}
              >
                Sign out
              </button>
            </div>
          </form>
        ) : (
          <form
            onSubmit={testSignIn}
            className="rounded-b-xl border-t border-gray-100 bg-white p-6"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              <input
                name={DISPLAYUSERNAME}
                type="text"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Type your username..."
              />
              <input
                name={PASSWORD}
                type="password"
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Type your password..."
              />
              <button
                type="submit"
                disabled={
                  connectionStatus !== "connected" || isTestSignInPending
                }
                className={`rounded-lg px-6 py-3 font-medium transition-all ${
                  connectionStatus === "connected"
                    ? "bg-blue-500 text-white shadow-sm hover:bg-blue-600 hover:shadow active:bg-blue-700"
                    : "cursor-not-allowed bg-gray-200 text-gray-400"
                }`}
              >
                Sign in
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
