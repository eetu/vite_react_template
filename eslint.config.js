import eslintReactConfig from "eslint-config-react";

export default [
  ...eslintReactConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
  },
];
