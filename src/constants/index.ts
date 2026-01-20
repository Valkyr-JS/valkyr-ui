/** `DEFAULT.MODULE.COMPONENT.SETTING` */
export const DEFAULT = {
  CARDS: {
    CARD_GRID: {
      ENABLED: true,
    },
    GALLERY_CARD: {
      DATE_BREAKPOINT: 0,
      DETAILS_BREAKPOINT: 0,
      DETAILS_MAX_LINES: 3,
      ENABLED: true,
      ORGANIZED_BREAKPOINT: 0,
      RATING_BANNER_BREAKPOINT: 0,
      RATING_ICON_BREAKPOINT: -1,
      STUDIO_BREAKPOINT: 0,
      THUMBNAIL_BACKGROUND_ENABLED: false,
    },
    SCENE_CARD: {
      DATE_BREAKPOINT: 0,
      DETAILS_BREAKPOINT: 0,
      DETAILS_MAX_LINES: 3,
      DURATION_BREAKPOINT: 0,
      ENABLED: true,
      O_COUNT_BREAKPOINT: -1,
      ORGANIZED_BREAKPOINT: 0,
      PREVIEWS_ENABLED: true,
      RATING_BANNER_BREAKPOINT: 0,
      RATING_ICON_BREAKPOINT: -1,
      RESOLUTION_AS_ICON: false,
      RESOLUTION_BREAKPOINT: 0,
      STUDIO_BREAKPOINT: 0,
      THUMBNAIL_BACKGROUND_ENABLED: false,
    },
    SHARED: {
      ENABLE_FOOTER_BUTTON_COUNTS: true,
      TIMESTAMP_PADDING: false,
    },
  },
  GENERAL: {
    LOCALE_DATE_FORMAT: false,
  },
} as const;

export const PLUGIN = {
  ID: "valkyr-ui",
} as const;

export const ROUTE = {
  INDEX: "/plugins/valkyr-ui",
} as const;
