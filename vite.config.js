import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/r/', // repository name on git for github pages
  plugins: [react()],
  build: {
    outDir: 'docs', // Specify the output directory here
  },
})
