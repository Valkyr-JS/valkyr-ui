import React from "react";
import { getRenderData } from "@/helpers";

interface DetailsProps {
  /** The details data. */
  details?: Maybe<string>;
}

const Details: React.FC<
  DataComponentProps<DetailsProps> | DataComponentModalProps<DetailsProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.details
      : getRenderData({
          data: props.details,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__details";

  return <div className={componentClass}>{data}</div>;
};

export default Details;
