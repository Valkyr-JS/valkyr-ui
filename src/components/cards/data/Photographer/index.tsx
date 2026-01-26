import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface PhotographerProps {
  /** The photographer. */
  photographer: Maybe<string> | undefined;
}

const Photographer: React.FC<
  | DataComponentProps<PhotographerProps>
  | DataComponentModalProps<PhotographerProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.photographer
      : getRenderData({
          data: props.photographer,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__photographer";
  const link = `/galleries?c=("type":"photographer","modifier":"EQUALS","value":"${encodeURI(data)}")`;

  return (
    <div className={componentClass}>
      <a href={link}>
        {intl.formatMessage({ id: "photographer" })}: {data}
      </a>
    </div>
  );
};

export default Photographer;
