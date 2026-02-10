import React from "react";
import { Table } from "react-bootstrap";
import { FormattedDate, useIntl } from "react-intl";
import {
  fileSizeUnits,
  padTimestamps,
  roundBytes,
  secondsToScreenreaderTimestamp,
} from "@/helpers";
import TextUtils from "@/components/stash/utils/text";

interface CardModalFileInfoSectionProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The object's files. */
  files: GalleryFileDataFragment[] | VideoFileDataFragment[];

  /** Adds padding to timestamps to make all units double-figures and include
   * hours. */
  timestampPadding: boolean;
}

const CardModalFileInfoSection: React.FC<CardModalFileInfoSectionProps> = (
  props,
) => {
  const intl = useIntl();
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__file-info-section";

  /* ----------------------------------------- Dimensions ----------------------------------------- */

  const maybeRenderDimensions = (
    file: GalleryFileDataFragment | VideoFileDataFragment,
  ) => {
    if (!("height" in file)) return null;

    const dimensions = file.height + " x " + file.width;
    const dimensionsSr = file.height + " by " + file.width;

    return (
      <tr>
        <th>{intl.formatMessage({ id: "duration" })}</th>
        <td>
          <span aria-hidden>{dimensions}</span>
          <span className="sr-only">{dimensionsSr}</span>
        </td>
      </tr>
    );
  };

  /* ------------------------------------------ Duration ------------------------------------------ */

  const maybeRenderDuration = (
    file: GalleryFileDataFragment | VideoFileDataFragment,
  ) => {
    if (!("duration" in file)) return null;
    const timestamp = TextUtils.secondsToTimestamp(file.duration);
    const timestampValue = props.timestampPadding
      ? padTimestamps(timestamp)
      : timestamp;
    const timestampSr = secondsToScreenreaderTimestamp(file.duration);

    return (
      <tr>
        <th>{intl.formatMessage({ id: "duration" })}</th>
        <td>
          <span aria-hidden>{timestampValue}</span>
          <span className="sr-only">{timestampSr}</span>
        </td>
      </tr>
    );
  };

  /* ----------------------------------- File modification time ----------------------------------- */

  const maybeRenderModTime = (
    file: GalleryFileDataFragment | VideoFileDataFragment,
  ) => {
    return (
      <tr>
        <th>{intl.formatMessage({ id: "file_mod_time" })}</th>
        <td>
          <FormattedDate
            value={file.mod_time}
            dateStyle="short"
            timeStyle="medium"
            timeZone="utc"
          />
        </td>
      </tr>
    );
  };

  /* ------------------------------------------ File size ----------------------------------------- */

  const maybeRenderFileSize = (
    file: GalleryFileDataFragment | VideoFileDataFragment,
  ) => {
    const [fileSize, divisions] = roundBytes(file.size);

    return (
      <tr>
        <th>{intl.formatMessage({ id: "filesize" })}</th>
        <td>
          <span aria-hidden>
            {fileSize} {fileSizeUnits[divisions][0]}
          </span>
          <span className="sr-only">
            {fileSize} {fileSizeUnits[divisions][1]}
          </span>
        </td>
      </tr>
    );
  };

  /* -------------------------------------------- Path -------------------------------------------- */

  const maybeRenderPath = (
    file: GalleryFileDataFragment | VideoFileDataFragment,
  ) => {
    return (
      <tr>
        <th>{intl.formatMessage({ id: "path" })}</th>
        <td>{file.path}</td>
      </tr>
    );
  };

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.files.map((f) => {
          return (
            <li key={f.id}>
              <Table striped>
                <tbody>
                  {f.fingerprints.map((fp) => {
                    const heading =
                      fp.type === "md5"
                        ? intl.formatMessage({ id: "media_info.checksum" })
                        : fp.type === "oshash"
                          ? intl.formatMessage({ id: "media_info.hash" })
                          : fp.type === "phash"
                            ? intl.formatMessage({ id: "media_info.phash" })
                            : "Fingerprint";
                    return (
                      <tr>
                        <th>{heading}</th>
                        <td>{fp.value}</td>
                      </tr>
                    );
                  })}
                  {maybeRenderPath(f)}
                  {maybeRenderFileSize(f)}
                  {maybeRenderModTime(f)}
                  {maybeRenderDimensions(f)}
                  {maybeRenderDuration(f)}
                </tbody>
              </Table>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardModalFileInfoSection;
