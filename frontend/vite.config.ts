import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react(), tailwindcss(), svgr()],
  server: {
    host: true,
    strictPort: true,
    hmr: {
      host: "localhost",
    },
    watch: {
      usePolling: true,
    },
  },
});
