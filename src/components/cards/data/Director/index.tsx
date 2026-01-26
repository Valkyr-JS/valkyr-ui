import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface DirectorProps {
  /** The scene director. */
  director: Maybe<string> | undefined;
}

const Director: React.FC<
  DataComponentProps<DirectorProps> | DataComponentModalProps<DirectorProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.director
      : getRenderData({
          data: props.director,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__director";
  const link = `/scenes?c=("type":"director","modifier":"EQUALS","value":"${encodeURI(data)}")`;

  return (
    <div className={componentClass}>
      <a href={link}>
        {intl.formatMessage({ id: "director" })}: {data}
      </a>
    </div>
  );
};

export default Director;
