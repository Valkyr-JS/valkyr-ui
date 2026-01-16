import React, { PropsWithChildren } from "react";
import "./ReleaseData.scss";

const ReleaseData: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-release-data";
  return <div className={componentClass}>{props.children}</div>;
};

export default ReleaseData;
