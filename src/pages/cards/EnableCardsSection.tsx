import React, { useState } from "react";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const EnableCardsSection: React.FC<SettingsTabProps> = (props) => {
  const GalleryCardsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__galleryCard__enabled ??
        DEFAULT.CARDS.GALLERY_CARD.ENABLED
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable gallery cards"
        id="valkyr-ui-cards__galleryCard__enabled"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__galleryCard__enabled: newState,
          });
        }}
      />
    );
  };

  const SceneCardsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__sceneCard__enabled ??
        DEFAULT.CARDS.SCENE_CARD.ENABLED
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable scene cards"
        id="valkyr-ui-cards__sceneCard__enabled"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__sceneCard__enabled: newState,
          });
        }}
      />
    );
  };

  const CardGridsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__cardGrid__enabled ??
        DEFAULT.CARDS.SCENE_CARD.ENABLED
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable card grids"
        id="valkyr-ui-cards__cardGrid__enabled"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__cardGrid__enabled: newState,
          });
        }}
        subHeading="Enables a smoother card grid component for enabled Valkyr UI card types. Closely resembles the native Stash card grids."
      />
    );
  };

  return (
    <SettingSection id="cards-enable" heading="Enable cards">
      <GalleryCardsEnabled />
      <SceneCardsEnabled />
      <CardGridsEnabled />
    </SettingSection>
  );
};

export default EnableCardsSection;
