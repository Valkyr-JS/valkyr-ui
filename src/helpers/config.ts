import { DEFAULT } from "@/constants";

/** Returns the user's plugin config merged with default values. */
export const mergeConfig = (userConfig: ValkyrUiConfigMap) => {
  const defaultConfig = {
    // Cards - Shared
    cards__shared__enableCounts:
      DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS,
    cards__shared__performerListGenderColors:
      DEFAULT.CARDS.SHARED.PERFORMER_LIST_GENDER_COLORS,
    cards__shared__performerListMaxItems:
      DEFAULT.CARDS.SHARED.PERFORMER_LIST_MAX_ITEMS,
    cards__shared__performerListSortFilter:
      DEFAULT.CARDS.SHARED.PERFORMER_LIST_SORT_FILTER,
    cards__shared__timestampPadding: DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING,

    // Cards - Gallery
    cards__galleryCard__dateZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.DATE_ZOOM_INDEX,
    cards__galleryCard__detailsMaxLines:
      DEFAULT.CARDS.GALLERY_CARD.DETAILS_MAX_LINES,
    cards__galleryCard__detailsZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.DETAILS_ZOOM_INDEX,
    cards__galleryCard__enabled: DEFAULT.CARDS.GALLERY_CARD.ENABLED,
    cards__galleryCard__fileSizeZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.FILE_SIZE_ZOOM_INDEX,
    cards__galleryCard__imageCollectionIconZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.IMAGE_COLLECTION_ICON_ZOOM_INDEX,
    cards__galleryCard__imageCountZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.IMAGE_COUNT_ZOOM_INDEX,
    cards__galleryCard__organizedZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.ORGANIZED_ZOOM_INDEX,
    cards__galleryCard__performerListZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.PHOTOGRAPHER_ZOOM_INDEX,
    cards__galleryCard__photographerZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.PHOTOGRAPHER_ZOOM_INDEX,
    cards__galleryCard__ratingBannerZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_ZOOM_INDEX,
    cards__galleryCard__ratingIconZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.RATING_ICON_ZOOM_INDEX,
    cards__galleryCard__studioZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.STUDIO_ZOOM_INDEX,
    cards__galleryCard__thumbnailBackgroundImage:
      DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_IMAGE,
    cards__galleryCard__thumbnailBackgroundStyle:
      DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_STYLE,
    cards__galleryCard__zipIconZoomIndex:
      DEFAULT.CARDS.GALLERY_CARD.ZIP_ICON_ZOOM_INDEX,

    cards__sceneCard__aspectRatioZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.ASPECT_RATIO_ZOOM_INDEX,
    cards__sceneCard__audioCodecZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.AUDIO_CODEX_ZOOM_INDEX,
    cards__sceneCard__bitRateZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.BIT_RATE_ZOOM_INDEX,
    cards__sceneCard__dateZoomIndex: DEFAULT.CARDS.SCENE_CARD.DATE_ZOOM_INDEX,
    cards__sceneCard__detailsMaxLines:
      DEFAULT.CARDS.SCENE_CARD.DETAILS_MAX_LINES,
    cards__sceneCard__detailsZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.DETAILS_ZOOM_INDEX,
    cards__sceneCard__directorZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.DIRECTOR_ZOOM_INDEX,
    cards__sceneCard__durationZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.DURATION_ZOOM_INDEX,
    cards__sceneCard__enabled: DEFAULT.CARDS.SCENE_CARD.ENABLED,
    cards__sceneCard__fileSizeZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.FILE_SIZE_ZOOM_INDEX,
    cards__sceneCard__frameRateZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.FRAME_RATE_ZOOM_INDEX,
    cards__sceneCard__interactiveZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.INTERACTIVE_ZOOM_INDEX,
    cards__sceneCard__oCountZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.O_COUNT_ZOOM_INDEX,
    cards__sceneCard__organizedZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.ORGANIZED_ZOOM_INDEX,
    cards__sceneCard__performerListZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.PERFORMER_LIST_ZOOM_INDEX,
    cards__sceneCard__playCountZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.PLAY_COUNT_ZOOM_INDEX,
    cards__sceneCard__previewsEnabled:
      DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED,
    cards__sceneCard__ratingBannerZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.RATING_BANNER_ZOOM_INDEX,
    cards__sceneCard__ratingIconZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.RATING_ICON_ZOOM_INDEX,
    cards__sceneCard__resolutionAsIcon:
      DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON,
    cards__sceneCard__resolutionZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.RESOLUTION_ZOOM_INDEX,
    cards__sceneCard__studioZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.STUDIO_ZOOM_INDEX,
    cards__sceneCard__thumbnailBackgroundImage:
      DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_IMAGE,
    cards__sceneCard__thumbnailBackgroundStyle:
      DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_STYLE,
    cards__sceneCard__videoCodecZoomIndex:
      DEFAULT.CARDS.SCENE_CARD.VIDEO_CODEX_ZOOM_INDEX,

    // General
    general__closeModalOnOuterClick: DEFAULT.GENERAL.CLOSE_MODAL_ON_OUTER_CLICK,
    general__fullHeightModals: DEFAULT.GENERAL.FULL_HEIGHT_MODALS,
    general__localeDateFormat: DEFAULT.GENERAL.LOCALE_DATE_FORMAT,
  };

  const mergedConfig = Object.assign(defaultConfig, userConfig);

  return mergedConfig;
};
