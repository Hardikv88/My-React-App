import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig( (mode) => {
  loadEnv(mode, process.cwd());
  return {
    plugins: [tailwindcss(),],
  };
})
