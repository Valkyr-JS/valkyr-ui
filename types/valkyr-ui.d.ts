type CardModalSection = "details" | "tags";
type CardModalSectionData = [CardModalSection] | [CardModalSection, number];

type DataComponentProps<T = unknown> = T & {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card";

  /** The current breakpoint in the browser. */
  currentBreakpoint?: StashCardGridZoom;

  /** The user-set breakpoint at which to render the component. */
  userBreakpoint: StashCardGridZoom;
};

type DataComponentModalProps<T = unknown> = T & {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "modal";
};

interface ExtendedConfigResult extends ConfigResult {
  plugins: {
    "valkyr-ui"?: ValkyrUiConfigMap;
  };
  ui: {
    ratingSystemOptions?: RatingSystemOptions;
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
  /** Enables counts for associated object modal sections. */
  cards__shared__enableCounts?: boolean;
  /** Adds padding to timestamps to make all units double-figures and include
   * hours. */
  cards__shared__timestampPadding?: boolean;

  /** The zoom breakpoint at which to display the date on gallery cards. */
  cards__galleryCard__dateBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the details on gallery cards. */
  cards__galleryCard__detailsBreakpoint?: StashCardGridZoom;
  /** The maximum number of lines to display for details on gallery cards. */
  cards__galleryCard__detailsMaxLines?: number;
  /** Enables Valkyr UI gallery cards. */
  cards__galleryCard__enabled?: boolean;
  /** The zoom breakpoint at which to display the organized icon on gallery
   * cards. */
  cards__galleryCard__organizedBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the rating banner on gallery
   * cards. */
  cards__galleryCard__ratingBannerBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the rating icon on gallery cards. */
  cards__galleryCard__ratingIconBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the studio link on gallery cards. */
  cards__galleryCard__studioBreakpoint?: StashCardGridZoom;
  /** Adds a blurred version of the gallery thumbnail to the background. */
  cards__galleryCard__thumbnailBackgroundEnabled?: boolean;

  /** The zoom breakpoint at which to display the date on scene cards. */
  cards__sceneCard__dateBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the details on scene cards. */
  cards__sceneCard__detailsBreakpoint?: StashCardGridZoom;
  /** The maximum number of lines to display for details on scene cards. */
  cards__sceneCard__detailsMaxLines?: number;
  /** The zoom breakpoint at which to display the duration on scene cards. */
  cards__sceneCard__durationBreakpoint?: StashCardGridZoom;
  /** Enables Valkyr UI scene cards. */
  cards__sceneCard__enabled?: boolean;
  /** The zoom breakpoint at which to display the o count on scene cards. */
  cards__sceneCard__oCountBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the organized icon on scene cards. */
  cards__sceneCard__organizedBreakpoint?: StashCardGridZoom;
  /** Enables scene card previews. */
  cards__sceneCard__previewsEnabled?: boolean;
  /** The zoom breakpoint at which to display the rating banner on scene cards. */
  cards__sceneCard__ratingBannerBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the rating icon on scene cards. */
  cards__sceneCard__ratingIconBreakpoint?: StashCardGridZoom;
  /** Displays the resolution as an icon instead of text. */
  cards__sceneCard__resolutionAsIcon?: boolean;
  /** The zoom breakpoint at which to display the resolution on scene cards. */
  cards__sceneCard__resolutionBreakpoint?: StashCardGridZoom;
  /** The zoom breakpoint at which to display the studio link on scene cards. */
  cards__sceneCard__studioBreakpoint?: StashCardGridZoom;
  /** Adds a blurred version of the scene thumbnail to the background. */
  cards__sceneCard__thumbnailBackgroundEnabled?: boolean;

  css__bodyColor?: string;
  css__titleColor?: string;
  css__cardBgColor?: string;

  /** Format the date according to the user's Stash language setting. */
  general__localeDateFormat?: boolean;
}
