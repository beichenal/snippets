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
        "@renderer": resolve("src/renderer"),
        "@pages": resolve("src/renderer/pages"),
        "@mainPage": resolve("src/renderer/pages/main"),
        "@mainPageSrc": resolve("src/renderer/pages/main/src")
      }
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/renderer/pages/main/index.html")
        }
      }
    }
  }
});
