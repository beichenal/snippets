import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src"),
        "@pages": resolve("src/renderer/src/pages"),
        "@assets": resolve("src/renderer/src/assets"),
        "@components": resolve("src/renderer/src/components"),
        "@mainPageSrc": resolve("src/renderer/src/pages/main/src"),
        "@mock": resolve("./mock"),
        "@type": resolve("src/renderer/types")
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/renderer/src/pages/main/index.html")
        }
      }
    }
  }
});
