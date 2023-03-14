import vercelServerless from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  vite: {
    plugins: [viteSingleFile()],
  },
  output: "server",
  adapter: vercelServerless(),
});
