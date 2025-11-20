import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from "vite-sitemap";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
            base: "https://calculators.clemensdigital.com",
            urls: [
                "tip-calculator",
                "change-calculator",
            ],
        }),
  ],
})
