import { ColumnStoryblok, PageSectionStoryblok } from "@types";
import classNames from "classnames";
import { resolveAutoLayoutStyles } from "storyblok/styles/autoLayoutStyles";
import { resolveColumnStyles } from "storyblok/styles/columnStyles";
import { resolveMaxWidthStyles } from "storyblok/styles/maxWidthStyles";
import { resolveMinHeightStyles } from "storyblok/styles/minHeightStyles";
import { resolvePaddingStyles } from "storyblok/styles/paddingStyles";
import { resolvePageSectionGridStyles } from "storyblok/styles/pageSectionGridStyles";
import { resolveTextStyles } from "storyblok/styles/textStyles";

type ResolveStylesResult = {
  classNames: string;
  cssVariables: Record<string, string>;
};

const sharedStylesResolvers = [
  resolveMaxWidthStyles,
  resolveMinHeightStyles,
  resolvePaddingStyles,
  resolveTextStyles,
];

export const resolvePageSectionStylesBlocks = (
  styles?: PageSectionStoryblok["styles"]
): ResolveStylesResult => {
  const pageSectionClassNames: string[] = [];
  const cssVariables = new Map();

  if (!styles) {
    return {
      classNames: "",
      cssVariables: Object.fromEntries(cssVariables),
    };
  }

  styles.forEach((style) => {
    // Call each shared styles resolver
    sharedStylesResolvers.forEach((resolver) => {
      const { classNamesArray, cssVariablesMap } = resolver(style);

      pageSectionClassNames.push(...classNamesArray);
      cssVariablesMap.forEach((value, key) => cssVariables.set(key, value));
    });

    const { classNamesArray, cssVariablesMap } =
      resolvePageSectionGridStyles(style);

    pageSectionClassNames.push(...classNamesArray);
    cssVariablesMap.forEach((value, key) => cssVariables.set(key, value));
  });

  return {
    classNames: classNames(pageSectionClassNames),
    cssVariables: Object.fromEntries(cssVariables),
  };
};

export const resolveColumnStylesBlocks = (
  styles?: ColumnStoryblok["styles"]
) => {
  const columnStylesClassName: string[] = [];
  const cssVariables = new Map();

  if (!styles) {
    return { classNames: columnStylesClassName };
  }

  styles.forEach((style) => {
    sharedStylesResolvers.forEach((resolver) => {
      const { classNamesArray, cssVariablesMap } = resolver(style);

      columnStylesClassName.push(...classNamesArray);
      cssVariablesMap.forEach((value, key) => cssVariables.set(key, value));
    });

    const {
      classNamesArray: columnStylesClassNamesArray,
      cssVariablesMap: columnStylesCSSVariablesMap,
    } = resolveColumnStyles(style);

    columnStylesClassName.push(...columnStylesClassNamesArray);
    columnStylesCSSVariablesMap.forEach((value, key) =>
      cssVariables.set(key, value)
    );

    const {
      classNamesArray: autoLayoutClassNamesArray,
      cssVariablesMap: autoLayoutCSSVariablesMap,
    } = resolveAutoLayoutStyles(style);

    columnStylesClassName.push(...autoLayoutClassNamesArray);
    autoLayoutCSSVariablesMap.forEach((value, key) =>
      cssVariables.set(key, value)
    );
  });

  return {
    classNames: classNames(columnStylesClassName),
    cssVariables: Object.fromEntries(cssVariables),
  };
};
