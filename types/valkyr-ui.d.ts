type CardModalSection = "details";

type DataComponentProps<T = unknown> = T & {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card";

  /** The current breakpoint in the browser. */
  currentBreakpoint?: StashCardGridZoom;

  /** Whether the user has set 0-value data to not be rendered. */
  hideZeroValueData?: boolean;

  /** The user-set breakpoint at which to render the component. */
  userBreakpoint: StashCardGridZoom;
};

type DataComponentModalProps<T = unknown> = T & {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "modal";

  /** Whether the user has set 0-value data to not be rendered. */
  hideZeroValueData?: boolean;
};

interface ExtendedConfigResult extends ConfigResult {
  plugins: {
    "valkyr-ui"?: ValkyrUiConfigMap;
  };
}

interface SettingsTabProps {
  /** The function that updates the user's plugin config. */
  configUpdateHandler: (updatedConfig: ValkyrUiConfigMap) => void;
  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;
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
  cards__cardGrid__enabled?: boolean;
  /** The zoom breakpoint at which to display the date on gallery cards. */
  cards__galleryCard__dateBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the details on gallery cards. */
  cards__galleryCard__detailsBreakpoint?: StashCardGridZoom;
  /** The maximum number of lines to display for details on gallery cards. */
  cards__galleryCard__detailsMaxLines?: number;
  /** Enables Valkyr UI gallery cards. */
  cards__galleryCard__enabled?: boolean;
  /** The zoom breakpoint at which to display the studio link on gallery cards. */
  cards__galleryCard__studioBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the date on scene cards. */
  cards__sceneCard__dateBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the details on scene cards. */
  cards__sceneCard__detailsBreakpoint?: StashCardGridZoom;
  /** The maximum number of lines to display for details on scene cards. */
  cards__sceneCard__detailsMaxLines?: number;
  /** Enables Valkyr UI scene cards. */
  cards__sceneCard__enabled?: boolean;
  /** The zoom breakpoint at which to display the studio link on scene cards. */
  cards__sceneCard__studioBreakpoint?: StashCardGridZoom;
  /** Format the date according to the user's Stash language setting. */
  general__localeDateFormat?: boolean;
}
