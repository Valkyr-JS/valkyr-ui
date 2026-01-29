import React, { useState } from "react";
import {
  BooleanSetting,
  SettingGroup,
} from "@/components/stash/Settings/Inputs";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
import { StringSetting } from "@/components/stash/Settings/Inputs/StringSetting";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const SceneCardDataSection: React.FC<SettingsTabProps> = (props) => {
  const AspectRatioZoomIndex = () => (
    <NumberSetting
      heading="Aspect ratio"
      id="valkyr-ui-cards__sceneCard__aspectRatioZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__aspectRatioZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__aspectRatioZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.ASPECT_RATIO_ZOOM_INDEX
      }
    />
  );

  const AudioCodecZoomIndex = () => (
    <NumberSetting
      heading="Audio codec"
      id="valkyr-ui-cards__sceneCard__audioCodecZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__audioCodecZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__audioCodecZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.AUDIO_CODEX_ZOOM_INDEX
      }
    />
  );

  const BitRateZoomIndex = () => (
    <NumberSetting
      heading="Bit rate"
      id="valkyr-ui-cards__sceneCard__bitRateZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__bitRateZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__bitRateZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.BIT_RATE_ZOOM_INDEX
      }
    />
  );

  const BlurredThumbnailBackgroundEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage ??
        DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_IMAGE,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable thumbnail background images"
        id="valkyr-ui-cards__sceneCard__thumbnailBackgroundImage"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__thumbnailBackgroundImage: newState,
          });
        }}
        subHeading="Adds a blurred copy of the scene thumbnail to the background, filling any blank space."
      />
    );
  };

  const DateZoomIndex = () => (
    <NumberSetting
      heading="Date"
      id="valkyr-ui-cards__sceneCard__dateZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__dateZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__dateZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.DATE_ZOOM_INDEX
      }
    />
  );

  const DetailsZoomIndex = () => (
    <NumberSetting
      heading="Details"
      id="valkyr-ui-cards__sceneCard__detailsZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__detailsZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__detailsZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.DETAILS_ZOOM_INDEX
      }
    />
  );

  const DetailsMaxLines = () => (
    <NumberSetting
      heading="Details max lines"
      id="valkyr-ui-cards__sceneCard__detailsMaxLines"
      onChange={(v) => {
        if (v > 0) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__detailsMaxLines: v,
          });
        }
      }}
      subHeading="The maximum number of lines to display for details on scene cards. Details in scene card modals are displayed in full."
      value={
        props.pluginConfig.cards__sceneCard__detailsMaxLines ??
        DEFAULT.CARDS.SCENE_CARD.DETAILS_MAX_LINES
      }
    />
  );

  const DirectorZoomIndex = () => (
    <NumberSetting
      heading="Director"
      id="valkyr-ui-cards__sceneCard__directorZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__directorZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__directorZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.DIRECTOR_ZOOM_INDEX
      }
    />
  );

  const DurationZoomIndex = () => (
    <NumberSetting
      heading="Duration"
      id="valkyr-ui-cards__sceneCard__durationZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__durationZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__durationZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.DURATION_ZOOM_INDEX
      }
    />
  );

  const FrameRateZoomIndex = () => (
    <NumberSetting
      heading="Frame rate"
      id="valkyr-ui-cards__sceneCard__frameRateZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__frameRateZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__frameRateZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.FRAME_RATE_ZOOM_INDEX
      }
    />
  );

  const FileSizeZoomIndex = () => (
    <NumberSetting
      heading="File size"
      id="valkyr-ui-cards__sceneCard__fileSizeZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__fileSizeZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__fileSizeZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.FILE_SIZE_ZOOM_INDEX
      }
    />
  );

  const InteractiveZoomIndex = () => (
    <NumberSetting
      heading="Interactive icon"
      id="valkyr-ui-cards__sceneCard__interactiveZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__interactiveZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__interactiveZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.INTERACTIVE_ZOOM_INDEX
      }
    />
  );

  const OCountZoomIndex = () => (
    <NumberSetting
      heading="O count"
      id="valkyr-ui-cards__sceneCard__oCountZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__oCountZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__oCountZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.O_COUNT_ZOOM_INDEX
      }
    />
  );

  const OrganizedZoomIndex = () => (
    <NumberSetting
      heading="Organized icon"
      id="valkyr-ui-cards__sceneCard__organizedZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__organizedZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__organizedZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.ORGANIZED_ZOOM_INDEX
      }
    />
  );

  const PerformerListZoomIndex = () => (
    <NumberSetting
      heading="Performer list"
      id="valkyr-ui-cards__sceneCard__performerListZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__performerListZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__performerListZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.PERFORMER_LIST_ZOOM_INDEX
      }
    />
  );

  const PlayCountZoomIndex = () => (
    <NumberSetting
      heading="Play count"
      id="valkyr-ui-cards__sceneCard__playCountZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__playCountZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__playCountZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.PLAY_COUNT_ZOOM_INDEX
      }
    />
  );

  const PreviewsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__sceneCard__previewsEnabled ??
        DEFAULT.CARDS.SCENE_CARD.PREVIEWS_ENABLED,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable scene previews"
        id="valkyr-ui-cards__sceneCard__previewsEnabled"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__previewsEnabled: newState,
          });
        }}
        subHeading="Enable Stash-generated scene previews on hover."
      />
    );
  };

  const RatingBannerZoomIndex = () => (
    <NumberSetting
      heading="Rating banner"
      id="valkyr-ui-cards__sceneCard__ratingBannerZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__ratingBannerZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__ratingBannerZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.RATING_BANNER_ZOOM_INDEX
      }
    />
  );

  const RatingIconZoomIndex = () => (
    <NumberSetting
      heading="Rating icon"
      id="valkyr-ui-cards__sceneCard__ratingIconZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__ratingIconZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__ratingIconZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.RATING_ICON_ZOOM_INDEX
      }
    />
  );

  const ResolutionAsIcon = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__sceneCard__resolutionAsIcon ??
        DEFAULT.CARDS.SCENE_CARD.RESOLUTION_AS_ICON,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Resolution as icon"
        id="valkyr-ui-cards__sceneCard__resolutionAsIcon"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__resolutionAsIcon: newState,
          });
        }}
        subHeading="Displays the resolution as a shorthand icon rather than as text. E.g. '1080p' will be displayed as 'HD'."
      />
    );
  };

  const ResolutionZoomIndex = () => (
    <NumberSetting
      heading="Resolution"
      id="valkyr-ui-cards__sceneCard__resolutionZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__resolutionZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__resolutionZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.RESOLUTION_ZOOM_INDEX
      }
    />
  );

  const StudioZoomIndex = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__sceneCard__studioZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__studioZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__studioZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.STUDIO_ZOOM_INDEX
      }
    />
  );

  const ThumbnailBackgroundStyle = () => {
    const initialValue =
      props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle ??
      DEFAULT.CARDS.SCENE_CARD.THUMBNAIL_BACKGROUND_STYLE;
    const [value, setValue] = useState(
      initialValue === null ? "" : initialValue,
    );
    return (
      <StringSetting
        heading="Thumbnail background style"
        id="valkyr-ui-cards__sceneCard__thumbnailBackgroundStyle"
        onBlur={() => {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__thumbnailBackgroundStyle: value.length
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
            to scene thumbnails with the given value.
          </>
        }
        value={value}
      />
    );
  };

  const VideoCodecZoomIndex = () => (
    <NumberSetting
      heading="Video codec"
      id="valkyr-ui-cards__sceneCard__videoCodecZoomIndex"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__videoCodecZoomIndex: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__videoCodecZoomIndex ??
        DEFAULT.CARDS.SCENE_CARD.VIDEO_CODEX_ZOOM_INDEX
      }
    />
  );

  return (
    <SettingSection id="scene-data" heading="Scene card data">
      <SettingGroup
        collapsible
        settingProps={{
          heading: "Card zoom index data",
          subHeading:
            "For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely.",
        }}
      >
        <AspectRatioZoomIndex />
        <AudioCodecZoomIndex />
        <BitRateZoomIndex />
        <DateZoomIndex />
        <DetailsZoomIndex />
        <DirectorZoomIndex />
        <DurationZoomIndex />
        <FileSizeZoomIndex />
        <FrameRateZoomIndex />
        <InteractiveZoomIndex />
        <OCountZoomIndex />
        <OrganizedZoomIndex />
        <PerformerListZoomIndex />
        <PlayCountZoomIndex />
        <RatingBannerZoomIndex />
        <RatingIconZoomIndex />
        <ResolutionZoomIndex />
        <StudioZoomIndex />
        <VideoCodecZoomIndex />
      </SettingGroup>
      <SettingGroup collapsible settingProps={{ heading: "Thumbnails" }}>
        <PreviewsEnabled />
        <BlurredThumbnailBackgroundEnabled />
        <ThumbnailBackgroundStyle />
      </SettingGroup>
      <SettingGroup collapsible settingProps={{ heading: "Other" }}>
        <DetailsMaxLines />
        <ResolutionAsIcon />
      </SettingGroup>
    </SettingSection>
  );
};

export default SceneCardDataSection;
