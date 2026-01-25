import React from "react";
import cx from "classnames";
import { convertRating100, getRenderData } from "@/helpers";
import { useIntl } from "react-intl";
import "./RatingBanner.scss";

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

  // Only ever return if there is non-zero data, irrelevant of the user's
  // settings. `Rating: 0` is just bad.
  if (!data) return null;

  const ratingNum = convertRating100(data, props.ratingSystem);
  const ratingType = props.ratingSystem?.type ?? "stars";

  const srText =
    ratingType === "decimal"
      ? `${intl.formatMessage({ id: "rating" })}: ${ratingNum} out of 10`
      : `${intl.formatMessage({ id: "rating" })}: ${ratingNum} stars`;

  const componentClass = "vui-card-data__rating-banner";
  const classList = cx(
    "rating-banner",
    `rating-100-${Math.trunc(data / 5)}`,
    componentClass,
  );

  return (
    <div className={classList}>
      <span className="sr-only">{srText}</span>
      <span aria-hidden>
        {intl.formatMessage({ id: "rating" })}: {ratingNum}
      </span>
    </div>
  );
};

export default RatingBanner;
