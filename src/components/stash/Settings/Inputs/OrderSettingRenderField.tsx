import React from "react";

interface OrderSettingRenderFieldProps {
  options: Array<string>;
  setOrder: React.Dispatch<React.SetStateAction<Array<string>>>;
  order: Array<string>;
}

const OrderSettingRenderField: React.FC<OrderSettingRenderFieldProps> = (
  props,
) => {
  // TODO - MANAGE STATE HERE

  const handleUp = (pos: number) => {
    // Remove the option from its existing position
    const newValue = props.order.filter((_v, i) => i !== pos);
    console.log(newValue);

    // Add it to the new position
    newValue.splice(pos - 1, 0);

    // Update the state
    props.setOrder(newValue);
  };

  const handleToggleEnable = (enable: boolean, pos: number) => {
    let newValue = props.order;
    // If enabling, add the option to the end of the list
    if (enable) newValue.push(props.options[pos]);
    else newValue = newValue.filter((_o, i) => i !== pos);

    // Update the state
    props.setOrder(newValue);
  };

  // Sort the options by the current order. Any not included in the order should
  // be added last and set as disabled.
  const orderedOptions: { disabled: boolean; label: string }[] = [];
  props.order.forEach((o) =>
    orderedOptions.push({ disabled: false, label: o }),
  );
  props.options.forEach((opt) => {
    if (orderedOptions.findIndex((o) => o.label === opt) === -1)
      orderedOptions.push({ disabled: true, label: opt });
  });

  return (
    <div>
      <ul>
        {orderedOptions.map((opt, i) => (
          <li key={i}>
            <button
              disabled={i === 0 || opt.disabled}
              type="button"
              onClick={() => handleUp(i)}
            >
              Up
            </button>
            <button
              disabled={i === orderedOptions.length - 1 || opt.disabled}
              type="button"
            >
              Down
            </button>
            <button
              type="button"
              onClick={() => handleToggleEnable(!opt.disabled, i)}
            >
              {opt.disabled ? "Enable" : "Disable"}
            </button>
            <span>{opt.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSettingRenderField;
