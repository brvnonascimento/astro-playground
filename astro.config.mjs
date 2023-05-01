import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import { run } from "vite-plugin-run";

const env = loadEnv("", process.cwd(), "PUBLIC");

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  vite: {
    plugins: [
      run([
        {
          name: "generate sb-types",
          run: ["yarn", "sb:pull", "&&", "yarn", "sb:generate"],
          patterns: ["*"],
        },
      ]),
    ],
  },
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
