import { AutoLayoutStoryblok, PageSectionStoryblok } from "@types";
import { WrapperStoryblok } from "@types";

export const resolveStylesBlocks = (
  styles?: (AutoLayoutStoryblok | WrapperStoryblok)[]
) => {
  let classNames = "";
  let wrapperClassNames = "";

  if (!styles) {
    return { classNames, wrapperClassNames };
  }

  styles.forEach((style) => {
    const { component } = style;

    // Auto Layout
    if (component === "autoLayout") {
      const {
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

      classNames += `autoLayout `;

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
    }

    // Wrapper
    if (component === "wrapper") {
      const {
        shouldContainerizeOnMobile,
        shouldContainerizeOnTablet,
        shouldContainerizeOnDesktop,
      } = style;

      // Containerize
      if (!shouldContainerizeOnMobile) wrapperClassNames += `span-full-screen `;

      if (!shouldContainerizeOnTablet)
        wrapperClassNames += `tablet-span-full-screen `;

      if (!shouldContainerizeOnDesktop)
        wrapperClassNames += `desktop-span-full-screen `;
    }
  });

  return { classNames: classNames.trim(), wrapperClassNames };
};
