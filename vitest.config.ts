import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      exclude: [...configDefaults.exclude],
      include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    },
  })
);
