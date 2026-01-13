import React from "react";
import { CLASSNAME } from "@/constants";

interface StudioProps {
  /** The current breakpoint in the browser. */
  currentBreakpoint: StashCardGridZoom;
  /** The studio data. */
  studio:
    | Maybe<{
        id: Studio["id"];
        name: Studio["name"];
      }>
    | undefined;
}

const Studio = (props: StudioProps) => {
  if (!props.studio) return null;

  const link = `/studios/${props.studio.id}`;
  return (
    <span className={`${CLASSNAME.NAMESPACE}__card-data-studio`}>
      <a href={link}>{props.studio.name}</a>
    </span>
  );
};

export default Studio;
