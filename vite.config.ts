import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
// https://vite.dev/guide/build.html#library-mode
export default defineConfig({
  root: "dev",
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
    dts({
      include: ["src/index.ts", "src/components/types/index.ts"],
      outDir: "dist/types",
      root: "..",
      tsconfigPath: "tsconfig.json",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "VueToggles",
      fileName: "vue-toggles",
    },
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  publicDir: false,
});
