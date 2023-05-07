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
    | ""
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
    | ""
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
  verticalResizingOnTablet?: "" | "hugContent" | "fillContainer";
  verticalResizingOnDesktop: "" | "hugContent" | "fillContainer";
  horizontalResizingOnMobile: "hugContent" | "fillContainer";
  horizontalResizingOnTablet?: "" | "hugContent" | "fillContainer";
  horizontalResizingOnDesktop: "" | "hugContent" | "fillContainer";
  _uid: string;
  component: "autoLayout";
  [k: string]: any;
}

export interface ColumnStoryblok {
  content?: any;
  styles?: (AutoLayoutStoryblok | ColumnStylesStoryblok | TextStylesStoryblok | PaddingStoryblok)[];
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

export type MultilinkStoryblok =
  | {
      cached_url?: string;
      linktype?: string;
      [k: string]: any;
    }
  | {
      id?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      url?: string;
      cached_url?: string;
      anchor?: string;
      linktype?: "asset" | "url";
      [k: string]: any;
    }
  | {
      email?: string;
      linktype?: "email";
      [k: string]: any;
    };

export interface ExternalLinkStoryblok {
  title?: string;
  url?: MultilinkStoryblok;
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

export interface PaddingStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  paddingLeftOnMobile?: string;
  paddingLeftOnTablet?: string;
  paddingLeftOnDesktop?: string;
  paddingRightOnMobile?: string;
  paddingRightOnTablet?: string;
  paddingRightOnDesktop?: string;
  paddingTopOnMobile?: string;
  paddingTopOnTablet?: string;
  paddingTopOnDesktop?: string;
  paddingBottomOnMobile?: string;
  paddingBottomOnTablet?: string;
  paddingBottomOnDesktop?: string;
  _uid: string;
  component: "padding";
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
  styles?: (PageSectionGridStoryblok | TextStylesStoryblok | PaddingStoryblok)[];
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
  alignmentOnTablet?:
    | ""
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  alignmentOnDesktop?:
    | ""
    | "alignTopLeft"
    | "alignLeft"
    | "alignBottomLeft"
    | "alignTopCenter"
    | "alignCenter"
    | "alignBottomCenter"
    | "alignTopRight"
    | "alignRight"
    | "alignBottomRight";
  columnGapOnMobile?: string;
  columnGapOnTablet?: string;
  columnGapOnDesktop?: string;
  rowGapOnMobile?: string;
  rowGapOnTablet?: string;
  rowGapOnDesktop?: string;
  _uid: string;
  component: "pageSectionGrid";
  [k: string]: any;
}

export interface TextStylesStoryblok {
  mobile?: any;
  tablet?: any;
  desktop?: any;
  textAlignOnMobile: "left" | "center" | "right";
  textAlignOnTablet?: "" | "left" | "center" | "right";
  textAlignOnDesktop?: "" | "left" | "center" | "right";
  _uid: string;
  component: "textStyles";
  [k: string]: any;
}
