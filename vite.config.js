import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly specify the output directory
    emptyOutDir: true, // Clear the dist folder before building
  },
  server: {
    port: 3000, // Optional: Specify a dev server port
  },
})
