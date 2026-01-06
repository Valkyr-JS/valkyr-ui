import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

interface CardSettings {
  sceneCardsEnabled?: boolean;
}

interface CardsTabProps {
  configUpdateHandler: (updatedSettings: CardSettings) => void;
  cardSettings: CardSettings;
}

const CardsTab: React.FC<CardsTabProps> = (props) => {
  const [cardSettings, setCardSettings] = useState(props.cardSettings);

  return (
    <Form.Group>
      <SettingSection id="cards-enable" heading="Enable cards">
        <BooleanSetting
          checked={cardSettings.sceneCardsEnabled ?? false}
          heading="Enable scene cards"
          id="vui-scene-cards-enabled"
          onChange={() =>
            setCardSettings({
              ...cardSettings,
              sceneCardsEnabled: !cardSettings.sceneCardsEnabled,
            })
          }
        />
      </SettingSection>
    </Form.Group>
  );
};

export default CardsTab;
