import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://juanmarquezg.github.io/crack-the-code-test-jz/',
  plugins: [react()],
})
