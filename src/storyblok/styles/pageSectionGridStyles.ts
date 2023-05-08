import { RawStyles, Style } from "storyblok/styles/types";

export const resolvePageSectionGridStyles = (style: Style): RawStyles => {
  const pageSectionGridClassNamesArray: string[] = [];
  const cssVariablesMap = new Map();

  if (style.component === "pageSectionGrid") {
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

    pageSectionGridClassNamesArray.push(`pageSectionGrid`);

    // Layout
    if (layoutOnMobile)
      pageSectionGridClassNamesArray.push(`${layoutOnMobile}`);
    if (layoutOnTablet)
      pageSectionGridClassNamesArray.push(`tablet-${layoutOnTablet}`);
    if (layoutOnDesktop)
      pageSectionGridClassNamesArray.push(`desktop-${layoutOnDesktop}`);

    // Alignment
    if (alignmentOnMobile)
      pageSectionGridClassNamesArray.push(`${alignmentOnMobile}`);
    if (alignmentOnTablet)
      pageSectionGridClassNamesArray.push(`tablet-${alignmentOnTablet}`);
    if (alignmentOnDesktop)
      pageSectionGridClassNamesArray.push(`desktop-${alignmentOnDesktop}`);

    // Number of Columns
    if (numberOfColumnsOnMobile)
      cssVariablesMap.set("numberOfColumnsOnMobile", numberOfColumnsOnMobile);

    if (numberOfColumnsOnTablet)
      cssVariablesMap.set("numberOfColumnsOnTablet", numberOfColumnsOnTablet);

    if (numberOfColumnsOnDesktop)
      cssVariablesMap.set("numberOfColumnsOnDesktop", numberOfColumnsOnDesktop);

    // Column Gap
    if (columnGapOnMobile) {
      pageSectionGridClassNamesArray.push("columnGap");
      cssVariablesMap.set("columnGapOnMobile", columnGapOnMobile);
    }

    if (columnGapOnTablet) {
      pageSectionGridClassNamesArray.push("columnGap-tablet");
      cssVariablesMap.set("columnGapOnTablet", columnGapOnTablet);
    }

    if (columnGapOnDesktop) {
      pageSectionGridClassNamesArray.push("columnGap-desktop");
      cssVariablesMap.set("columnGapOnDesktop", columnGapOnDesktop);
    }

    // Row Gap
    if (rowGapOnMobile) cssVariablesMap.set("rowGapOnMobile", rowGapOnMobile);

    if (rowGapOnTablet) cssVariablesMap.set("rowGapOnTablet", rowGapOnTablet);

    if (rowGapOnDesktop)
      cssVariablesMap.set("rowGapOnDesktop", rowGapOnDesktop);
  }

  return {
    classNamesArray: pageSectionGridClassNamesArray,
    cssVariablesMap: cssVariablesMap,
  };
};
