import React from "react";
import { Form } from "react-bootstrap";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
import { CLASSNAME } from "@/constants";
import EnableCardsSection from "./EnableCardsSection";
import SharedCardDataSection from "./SharedCardDataSection";

const CardsTab: React.FC<SettingsTabProps> = (props) => {
  const StudioBreakpoint = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__generalData__studio"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__generalData__studio: v,
          });
        }
      }}
      value={props.pluginConfig.cards__generalData__studio ?? 0}
    />
  );

  const classes = CLASSNAME.NAMESPACE + "__form-group";

  return (
    <Form.Group className={classes}>
      <EnableCardsSection {...props} />
      <SharedCardDataSection {...props} />
    </Form.Group>
  );
};

export default CardsTab;
