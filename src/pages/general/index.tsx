import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const GeneralTab: React.FC<SettingsTabProps> = (props) => {
  const componentClassname = "vui-form-group";

  const AccessiblePalette = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.general__accessibleColorPalette ??
        DEFAULT.GENERAL.ACCESSIBLE_COLOR_PALETTE,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable accessible color palette"
        subHeading="Applies a custom color palette to improve accessibility for colorblind users. This applies only to Valkyr UI modules, not to Stash as a whole."
        id="valkyr-ui-general__accessibleColorPalette"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            general__accessibleColorPalette: newState,
          });
        }}
      />
    );
  };

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

  const FullHeightModals = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.general__fullHeightModals ??
        DEFAULT.GENERAL.FULL_HEIGHT_MODALS,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Full height modals"
        subHeading="Modals will always be rendered at the full height of the browser window."
        id="valkyr-ui-general__fullHeightModals"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            general__fullHeightModals: newState,
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
        <AccessiblePalette />
        <CloseModalOnOuterClick />
        <FullHeightModals />
        <LocaleDateFormatting />
      </SettingSection>
    </Form.Group>
  );
};

export default GeneralTab;
