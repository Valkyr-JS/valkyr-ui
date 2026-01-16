import React from "react";
import { getRenderData } from "@/helpers";

interface DateProps {
  /** The date data. */
  date: Maybe<Scalars["String"]["output"]>;
}

const Date: React.FC<
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

  return <span className={componentClass}>{data}</span>;
};

export default Date;
