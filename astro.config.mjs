import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), "PUBLIC");

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  vite: {
    plugins: [basicSsl()]
  },
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx(), sitemap(), storyblok({
    accessToken: env.PUBLIC_STORYBLOK_ACCESS_TOKEN,
    components: {
      page: "storyblok/page",
      hero: "storyblok/hero"
    },
    apiOptions: {
      region: "us"
    }
  })],
  output: "server",
  adapter: vercel()
});