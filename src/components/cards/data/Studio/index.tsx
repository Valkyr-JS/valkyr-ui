import React from "react";
import { CLASSNAME } from "@/constants";
import { getRenderData } from "@/helpers";

interface StudioProps extends DataComponentProps {
  /** The studio data. */
  studio:
    | Maybe<{
        id: Studio["id"];
        name: Studio["name"];
      }>
    | undefined;
}

const Studio: React.FC<StudioProps> = (props) => {
  const data = getRenderData({
    data: props.studio,
    zoomBreakpoint: {
      current: props.currentBreakpoint,
      user: props.userBreakpoint,
    },
  });

  if (!data) return null;

  const link = `/studios/${data.id}`;
  return (
    <span className={`${CLASSNAME.NAMESPACE}__card-data-studio`}>
      <a href={link}>{data.name}</a>
    </span>
  );
};

export default Studio;
