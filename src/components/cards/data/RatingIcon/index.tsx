import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "react-intl";
import { convertRating100, getRenderData } from "@/helpers";
import "./RatingIcon.scss";

interface RatingIconProps {
  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const RatingIcon: React.FC<
  DataComponentProps<RatingIconProps> | DataComponentModalProps<RatingIconProps>
> = (props) => {
  const intl = useIntl();

  const data =
    props.context === "modal"
      ? (props.rating100 ?? 0)
      : getRenderData({
          data: props.rating100,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__rating-icon";

  const ratingNum = convertRating100(data, props.ratingSystem);
  const ratingType = props.ratingSystem?.type ?? "stars";

  const srText =
    ratingType === "decimal"
      ? `${intl.formatMessage({ id: "rating" })}: ${ratingNum} out of 10`
      : `${intl.formatMessage({ id: "rating" })}: ${ratingNum} stars`;

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faStar} />
      <span className="sr-only">{srText}</span>
      <span aria-hidden>{ratingNum}</span>
    </span>
  );
};

export default RatingIcon;
