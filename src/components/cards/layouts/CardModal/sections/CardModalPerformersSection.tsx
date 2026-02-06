import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import TextUtils from "@/components/stash/utils/text";
import GenderIcon from "@/components/stash/Performers/GenderIcon";
import { convertRating100 } from "@/helpers";

interface CardModalPerformersSectionProps {
  /** An array of Gender enums in the order they should appear. Unlike the dard
   * performer list, Genders not included will NOT be filtered out. Leave
   * undefined to leave genders unfiltered and names in alphabetical order.  */
  genderSortFilter: GenderEnum[] | undefined;

  /** The Stash object that this list refers to. */
  object: GalleryDataFragment | SceneDataFragment;

  /** The list of performers for the object. */
  performers: PerformerDataFragment[];

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const CardModalPerformersSection: React.FC<CardModalPerformersSectionProps> = (
  props,
) => {
  const intl = useIntl();
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__performer-section";
  const dataWrapperClass = componentClass + "__performer-data-wrapper";
  const imageWrapperClass = componentClass + "__performer-image-wrapper";
  const iconsClass = componentClass + "__performer-icons";

  const disambiguationClass = componentClass + "__performer-disambiguation";

  /* ------------------------------------------- Rating ------------------------------------------- */

  const ratingClass = componentClass + "__performer-rating";
  const ratingType = props.ratingSystem?.type ?? "stars";

  const srRatingText = (ratingNum: number) =>
    ratingType === "decimal"
      ? `${intl.formatMessage({ id: "rating" })}: ${ratingNum} out of 10`
      : `${intl.formatMessage({ id: "rating" })}: ${ratingNum} stars`;

  const rating = (ratingNum: number) => {
    if (!ratingNum) return null;
    return (
      <span className={ratingClass}>
        <FontAwesomeIcon icon={faStar} />
        <span className="sr-only">{srRatingText(ratingNum)}</span>
        <span aria-hidden>{ratingNum}</span>
      </span>
    );
  };

  /* ------------------------------------------- Sorter ------------------------------------------- */

  const genderSortFilter = props.genderSortFilter ?? [];

  const genderSorter = (
    a: PerformerDataFragment,
    b: PerformerDataFragment,
  ): number => {
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

  const sortedList = [...props.performers].sort(genderSorter);

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {sortedList.map((p) => {
          const age = TextUtils.age(p.birthdate, props.object.date);
          const ratingNum = convertRating100(
            p.rating100 ?? 0,
            props.ratingSystem,
          );

          return (
            <li key={p.id}>
              {p.image_path && (
                <div className={imageWrapperClass}>
                  <img alt="" src={p.image_path} />
                </div>
              )}
              <div className={dataWrapperClass}>
                {p.disambiguation && (
                  <span className={disambiguationClass}>
                    {p.disambiguation}
                  </span>
                )}
                <h6>{p.name}</h6>
                <div className={iconsClass}>
                  <GenderIcon gender={p.gender ?? null} />
                  {p.country && (
                    <span
                      aria-hidden
                      className={`fi fi-${p.country.toLowerCase()}`}
                      title={p.country}
                    ></span>
                  )}
                  {rating(ratingNum)}
                  {p.favorite && (
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="sr-only">
                        {intl.formatMessage({ id: "performer_favorite" })}
                      </span>
                    </span>
                  )}
                </div>
                {p.birthdate && props.object.date && (
                  <span>
                    {intl.formatMessage({ id: "age_on_date" }, { age })}
                  </span>
                )}
                <div>
                  <a className="btn minimal mt-2" href={`/performers/${p.id}/`}>
                    Read more
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardModalPerformersSection;
