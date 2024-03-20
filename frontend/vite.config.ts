import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      store: "/src/store",
      styles: "/src/assets/globalStyles",
    },
  },
  build: {
    rollupOptions: {
      external: ["@components/Welcome/Welcome.container"],
    },
  },
});
