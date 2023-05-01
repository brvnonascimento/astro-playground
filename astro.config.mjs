import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import { run } from "vite-plugin-run";
import image from "@astrojs/image";

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
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    storyblok({
      accessToken: env.PUBLIC_STORYBLOK_ACCESS_TOKEN,
      components: {
        // Layout
        page: "storyblok/page",
        header: "storyblok/layout/header",
        footer: "storyblok/layout/footer",
        // Blocks
        hero: "storyblok/hero",
      },
      apiOptions: {
        region: "us",
      },
    }),
  ],
});
