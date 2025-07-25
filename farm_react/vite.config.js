import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add this line: historyApiFallback
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
})
