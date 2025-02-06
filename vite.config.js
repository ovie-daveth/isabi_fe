import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'; 

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://secret-api.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Map '@' to 'src' folder
    },
  },
});
