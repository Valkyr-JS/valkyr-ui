import React from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import "./PlayCount.scss";

interface PlayCountProps {
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

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faEye} />
      <span className="sr-only">
        {intl.formatMessage({ id: "play_count" })}: {data}
      </span>
      <span aria-hidden>{data}</span>
    </span>
  );
};

export default PlayCount;
