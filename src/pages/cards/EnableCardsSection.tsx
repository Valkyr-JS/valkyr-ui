import React from "react";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

const EnableCardsSection: React.FC<SettingsTabProps> = (props) => {
  const GalleryCardsEnabled = () => (
    <BooleanSetting
      checked={props.pluginConfig.cards__galleryCards__enabled ?? false}
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
      checked={props.pluginConfig.cards__sceneCards__enabled ?? false}
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
      checked={props.pluginConfig.cards__cardGrids__enabled ?? false}
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
