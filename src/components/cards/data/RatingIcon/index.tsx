import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getRenderData } from "@/helpers";
import "./RatingIcon.scss";

interface RatingProps {
  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const RatingIcon: React.FC<
  DataComponentProps<RatingProps> | DataComponentModalProps<RatingProps>
> = (props) => {
  const data =
    props.context === "modal"
      ? (props.rating100 ?? 0)
      : getRenderData({
          data: props.rating100,
          hideZeroValueData: props.hideZeroValueData,
          zoomBreakpoint: {
            current: props.currentBreakpoint,
            user: props.userBreakpoint,
          },
        });

  if (data === null) return null;

  const componentClass = "vui-card-data__rating-icon";

  const ratingType = props.ratingSystem?.type ?? "stars";
  let ratingNum = 0;
  if (ratingType === "decimal") ratingNum = data / 10;
  else {
    switch (props.ratingSystem?.starPrecision) {
      case "half":
        ratingNum = Math.round(data / 10) / 2; // Math.round(74 / 10 = 7.4) / 2 = 3.5
        break;
      case "quarter":
        ratingNum = Math.round(data / 5) / 4; // Math.round(74 / 5 = 14.8) / 4 = 3.75
        break;
      case "tenth":
        ratingNum = Math.round(data / 2) / 10; // Math.round(74 / 2 = 37) / 10 = 3.7
        break;
      case "full":
      default:
        ratingNum = Math.round(data / 20); // Math.round(74 / 20 = 3.7) = 4
    }
  }

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
