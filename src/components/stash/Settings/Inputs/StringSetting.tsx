import React from "react";
import Setting from "./Setting";
import { Form } from "react-bootstrap";

interface StringSettingProps extends ISetting {
  onBlur?: () => void;
  onChange: (v: string) => void;
  placeholder?: string;
  value: string | undefined;
}
// This is a custom build component based on the NumberSetting component, rather
// than directly copied from a Stash component.
const StringSetting: React.FC<StringSettingProps> = (props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    props.onChange(e.target.value);

  return (
    <Setting {...props}>
      <Form.Control
        className="text-input"
        id={props.id}
        onBlur={props.onBlur}
        onChange={handleChange}
        placeholder={props.placeholder}
        type="text"
        value={props.value}
      />
    </Setting>
  );
};

export default StringSetting;
