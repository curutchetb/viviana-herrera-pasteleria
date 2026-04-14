import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; <--- COMENTÁ ESTA LÍNEA

export default defineConfig({
  site: 'https://viviana-herrera-pasteleria.vercel.app',
  integrations: [
    tailwind(),
    // sitemap(), <--- COMENTÁ ESTA LÍNEA TAMBIÉN
  ],
});