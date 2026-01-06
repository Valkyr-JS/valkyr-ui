import React from "react";
import { Form } from "react-bootstrap";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

interface CardsTabProps {
  configUpdateHandler: (updatedConfig: ValkyrUiConfigMap) => void;
  pluginConfig: ValkyrUiConfigMap;
}

const CardsTab: React.FC<CardsTabProps> = (props) => {
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

  return (
    <Form.Group>
      <SettingSection id="cards-enable" heading="Enable cards">
        <SceneCardsEnabled />
      </SettingSection>
    </Form.Group>
  );
};

export default CardsTab;
