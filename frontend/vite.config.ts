import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@views": "/src/views",
      "@layout": "/src/layout/",
      "@ui": "/src/ui/",
      "@store": "/src/store",
      "@services": "/src/services/",
      "@reactStyles": "/src/assets/globalStyles",
    },
  },
});
