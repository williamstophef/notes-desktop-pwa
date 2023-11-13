import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Notes PWA",
        short_name: "NPWA",
      },
    }),
    react(),
  ],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});