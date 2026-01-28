import React, { useState } from "react";
import {
  BooleanSetting,
  SettingGroup,
} from "@/components/stash/Settings/Inputs";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
import { StringSetting } from "@/components/stash/Settings/Inputs/StringSetting";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const GalleryCardDataSection: React.FC<SettingsTabProps> = (props) => {
  const DateZoomIndex = () => (
    <NumberSetting
      heading="Date"
      id="valkyr-ui-cards__galleryCard__dateZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__dateZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__dateZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.DATE_ZOOM_INDEX
      }
    />
  );

  const DetailsZoomIndex = () => (
    <NumberSetting
      heading="Details"
      id="valkyr-ui-cards__galleryCard__detailsZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__detailsZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__detailsZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.DETAILS_ZOOM_INDEX
      }
    />
  );

  const DetailsMaxLines = () => (
    <NumberSetting
      heading="Details max lines"
      id="valkyr-ui-cards__galleryCard__detailsMaxLines"
      onChange={(v) => {
        if (v > 0) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__detailsMaxLines: v,
          });
        }
      }}
      subHeading="The maximum number of lines to display for details on gallery cards. Details in gallery card modals are displayed in full."
      value={
        props.pluginConfig.cards__galleryCard__detailsMaxLines ??
        DEFAULT.CARDS.GALLERY_CARD.DETAILS_MAX_LINES
      }
    />
  );

  const FileSizeZoomIndex = () => (
    <NumberSetting
      heading="File size"
      id="valkyr-ui-cards__galleryCard__fileSizeZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__fileSizeZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__fileSizeZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.FILE_SIZE_ZOOM_INDEX
      }
    />
  );

  const ImageCollectionIconZoomIndex = () => (
    <NumberSetting
      heading="Image collection icon"
      id="valkyr-ui-cards__galleryCard__imageCollectionIconZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__imageCollectionIconZoomIndex: v,
          });
        }
      }}
      subHeading="Indicates a gallery made up of loose images, as opposed to one created from a ZIP file."
      value={
        props.pluginConfig.cards__galleryCard__imageCollectionIconZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.IMAGE_COLLECTION_ICON_ZOOM_INDEX
      }
    />
  );

  const ImageCountIconZoomIndex = () => (
    <NumberSetting
      heading="Image count"
      id="valkyr-ui-cards__galleryCard__imageCountZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__imageCountZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__imageCountZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.IMAGE_COUNT
      }
    />
  );

  const OrganizedZoomIndex = () => (
    <NumberSetting
      heading="Organized icon"
      id="valkyr-ui-cards__galleryCard__organizedZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__organizedZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__organizedZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.ORGANIZED_ZOOM_INDEX
      }
    />
  );

  const PerformerListZoomIndex = () => (
    <NumberSetting
      heading="Performer list"
      id="valkyr-ui-cards__galleryCard__performerListZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__performerListZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__performerListZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.PERFORMER_LIST_ZOOM_INDEX
      }
    />
  );

  const PhotographerZoomIndex = () => (
    <NumberSetting
      heading="Photographer"
      id="valkyr-ui-cards__galleryCard__photographerZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__photographerZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__photographerZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.PHOTOGRAPHER_ZOOM_INDEX
      }
    />
  );

  const RatingBannerZoomIndex = () => (
    <NumberSetting
      heading="Rating banner"
      id="valkyr-ui-cards__galleryCard__ratingBannerZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__ratingBannerZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_ZOOM_INDEX
      }
    />
  );

  const RatingIconZoomIndex = () => (
    <NumberSetting
      heading="Rating icon"
      id="valkyr-ui-cards__galleryCard__ratingIconZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__ratingIconZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__ratingIconZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.RATING_ICON_ZOOM_INDEX
      }
    />
  );

  const StudioZoomIndex = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__galleryCard__studioZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__studioZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__studioZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.STUDIO_ZOOM_INDEX
      }
    />
  );

  const ZipIconZoomIndex = () => (
    <NumberSetting
      heading="Zip folder icon"
      id="valkyr-ui-cards__galleryCard__zipIconZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__zipIconZoomIndex: v,
          });
        }
      }}
      subHeading="Indicates a gallery created from a ZIP file, as opposed to one made up of loose images."
      value={
        props.pluginConfig.cards__galleryCard__zipIconZoomIndex ??
        DEFAULT.CARDS.GALLERY_CARD.ZIP_ICON_ZOOM_INDEX
      }
    />
  );

  const BlurredThumbnailBackgroundEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__galleryCard__thumbnailBackgroundImage ??
        DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_IMAGE,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable thumbnail background images"
        id="valkyr-ui-cards__galleryCard__thumbnailBackgroundImage"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__thumbnailBackgroundImage: newState,
          });
        }}
        subHeading="Adds a blurred copy of the gallery thumbnail to the background, filling any blank space."
      />
    );
  };

  const ThumbnailBackgroundStyle = () => {
    const initialValue =
      props.pluginConfig.cards__galleryCard__thumbnailBackgroundStyle ??
      DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_STYLE;
    const [value, setValue] = useState(
      initialValue === null ? "" : initialValue,
    );
    return (
      <StringSetting
        heading="Thumbnail background style"
        id="valkyr-ui-cards__galleryCard__thumbnailBackgroundStyle"
        onBlur={() => {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__thumbnailBackgroundStyle: value.length
              ? value
              : null,
          });
        }}
        onChange={(v) => setValue(v)}
        subHeading={
          <>
            Adds a{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background"
              target="_blank"
            >
              <code>background</code> CSS property
            </a>{" "}
            to gallery thumbnails with the given value.
          </>
        }
        value={value}
      />
    );
  };

  return (
    <SettingSection id="gallery-data" heading="Gallery card data">
      <SettingGroup
        collapsible
        settingProps={{
          heading: "Card zoom index data",
          subHeading:
            "For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely.",
        }}
      >
        <DateZoomIndex />
        <DetailsZoomIndex />
        <FileSizeZoomIndex />
        <ImageCollectionIconZoomIndex />
        <ImageCountIconZoomIndex />
        <OrganizedZoomIndex />
        <PerformerListZoomIndex />
        <PhotographerZoomIndex />
        <RatingBannerZoomIndex />
        <RatingIconZoomIndex />
        <StudioZoomIndex />
        <ZipIconZoomIndex />
      </SettingGroup>
      <SettingGroup collapsible settingProps={{ heading: "Thumbnails" }}>
        <BlurredThumbnailBackgroundEnabled />
        <ThumbnailBackgroundStyle />
      </SettingGroup>
      <SettingGroup collapsible settingProps={{ heading: "Other" }}>
        <DetailsMaxLines />
      </SettingGroup>
    </SettingSection>
  );
};

export default GalleryCardDataSection;
