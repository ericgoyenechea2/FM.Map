import { fileURLToPath, URL } from "node:url";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { sharedExposed, exposes } from "./exposesMaps";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "map",
      filename: "map.js",
      exposes,
      shared: {
        ...sharedExposed,
      },
    }),
  ],
  build: {
    assetsInlineLimit: 40960,
    target: "esnext",
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
