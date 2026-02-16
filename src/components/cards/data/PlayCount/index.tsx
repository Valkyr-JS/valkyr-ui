import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import Tooltip from "@/components/shared/Tooltip";
import { getRenderData, getStashFaIcon } from "@/helpers";
import "./PlayCount.scss";

interface PlayCountProps {
  /** Whether the number should be rounded to the nearest thousand. */
  abbreviate: boolean;

  /** The play count. */
  count: Maybe<number> | undefined;
}

const PlayCount: React.FC<
  DataComponentProps<PlayCountProps> | DataComponentModalProps<PlayCountProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.count
      : getRenderData({
          data: props.count,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__play-count";

  // Round to the nearest thousand if needed
  const value =
    props.abbreviate && data > 1000 ? Math.round(data / 100) / 10 + "k" : data;

  return (
    <Tooltip
      componentClassList={componentClass}
      title={intl.formatMessage({ id: "play_count" })}
    >
      <FontAwesomeIcon icon={getStashFaIcon("playCount")} />
      <span className="sr-only">
        {intl.formatMessage({ id: "play_count" })}: {value}
      </span>
      <span aria-hidden>{value}</span>
    </Tooltip>
  );
};

export default PlayCount;
