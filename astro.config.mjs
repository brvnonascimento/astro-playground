import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
});
