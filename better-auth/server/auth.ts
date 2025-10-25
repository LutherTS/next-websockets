import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";

/* START */

// just to showcase that it is possible to import the resolved config data, entirely typed with autocompletion and literals, straight from the .mjs file, in an even easier fashion in TypeScript than in JavaScript
import { resolvedConfigData } from "../../comments.config.mjs";
resolvedConfigData.jsDoc.actions.defs.broadcastFlow.value;

/* END */

import { prisma } from "~/prisma/db";

import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
} from "../constants/agnostic/bases";

import { validateUsernameSlugFriendly } from "../utilities/agnostic/regexes";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
    // temporary defaults
    minPasswordLength: 1,
    maxPasswordLength: Infinity,
  },
  user: {
    modelName: "betterAuthUser",
  },
  session: {
    modelName: "betterAuthSession",
  },
  account: {
    modelName: "betterAuthAccount",
  },
  verification: {
    modelName: "betterAuthVerification",
  },
  plugins: [
    username({
      minUsernameLength: MIN_USERNAME_LENGTH,
      maxUsernameLength: MAX_USERNAME_LENGTH,
      usernameValidator: validateUsernameSlugFriendly,
    }),
  ],
  trustedOrigins: ["http://localhost:3000", "https://next-websockets.fly.dev"],
});
