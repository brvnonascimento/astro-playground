import { RawStyles, Style } from "storyblok/styles/types";

export const resolveColumnStyles = (style: Style): RawStyles => {
  const columnStylesClassName: string[] = [];
  const cssVariablesMap = new Map();

  const { component } = style;

  if (component === "columnStyles") {
    const {
      shouldContainerizeOnMobile,
      shouldContainerizeOnTablet,
      shouldContainerizeOnDesktop,
      backgroundColor,
    } = style;

    if (shouldContainerizeOnMobile === false)
      columnStylesClassName.push("escapeContainer");

    if (shouldContainerizeOnTablet === false)
      columnStylesClassName.push("tablet-escapeContainer");

    if (shouldContainerizeOnDesktop === false)
      columnStylesClassName.push("desktop-escapeContainer");

    if (backgroundColor?.color) {
      columnStylesClassName.push("backgroundColor");
      cssVariablesMap.set("backgroundColor", backgroundColor.color);
    }
  }

  return {
    classNamesArray: columnStylesClassName,
    cssVariablesMap: cssVariablesMap,
  };
};
