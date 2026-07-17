import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' //tailwindcss import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //tailwindcss plugin
    babel({ presets: [reactCompilerPreset()] })
  ],
})