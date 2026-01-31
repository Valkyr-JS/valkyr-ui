import React, { useState } from "react";

interface OrderSettingRenderFieldProps {
  allOptions: Array<string>;
  setValue: React.Dispatch<React.SetStateAction<Array<string>>>;
  value: Array<string>;
}

const OrderSettingRenderField: React.FC<OrderSettingRenderFieldProps> = (
  props,
) => {
  // Create the enabled/disabled data based on which options are featured in the
  // value array.
  const options = props.allOptions.map((opt) => ({
    label: opt,
    disabled: !props.value.includes(opt),
  }));

  const [order, setOrder] = useState(options);

  const handleMoveDown = (orIndex: number) => {
    // Swap the clicked option with the option after it.
    const updatedOrder = order.map((or, i) => {
      if (i === orIndex + 1) return order[orIndex];
      if (i === orIndex) return order[orIndex + 1];
      return or;
    });

    setOrder(updatedOrder);
    props.setValue(updatedOrder.map((or) => or.label));
  };

  const handleMoveUp = (orIndex: number) => {
    // Swap the clicked option with the option before it.
    const updatedOrder = order.map((or, i) => {
      if (i === orIndex - 1) return order[orIndex];
      if (i === orIndex) return order[orIndex - 1];
      return or;
    });

    setOrder(updatedOrder);
    props.setValue(updatedOrder.map((or) => or.label));
  };

  return (
    <div>
      <ul>
        {order.map((or, i) => (
          <li key={i}>
            <button
              disabled={i === 0}
              onClick={() => handleMoveUp(i)}
              type="button"
            >
              Up
            </button>
            <button
              disabled={i === options.length - 1}
              onClick={() => handleMoveDown(i)}
              type="button"
            >
              Down
            </button>
            <button type="button">{or.disabled ? "Enable" : "Disable"}</button>
            <span>{or.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSettingRenderField;
