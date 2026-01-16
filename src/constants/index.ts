/** `DEFAULT.MODULE.COMPONENT.SETTING` */
export const DEFAULT = {
  CARDS: {
    CARD_GRID: {
      ENABLED: true,
    },
    GALLERY_CARD: {
      ENABLED: true,
      STUDIO_BREAKPOINT: 0,
    },
    SCENE_CARD: {
      ENABLED: true,
      STUDIO_BREAKPOINT: 0,
    },
  },
} as const;

export const PLUGIN = {
  ID: "valkyr-ui",
} as const;

export const ROUTE = {
  INDEX: "/plugins/valkyr-ui",
} as const;
