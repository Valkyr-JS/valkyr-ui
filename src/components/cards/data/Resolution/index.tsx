import React from "react";
import TextUtils from "@/components/stash/utils/text";
import { getRenderData } from "@/helpers";
import "./Resolution.scss";

interface ResolutionProps {
  /** Displays the resolution as an icon instead of as text. */
  asIcon: boolean;

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

  if (props.asIcon) {
    const longEdge =
      props.resolution[0] > props.resolution[1]
        ? props.resolution[1]
        : props.resolution[0];

    const iconClass = "vui-card-data__resolution-icon";

    const resolutionIconValue =
      longEdge < 720
        ? "SD"
        : longEdge < 1440
          ? "HD"
          : longEdge < 1920
            ? "2K"
            : longEdge < 2560
              ? "4K"
              : longEdge < 3000
                ? "5K"
                : longEdge < 3548
                  ? "6K"
                  : longEdge < 3850
                    ? "7K"
                    : longEdge < 6144
                      ? "8K"
                      : "XL";

    return (
      <span className={iconClass}>
        <span className="sr-only">Resolution: </span>
        <span>{resolutionIconValue}</span>
      </span>
    );
  }

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

const resolution = (width: number, height: number) => {
  const number = width > height ? height : width;
  if (number >= 6144) {
    return "HUGE";
  }
  if (number >= 3840) {
    return "8K";
  }
  if (number >= 3584) {
    return "7K";
  }
  if (number >= 3000) {
    return "6K";
  }
  if (number >= 2560) {
    return "5K";
  }
  if (number >= 1920) {
    return "4K";
  }
  if (number >= 1440) {
    return "1440p";
  }
  if (number >= 1080) {
    return "1080p";
  }
  if (number >= 720) {
    return "720p";
  }
  if (number >= 540) {
    return "540p";
  }
  if (number >= 480) {
    return "480p";
  }
  if (number >= 360) {
    return "360p";
  }
  if (number >= 240) {
    return "240p";
  }
  if (number >= 144) {
    return "144p";
  }
};
