import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";
import { TagLink } from "@/components/apiComponents";

interface TagData {
  id: Tag["id"];
  name: Tag["name"];
  sortName?: Maybe<Scalars["String"]["output"]>;
}

interface TagListProps {
  /** The list of tags */
  tags: TagData[];
}

const TagList: React.FC<
  DataComponentProps<TagListProps> | DataComponentModalProps<TagListProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? props.tags
      : getRenderData({
          data: props.tags,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data?.length) return null;

  /* ------------------------------------------ Component ----------------------------------------- */

  const componentClass = "vui-card-data__tag-list";
  const itemClass = "vui-card-data__tag-list-item";

  return (
    <div className={componentClass}>
      <span className="sr-only">{intl.formatMessage({ id: "tags" })}:</span>
      <ul>
        {data.map((t) => {
          return (
            <li key={t.id} className={itemClass}>
              <TagLink key={t.id} tag={t} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagList;
