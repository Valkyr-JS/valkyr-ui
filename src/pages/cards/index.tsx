import React from "react";
import { Form } from "react-bootstrap";
import EnableCardsSection from "./EnableCardsSection";
import GalleryCardDataSection from "./GalleryCardDataSection";

const CardsTab: React.FC<SettingsTabProps> = (props) => {
  const componentClassname = "vui-form-group";

  return (
    <Form.Group className={componentClassname}>
      <EnableCardsSection {...props} />
      <GalleryCardDataSection {...props} />
    </Form.Group>
  );
};

export default CardsTab;
