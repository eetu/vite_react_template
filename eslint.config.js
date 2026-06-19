import eslintReactConfig from "@anarkisti/eslint-config/react";

export default [
  ...eslintReactConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
  },
];
