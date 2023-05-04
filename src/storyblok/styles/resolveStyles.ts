import { AutoLayoutStoryblok } from "@types";

export const resolveStylesBlocks = (styles?: AutoLayoutStoryblok[]) => {
  let classNames = "";

  if (!styles) {
    return { classNames };
  }

  styles.forEach((style) => {
    const {
      component,
      layoutOnMobile,
      layoutOnTablet,
      layoutOnDesktop,
      alignmentOnMobile,
      alignmentOnTablet,
      alignmentOnDesktop,
    } = style;

    classNames += `${component} `;
    if (layoutOnMobile) classNames += `${layoutOnMobile} `;
    if (layoutOnTablet) classNames += `tablet-${layoutOnTablet} `;
    if (layoutOnDesktop) classNames += `desktop-${layoutOnDesktop} `;
    if (alignmentOnMobile) classNames += `${alignmentOnMobile} `;
    if (alignmentOnTablet) classNames += `tablet-${alignmentOnTablet} `;
    if (alignmentOnDesktop) classNames += `desktop-${alignmentOnDesktop} `;
  });

  return { classNames: classNames.trim() };
};
