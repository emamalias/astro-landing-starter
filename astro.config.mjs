import { defineConfig, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(), // https://docs.astro.build/en/reference/errors/missing-sharp/
  },
  site: 'https://emamalias.github.io',
  base: 'astro-landing-starter',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});