import { ColumnStoryblok, PageSectionStoryblok } from "@types";
import classNames from "classnames";

type Styles = PageSectionStoryblok["styles"] | ColumnStoryblok["styles"];

export const resolvePageSectionStylesBlocks = (
  styles?: PageSectionStoryblok["styles"]
) => {
  const pageSectionClassNames: string[] = [];

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
        columnGapOnMobile,
        columnGapOnTablet,
        columnGapOnDesktop,
        rowGapOnMobile,
        rowGapOnTablet,
        rowGapOnDesktop,
      } = style;

      pageSectionClassNames.push(`pageSectionGrid`);

      // Layout
      if (layoutOnMobile) pageSectionClassNames.push(`${layoutOnMobile}`);
      if (layoutOnTablet)
        pageSectionClassNames.push(`tablet-${layoutOnTablet}`);
      if (layoutOnDesktop)
        pageSectionClassNames.push(`desktop-${layoutOnDesktop}`);

      // Alignment
      if (alignmentOnMobile) pageSectionClassNames.push(`${alignmentOnMobile}`);
      if (alignmentOnTablet)
        pageSectionClassNames.push(`tablet-${alignmentOnTablet}`);
      if (alignmentOnDesktop)
        pageSectionClassNames.push(`desktop-${alignmentOnDesktop}`);

      // Number of Columns
      if (numberOfColumnsOnMobile)
        cssVariables.set("numberOfColumnsOnMobile", numberOfColumnsOnMobile);

      if (numberOfColumnsOnTablet)
        cssVariables.set("numberOfColumnsOnTablet", numberOfColumnsOnTablet);

      if (numberOfColumnsOnDesktop)
        cssVariables.set("numberOfColumnsOnDesktop", numberOfColumnsOnDesktop);

      // Column Gap
      if (columnGapOnMobile)
        cssVariables.set("columnGapOnMobile", columnGapOnMobile);

      if (columnGapOnTablet)
        cssVariables.set("columnGapOnTablet", columnGapOnTablet);

      if (columnGapOnDesktop)
        cssVariables.set("columnGapOnDesktop", columnGapOnDesktop);

      // Row Gap
      if (rowGapOnMobile) cssVariables.set("rowGapOnMobile", rowGapOnMobile);

      if (rowGapOnTablet) cssVariables.set("rowGapOnTablet", rowGapOnTablet);

      if (rowGapOnDesktop) cssVariables.set("rowGapOnDesktop", rowGapOnDesktop);
    }
  });

  const textStylesClassNames = resolveTextStylesClassNames(styles);

  const { classNames: paddingClassNames, cssVariables: paddingCssVariables } =
    resolvePaddingStyles(styles);

  return {
    classNames: classNames(
      pageSectionClassNames,
      textStylesClassNames,
      paddingClassNames
    ),
    cssVariables: {
      ...Object.fromEntries(cssVariables),
      ...paddingCssVariables,
    },
  };
};

export const resolveColumnStylesBlocks = (
  styles?: ColumnStoryblok["styles"]
) => {
  const columnStylesClassName: string[] = [];

  if (!styles) {
    return { classNames: columnStylesClassName };
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

      columnStylesClassName.push("autoLayout");

      // Layout
      if (layoutOnMobile) columnStylesClassName.push(layoutOnMobile);
      if (layoutOnTablet)
        columnStylesClassName.push(`tablet-${layoutOnTablet}`);
      if (layoutOnDesktop)
        columnStylesClassName.push(`desktop-${layoutOnDesktop}`);

      // Alignment
      if (alignmentOnMobile) columnStylesClassName.push(alignmentOnMobile);
      if (alignmentOnTablet)
        columnStylesClassName.push(`tablet-${alignmentOnTablet}`);
      if (alignmentOnDesktop)
        columnStylesClassName.push(`desktop-${alignmentOnDesktop}`);

      // Horizontal Resizing
      if (horizontalResizingOnMobile)
        columnStylesClassName.push(
          `horizontalResizing-${horizontalResizingOnMobile}`
        );
      if (horizontalResizingOnTablet)
        columnStylesClassName.push(
          `tablet-horizontalResizing-${horizontalResizingOnTablet}`
        );
      if (horizontalResizingOnDesktop)
        columnStylesClassName.push(
          `desktop-horizontalResizing-${horizontalResizingOnDesktop}`
        );

      // Vertical Resizing
      if (verticalResizingOnMobile)
        columnStylesClassName.push(
          `verticalResizing-${verticalResizingOnMobile}`
        );
      if (verticalResizingOnTablet)
        columnStylesClassName.push(
          `tablet-verticalResizing-${verticalResizingOnTablet}`
        );
      if (verticalResizingOnDesktop)
        columnStylesClassName.push(
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
        columnStylesClassName.push("escapeContainer");

      if (shouldContainerizeOnTablet === false)
        columnStylesClassName.push("tablet-escapeContainer");

      if (shouldContainerizeOnDesktop === false)
        columnStylesClassName.push("desktop-escapeContainer");
    }
  });

  const { classNames: paddingClassNames, cssVariables: paddingCssVariables } =
    resolvePaddingStyles(styles);

  return {
    classNames: classNames(
      columnStylesClassName,
      resolveTextStylesClassNames(styles),
      paddingClassNames
    ),
    cssVariables: { ...paddingCssVariables },
  };
};

export const resolveTextStylesClassNames = (styles?: Styles) => {
  const textStyleClassNames: string[] = [];

  if (!styles) {
    return "";
  }

  styles.forEach((style) => {
    const { component } = style;

    if (component === "textStyles") {
      const { textAlignOnMobile, textAlignOnTablet, textAlignOnDesktop } =
        style;

      if (textAlignOnMobile)
        textStyleClassNames.push(`textAlign-${textAlignOnMobile}`);
      if (textAlignOnTablet)
        textStyleClassNames.push(`tablet-textAlign-${textAlignOnTablet}`);
      if (textAlignOnDesktop)
        textStyleClassNames.push(`desktop-textAlign-${textAlignOnDesktop}`);
    }
  });

  return classNames(textStyleClassNames);
};

export const resolvePaddingStyles = (styles?: Styles) => {
  const paddingClassNames: string[] = [];
  const cssVariables = new Map();

  if (!styles) {
    return {
      cssVariables: Object.fromEntries(cssVariables),
      classNames: classNames(paddingClassNames),
    };
  }

  styles.forEach((style) => {
    const { component } = style;

    if (component === "padding") {
      const {
        paddingLeftOnMobile,
        paddingLeftOnTablet,
        paddingLeftOnDesktop,
        paddingRightOnMobile,
        paddingRightOnTablet,
        paddingRightOnDesktop,
        paddingTopOnMobile,
        paddingTopOnTablet,
        paddingTopOnDesktop,
        paddingBottomOnMobile,
        paddingBottomOnTablet,
        paddingBottomOnDesktop,
      } = style;

      if (paddingLeftOnMobile) {
        paddingClassNames.push("padding-left");
        cssVariables.set("paddingLeftOnMobile", paddingLeftOnMobile);
      }

      if (paddingLeftOnTablet) {
        paddingClassNames.push("padding-left-tablet");
        cssVariables.set("paddingLeftOnTablet", paddingLeftOnTablet);
      }

      if (paddingLeftOnDesktop) {
        paddingClassNames.push("padding-left-desktop");
        cssVariables.set("paddingLeftOnDesktop", paddingLeftOnDesktop);
      }

      if (paddingRightOnMobile) {
        paddingClassNames.push("padding-right");

        cssVariables.set("paddingRightOnMobile", paddingRightOnMobile);
      }

      if (paddingRightOnTablet) {
        paddingClassNames.push("padding-right-tablet");
        cssVariables.set("paddingRightOnTablet", paddingRightOnTablet);
      }

      if (paddingRightOnDesktop) {
        paddingClassNames.push("padding-right-desktop");
        cssVariables.set("paddingRightOnDesktop", paddingRightOnDesktop);
      }

      if (paddingTopOnMobile) {
        paddingClassNames.push("padding-top");
        cssVariables.set("paddingTopOnMobile", paddingTopOnMobile);
      }

      if (paddingTopOnTablet) {
        paddingClassNames.push("padding-top-tablet");
        cssVariables.set("paddingTopOnTablet", paddingTopOnTablet);
      }

      if (paddingTopOnDesktop) {
        paddingClassNames.push("padding-top-desktop");
        cssVariables.set("paddingTopOnDesktop", paddingTopOnDesktop);
      }

      if (paddingBottomOnMobile) {
        paddingClassNames.push("padding-bottom");
        cssVariables.set("paddingBottomOnMobile", paddingBottomOnMobile);
      }

      if (paddingBottomOnTablet) {
        paddingClassNames.push("padding-bottom-tablet");
        cssVariables.set("paddingBottomOnTablet", paddingBottomOnTablet);
      }

      if (paddingBottomOnDesktop) {
        paddingClassNames.push("padding-bottom-desktop");
        cssVariables.set("paddingBottomOnDesktop", paddingBottomOnDesktop);
      }
    }
  });

  return {
    classNames: classNames(paddingClassNames),
    cssVariables: Object.fromEntries(cssVariables),
  };
};
