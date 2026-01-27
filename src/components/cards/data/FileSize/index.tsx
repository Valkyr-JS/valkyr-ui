import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

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
  const [value, divisions] = roundBytes(props.bytes);

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "filesize" })}: {value} {units[divisions][1]}
      </span>
      <span aria-hidden>
        {value}
        {units[divisions][0]}
      </span>
    </span>
  );
};

export default FileSize;

/** Round a value of bytes to the nearest two digits. The `divisions` arg tracks
 * how many times it has been divided, i.e. the unit to be used. */
const roundBytes = (value: number, divisions: number = 0): [number, number] => {
  if (value < 1024 || divisions === 4) {
    // Round to two decimal places
    return [Math.round(value * 100) / 100, divisions];
  }

  const nextValue = value / 1024;
  return roundBytes(nextValue, divisions + 1);
};

const units: [string, string][] = [
  ["B", "bytes"],
  ["KB", "kilobytes"],
  ["MB", "megabytes"],
  ["GB", "gigabytes"],
  ["TB", "terabytes"],
];
