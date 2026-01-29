import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import "./PerformerList.scss";

interface PerformerListProps {
  /** The list of performers */
  performers: {
    id: Performer["id"];
    name: Performer["name"];
  }[];
}

const PerformerList: React.FC<
  | DataComponentProps<PerformerListProps>
  | DataComponentModalProps<PerformerListProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.performers
      : getRenderData({
          data: props.performers,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__performer-list";

  return (
    <div className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "performers" })}:
      </span>
      <ul>
        {data?.map((p) => (
          <li>
            <a href={`/performers/${p.id}/`}>{p.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerformerList;
