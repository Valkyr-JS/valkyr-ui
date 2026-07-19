import React from "react";
import Markdown from "markdown-to-jsx";
import { getRenderData } from "@/helpers";
import "./Details.scss";

interface DetailsProps {
  /** The details data. */
  details?: Maybe<string>;
  /** Whether Markdown formatting is enabled. */
  markdownEnabled: boolean;
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
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__details";

  // Modal details can be rendered in full
  if (props.context === "modal")
    return (
      <div className={componentClass}>
        {props.markdownEnabled ? <Markdown>{data}</Markdown> : data}
      </div>
    );

  // Card details should be limited to the user's defined maxiumum
  const maxLengthStyles: React.CSSProperties = {
    WebkitLineClamp: props.maxLines,
  };

  return (
    <div className={componentClass}>
      {props.markdownEnabled ? (
        <Markdown
          options={{ forceWrapper: true, wrapper: "div" }}
          style={maxLengthStyles}
        >
          {data}
        </Markdown>
      ) : (
        <div style={maxLengthStyles}>{data}</div>
      )}
    </div>
  );
};

export default Details;
