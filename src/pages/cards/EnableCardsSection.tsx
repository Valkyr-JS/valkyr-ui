import React from "react";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const EnableCardsSection: React.FC<SettingsTabProps> = (props) => {
  const GalleryCardsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__galleryCards__enabled ??
        DEFAULT.CARDS.GALLERY_CARD.ENABLED
      }
      heading="Enable gallery cards"
      id="valkyr-ui-cards__galleryCards__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__galleryCards__enabled:
            !props.pluginConfig.cards__galleryCards__enabled,
        })
      }
    />
  );

  const SceneCardsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__sceneCards__enabled ??
        DEFAULT.CARDS.SCENE_CARD.ENABLED
      }
      heading="Enable scene cards"
      id="valkyr-ui-cards__sceneCards__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__sceneCards__enabled:
            !props.pluginConfig.cards__sceneCards__enabled,
        })
      }
    />
  );

  const CardGridsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__cardGrids__enabled ??
        DEFAULT.CARDS.CARD_GRID.ENABLED
      }
      heading="Enable card grids"
      id="valkyr-ui-cards__cardGrids__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__cardGrids__enabled:
            !props.pluginConfig.cards__cardGrids__enabled,
        })
      }
      subHeading="Enables a smoother card grid component for enabled Valkyr UI card types. Closely resembles the native Stash card grids."
    />
  );

  return (
    <SettingSection id="cards-enable" heading="Enable cards">
      <GalleryCardsEnabled />
      <SceneCardsEnabled />
      <CardGridsEnabled />
    </SettingSection>
  );
};

export default EnableCardsSection;
