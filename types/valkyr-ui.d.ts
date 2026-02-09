type CardModalSection = "details" | "performers" | "scenes" | "tags";
type CardModalSectionData = [CardModalSection] | [CardModalSection, number];

type DataComponentProps<T = unknown> = T & {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card";

  /** The current zoom index in the browser. */
  currentZoomIndex?: StashCardGridZoom;

  /** The user-set zoom index at which to render the component. */
  userZoomIndex: StashCardGridZoom;
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
    abbreviateCounters?: boolean;
    ratingSystemOptions?: RatingSystemOptions;
  };
}

interface SelectableCardProps {
  /** Whether Stash's card selection mode is currently active. */
  selecting?: boolean;

  /** Whether this card is selected. */
  selected?: boolean;

  /** Executed on changing selection state of the card. */
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
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
  /** Enables counts for associated object modal sections. */
  cards__shared__enableCounts?: boolean;
  /** Sets the font color of performer names according to their gender. */
  cards__shared__performerListGenderColors?: boolean;
  /** The number of performers that will be listed by name before being cut off
   * with `+ X more`. */
  cards__shared__performerListMaxItems?: number;
  /** Sets which genders are visible in the performer list, and the order they
   * appear in. Leave undefined to sort names alphabetically. */
  cards__shared__performerListSortFilter?: GenderEnum[];
  /** Adds padding to timestamps to make all units double-figures and include
   * hours. */
  cards__shared__timestampPadding?: boolean;

  /** The zoom index at which to display the date on gallery cards. */
  cards__galleryCard__dateZoomIndex?: StashCardGridZoom;
  /** The maximum number of lines to display for details on gallery cards. */
  cards__galleryCard__detailsMaxLines?: number;
  /** The zoom index at which to display the details on gallery cards. */
  cards__galleryCard__detailsZoomIndex?: StashCardGridZoom;
  /** Enables Valkyr UI gallery cards. */
  cards__galleryCard__enabled?: boolean;
  /** The zoom index at which to display the file size on gallery cards. */
  cards__galleryCard__fileSizeZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the image collection icon on gallery
   * cards. */
  cards__galleryCard__imageCollectionIconZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the image count on gallery cards. */
  cards__galleryCard__imageCountZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the organized icon on gallery
   * cards. */
  cards__galleryCard__organizedZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the performer list on gallery cards. */
  cards__galleryCard__performerListZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the photographer on gallery cards. */
  cards__galleryCard__photographerZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the rating banner on gallery
   * cards. */
  cards__galleryCard__ratingBannerZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the rating icon on gallery cards. */
  cards__galleryCard__ratingIconZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the studio link on gallery cards. */
  cards__galleryCard__studioZoomIndex?: StashCardGridZoom;
  /** Adds a blurred version of the gallery thumbnail to the background. */
  cards__galleryCard__thumbnailBackgroundImage?: boolean;
  /** Adds user-defined CSS to the thumbnail background. */
  cards__galleryCard__thumbnailBackgroundStyle?: string | null;
  /** The zoom index at which to display the zip icon on gallery cards. */
  cards__galleryCard__zipIconZoomIndex?: StashCardGridZoom;

  /** The zoom index at which to display the aspect ratio on scene cards. */
  cards__sceneCard__aspectRatioZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the audio codec on scene cards. */
  cards__sceneCard__audioCodecZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the bit rate on scene cards. */
  cards__sceneCard__bitRateZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the date on scene cards. */
  cards__sceneCard__dateZoomIndex?: StashCardGridZoom;
  /** The maximum number of lines to display for details on scene cards. */
  cards__sceneCard__detailsMaxLines?: number;
  /** The zoom index at which to display the details on scene cards. */
  cards__sceneCard__detailsZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the director on scene cards. */
  cards__sceneCard__directorZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the duration on scene cards. */
  cards__sceneCard__durationZoomIndex?: StashCardGridZoom;
  /** Enables Valkyr UI scene cards. */
  cards__sceneCard__enabled?: boolean;
  /** The zoom index at which to display the file size on scene cards. */
  cards__sceneCard__fileSizeZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the frame rate on scene cards. */
  cards__sceneCard__frameRateZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the interactive icon on scene cards. */
  cards__sceneCard__interactiveZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the o count on scene cards. */
  cards__sceneCard__oCountZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the organized icon on scene cards. */
  cards__sceneCard__organizedZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the performer list on scene cards. */
  cards__sceneCard__performerListZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the play count on scene cards. */
  cards__sceneCard__playCountZoomIndex?: StashCardGridZoom;
  /** Enables scene card previews. */
  cards__sceneCard__previewsEnabled?: boolean;
  /** The zoom index at which to display the rating banner on scene cards. */
  cards__sceneCard__ratingBannerZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the rating icon on scene cards. */
  cards__sceneCard__ratingIconZoomIndex?: StashCardGridZoom;
  /** Displays the resolution as an icon instead of text. */
  cards__sceneCard__resolutionAsIcon?: boolean;
  /** The zoom index at which to display the resolution on scene cards. */
  cards__sceneCard__resolutionZoomIndex?: StashCardGridZoom;
  /** The zoom index at which to display the studio link on scene cards. */
  cards__sceneCard__studioZoomIndex?: StashCardGridZoom;
  /** Adds a blurred version of the scene thumbnail to the background. */
  cards__sceneCard__thumbnailBackgroundImage?: boolean;
  /** Adds user-defined CSS to the thumbnail background. */
  cards__sceneCard__thumbnailBackgroundStyle?: string | null;
  /** The zoom index at which to display the video codec on scene cards. */
  cards__sceneCard__videoCodecZoomIndex?: StashCardGridZoom;

  /** Enables closing card modals when clicking outside of the component. */
  general__closeModalOnOuterClick?: boolean;
  /** Modals will always be rendered at the full height of the browser window. */
  general__fullHeightModals?: boolean;
  /** Format the date according to the user's Stash language setting. */
  general__localeDateFormat?: boolean;
}

/** The full plugin config, with defaults applied to any values not defined in
 * the user's config. */
type ValkyrUiPluginConfig = Required<ValkyrUiConfigMap>;
