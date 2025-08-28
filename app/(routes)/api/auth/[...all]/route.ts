import { toNextJsHandler } from "better-auth/next-js";

import { auth } from "~/better-auth/server/auth";

export const { POST, GET } = toNextJsHandler(auth);
