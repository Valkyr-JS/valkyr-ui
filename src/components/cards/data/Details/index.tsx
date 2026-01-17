import React from "react";
import { getRenderData } from "@/helpers";
import "./Details.scss";

interface DetailsProps {
  /** The details data. */
  details?: Maybe<string>;
}

interface DetailsCardProps extends DetailsProps {
  /** The maximum number of lines to display for details on gallery cards. */
  maxLines: number;
}

const Details: React.FC<
  DataComponentProps<DetailsCardProps> | DataComponentModalProps<DetailsProps>
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

  // Modal details can be rendered in full
  if (props.context === "modal")
    return <div className={componentClass}>{data}</div>;

  // Card details should be limited to the user's defined maxiumum
  const maxLengthStyles: React.CSSProperties = {
    WebkitLineClamp: props.maxLines,
  };

  return (
    <div className={componentClass}>
      <div style={maxLengthStyles}>{data}</div>
    </div>
  );
};

export default Details;
