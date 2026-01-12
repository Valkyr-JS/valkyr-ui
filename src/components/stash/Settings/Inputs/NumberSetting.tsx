import React from "react";
import Setting from "./Setting";
import { NumberField } from "../../utils/form";

interface INumberSetting extends ISetting {
  value: number | undefined;
  onChange: (v: number) => void;
}

export const NumberSetting: React.FC<INumberSetting> = ({
  onChange,
  value,
  ...props
}) => {
  return (
    <Setting {...props}>
      <NumberField
        className="text-input"
        value={value ?? 0}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(Number.parseInt(e.currentTarget.value || "0", 10))
        }
      />
    </Setting>
  );
};
