import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',  // Use Happy DOM as the testing environment
    setupFiles: './src/testing/setupTests.js',  // Automatically import setup tests
  },
})
