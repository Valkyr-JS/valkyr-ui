import React from "react";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const EnableCardsSection: React.FC<SettingsTabProps> = (props) => {
  const GalleryCardsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__galleryCard__enabled ??
        DEFAULT.CARDS.GALLERY_CARD.ENABLED
      }
      heading="Enable gallery cards"
      id="valkyr-ui-cards__galleryCard__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__galleryCard__enabled:
            !props.pluginConfig.cards__galleryCard__enabled,
        })
      }
    />
  );

  const SceneCardsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__sceneCard__enabled ??
        DEFAULT.CARDS.SCENE_CARD.ENABLED
      }
      heading="Enable scene cards"
      id="valkyr-ui-cards__sceneCard__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__sceneCard__enabled:
            !props.pluginConfig.cards__sceneCard__enabled,
        })
      }
    />
  );

  const CardGridsEnabled = () => (
    <BooleanSetting
      checked={
        props.pluginConfig.cards__cardGrid__enabled ??
        DEFAULT.CARDS.CARD_GRID.ENABLED
      }
      heading="Enable card grids"
      id="valkyr-ui-cards__cardGrid__enabled"
      onChange={() =>
        props.configUpdateHandler({
          ...props.pluginConfig,
          cards__cardGrid__enabled:
            !props.pluginConfig.cards__cardGrid__enabled,
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
