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
    let iconText = "";
    let srIconText = intl.formatMessage({ id: "resolution" }) + ": ";

    switch (true) {
      case shortEdge < 720:
        iconText = "SD";
        srIconText += "Standard definition";
        break;
      case shortEdge < 1440:
        iconText = "HD";
        srIconText += "High definition";
        break;
      case shortEdge < 2160:
        iconText = "2K";
        srIconText += "2K";
        break;
      case shortEdge < 2880:
        iconText = "4K";
        srIconText += "4K";
        break;
      case shortEdge < 3384:
        iconText = "5K";
        srIconText += "5K";
        break;
      case shortEdge < 3500:
        iconText = "6K";
        srIconText += "6K";
        break;
      case shortEdge < 4320:
        iconText = "7K";
        srIconText += "7K";
        break;
      case shortEdge < 6144:
        iconText = "8K";
        srIconText += "8K";
        break;
      default:
        iconText = "XL";
        srIconText += "Extra large";
        break;
    }

    return (
      <span className={iconClass}>
        <span className="sr-only">{srIconText}</span>
        <span aria-hidden title={resolutionValue}>
          {iconText}
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
