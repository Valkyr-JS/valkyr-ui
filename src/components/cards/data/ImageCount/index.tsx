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

  return (
    <span className={componentClass}>
      <span>
        {data} {intl.formatMessage({ id: "images" }).toLocaleLowerCase()}
      </span>
    </span>
  );
};

export default ImageCount;
