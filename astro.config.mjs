import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { defineConfig } from "astro/config";
import vercelEdge from "@astrojs/vercel/edge";

export default defineConfig({
  site: "https://astroship.web3templates.com",
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [
    storyblok({
      accessToken: "qBlqZdNwjFb738diAycVNQtt",
      components: {
        page: "storyblok/page",
        hero: "storyblok/hero",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
  output: "server",
  adapter: vercelEdge(),
});
