import React from "react";
import { faFileZip } from "@fortawesome/pro-solid-svg-icons/faFileZip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@/components/shared/Tooltip";
import { getRenderData } from "@/helpers";
import "./ZipIcon.scss";

interface ZipIconProps {
  /** Whether the gallery is a zip file, as opposed to a collection of image
   * files. */
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
    <Tooltip componentClassList={componentClass} title="ZIP file">
      <FontAwesomeIcon icon={faFileZip} />
      <span className="sr-only">ZIP file</span>
    </Tooltip>
  );
};

export default ZipIcon;
