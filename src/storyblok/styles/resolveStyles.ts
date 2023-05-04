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
      horizontalResizingOnMobile,
      horizontalResizingOnTablet,
      horizontalResizingOnDesktop,
      verticalResizingOnMobile,
      verticalResizingOnTablet,
      verticalResizingOnDesktop,
    } = style;

    classNames += `${component} `;

    // Layout
    if (layoutOnMobile) classNames += `${layoutOnMobile} `;
    if (layoutOnTablet) classNames += `tablet-${layoutOnTablet} `;
    if (layoutOnDesktop) classNames += `desktop-${layoutOnDesktop} `;

    // Alignment
    if (alignmentOnMobile) classNames += `${alignmentOnMobile} `;
    if (alignmentOnTablet) classNames += `tablet-${alignmentOnTablet} `;
    if (alignmentOnDesktop) classNames += `desktop-${alignmentOnDesktop} `;

    // Horizontal Resizing
    if (horizontalResizingOnMobile)
      classNames += `horizontalResizing-${horizontalResizingOnMobile} `;
    if (horizontalResizingOnTablet)
      classNames += `tablet-horizontalResizing-${horizontalResizingOnTablet} `;
    if (horizontalResizingOnDesktop)
      classNames += `desktop-horizontalResizing-${horizontalResizingOnDesktop} `;

    // Vertical Resizing
    if (verticalResizingOnMobile)
      classNames += `verticalResizing-${verticalResizingOnMobile} `;
    if (verticalResizingOnTablet)
      classNames += `tablet-verticalResizing-${verticalResizingOnTablet} `;
    if (verticalResizingOnDesktop)
      classNames += `desktop-verticalResizing-${verticalResizingOnDesktop} `;
  });

  return { classNames: classNames.trim() };
};
