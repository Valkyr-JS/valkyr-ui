import React from "react";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface OrganizedProps {
  organized: boolean;
}

const Organized: React.FC<
  DataComponentProps<OrganizedProps> | DataComponentModalProps<OrganizedProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.organized
      : getRenderData({
          data: props.organized,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__organized";

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faBox} />
      <span className="sr-only">{intl.formatMessage({ id: "organized" })}</span>
    </span>
  );
};

export default Organized;
