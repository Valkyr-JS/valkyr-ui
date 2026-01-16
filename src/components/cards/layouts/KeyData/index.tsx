import React, { PropsWithChildren } from "react";
import "./KeyData.scss";

const KeyData: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-key-data";
  return <div className={componentClass}>{props.children}</div>;
};

export default KeyData;
