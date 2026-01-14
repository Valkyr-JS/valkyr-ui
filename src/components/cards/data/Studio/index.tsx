import React from "react";
import { CLASSNAME } from "@/constants";
import { getRenderData } from "@/helpers";

interface DataComponentProps {
  /** The current breakpoint in the browser. */
  currentBreakpoint?: StashCardGridZoom;

  /** The user-set breakpoint at which to render the component. */
  userBreakpoint?: StashCardGridZoom;
}

interface StudioProps extends DataComponentProps {
  /** The studio data. */
  studio:
    | Maybe<{
        id: Studio["id"];
        name: Studio["name"];
      }>
    | undefined;
}

const Studio = (props: StudioProps) => {
  const zoomBreakpoint =
    props.currentBreakpoint !== undefined && props.userBreakpoint !== undefined
      ? {
          current: props.currentBreakpoint,
          user: props.userBreakpoint,
        }
      : undefined;

  const data = getRenderData({
    data: props.studio,
    zoomBreakpoint,
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
