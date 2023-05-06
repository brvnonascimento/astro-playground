import { TextStylesStoryblok } from "@types";
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
    }
  });

  return {
    classNames: classNames(
      pageSectionClassNames,
      resolveTextStylesClassNames(styles)
    ),
    cssVariables: Object.fromEntries(cssVariables),
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

  return {
    classNames: classNames(
      columnStylesClassName,
      resolveTextStylesClassNames(styles)
    ),
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
