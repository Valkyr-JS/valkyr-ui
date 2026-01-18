import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { convertRating100, getRenderData } from "@/helpers";
import "./RatingIcon.scss";
import { DEFAULT } from "@/constants";

interface RatingIconProps {
  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const RatingIcon: React.FC<
  DataComponentProps<RatingIconProps> | DataComponentModalProps<RatingIconProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? (props.rating100 ?? 0)
      : getRenderData({
          data: props.rating100,
          hideZeroValueData:
            props.hideZeroValueData ?? DEFAULT.CARDS.SHARED.HIDE_ZERO_VALUE,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (data === null) return null;

  const componentClass = "vui-card-data__rating-icon";

  const ratingNum = convertRating100(data, props.ratingSystem);
  const ratingType = props.ratingSystem?.type ?? "stars";

  const srText =
    ratingType === "decimal"
      ? `Rated ${ratingNum} out of 10`
      : `Rated ${ratingNum} out of 5 stars`;

  return (
    <span className={componentClass}>
      <FontAwesomeIcon icon={faStar} />
      <span className="sr-only">{srText}</span>
      <span aria-hidden>{ratingNum}</span>
    </span>
  );
};

export default RatingIcon;
