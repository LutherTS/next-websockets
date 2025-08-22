// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

import { defineConfig, globalIgnores } from "eslint/config";

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
  // enforceEffectiveDirectivesRuleName
} from "eslint-plugin-use-agnostic";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

const eslintConfig = defineConfig([
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  globalIgnores([".next", ".react-router", "node_modules"]),
  {
    files: [
      "**/*.tsx",
      "**/*.ts",
      "**/*.jsx",
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
    ],
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${agnostic20ConfigName}`],
  },
]);

export default eslintConfig;
