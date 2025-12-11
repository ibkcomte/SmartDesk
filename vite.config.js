import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


const repoName = 'SmartDesk';
// https://vite.dev/config/
export default defineConfig({
  base: `/${SmartDesk}/`,
  plugins: [react(), tailwindcss()]
})
