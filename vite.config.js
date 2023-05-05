import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/react-81-vite-lista-zakupow-Router-6.10/",
  plugins: [react()],
})
