import { defineConfig, globalIgnores } from "eslint/config";

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
  // enforceEffectiveDirectivesRuleName
} from "eslint-plugin-use-agnostic";

const eslintConfig = defineConfig([
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
