import React from "react";
import { CLASSNAME } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import CardModal from "../layouts/CardModal";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import "./GalleryCard.scss";
import Studio from "../data/Studio";

interface GalleryCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;
}

const GalleryCard: React.FC<GalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);

  const id = createGalleryCardID(props.gallery.id);
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  return (
    <GridCard
      footer={props.footer}
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
      topLine={
        <>
          <Studio currentBreakpoint={0} studio={props.gallery.studio} />
        </>
      }
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
/*                                  Gallery card modal component                                  */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardModalProps {
  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The Stash gallery data. */
  gallery: SlimGalleryDataFragment;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** Whether the modal is currently rendered. */
  show: boolean;
}

export const GalleryCardModal: React.FC<GalleryCardModalProps> = (props) => {
  const id = createGalleryCardID(props.gallery.id);
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  return (
    <CardModal
      closeHandler={props.closeHandler}
      link={galleryLink}
      section={props.section}
      setSection={props.setSection}
      show={props.show}
      thumbnail={
        <GalleryCardThumbnail
          id={id}
          link={galleryLink}
          src={props.gallery.paths.cover}
        />
      }
      title={title}
      titleID={id}
    />
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted gallery IDs. */
export const createGalleryCardID = (stashID: string) =>
  "galleryCard-" + stashID;
