import React from "react";
import { Form } from "react-bootstrap";
import { SettingSection } from "@/components/stash/Settings/SettingSection";

const StylingTab: React.FC<SettingsTabProps> = (props) => {
  const componentClassname = "vui-form-group";

  return (
    <Form.Group className={componentClassname}>
      <SettingSection id="general" heading="Styling settings"></SettingSection>
    </Form.Group>
  );
};

export default StylingTab;
