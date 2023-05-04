import {StoryblokStory} from 'storyblok-generate-ts'

export interface AutoLayoutStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  layout?: "vertical" | "horizontal";
  _uid: string;
  component: "autoLayout";
  [k: string]: any;
}

export interface ColumnStoryblok {
  content?: any;
  _uid: string;
  component: "column";
  [k: string]: any;
}

export interface FooterStoryblok {
  navLinks?: InternalLinkStoryblok[];
  _uid: string;
  component: "footer";
  [k: string]: any;
}

export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface HeaderStoryblok {
  logo?: AssetStoryblok;
  navLinks?: InternalLinkStoryblok[];
  _uid: string;
  component: "header";
  [k: string]: any;
}

export interface HeroStoryblok {
  title?: string;
  description?: string;
  image?: AssetStoryblok;
  _uid: string;
  component: "hero";
  [k: string]: any;
}

export interface InternalLinkStoryblok {
  title?: string;
  page: StoryblokStory<PageStoryblok> | string;
  _uid: string;
  component: "internalLink";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: (HeroStoryblok | PageSectionStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PageSectionStoryblok {
  columns?: any[];
  _uid: string;
  component: "pageSection";
  [k: string]: any;
}
