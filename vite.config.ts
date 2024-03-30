/** Vendors */
import path from "path";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";
import { defineConfig, loadEnv } from "vite";

/** Types */
import type { VitePWAOptions } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const claims = env.CLAIMS === "true";
  const prod = env.SW === "true";
  const reload = env.RELOAD_SW === "true";
  const selfDestroying = env.SW_DESTROY === "true";

  const pwaOptions: Partial<VitePWAOptions> = {
    base: "/",
    devOptions: {
      enabled: env.MODE === "development",
      navigateFallback: "index.html",
      type: "module",
    },
    includeAssets: [
      "/robots.txt",
      "/sitemap.xml",
      "/logos/notes-logo-32.png",
      "/logos/notes-logo-192.png",
      "/logos/notes-logo-512.png",
    ],
    injectRegister: "auto",
    manifest: {
      background_color: "#f0f8ff",
      description: "Notes App To Track Stuff",
      display: "standalone",
      name: env.REACT_APP_CLIENT_NAME,
      orientation: "portrait",
      icons: [
        {
          purpose: "any maskable",
          sizes: "512x512",
          src: "logos/notes-logo-512.png",
          type: "image/png",
        },
        {
          sizes: "192x192",
          src: "logos/notes-logo-192.png",
          type: "image/png",
        },
        {
          sizes: "32x32",
          src: "logos/notes-logo-32.png",
          type: "image/png",
        },
      ],
      short_name: "Notes",
      theme_color: "#f0f8ff",
    },
    mode: env.MODE,
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
  };

  if (prod) {
    pwaOptions.srcDir = "src";
    pwaOptions.filename = claims ? "claims-sw.ts" : "prompt-sw.ts";
    pwaOptions.strategies = "injectManifest";
    (pwaOptions.manifest as Partial<ManifestOptions>).name = "Notes App";
    (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "Notes";
  }

  /** Auto Update SW and Skip Waiting */
  if (claims) {
    pwaOptions.registerType = "autoUpdate";
    pwaOptions.workbox = {
      clientsClaim: true,
      skipWaiting: true,
    };
  }

  /** Inline string replacements within minified code base */
  const replaceOptions = {
    __DATE__: new Date().toISOString(),
    __buildDate__: JSON.stringify(new Date()),
    __buildVersion: new Date().toISOString(),
    preventAssignment: true,
  };

  /** If the app should reload itself or not */
  if (reload) {
    // @ts-expect-error just ignore
    replaceOptions.__RELOAD_SW__ = "true";
  }

  /** Whether to uninstall the PWA or not */
  if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;

  return {
    build: {
      sourcemap: process.env.SOURCE_MAP === "true",
      outDir: "build",
      manifest: true,
    },
    plugins: [react(), VitePWA(pwaOptions), replace(replaceOptions)],
    resolve: {
      alias: {
        "@api": path.resolve(__dirname) + "/src/api",
        "@components": path.resolve(__dirname) + "/src/components",
        "@dist": path.resolve(__dirname) + "/src/dist",
        "@hooks": path.resolve(__dirname) + "/src/hooks",
        "@redux": path.resolve(__dirname) + "/src/redux",
        types: path.resolve(__dirname) + "/src/types",
      },
      extensions: [".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
    },
    server: {
      port: 3000,
    },
  };
});
