import React from "react";
import cx from "classnames";
import { useIntl } from "react-intl";
import { getPerformerGenderColorClass, getRenderData } from "@/helpers";
import "./PerformerList.scss";

interface PerformerData {
  id: Performer["id"];
  gender: Maybe<GenderEnum> | undefined;
  name: Performer["name"];
}

interface PerformerListProps {
  /** An array of Gender enums in the order they should appear. Genders not
   * included will be filtered out. Leave undefined to leave genders unfiltered
   * and names in alphabetical order.  */
  genderSortFilter: GenderEnum[] | undefined;

  /** The maximum number of names to show in the list before being cut off. */
  max: number | undefined;

  /** The list of performers */
  performers: PerformerData[];

  /** Whether to set names in gender-specific colors. */
  useGenderedColors: boolean;
}

const PerformerList: React.FC<
  | DataComponentProps<PerformerListProps>
  | DataComponentModalProps<PerformerListProps>
> = (props) => {
  const genderSortFilter = props.genderSortFilter ?? [];
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

  // If a gender sort filter was provided, filter out unused genders. Force
  // `"UNKNOWN"` to be treated as a `GenderEnum` to work with the
  // `genderSortFilter`.
  const filteredList = genderSortFilter.length
    ? data.filter((p) =>
        genderSortFilter.includes(p.gender ?? ("UNKNOWN" as GenderEnum)),
      )
    : data;

  const genderSorter = (a: PerformerData, b: PerformerData): number => {
    const genderA = a.gender ?? "UNKNOWN";
    const genderB = b.gender ?? "UNKNOWN";

    if (genderSortFilter.length) {
      switch (true) {
        // Order by the given gender order
        case genderA !== genderB:
          return (
            genderSortFilter.indexOf(genderA as GenderEnum) -
            genderSortFilter.indexOf(genderB as GenderEnum)
          );

        default:
          return a.name.localeCompare(b.name);
      }
    }
    return a.name.localeCompare(b.name);
  };

  const sortedList = [...filteredList].sort(genderSorter);

  /* ------------------------------------------ Overflow ------------------------------------------ */

  const overflowTextClass = "vui-card-data__performer-list-overflow-text";

  const visibleList = !!props.max ? sortedList.slice(0, props.max) : sortedList;
  const numCutPerformers = sortedList.length - visibleList.length;
  const overflowText = numCutPerformers ? (
    <span className={overflowTextClass}> and {numCutPerformers} more</span>
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
          const genderClass = getPerformerGenderColorClass(p.gender ?? null);

          const itemClassList = cx(itemClass, {
            [genderClass]: props.useGenderedColors,
          });

          return (
            <li key={p.id} className={itemClassList}>
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
