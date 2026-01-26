import React, { PropsWithChildren } from "react";
import "./CastCrew.scss";

const CastCrew: React.FC<PropsWithChildren> = (props) => {
  if (!props.children) return null;

  const componentClass = "vui-card-cast-and-crew";
  return <div className={componentClass}>{props.children}</div>;
};

export default CastCrew;
