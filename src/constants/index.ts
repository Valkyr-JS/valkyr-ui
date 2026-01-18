/** `DEFAULT.MODULE.COMPONENT.SETTING` */
export const DEFAULT = {
  CARDS: {
    CARD_GRID: {
      ENABLED: true,
    },
    DATA: {
      HIDE_ZERO_VALUE: false,
    },
    GALLERY_CARD: {
      DATE_BREAKPOINT: 0,
      DETAILS_BREAKPOINT: 0,
      DETAILS_MAX_LINES: 3,
      ENABLED: true,
      RATING_BANNER_BREAKPOINT: 0,
      RATING_ICON_BREAKPOINT: -1,
      STUDIO_BREAKPOINT: 0,
    },
    SCENE_CARD: {
      DATE_BREAKPOINT: 0,
      DETAILS_BREAKPOINT: 0,
      DETAILS_MAX_LINES: 3,
      ENABLED: true,
      PREVIEWS_ENABLED: true,
      RATING_BANNER_BREAKPOINT: 0,
      RATING_ICON_BREAKPOINT: -1,
      STUDIO_BREAKPOINT: 0,
    },
    SHARED: {
      ENABLE_FOOTER_BUTTON_COUNTS: true,
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
