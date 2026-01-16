import React from "react";
import { getRenderData } from "@/helpers";
import "./Date.scss";
import { FormattedDate } from "react-intl";

interface DateProps {
  /** The date data. */
  date: Maybe<Scalars["String"]["output"]> | undefined;
}

const DateComponent: React.FC<
  DataComponentProps<DateProps> | DataComponentModalProps<DateProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.date
      : getRenderData({
          data: props.date,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__date";

  return (
    <span className={componentClass}>
      <span className="sr-only">Date: </span>
      <FormattedDate value={data} timeZone="utc" />
    </span>
  );
};

export default DateComponent;
