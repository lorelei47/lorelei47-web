import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8999
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `./src/assets/scss/global.scss";`
      }
    }
  },
  plugins: [vue()]
});
