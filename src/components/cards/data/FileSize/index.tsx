import React from "react";
import { useIntl } from "react-intl";
import { fileSizeUnits, getRenderData, roundBytes } from "@/helpers";

interface FileSizeProps {
  /** The file size in bytes. */
  bytes: BasicFile["size"] | undefined;
}

const FileSize: React.FC<
  DataComponentProps<FileSizeProps> | DataComponentModalProps<FileSizeProps>
> = (props) => {
  const intl = useIntl();
  const data =
    props.context === "modal"
      ? props.bytes
      : getRenderData({
          data: props.bytes,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__file-size";

  // Round to two decimal places
  const [value, divisions] = roundBytes(data);

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "filesize" })}: {value} {fileSizeUnits[divisions][1]}
      </span>
      <span aria-hidden>
        {value}
        {fileSizeUnits[divisions][0]}
      </span>
    </span>
  );
};

export default FileSize;
