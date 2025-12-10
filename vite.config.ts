import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // PENTING: Ganti 'NAMA-REPOSITORY' dengan nama repository GitHub Anda.
  // Contoh: Jika repo Anda 'portfolio-fardian', maka menjadi base: '/portfolio-fardian/'
  // Jika Anda deploy ke user.github.io (root), hapus baris base ini atau set ke '/'
  base: '/NAMA-REPOSITORY/', 
})