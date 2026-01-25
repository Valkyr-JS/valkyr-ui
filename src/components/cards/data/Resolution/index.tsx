import React from "react";
import { useIntl } from "react-intl";
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
  const intl = useIntl();

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
  const resolutionValue = TextUtils.resolution(data[0], data[1]);

  if (props.asIcon) {
    const shortEdge =
      props.resolution[0] > props.resolution[1]
        ? props.resolution[1]
        : props.resolution[0];

    const iconClass = "vui-card-data__resolution-icon";

    const resolutionIconValue =
      shortEdge < 720
        ? "SD"
        : shortEdge < 1440
          ? "HD"
          : shortEdge < 1920
            ? "2K"
            : shortEdge < 2560
              ? "4K"
              : shortEdge < 3000
                ? "5K"
                : shortEdge < 3548
                  ? "6K"
                  : shortEdge < 3850
                    ? "7K"
                    : shortEdge < 6144
                      ? "8K"
                      : "XL";

    return (
      <span className={iconClass}>
        <span className="sr-only">
          {intl.formatMessage({ id: "resolution" })}: {resolutionIconValue}
        </span>
        <span aria-hidden title={resolutionValue}>
          {resolutionIconValue}
        </span>
      </span>
    );
  }

  const componentClass = "vui-card-data__resolution";

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "resolution" })}: {resolutionValue}
      </span>
      <span aria-hidden>{resolutionValue}</span>
    </span>
  );
};

export default Resolution;
