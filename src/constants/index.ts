/** `DEFAULT.MODULE.GROUP.SETTING` */
export const DEFAULT = {
  CARDS: {
    CARD_GRID: {
      ENABLED: true,
    },
    DATA: {
      STUDIO_BREAKPOINT: 0,
    },
    GALLERY_CARD: {
      ENABLED: true,
    },
    SCENE_CARD: {
      ENABLED: true,
    },
  },
} as const;

export const PLUGIN = {
  ID: "valkyr-ui",
} as const;

export const ROUTE = {
  INDEX: "/plugins/valkyr-ui",
} as const;
