import React, { useState } from "react";
import { faUp } from "@fortawesome/pro-solid-svg-icons/faUp";
import { faDown } from "@fortawesome/pro-solid-svg-icons/faDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/pro-solid-svg-icons";

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

  const handleToggleDisable = (orIndex: number) => {
    const updatedOrder = order.map((or, i) => {
      if (i === orIndex) return { ...or, disabled: !or.disabled };
      return or;
    });
    setOrder(updatedOrder);
  };

  return (
    <div>
      <ul>
        {order.map((or, i) => (
          <li key={i}>
            <button
              className="btn minimal"
              disabled={i === 0}
              onClick={() => handleMoveUp(i)}
              type="button"
            >
              <FontAwesomeIcon icon={faUp} />
              <span className="sr-only">Move up</span>
            </button>
            <button
              className="btn minimal"
              disabled={i === options.length - 1}
              onClick={() => handleMoveDown(i)}
              type="button"
            >
              <FontAwesomeIcon icon={faDown} />
              <span className="sr-only">Move down</span>
            </button>
            <button
              className="btn minimal"
              onClick={() => handleToggleDisable(i)}
              type="button"
            >
              <FontAwesomeIcon icon={or.disabled ? faXmark : faCheck} />
              <span className="sr-only">
                {or.disabled ? "Enable" : "Disable"}
              </span>
            </button>
            <span>{or.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSettingRenderField;
