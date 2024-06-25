import { defineConfig, envField, passthroughImageService } from 'astro/config';
import react from "@astrojs/react";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";

const { SITE_URL, BASE_PATH } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(), // https://docs.astro.build/en/reference/errors/missing-sharp/
  },
  site: SITE_URL || "https://emamalias.github.io",
  base: BASE_PATH || "/astro-landing-starter",
  trailingSlash: "never",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});