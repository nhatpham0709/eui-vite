import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import generouted from '@generouted/react-router/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    generouted(),
    tsconfigPaths(),
    VitePWA()

    // Pages({ onRoutesGenerated: (routes) => generateSitemap({ routes }) }),
  ],
});
