import { ColumnStoryblok, PageSectionStoryblok } from "@types";

export const resolvePageSectionStylesBlocks = (
  styles?: PageSectionStoryblok["styles"]
) => {
  let classNames = "";
  let wrapperClassNames = "";

  let cssVariables = new Map();

  if (!styles) {
    return {
      classNames,
      wrapperClassNames,
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

      classNames += `pageSectionGrid `;

      // Layout
      if (layoutOnMobile) classNames += `${layoutOnMobile} `;
      if (layoutOnTablet) classNames += `tablet-${layoutOnTablet} `;
      if (layoutOnDesktop) classNames += `desktop-${layoutOnDesktop} `;

      // Alignment
      if (alignmentOnMobile) classNames += `${alignmentOnMobile} `;
      if (alignmentOnTablet) classNames += `tablet-${alignmentOnTablet} `;
      if (alignmentOnDesktop) classNames += `desktop-${alignmentOnDesktop} `;

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
    classNames: classNames.trim(),
    wrapperClassNames,
    cssVariables: Object.fromEntries(cssVariables),
  };
};

export const resolveColumnStylesBlocks = (
  styles?: ColumnStoryblok["styles"]
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

    if (component === "columnStyles") {
      const {
        shouldContainerizeOnMobile,
        shouldContainerizeOnTablet,
        shouldContainerizeOnDesktop,
      } = style;

      if (shouldContainerizeOnMobile === false)
        classNames += `escapeContainer `;

      if (shouldContainerizeOnTablet === false)
        classNames += `tablet-escapeContainer `;

      if (shouldContainerizeOnDesktop === false)
        classNames += `desktop-escapeContainer `;
    }
  });

  return { classNames: classNames.trim(), wrapperClassNames };
};
