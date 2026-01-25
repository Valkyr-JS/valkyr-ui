import React from "react";
import { getGCD, getRenderData } from "@/helpers";

interface AspectRatioProps {
  /** The scene file width and height in an array. */
  resolution: [VideoFile["width"], VideoFile["height"]];
}

const AspectRatio: React.FC<
  | DataComponentProps<AspectRatioProps>
  | DataComponentModalProps<AspectRatioProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.resolution
      : getRenderData({
          data: props.resolution,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data || props.resolution.includes(0)) return null;

  const gcd = getGCD(props.resolution[0], props.resolution[1]);
  const wide = props.resolution[0] / gcd;
  const high = props.resolution[1] / gcd;

  const componentClass = "vui-card-data__aspect-ratio";

  return (
    <span className={componentClass}>
      <span className="sr-only">
        Aspect Ratio: {wide} by {high}
      </span>
      <span aria-hidden>{wide + ":" + high}</span>
    </span>
  );
};

export default AspectRatio;
