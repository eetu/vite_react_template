import react from "@vitejs/plugin-react-swc";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ["vitest"],
      dts: true, // generate TypeScript declaration
    }),
  ],
  server: {
    proxy: {
      // Proxy requests from /api/* to http://localhost:8000
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
