import React from "react";
import { faFileZipper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRenderData } from "@/helpers";
import "./ZipIcon.scss";

interface ZipIconProps {
  /** Whether the media is a zip file. */
  isZip: boolean;
}

const ZipIcon: React.FC<
  DataComponentProps<ZipIconProps> | DataComponentModalProps<ZipIconProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.isZip
      : getRenderData({
          data: props.isZip,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__zip-icon";

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faFileZipper} />
      <span className="sr-only">ZIP file gallery</span>
    </span>
  );
};

export default ZipIcon;
