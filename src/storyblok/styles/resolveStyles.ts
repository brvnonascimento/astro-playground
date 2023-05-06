import { ColumnStoryblok, PageSectionStoryblok } from "@types";
import cn from "classnames";

export const resolvePageSectionStylesBlocks = (
  styles?: PageSectionStoryblok["styles"]
) => {
  const classNames: string[] = [];

  const cssVariables = new Map();

  if (!styles) {
    return {
      classNames: "",
      cssVariables: Object.fromEntries(cssVariables),
    };
  }

  styles.forEach((style) => {
    const { component } = style;

    // Auto Layout
    if (component === "pageSectionGrid") {
      const {
        layoutOnMobile,
        layoutOnTablet,
        layoutOnDesktop,
        alignmentOnMobile,
        alignmentOnTablet,
        alignmentOnDesktop,
        numberOfColumnsOnMobile,
        numberOfColumnsOnTablet,
        numberOfColumnsOnDesktop,
      } = style;

      classNames.push(`pageSectionGrid`);

      // Layout
      if (layoutOnMobile) classNames.push(`${layoutOnMobile}`);
      if (layoutOnTablet) classNames.push(`tablet-${layoutOnTablet}`);
      if (layoutOnDesktop) classNames.push(`desktop-${layoutOnDesktop}`);

      // Alignment
      if (alignmentOnMobile) classNames.push(`${alignmentOnMobile}`);
      if (alignmentOnTablet) classNames.push(`tablet-${alignmentOnTablet}`);
      if (alignmentOnDesktop) classNames.push(`desktop-${alignmentOnDesktop}`);

      // Number of Columns
      if (numberOfColumnsOnMobile)
        cssVariables.set("numberOfColumnsOnMobile", numberOfColumnsOnMobile);

      if (numberOfColumnsOnTablet)
        cssVariables.set("numberOfColumnsOnTablet", numberOfColumnsOnTablet);

      if (numberOfColumnsOnDesktop)
        cssVariables.set("numberOfColumnsOnDesktop", numberOfColumnsOnDesktop);
    }
  });

  return {
    classNames: cn(classNames),
    cssVariables: Object.fromEntries(cssVariables),
  };
};

export const resolveColumnStylesBlocks = (
  styles?: ColumnStoryblok["styles"]
) => {
  const classNames: string[] = [];
  const wrapperClassNames = "";

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

      classNames.push("autoLayout");

      // Layout
      if (layoutOnMobile) classNames.push(layoutOnMobile);
      if (layoutOnTablet) classNames.push(`tablet-${layoutOnTablet}`);
      if (layoutOnDesktop) classNames.push(`desktop-${layoutOnDesktop}`);

      // Alignment
      if (alignmentOnMobile) classNames.push(alignmentOnMobile);
      if (alignmentOnTablet) classNames.push(`tablet-${alignmentOnTablet}`);
      if (alignmentOnDesktop) classNames.push(`desktop-${alignmentOnDesktop}`);

      // Horizontal Resizing
      if (horizontalResizingOnMobile)
        classNames.push(`horizontalResizing-${horizontalResizingOnMobile}`);
      if (horizontalResizingOnTablet)
        classNames.push(
          `tablet-horizontalResizing-${horizontalResizingOnTablet}`
        );
      if (horizontalResizingOnDesktop)
        classNames.push(
          `desktop-horizontalResizing-${horizontalResizingOnDesktop}`
        );

      // Vertical Resizing
      if (verticalResizingOnMobile)
        classNames.push(`verticalResizing-${verticalResizingOnMobile}`);
      if (verticalResizingOnTablet)
        classNames.push(`tablet-verticalResizing-${verticalResizingOnTablet}`);
      if (verticalResizingOnDesktop)
        classNames.push(
          `desktop-verticalResizing-${verticalResizingOnDesktop}`
        );
    }

    if (component === "columnStyles") {
      const {
        shouldContainerizeOnMobile,
        shouldContainerizeOnTablet,
        shouldContainerizeOnDesktop,
      } = style;

      if (shouldContainerizeOnMobile === false)
        classNames.push("escapeContainer");

      if (shouldContainerizeOnTablet === false)
        classNames.push("tablet-escapeContainer");

      if (shouldContainerizeOnDesktop === false)
        classNames.push("desktop-escapeContainer");
    }
  });

  return { classNames: cn(classNames), wrapperClassNames };
};
