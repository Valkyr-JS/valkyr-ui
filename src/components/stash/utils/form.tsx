import { useStopWheelScroll } from "@/hooks";
import React, { InputHTMLAttributes, useRef } from "react";
import { FormControlProps } from "react-bootstrap";
import { Form } from "react-bootstrap";

/**
 * NumberField is a wrapper around Form.Control that prevents wheel events from
 * scrolling the window.
 *
 * https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/form.tsx#L74
 */
export const NumberField: React.FC<
  InputHTMLAttributes<HTMLInputElement> & FormControlProps
> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useStopWheelScroll(inputRef);

  return <Form.Control {...props} type="number" ref={inputRef} />;
};
