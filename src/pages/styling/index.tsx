import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { SettingGroup } from "@/components/stash/Settings/Inputs";
import { StringSetting } from "@/components/stash/Settings/Inputs/StringSetting";

const StylingTab: React.FC<SettingsTabProps> = (props) => {
  const componentClassname = "vui-form-group";
  const [vars, setVars] = useState<{
    css__bodyColor?: string;
    css__titleColor?: string;
    css__cardBgColor?: string;
  }>({});

  /**
   * TODO - Buttons to save and clear
   */

  return (
    <Form.Group className={componentClassname}>
      <SettingSection id="cssVariables" heading="CSS variables">
        <SettingGroup collapsible settingProps={{ heading: "General" }}>
          <CssSetting
            configProp="css__bodyColor"
            heading="body-color"
            onChange={(v) => setVars({ ...vars, css__bodyColor: v })}
            placeholder="#f5f8fa"
            value={vars.css__bodyColor}
          />
          <CssSetting
            configProp="css__titleColor"
            heading="title-color"
            onChange={(v) => setVars({ ...vars, css__titleColor: v })}
            placeholder="var(--valkyr-ui-body-color)"
            value={vars.css__titleColor}
          />
        </SettingGroup>
        <SettingGroup collapsible settingProps={{ heading: "Cards" }}>
          <CssSetting
            configProp="css__cardBgColor"
            heading="card-bg-color"
            onChange={(v) => setVars({ ...vars, css__cardBgColor: v })}
            placeholder="#30404d"
            value={vars.css__cardBgColor}
          />
        </SettingGroup>
      </SettingSection>
    </Form.Group>
  );
};

export default StylingTab;

interface CssSettingProps {
  configProp: string;
  heading: string;
  onChange: (v: string) => void;
  placeholder: string;
  value?: string;
}

const CssSetting: React.FC<CssSettingProps> = (props) => {
  return (
    <StringSetting
      heading={`--valkyr-ui-${props.heading}`}
      id={props.configProp}
      onChange={props.onChange}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};
