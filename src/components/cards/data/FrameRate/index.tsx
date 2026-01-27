import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface FrameRateProps {
  /** The file frame rate. */
  rate: VideoFile["frame_rate"];
}

const FrameRate: React.FC<
  DataComponentProps<FrameRateProps> | DataComponentModalProps<FrameRateProps>
> = (props) => {
  const intl = useIntl();
  const data =
    props.context === "modal"
      ? props.rate
      : getRenderData({
          data: props.rate,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__frame-rate";

  // Round to two decimal places - probably unnecessary, but why not.
  const rate = Math.round(data * 100) / 100;

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "framerate" })}: {rate} frames per second
      </span>
      <span aria-hidden>
        {intl.formatMessage({ id: "frames_per_second" }, { value: rate })}
      </span>
    </span>
  );
};

export default FrameRate;
