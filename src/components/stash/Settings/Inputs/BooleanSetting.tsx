import React from "react";
import { Form } from "react-bootstrap";
import Setting from "./Setting";

interface IBooleanSetting extends ISetting {
  checked?: boolean;
  id: string;
  onChange: (v: boolean) => void;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Settings/Inputs.tsx#L155 */
const BooleanSetting: React.FC<IBooleanSetting> = (props) => {
  const { id, disabled, checked, onChange, ...settingProps } = props;

  return (
    <Setting {...settingProps} disabled={disabled}>
      <Form.Switch
        id={id}
        label={<span className="sr-only">{props.heading}</span>}
        disabled={disabled}
        checked={checked ?? false}
        onChange={() => onChange(!checked)}
      />
    </Setting>
  );
};

export default BooleanSetting;
