Getting WebSockets to work with Next.js and server actions, courtesy of Fly.io. Runs with a custom Next.js server that includes a WebSocket server. The messages from the client are sent via a server action (Server Function) to broadcast to all current WebSocket clients from the server. And with Server Components, the page always refreshes with the freshest data, directly picked from the database.

This demo also showcases my first two major packages:

- `eslint-plugin-use-agnostic`, which highlighted the need to specify the module holding the WebSocket endpoint string to be agnostic, since it is imported on the server (for the WebSocket server) and on the client (for the WebSocket clients)
- `comment-variables`, which beyond its development benefits stores all of the project's relevant JSDoc and other observations in a single file

Start sending messages on [next-websockets.fly.dev/](https://next-websockets.fly.dev/).
