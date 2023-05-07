/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STORYBLOK_ACCESS_TOKEN: string;
  readonly PUBLIC_VERSION: "draft" | "published";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
