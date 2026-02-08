import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },

    plugins: {
      prettier,
    },

    rules: {
      "prettier/prettier": "error",

      "no-console": "off",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      "@typescript-eslint/no-explicit-any": "warn",

      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },

  {
    ignores: ["node_modules/**", "dist/**", "uploads/**"],
  },
];
