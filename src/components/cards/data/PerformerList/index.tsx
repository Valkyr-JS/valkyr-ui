import React from "react";
import cx from "classnames";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import "./PerformerList.scss";

interface PerformerListProps {
  /** The maximum number of names to show in the list before being cut off. */
  max: number | undefined;

  /** The list of performers */
  performers: {
    id: Performer["id"];
    gender: Maybe<GenderEnum> | undefined;
    name: Performer["name"];
  }[];

  /** Whether to set names in gender-specific colors. */
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

  /* ------------------------------------ Sorting and filtering ----------------------------------- */

  // Default to alphabetical order
  const sortedList = data.sort((a, b) => a.name.localeCompare(b.name));

  /* ------------------------------------------ Overflow ------------------------------------------ */

  const visibleList = !!props.max ? sortedList.slice(0, props.max) : sortedList;
  const numCutPerformers = data.length - visibleList.length;
  const overflowText = numCutPerformers ? (
    <span> and {numCutPerformers} more</span>
  ) : null;

  /* ------------------------------------------ Component ----------------------------------------- */

  const componentClass = "vui-card-data__performer-list";
  const overflowClass = componentClass + "--overflow";
  const itemClass = "vui-card-data__performer-list-item";

  const componentClassList = cx(componentClass, {
    [overflowClass]: !!numCutPerformers,
  });

  return (
    <div className={componentClassList}>
      <span className="sr-only">
        {intl.formatMessage({ id: "performers" })}:
      </span>
      <ul>
        {visibleList?.map((p) => {
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
      {overflowText}
    </div>
  );
};

export default PerformerList;
