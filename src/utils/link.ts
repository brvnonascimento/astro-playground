import { InternalLinkStoryblok } from "@types";

export const resolveHrefFromInternalLinkBlok = (
  blok: InternalLinkStoryblok
) => {
  if (typeof blok.page === "string") {
    return "#";
  }

  const { page } = blok;

  return `/${blok.page.slug === "pages" ? "" : blok.page.slug}`;
};
