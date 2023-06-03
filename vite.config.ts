import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: { host: '10.8.0.7', port: 3000 },
  plugins: [react()],
})
