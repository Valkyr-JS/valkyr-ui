import React from "react";
import { Form, Table } from "react-bootstrap";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

interface CardsTabProps {
  configUpdateHandler: (updatedConfig: ValkyrUiConfigMap) => void;
  pluginConfig: ValkyrUiConfigMap;
}

const CardsTab: React.FC<CardsTabProps> = (props) => {
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
    <Form.Group>
      <SettingSection id="cards-enable" heading="Enable cards">
        <GalleryCardsEnabled />
        <SceneCardsEnabled />
        <CardGridsEnabled />
      </SettingSection>
      <SettingSection
        id="shared-data"
        heading="Shared card data"
        subHeading="For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely."
      >
        <Table striped>
          <thead>
            <tr>
              <th>Data</th>
              <th>Card zoom</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Studio</th>
              <td>
                <input type="number" min={-1} max={3} value={0} />
              </td>
            </tr>
          </tbody>
        </Table>
      </SettingSection>
    </Form.Group>
  );
};

export default CardsTab;
