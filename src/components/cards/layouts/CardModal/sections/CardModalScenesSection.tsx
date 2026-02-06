import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { useIntl } from "react-intl";
import TextUtils from "@/components/stash/utils/text";
import GenderIcon from "@/components/stash/Performers/GenderIcon";
import { convertRating100 } from "@/helpers";

interface CardModalScenesSectionProps {
  /** An array of Gender enums in the order they should appear. Unlike the dard
   * performer list, Genders not included will NOT be filtered out. Leave
   * undefined to leave genders unfiltered and names in alphabetical order.  */
  genderSortFilter: GenderEnum[] | undefined;

  /** The Stash object that this list refers to. */
  object: GalleryDataFragment;

  /** The list of scenes related to the object. */
  scenes: SlimSceneDataFragment[];

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const CardModalScenesSection: React.FC<CardModalScenesSectionProps> = (
  props,
) => {
  const intl = useIntl();
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__scene-section";
  const dataWrapperClass = componentClass + "__scene-data-wrapper";
  const imageWrapperClass = componentClass + "__scene-image-wrapper";

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.scenes.map((sc) => {
          return <li key={sc.id}>{sc.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default CardModalScenesSection;
