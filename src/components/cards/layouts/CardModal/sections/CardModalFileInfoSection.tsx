import React from "react";
import { Table } from "react-bootstrap";
import { FormattedDate, useIntl } from "react-intl";
import { fileSizeUnits, roundBytes } from "@/helpers";

interface CardModalFileInfoSectionProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The object's files. */
  files: GalleryFileDataFragment[] | VideoFileDataFragment[];
}

const CardModalFileInfoSection: React.FC<CardModalFileInfoSectionProps> = (
  props,
) => {
  const intl = useIntl();
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__file-info-section";

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.files.map((f) => {
          const [fileSize, divisions] = roundBytes(f.size);

          return (
            <li key={f.id}>
              <Table striped>
                <tbody>
                  {f.fingerprints.map((fp) => {
                    const heading =
                      fp.type === "md5"
                        ? intl.formatMessage({ id: "media_info.checksum" })
                        : "Fingerprint";
                    return (
                      <tr>
                        <th>{heading}</th>
                        <td>{fp.value}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <th>{intl.formatMessage({ id: "path" })}</th>
                    <td>{f.path}</td>
                  </tr>
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
                  <tr>
                    <th>{intl.formatMessage({ id: "file_mod_time" })}</th>
                    <td>
                      <FormattedDate
                        value={f.mod_time}
                        dateStyle="short"
                        timeStyle="medium"
                        timeZone="utc"
                      />
                    </td>
                  </tr>
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
