type CardModalSection = "details";

interface ExtendedConfigResult extends ConfigResult {
  plugins: {
    "valkyr-ui"?: ValkyrUiConfigMap;
  };
}

type StashCardGridZoom = -1 | 0 | 1 | 2 | 3;

type SlimStashObject =
  | SlimGalleryDataFragment
  | Group
  | Image
  | Performer
  | SlimSceneDataFragment
  | SceneMarker
  | Studio
  | Tag;

/** The config for the Valkyr UI plugin. Stash only creates config properties
 * when they are changed. By default they are `undefined`. */
interface ValkyrUiConfigMap {
  /** Enables Valkyr UI card grids for all enabled card types. */
  cards__cardGrids__enabled?: boolean;
  /** Enables Valkyr UI gallery cards. */
  cards__galleryCards__enabled?: boolean;
  /** The zoom breakpoint at which to display the studio link. */
  cards__general_data__studio?: StashCardGridZoom;
  /** Enables Valkyr UI scene cards. */
  cards__sceneCards__enabled?: boolean;
}
