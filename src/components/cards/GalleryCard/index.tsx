import React from "react";
import { DEFAULT } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import Date from "../data/Date";
import Studio from "../data/Studio";
import { CardModalContent } from "../layouts/CardModal";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import ReleaseData from "../layouts/ReleaseData";
import "./GalleryCard.scss";

interface GalleryCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: CardFooterProps;

  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
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
      keyData={
        <ReleaseData>
          <Date
            context="card"
            currentBreakpoint={props.zoomBreakpoint}
            date={props.gallery.date}
            localeDateFormat={
              props.pluginConfig.general__localeDateFormat ??
              DEFAULT.GENERAL.LOCALE_DATE_FORMAT
            }
            userBreakpoint={
              props.pluginConfig.cards__galleryCard__studioBreakpoint ??
              DEFAULT.CARDS.GALLERY_CARD.DATE_BREAKPOINT
            }
          />
        </ReleaseData>
      }
      link={galleryLink}
      thumbnail={
        <GalleryCardThumbnail
          titleID={id}
          link={galleryLink}
          src={props.gallery.paths.cover}
        />
      }
      title={title}
      topLine={
        <>
          <Studio
            context="card"
            currentBreakpoint={props.zoomBreakpoint}
            studio={props.gallery.studio}
            userBreakpoint={
              props.pluginConfig.cards__galleryCard__studioBreakpoint ??
              DEFAULT.CARDS.GALLERY_CARD.STUDIO_BREAKPOINT
            }
          />
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
  /** The link to the object page. */
  link: string;

  /** The link to the gallery cover thumbnail. */
  src: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const GalleryCardThumbnail: React.FC<GalleryCardThumbnailProps> = (
  props
) => {
  const componentClass = "vui-gallery-card";
  const thumbnailClass = componentClass + "__thumbnail";
  const coverClass = componentClass + "__thumbnail-cover";

  return (
    <div className={thumbnailClass}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={coverClass}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
      </a>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                  Gallery card modal component                                  */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardModalContentProps {
  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The Stash gallery data. */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const GalleryCardModalContent: React.FC<GalleryCardModalContentProps> = (
  props
) => {
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      keyData={
        <ReleaseData>
          <Date
            context="modal"
            date={props.gallery.date}
            localeDateFormat={
              props.pluginConfig.general__localeDateFormat ??
              DEFAULT.GENERAL.LOCALE_DATE_FORMAT
            }
          />
        </ReleaseData>
      }
      link={galleryLink}
      section={props.section}
      setSection={props.setSection}
      thumbnail={
        <GalleryCardThumbnail
          titleID={props.titleID}
          link={galleryLink}
          src={props.gallery.paths.cover}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={<Studio context="modal" studio={props.gallery.studio} />}
    />
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted gallery IDs. */
export const createGalleryCardID = (stashID: string) =>
  "galleryCard-" + stashID;
