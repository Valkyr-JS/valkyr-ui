import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import { getTagLinkComponent } from "@/components/apiComponents";
import "./TagList.scss";

interface TagData {
  id: Tag["id"];
  name: Tag["name"];
  sortName?: Maybe<Scalars["String"]["output"]>;
}

interface TagListProps {
  /** The maximum number of tags to show in the list before being cut off. */
  max: number;

  /** The list of tags */
  tags: TagData[];
}

const TagList: React.FC<
  DataComponentProps<TagListProps> | DataComponentModalProps<TagListProps>
> = (props) => {
  const intl = useIntl();
  const isModalContext = props.context === "modal";

  const data = isModalContext
    ? props.tags
    : getRenderData({
        data: props.tags,
        zoomIndex: {
          current: props.currentZoomIndex,
          user: props.userZoomIndex,
        },
      });

  if (!data?.length) return null;

  /* ------------------------------------------- Sorting ------------------------------------------ */

  // Sort tags by sort name or name.
  const tagSorter = (a: TagData, b: TagData) =>
    (a.sortName ?? a.name).localeCompare(b.sortName ?? b.name);
  const sortedTags = data.sort(tagSorter);

  /* ------------------------------------------ Overflow ------------------------------------------ */

  const overflowTextClass = "vui-card-data__tag-list-overflow-text";

  const visibleList =
    !!props.max && !isModalContext
      ? sortedTags.slice(0, props.max)
      : sortedTags;
  const numCutTags = sortedTags.length - visibleList.length;
  const overflowText = numCutTags ? (
    <span className={overflowTextClass}>and {numCutTags} more</span>
  ) : null;

  /* ------------------------------------------ Component ----------------------------------------- */

  const TagLink = getTagLinkComponent();
  const componentClass = "vui-card-data__tag-list";
  const itemClass = "vui-card-data__tag-list-item";

  return (
    <div className={componentClass}>
      <span className="sr-only">{intl.formatMessage({ id: "tags" })}:</span>
      <ul>
        {visibleList.map((t) => {
          return (
            <li key={t.id} className={itemClass}>
              <TagLink key={t.id} tag={t} />
            </li>
          );
        })}
      </ul>
      {overflowText}
    </div>
  );
};

export default TagList;
