import { ColumnStoryblok, PageSectionStoryblok } from "@types";

export type Styles = PageSectionStoryblok["styles"] | ColumnStoryblok["styles"];

export type Style = Exclude<Styles, undefined>[number];

export type RawStyles = {
  classNamesArray: string[];
  cssVariablesMap: Map<string, string>;
};
