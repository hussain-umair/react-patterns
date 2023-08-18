import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  base: '',
  root: 'src',
  server: {
    port: 8080,
  },
  preview: {
    port: 8080
  }
})