import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,         // Especifica el puerto
    open: true,         // Abre el navegador automáticamente
    strictPort: true,   // No cambia de puerto si el 5173 está ocupado
    cors: true          // Habilita CORS
  }
})
