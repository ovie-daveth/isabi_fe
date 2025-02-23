import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; 

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 600, // (Optional) Adjust warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Separate vendor (library) code
          }
          if (id.includes("components") || id.includes("pages")) {
            return "components"; // Separate components
          }
        },
      },
    },
  },
  server: { // ✅ Proxy should be inside "server"
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "https://isabibook.onrender.com", 
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
