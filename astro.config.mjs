import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.cem-group.it",
  trailingSlash: "always",
  integrations: [tailwind(), sitemap()],
});
