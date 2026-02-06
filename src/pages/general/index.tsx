import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const GeneralTab: React.FC<SettingsTabProps> = (props) => {
  const componentClassname = "vui-form-group";

  const CloseModalOnOuterClick = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.general__closeModalOnOuterClick ??
        DEFAULT.GENERAL.CLOSE_MODAL_ON_OUTER_CLICK,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Close modals on outer click"
        subHeading="Modals will close when clicking outside of them, instead of needing to click the 'Close' button."
        id="valkyr-ui-general__closeModalOnOuterClick"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            general__closeModalOnOuterClick: newState,
          });
        }}
      />
    );
  };

  const LocaleDateFormatting = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.general__localeDateFormat ??
        DEFAULT.GENERAL.LOCALE_DATE_FORMAT,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Locale date formatting"
        subHeading="Format dates based on your Stash language setting. Only affects Valkyr UI components."
        id="valkyr-ui-general__localeDateFormat"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            general__localeDateFormat: newState,
          });
        }}
      />
    );
  };

  return (
    <Form.Group className={componentClassname}>
      <SettingSection id="general" heading="General settings">
        <CloseModalOnOuterClick />
        <LocaleDateFormatting />
      </SettingSection>
    </Form.Group>
  );
};

export default GeneralTab;
