import React from "react";

interface OrderSettingRenderValueProps {
  value?: Array<string>;
}

const OrderSettingRenderValue: React.FC<OrderSettingRenderValueProps> = (
  props,
) => {
  if (!props.value) return null;

  return (
    <ol>
      {props.value.map((v, i) => (
        <li key={i}>{v.toLocaleLowerCase()}</li>
      ))}
    </ol>
  );
};

export default OrderSettingRenderValue;
