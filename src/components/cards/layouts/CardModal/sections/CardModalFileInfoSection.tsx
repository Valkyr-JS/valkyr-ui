import React from "react";
import { Table } from "react-bootstrap";

interface CardModalFileInfoSectionProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The object's files. */
  files: GalleryFileDataFragment[] | VideoFileDataFragment[];
}

const CardModalFileInfoSection: React.FC<CardModalFileInfoSectionProps> = (
  props,
) => {
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__file-info-section";

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.files.map((f) => {
          return (
            <li key={f.id}>
              <Table striped>
                <tbody>
                  <tr>
                    <th>Path</th>
                    <td>{f.path}</td>
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
