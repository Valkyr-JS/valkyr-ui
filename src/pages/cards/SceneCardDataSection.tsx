import React from "react";
import { SettingGroup } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
import { DEFAULT } from "@/constants";

const SceneCardDataSection: React.FC<SettingsTabProps> = (props) => {
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
        <StudioBreakpoint />
      </SettingGroup>
    </SettingSection>
  );
};

export default SceneCardDataSection;
