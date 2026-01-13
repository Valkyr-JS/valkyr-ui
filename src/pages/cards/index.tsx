import React from "react";
import { Form } from "react-bootstrap";
import { CLASSNAME } from "@/constants";
import EnableCardsSection from "./EnableCardsSection";
import SharedCardDataSection from "./SharedCardDataSection";

const CardsTab: React.FC<SettingsTabProps> = (props) => {
  const classes = CLASSNAME.NAMESPACE + "__form-group";

  return (
    <Form.Group className={classes}>
      <EnableCardsSection {...props} />
      <SharedCardDataSection {...props} />
    </Form.Group>
  );
};

export default CardsTab;
