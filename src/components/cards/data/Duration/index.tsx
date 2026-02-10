import React from "react";
import { useIntl } from "react-intl";
import TextUtils from "@/components/stash/utils/text";
import {
  getRenderData,
  padTimestamps,
  secondsToScreenreaderTimestamp,
} from "@/helpers";

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

  const timestamp = TextUtils.secondsToTimestamp(data);
  const timestampValue = props.timestampPadding
    ? padTimestamps(timestamp)
    : timestamp;
  const timestampSr =
    intl.formatMessage({ id: "duration" }) +
    ": " +
    secondsToScreenreaderTimestamp(data);

  const componentClass = "vui-card-data__duration";

  return (
    <span className={componentClass}>
      <span className="sr-only">{timestampSr}</span>
      <span aria-hidden>{timestampValue}</span>
    </span>
  );
};

export default Duration;
