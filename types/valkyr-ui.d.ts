interface ExtendedConfigResult extends ConfigResult {
  plugins: {
    "valkyr-ui"?: ValkyrUiConfigMap;
  };
}

type StashCardGridZoom = 0 | 1 | 2 | 3;

/** The config for the Valkyr UI plugin. Stash only creates config properties
 * when they are changed. By default they are `undefined`. */
interface ValkyrUiConfigMap {
  /** Enables Valkyr UI card grids for all enabled card types. */
  cards__cardGrids__enabled?: boolean;
  /** Enables Valkyr UI scene cards. */
  cards__sceneCards__enabled?: boolean;
}
