import { RawStyles, Style } from "storyblok/styles/types";

export const resolveAutoLayoutStyles = (style: Style): RawStyles => {
  const columnStylesClassNameArray: string[] = [];
  const cssVariablesMap = new Map();

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

    columnStylesClassNameArray.push("autoLayout");

    // Layout
    if (layoutOnMobile) columnStylesClassNameArray.push(layoutOnMobile);
    if (layoutOnTablet)
      columnStylesClassNameArray.push(`tablet-${layoutOnTablet}`);
    if (layoutOnDesktop)
      columnStylesClassNameArray.push(`desktop-${layoutOnDesktop}`);

    // Alignment
    if (alignmentOnMobile) columnStylesClassNameArray.push(alignmentOnMobile);
    if (alignmentOnTablet)
      columnStylesClassNameArray.push(`tablet-${alignmentOnTablet}`);
    if (alignmentOnDesktop)
      columnStylesClassNameArray.push(`desktop-${alignmentOnDesktop}`);

    // Horizontal Resizing
    if (horizontalResizingOnMobile)
      columnStylesClassNameArray.push(
        `horizontalResizing-${horizontalResizingOnMobile}`
      );
    if (horizontalResizingOnTablet)
      columnStylesClassNameArray.push(
        `tablet-horizontalResizing-${horizontalResizingOnTablet}`
      );
    if (horizontalResizingOnDesktop)
      columnStylesClassNameArray.push(
        `desktop-horizontalResizing-${horizontalResizingOnDesktop}`
      );

    // Vertical Resizing
    if (verticalResizingOnMobile)
      columnStylesClassNameArray.push(
        `verticalResizing-${verticalResizingOnMobile}`
      );
    if (verticalResizingOnTablet)
      columnStylesClassNameArray.push(
        `tablet-verticalResizing-${verticalResizingOnTablet}`
      );
    if (verticalResizingOnDesktop)
      columnStylesClassNameArray.push(
        `desktop-verticalResizing-${verticalResizingOnDesktop}`
      );
  }

  return {
    classNamesArray: columnStylesClassNameArray,
    cssVariablesMap: cssVariablesMap,
  };
};
