import React from "react";
import { Form } from "react-bootstrap";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

const CardsTab: React.FC = () => {
  return (
    <Form.Group>
      <SettingSection id="cards-enable" heading="Enable cards">
        Hello
      </SettingSection>
    </Form.Group>
  );
};

export default CardsTab;
