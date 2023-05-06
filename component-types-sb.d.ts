import {StoryblokStory} from 'storyblok-generate-ts'

export interface AutoLayoutStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  layoutOnMobile: "vertical" | "horizontal";
  layoutOnTablet: "vertical" | "horizontal";
  layoutOnDesktop: "vertical" | "horizontal";
  alignmentOnMobile:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  alignmentOnTablet:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  alignmentOnDesktop:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  verticalResizingOnMobile: "hugContent" | "fillContainer";
  verticalResizingOnTablet: "hugContent" | "fillContainer";
  verticalResizingOnDesktop: "hugContent" | "fillContainer";
  horizontalResizingOnMobile: "hugContent" | "fillContainer";
  horizontalResizingOnTablet: "" | "hugContent" | "fillContainer";
  horizontalResizingOnDesktop: "" | "hugContent" | "fillContainer";
  _uid: string;
  component: "autoLayout";
  [k: string]: any;
}

export interface ColumnStoryblok {
  content?: any;
  styles?: (AutoLayoutStoryblok | ColumnStylesStoryblok)[];
  _uid: string;
  component: "column";
  [k: string]: any;
}

export interface ColumnStylesStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  shouldContainerizeOnMobile?: boolean;
  shouldContainerizeOnTablet?: boolean;
  shouldContainerizeOnDesktop?: boolean;
  _uid: string;
  component: "columnStyles";
  [k: string]: any;
}

export interface CtaButtonStoryblok {
  link?: (ExternalLinkStoryblok | InternalLinkStoryblok)[];
  _uid: string;
  component: "ctaButton";
  [k: string]: any;
}

export interface ExternalLinkStoryblok {
  title?: string;
  _uid: string;
  component: "externalLink";
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

export interface InternalLinkStoryblok {
  title?: string;
  page: StoryblokStory<PageStoryblok> | string;
  _uid: string;
  component: "internalLink";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: PageSectionStoryblok[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface PageSectionStoryblok {
  title: string;
  columns?: ColumnStoryblok[];
  styles?: PageSectionGridStoryblok[];
  _uid: string;
  component: "pageSection";
  [k: string]: any;
}

export interface PageSectionGridStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  numberOfColumnsOnMobile: number;
  numberOfColumnsOnTablet: number;
  numberOfColumnsOnDesktop: number;
  alignmentOnMobile:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  alignmentOnTablet:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  alignmentOnDesktop:
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  _uid: string;
  component: "pageSectionGrid";
  [k: string]: any;
}
