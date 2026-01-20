import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import SweatDrops from "@/components/stash/Shared/SweatDrops";
import { DEFAULT } from "@/constants";
import "./OCount.scss";

interface OCountProps {
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
          hideZeroValueData:
            props.hideZeroValueData ?? DEFAULT.CARDS.SHARED.HIDE_ZERO_VALUE,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (data === null) return null;

  const componentClass = "vui-card-data__o-count";

  return (
    <span className={componentClass}>
      <SweatDrops />
      <span className="sr-only">
        {intl.formatMessage({ id: "o_count" })}: {data}
      </span>
      <span aria-hidden>{data}</span>
    </span>
  );
};

export default OCount;
