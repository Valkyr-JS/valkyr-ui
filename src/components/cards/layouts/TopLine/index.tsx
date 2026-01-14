import React, { PropsWithChildren } from "react";
import { CLASSNAME } from "@/constants";
import "./TopLine.scss";

const TopLine: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = CLASSNAME.NAMESPACE + "__card-top-line";
  return <div className={componentClass}>{props.children}</div>;
};

export default TopLine;
