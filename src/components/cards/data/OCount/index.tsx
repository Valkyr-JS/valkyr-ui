import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import SweatDrops from "@/components/stash/Shared/SweatDrops";
import "./OCount.scss";

interface OCountProps {
  /** Whether the number should be rounded to the nearest thousand. */
  abbreviate: boolean;

  /** The o count. */
  count: Maybe<number> | undefined;
}

const OCount: React.FC<
  DataComponentProps<OCountProps> | DataComponentModalProps<OCountProps>
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

  const componentClass = "vui-card-data__o-count";

  // Round to the nearest thousand if needed
  const value =
    props.abbreviate && data > 1000 ? Math.round(data / 100) / 10 + "k" : data;

  return (
    <span className={componentClass}>
      <SweatDrops />
      <span className="sr-only">
        {intl.formatMessage({ id: "o_count" })}: {value}
      </span>
      <span aria-hidden>{value}</span>
    </span>
  );
};

export default OCount;
