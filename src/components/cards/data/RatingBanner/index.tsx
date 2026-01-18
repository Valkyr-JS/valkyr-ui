import React from "react";
import cx from "classnames";
import { convertRating100, getRenderData } from "@/helpers";
import { FormattedMessage } from "react-intl";
import "./RatingBanner.scss";
import { DEFAULT } from "@/constants";

interface RatingBannerProps {
  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const RatingBanner: React.FC<
  | DataComponentProps<RatingBannerProps>
  | DataComponentModalProps<RatingBannerProps>
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

  // Only ever return if there is non-zero data, irrelevant of the user's
  // settings. `Rating: 0` is just bad.
  if (!data) return null;

  const ratingNum = convertRating100(data, props.ratingSystem);

  const componentClass = "vui-card-data__rating-banner";
  const classList = cx(
    "rating-banner",
    `rating-100-${Math.trunc(data / 5)}`,
    componentClass,
  );

  return (
    <div className={classList} aria-hidden>
      <FormattedMessage id="rating" />: {ratingNum}
    </div>
  );
};

export default RatingBanner;
