import { AutoLayoutStoryblok } from "@types";

export const resolveStylesBlocks = (styles?: AutoLayoutStoryblok[]) => {
  let classNames = "";

  if (!styles) {
    return { classNames };
  }

  styles.forEach((style) => {
    const { component, layoutOnMobile, layoutOnTablet, layoutOnDesktop } =
      style;

    classNames += `${component} `;
    classNames += `${layoutOnMobile} `;
    classNames += `tablet-${layoutOnTablet} `;
    classNames += `desktop-${layoutOnDesktop} `;
  });

  return { classNames: classNames.trim() };
};
