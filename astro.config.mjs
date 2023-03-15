import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import critters from "astro-critters";

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  integrations: [critters()],
});
