import React from "react";
import { DEFAULT } from "@/constants";
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
    context: props.context,
    data: props.studio,
    zoomBreakpoint: {
      current: props.currentBreakpoint,
      user: props.userBreakpoint ?? DEFAULT.CARDS.DATA.STUDIO_BREAKPOINT,
    },
  });

  if (!data) return null;

  const componentClass = "vui-card-data__studio";
  const link = `/studios/${data.id}`;

  return (
    <span className={componentClass}>
      <a href={link}>{data.name}</a>
    </span>
  );
};

export default Studio;
