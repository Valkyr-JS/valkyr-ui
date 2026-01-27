import React from "react";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRenderData } from "@/helpers";
import "./ImageCollectionIcon.scss";

interface ImageCollectionIconProps {
  /** Whether the gallery is a collection of image files, as opposed to a zip
   * file. */
  isCollection: boolean;
}

const ImageCollectionIcon: React.FC<
  | DataComponentProps<ImageCollectionIconProps>
  | DataComponentModalProps<ImageCollectionIconProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? props.isCollection
      : getRenderData({
          data: props.isCollection,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__image-collection-icon";

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faFileImage} />
      <span className="sr-only">Image collection</span>
    </span>
  );
};

export default ImageCollectionIcon;
