import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "PUBLIC");

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  integrations: [
    storyblok({
      accessToken: env.PUBLIC_STORYBLOK_ACCESS_TOKEN,
      components: {
        page: "storyblok/page",
        hero: "storyblok/hero",
        header: "storyblok/layout/header",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
});
