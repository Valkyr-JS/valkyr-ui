import React, { PropsWithChildren } from "react";
import "./TopLine.scss";

const TopLine: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-top-line";
  return <div className={componentClass}>{props.children}</div>;
};

export default TopLine;
