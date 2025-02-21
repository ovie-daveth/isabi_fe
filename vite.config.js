import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'; 

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 600, // (Optional) Adjust warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor (library) code
          }
          if (id.includes('components') || id.includes('pages')) {
            return 'components'; // Separate components
          }
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

