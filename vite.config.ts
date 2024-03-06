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
    // includeAssets: ["favicon.svg"],
    devOptions: {
      enabled: env.MODE === "development",
      navigateFallback: "index.html",
      type: "module",
    },
    includeAssets: [
      "/robots.txt",
      "/sitemap.xml",
      "/logos/apple-touch-icon.png",
      "/logos/favicon.ico",
      "/logos/notes-logo-512.png",
    ],
    injectRegister: "auto",
    manifest: {
      background_color: "#f0f8ff",
      description: "Notes App To Track Stuff",
      display: "standalone",
      name: "Notes App",
      orientation: "portrait",
      icons: [
        {
          src: "logos/tractic-logo-512.png",
          sizes: "192x192",
          type: "image/png",
        },
      ],
      short_name: "Notes",
      theme_color: "#f0f8ff",
    },
    mode: env.MODE,
  };

  if (prod) {
    pwaOptions.srcDir = "src";
    pwaOptions.filename = claims ? "claims-sw.ts" : "prompt-sw.ts";
    pwaOptions.strategies = "injectManifest";
    (pwaOptions.manifest as Partial<ManifestOptions>).name =
      "Gilman Construction Media";
    (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "GCM";
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

  /** Remove non-react-app envs */
  const devenv = {};
  for (const key in env) {
    if (!key?.includes("REACT_APP_")) {
      delete env[key];
    } else {
      devenv[`import.meta.env.VITE_${key}`] = JSON.stringify(env[key]);
    }
  }

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
        "@card": path.resolve(__dirname) + "/src/components/shared/card",
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
