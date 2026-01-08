import React from "react";
import { CLASSNAME } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import GridCard from "../GridCard";
import "./GalleryCard.scss";

interface ValkyrUiGalleryCardProps {
  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;
}

const GalleryCard: React.FC<ValkyrUiGalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);

  const id = createGalleryCardID(props.gallery.id);
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  return (
    <GridCard
      id={id}
      link={galleryLink}
      thumbnail={
        <GalleryCardThumbnail
          id={id}
          link={galleryLink}
          src={props.gallery.paths.cover}
        />
      }
      title={title}
    />
  );
};

export default GalleryCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                Gallery card thumbnail component                                */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardThumbnailProps {
  /** HTML ID used for aria labelling. */
  id: string;

  /** The link to the object page. */
  link: string;

  /** The link to the gallery cover thumbnail. */
  src: string;
}

export const GalleryCardThumbnail: React.FC<GalleryCardThumbnailProps> = (
  props
) => {
  const componentClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail";
  const coverClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail-cover";
  const imgClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail-img";

  return (
    <div className={componentClass}>
      <a href={props.link} aria-labelledby={props.id}>
        <div className={coverClass}>
          <img className={imgClass} loading="lazy" alt="" src={props.src} />
        </div>
      </a>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted gallery IDs. */
export const createGalleryCardID = (stashID: string) =>
  "galleryCard-" + stashID;
