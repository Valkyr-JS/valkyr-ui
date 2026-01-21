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
  const DateBreakpoint = () => (
    <NumberSetting
      heading="Date"
      id="valkyr-ui-cards__galleryCard__dateBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__dateBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__dateBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.DATE_BREAKPOINT
      }
    />
  );

  const DetailsBreakpoint = () => (
    <NumberSetting
      heading="Details"
      id="valkyr-ui-cards__galleryCard__detailsBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__detailsBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__detailsBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.DETAILS_BREAKPOINT
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

  const OrganizedBreakpoint = () => (
    <NumberSetting
      heading="Organized icon"
      id="valkyr-ui-cards__galleryCard__organizedBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__organizedBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__organizedBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.ORGANIZED_BREAKPOINT
      }
    />
  );

  const RatingBannerBreakpoint = () => (
    <NumberSetting
      heading="Rating banner"
      id="valkyr-ui-cards__galleryCard__ratingBannerBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__ratingBannerBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__ratingBannerBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_BREAKPOINT
      }
    />
  );

  const RatingIconBreakpoint = () => (
    <NumberSetting
      heading="Rating icon"
      id="valkyr-ui-cards__galleryCard__ratingIconBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__ratingIconBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__ratingIconBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.RATING_ICON_BREAKPOINT
      }
    />
  );

  const StudioBreakpoint = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__galleryCard__studioBreakpoint"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__studioBreakpoint: v,
          });
        }
      }}
      value={
        props.pluginConfig.cards__galleryCard__studioBreakpoint ??
        DEFAULT.CARDS.GALLERY_CARD.STUDIO_BREAKPOINT
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
        id="valkyr-ui-cards__galleryCard__thumbnailBackgroundImage"
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
          heading: "Card zoom data breakpoints",
          subHeading:
            "For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely.",
        }}
      >
        <DateBreakpoint />
        <DetailsBreakpoint />
        <OrganizedBreakpoint />
        <RatingBannerBreakpoint />
        <RatingIconBreakpoint />
        <StudioBreakpoint />
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
