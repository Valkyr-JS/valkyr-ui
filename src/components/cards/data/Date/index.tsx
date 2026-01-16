import React from "react";
import { getRenderData } from "@/helpers";
import "./Date.scss";
import { FormattedDate } from "react-intl";

interface DateProps {
  /** The date data. */
  date: Maybe<Scalars["String"]["output"]> | undefined;

  /** Format the date according to the user's Stash language setting. */
  localeDateFormat: boolean;
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
        {props.localeDateFormat ? (
          <FormattedDate
            value={Date.UTC(year, 0)}
            year="numeric"
            timeZone="utc"
          />
        ) : (
          data
        )}
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
        <span className="sr-only">
          Date:{" "}
          <FormattedDate
            value={Date.UTC(year, month)}
            year="numeric"
            month="long"
            timeZone="utc"
          />
        </span>
        <span aria-hidden>
          {props.localeDateFormat ? (
            <FormattedDate
              value={Date.UTC(year, month)}
              year="numeric"
              month="numeric"
              timeZone="utc"
            />
          ) : (
            data
          )}
        </span>
      </span>
    );
  }

  /* ------------------------------------- Full date available ------------------------------------ */

  return (
    <span className={componentClass}>
      <span className="sr-only">
        Date: <FormattedDate value={data} format="long" timeZone="utc" />
      </span>
      <span aria-hidden>
        {props.localeDateFormat ? (
          <FormattedDate value={data} timeZone="utc" />
        ) : (
          data
        )}
      </span>
    </span>
  );
};

export default DateComponent;
