import React from "react";
import cx from "classnames";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import "./PerformerList.scss";

interface PerformerListProps {
  /** The list of performers */
  performers: {
    id: Performer["id"];
    gender: Maybe<GenderEnum> | undefined;
    name: Performer["name"];
  }[];
  useGenderedColors: boolean;
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
  const itemClass = "vui-card-data__performer-list-item";

  return (
    <div className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "performers" })}:
      </span>
      <ul>
        {data?.map((p) => {
          const gender = !p.gender
            ? "unknown"
            : p.gender.toLowerCase().split("_").join("-");
          const genderClass = itemClass + "--" + gender;

          const itemClassList = cx(itemClass, {
            [genderClass]: props.useGenderedColors,
          });

          return (
            <li className={itemClassList}>
              <a href={`/performers/${p.id}/`}>{p.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PerformerList;
