import { defineConfig } from "eslint/config";
import pluginJs from "@eslint/js";
import globals from "globals";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
      "no-unused-vars": "warn",
      "no-console": "off",
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "no-underscore-dangle": ["error", { allow: ["_id", "__dirname"] }],
    },
  },
]);
