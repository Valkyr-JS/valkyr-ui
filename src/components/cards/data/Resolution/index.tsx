import React from "react";
import TextUtils from "@/components/stash/utils/text";
import { getRenderData } from "@/helpers";

interface ResolutionProps {
  /** The scene file width and height in an array. */
  resolution: [VideoFile["width"], VideoFile["height"]];
}

const Resolution: React.FC<
  DataComponentProps<ResolutionProps> | DataComponentModalProps<ResolutionProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.resolution
      : getRenderData({
          data: props.resolution,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__resolution";
  const resolutionValue = TextUtils.resolution(data[0], data[1]);

  return (
    <span className={componentClass}>
      <span className="sr-only">Resolution: </span>
      <span>{resolutionValue}</span>
    </span>
  );
};

export default Resolution;
