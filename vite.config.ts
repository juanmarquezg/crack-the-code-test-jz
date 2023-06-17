import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://juanmarquezg.github.io/crack-the-code-test-jz/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: 'https://dev.backend.devcrackthecode.net/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
