import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { username } from "better-auth/plugins";

import { prisma } from "~/prisma/db";

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
  plugins: [username({})],
});
