import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface ImageCountProps {
  /** The image count. */
  count: number | undefined;
}

const ImageCount: React.FC<
  DataComponentProps<ImageCountProps> | DataComponentModalProps<ImageCountProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.count
      : getRenderData({
          data: props.count,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__image-count";

  // Get the correct message depending on whether there is only one image or
  // more in the gallery
  const message =
    data === 1
      ? intl.formatMessage({ id: "image" })
      : intl.formatMessage({ id: "images" });

  return (
    <span className={componentClass}>
      <span>
        {data} {message.toLocaleLowerCase()}
      </span>
    </span>
  );
};

export default ImageCount;
