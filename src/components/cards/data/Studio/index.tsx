import React from "react";
import { getRenderData } from "@/helpers";

interface StudioProps {
  /** The studio data. */
  studio:
    | Maybe<{
        id: Studio["id"];
        name: Studio["name"];
      }>
    | undefined;
}

const Studio: React.FC<
  DataComponentProps<StudioProps> | DataComponentModalProps<StudioProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.studio
      : getRenderData({
          data: props.studio,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
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
