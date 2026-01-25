import React from "react";
import { useIntl } from "react-intl";
import TextUtils from "@/components/stash/utils/text";
import { getRenderData, padTimestamps } from "@/helpers";

interface DurationProps {
  /** The scene duration data. */
  duration: Scalars["Float"]["output"];

  /** Adds padding to timestamps to make all units double-figures and include
   * hours. */
  timestampPadding: boolean;
}

const Duration: React.FC<
  DataComponentProps<DurationProps> | DataComponentModalProps<DurationProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.duration
      : getRenderData({
          data: props.duration,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const timestamp = TextUtils.secondsToTimestamp(props.duration);
  const timestampValue = props.timestampPadding
    ? padTimestamps(timestamp)
    : timestamp;

  // Screen-reader text
  const timeStampBreakdown = timestamp.split(":");
  if (timeStampBreakdown.length == 2) timeStampBreakdown.unshift("0");
  const timestampNumeric = timeStampBreakdown.map((s) => +s);
  let srText = intl.formatMessage({ id: "duration" }) + ": ";
  if (timestampNumeric[0] !== 0)
    srText += `${timestampNumeric[0]} hour${timestampNumeric[0] === 1 ? "" : "s"} `;
  if (timestampNumeric[1] !== 0)
    srText += `${timestampNumeric[1]} minute${timestampNumeric[1] === 1 ? "" : "s"} `;
  if (timestampNumeric[2] !== 0)
    srText += `${timestampNumeric[2]} second${timestampNumeric[2] === 1 ? "" : "s"} `;
  srText = srText.trim();

  const componentClass = "vui-card-data__duration";

  return (
    <span className={componentClass}>
      <span className="sr-only">{srText}</span>
      <span aria-hidden>{timestampValue}</span>
    </span>
  );
};

export default Duration;
