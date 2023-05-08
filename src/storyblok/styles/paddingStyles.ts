import { RawStyles, Style } from "storyblok/styles/types";

export const resolvePaddingStyles = (style: Style): RawStyles => {
  const paddingClassNamesArray: string[] = [];
  const cssVariablesMap = new Map();

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
      paddingClassNamesArray.push("padding-left");
      cssVariablesMap.set("paddingLeftOnMobile", paddingLeftOnMobile);
    }

    if (paddingLeftOnTablet) {
      paddingClassNamesArray.push("padding-left-tablet");
      cssVariablesMap.set("paddingLeftOnTablet", paddingLeftOnTablet);
    }

    if (paddingLeftOnDesktop) {
      paddingClassNamesArray.push("padding-left-desktop");
      cssVariablesMap.set("paddingLeftOnDesktop", paddingLeftOnDesktop);
    }

    if (paddingRightOnMobile) {
      paddingClassNamesArray.push("padding-right");

      cssVariablesMap.set("paddingRightOnMobile", paddingRightOnMobile);
    }

    if (paddingRightOnTablet) {
      paddingClassNamesArray.push("padding-right-tablet");
      cssVariablesMap.set("paddingRightOnTablet", paddingRightOnTablet);
    }

    if (paddingRightOnDesktop) {
      paddingClassNamesArray.push("padding-right-desktop");
      cssVariablesMap.set("paddingRightOnDesktop", paddingRightOnDesktop);
    }

    if (paddingTopOnMobile) {
      paddingClassNamesArray.push("padding-top");
      cssVariablesMap.set("paddingTopOnMobile", paddingTopOnMobile);
    }

    if (paddingTopOnTablet) {
      paddingClassNamesArray.push("padding-top-tablet");
      cssVariablesMap.set("paddingTopOnTablet", paddingTopOnTablet);
    }

    if (paddingTopOnDesktop) {
      paddingClassNamesArray.push("padding-top-desktop");
      cssVariablesMap.set("paddingTopOnDesktop", paddingTopOnDesktop);
    }

    if (paddingBottomOnMobile) {
      paddingClassNamesArray.push("padding-bottom");
      cssVariablesMap.set("paddingBottomOnMobile", paddingBottomOnMobile);
    }

    if (paddingBottomOnTablet) {
      paddingClassNamesArray.push("padding-bottom-tablet");
      cssVariablesMap.set("paddingBottomOnTablet", paddingBottomOnTablet);
    }

    if (paddingBottomOnDesktop) {
      paddingClassNamesArray.push("padding-bottom-desktop");
      cssVariablesMap.set("paddingBottomOnDesktop", paddingBottomOnDesktop);
    }
  }

  return {
    classNamesArray: paddingClassNamesArray,
    cssVariablesMap: cssVariablesMap,
  };
};
