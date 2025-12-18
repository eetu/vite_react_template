import { playwright } from "@vitest/browser-playwright";
import { configDefaults, defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      exclude: [...configDefaults.exclude],
      include: ["src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      browser: {
        enabled: true,
        headless: true,
        provider: playwright(),
        instances: [{ browser: "chromium" }],
      },
    },
  })
);
