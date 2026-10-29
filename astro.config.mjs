import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// Netlify already 301s /page to /page/ in production; mirror that in dev,
// where trailingSlash: "always" would otherwise answer with a 404.
const devTrailingSlashRedirect = {
  name: "dev-trailing-slash-redirect",
  apply: "serve",
  /** @param {import("vite").ViteDevServer} server */
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const [path, query] = (req.url ?? "").split("?");
      const isPage =
        !path.endsWith("/") &&
        !path.split("/").pop().includes(".") &&
        !path.startsWith("/@") &&
        !path.startsWith("/_");
      if (req.method !== "GET" || !isPage) return next();
      res.writeHead(301, {
        Location: `${path}/${query === undefined ? "" : `?${query}`}`,
      });
      res.end();
    });
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://www.cem-group.it",
  trailingSlash: "always",
  integrations: [tailwind(), sitemap()],
  vite: { plugins: [devTrailingSlashRedirect] },
});
