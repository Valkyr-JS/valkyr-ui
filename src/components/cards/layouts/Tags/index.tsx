import React, { PropsWithChildren } from "react";
import "./Tags.scss";

const Tags: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-tags";
  return <div className={componentClass}>{props.children}</div>;
};

export default Tags;
