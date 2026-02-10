import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface BitRateProps {
  /** The file bit rate in bits. */
  bits: VideoFile["bit_rate"];
}

const BitRate: React.FC<
  DataComponentProps<BitRateProps> | DataComponentModalProps<BitRateProps>
> = (props) => {
  const intl = useIntl();
  const data =
    props.context === "modal"
      ? props.bits
      : getRenderData({
          data: props.bits,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__bit-rate";

  // Round to two decimal places
  const mbps = Math.round(data / 10000) / 100;

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "bitrate" })}: {mbps} megabits per second
      </span>
      <span aria-hidden>{mbps} mbps</span>
    </span>
  );
};

export default BitRate;
