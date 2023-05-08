import { Style } from "storyblok/styles/types";

export const resolveTextStyles = (style: Style) => {
  const textStylesClassNamesArray: string[] = [];
  const cssVariablesMap = new Map();

  const { component } = style;

  if (component === "textStyles") {
    const { textAlignOnMobile, textAlignOnTablet, textAlignOnDesktop } = style;

    if (textAlignOnMobile)
      textStylesClassNamesArray.push(`textAlign-${textAlignOnMobile}`);
    if (textAlignOnTablet)
      textStylesClassNamesArray.push(`tablet-textAlign-${textAlignOnTablet}`);
    if (textAlignOnDesktop)
      textStylesClassNamesArray.push(`desktop-textAlign-${textAlignOnDesktop}`);
  }

  return {
    classNamesArray: textStylesClassNamesArray,
    cssVariablesMap: cssVariablesMap,
  };
};
