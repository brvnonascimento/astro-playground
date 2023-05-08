import { RawStyles, Style } from "storyblok/styles/types";

export const resolveMaxWidthStyles = (style: Style): RawStyles => {
  const maxWidthClassNames: string[] = [];
  const cssVariables = new Map();

  const { component } = style;

  if (component === "sizing") {
    const { maxWidthOnMobile, maxWidthOnTablet, maxWidthOnDesktop } = style;

    if (maxWidthOnMobile) {
      maxWidthClassNames.push("max-width");
      cssVariables.set("maxWidthOnMobile", maxWidthOnMobile);
    }

    if (maxWidthOnTablet) {
      maxWidthClassNames.push("max-width-tablet");
      cssVariables.set("maxWidthOnTablet", maxWidthOnTablet);
    }

    if (maxWidthOnDesktop) {
      maxWidthClassNames.push("max-width-desktop");
      cssVariables.set("maxWidthOnDesktop", maxWidthOnDesktop);
    }
  }

  return {
    classNamesArray: maxWidthClassNames,
    cssVariablesMap: cssVariables,
  };
};
