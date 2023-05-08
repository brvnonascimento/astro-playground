import { RawStyles, Style } from "storyblok/styles/types";

export const resolveMinHeightStyles = (style: Style): RawStyles => {
  const minHeightClassNamesArray: string[] = [];
  const cssVariablesMap = new Map();

  const { component } = style;

  if (component === "sizing") {
    const { minHeightOnMobile, minHeightOnTablet, minHeightOnDesktop } = style;

    if (minHeightOnMobile) {
      minHeightClassNamesArray.push("min-height");
      cssVariablesMap.set("minHeightOnMobile", minHeightOnMobile);
    }

    if (minHeightOnTablet) {
      minHeightClassNamesArray.push("min-height-tablet");
      cssVariablesMap.set("minHeightOnTablet", minHeightOnTablet);
    }

    if (minHeightOnDesktop) {
      minHeightClassNamesArray.push("min-height-desktop");
      cssVariablesMap.set("minHeightOnDesktop", minHeightOnDesktop);
    }
  }

  return {
    classNamesArray: minHeightClassNamesArray,
    cssVariablesMap: cssVariablesMap,
  };
};
