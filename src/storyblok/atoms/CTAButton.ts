import { CtaButtonStoryblok } from "@types";

export const CTAButton = (blok: CtaButtonStoryblok) => {
  const link = blok?.link?.[0];

  return link ? /* html */ `<a class="cta">${link.title}</a>` : null;
};
