import React, { useState } from "react";
import {
  BooleanSetting,
  SettingGroup,
} from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
import { DEFAULT } from "@/constants";

const SceneCardDataSection: React.FC<SettingsTabProps> = (props) => {
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

  const DateBreakpoint = () => (
    <NumberSetting
      heading="Date"
      id="valkyr-ui-cards__sceneCard__dateBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__dateBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__dateBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.DATE_BREAKPOINT
      }
    />
  );

  const DetailsBreakpoint = () => (
    <NumberSetting
      heading="Details"
      id="valkyr-ui-cards__sceneCard__detailsBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__detailsBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__detailsBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.DETAILS_BREAKPOINT
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

  const DurationBreakpoint = () => (
    <NumberSetting
      heading="Duration"
      id="valkyr-ui-cards__sceneCard__durationBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__durationBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__durationBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.DURATION_BREAKPOINT
      }
    />
  );

  const OCountBreakpoint = () => (
    <NumberSetting
      heading="O count"
      id="valkyr-ui-cards__sceneCard__oCountBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__oCountBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__oCountBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.O_COUNT_BREAKPOINT
      }
    />
  );

  const OrganizedBreakpoint = () => (
    <NumberSetting
      heading="Organized icon"
      id="valkyr-ui-cards__sceneCard__organizedBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__organizedBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__organizedBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.ORGANIZED_BREAKPOINT
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

  const RatingBannerBreakpoint = () => (
    <NumberSetting
      heading="Rating banner"
      id="valkyr-ui-cards__sceneCard__ratingBannerBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__ratingBannerBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__ratingBannerBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.RATING_BANNER_BREAKPOINT
      }
    />
  );

  const RatingIconBreakpoint = () => (
    <NumberSetting
      heading="Rating icon"
      id="valkyr-ui-cards__sceneCard__ratingIconBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__ratingIconBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__ratingIconBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.RATING_ICON_BREAKPOINT
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

  const ResolutionBreakpoint = () => (
    <NumberSetting
      heading="Resolution"
      id="valkyr-ui-cards__sceneCard__resolutionBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__resolutionBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__resolutionBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.RESOLUTION_BREAKPOINT
      }
    />
  );

  const StudioBreakpoint = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__sceneCard__studioBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__studioBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__sceneCard__studioBreakpoint ??
        DEFAULT.CARDS.SCENE_CARD.STUDIO_BREAKPOINT
      }
    />
  );

  return (
    <SettingSection id="scene-data" heading="Scene card data">
      <SettingGroup
        collapsible
        settingProps={{
          heading: "Card zoom data breakpoints",
          subHeading:
            "For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely.",
        }}
      >
        <DateBreakpoint />
        <DetailsBreakpoint />
        <DurationBreakpoint />
        <OCountBreakpoint />
        <OrganizedBreakpoint />
        <RatingBannerBreakpoint />
        <RatingIconBreakpoint />
        <ResolutionBreakpoint />
        <StudioBreakpoint />
      </SettingGroup>
      <SettingGroup collapsible settingProps={{ heading: "Other" }}>
        <DetailsMaxLines />
        <BlurredThumbnailBackgroundEnabled />
        <PreviewsEnabled />
        <ResolutionAsIcon />
      </SettingGroup>
    </SettingSection>
  );
};

export default SceneCardDataSection;
