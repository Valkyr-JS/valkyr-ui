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

  /* ------------------------------------- Only year available ------------------------------------ */

  const yearMatch = data.match(/^(\d{4})$/);
  if (yearMatch) {
    const year = parseInt(yearMatch[1], 10);
    return (
      <span className={componentClass}>
        <span className="sr-only">Date: </span>
        <FormattedDate
          value={Date.UTC(year, 0)}
          year="numeric"
          timeZone="utc"
        />
      </span>
    );
  }

  /* -------------------------------- Only month and year available ------------------------------- */

  const yearMonthMatch = data.match(/^(\d{4})-(\d{2})$/);
  if (yearMonthMatch) {
    const year = parseInt(yearMonthMatch[1], 10);
    const month = parseInt(yearMonthMatch[2], 10) - 1;

    return (
      <span className={componentClass}>
        <span className="sr-only">Date: </span>
        <FormattedDate
          value={Date.UTC(year, month)}
          year="numeric"
          month="numeric"
          timeZone="utc"
        />
      </span>
    );
  }

  /* ------------------------------------- Full date available ------------------------------------ */

  return (
    <span className={componentClass}>
      <span className="sr-only">Date: </span>
      <FormattedDate value={data} timeZone="utc" />
    </span>
  );
};

export default DateComponent;
