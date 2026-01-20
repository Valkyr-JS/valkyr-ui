import React from "react";
import cx from "classnames";
import { DEFAULT } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import Date from "../data/Date";
import Details from "../data/Details";
import Organized from "../data/Organized";
import RatingBanner from "../data/RatingBanner";
import RatingIcon from "../data/RatingIcon";
import Studio from "../data/Studio";
import { CardModalContent, CardModalTagsSection } from "../layouts/CardModal";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./GalleryCard.scss";

interface GalleryCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer?: Omit<CardFooterProps, "sections">;

  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
}

const GalleryCard: React.FC<GalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);

  const componentClass = "vui-gallery-card";
  const userDataClass = componentClass + "__user-data";

  const id = createGalleryCardID(props.gallery.id);
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  const footerSections: CardModalSectionData[] = [["details"]];
  if (props.gallery.tags.length)
    footerSections.push(["tags", props.gallery.tags.length]);
  const footerProps = props.footer
    ? { ...props.footer, sections: footerSections }
    : undefined;

  return (
    <GridCard
      classname={componentClass}
      footer={footerProps}
      id={id}
      link={galleryLink}
      pluginConfig={props.pluginConfig}
      thumbnail={
        <GalleryCardThumbnail
          context="card"
          link={galleryLink}
          pluginConfig={props.pluginConfig}
          rating100={props.gallery.rating100}
          ratingSystem={props.ratingSystem}
          src={props.gallery.paths.cover}
          thumbnailBackground={
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundEnabled ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_ENABLED
          }
          titleID={id}
          zoomBreakpoint={props.zoomBreakpoint}
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
          <div className={userDataClass}>
            <RatingIcon
              context="card"
              currentBreakpoint={props.zoomBreakpoint}
              rating100={props.gallery.rating100}
              ratingSystem={props.ratingSystem}
              userBreakpoint={
                props.pluginConfig.cards__galleryCard__ratingIconBreakpoint ??
                DEFAULT.CARDS.GALLERY_CARD.RATING_ICON_BREAKPOINT
              }
            />
            <Organized
              context="card"
              currentBreakpoint={props.zoomBreakpoint}
              organized={props.gallery.organized}
              userBreakpoint={
                props.pluginConfig.cards__galleryCard__organizedBreakpoint ??
                DEFAULT.CARDS.GALLERY_CARD.ORGANIZED_BREAKPOINT
              }
            />
          </div>
        </>
      }
    >
      <GalleryCardBody
        gallery={props.gallery}
        pluginConfig={props.pluginConfig}
        zoomBreakpoint={props.zoomBreakpoint}
      />
    </GridCard>
  );
};

export default GalleryCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                   Gallery card body component                                  */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardBodyProps {
  /** The Stash gallery data */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
}

const GalleryCardBody: React.FC<GalleryCardBodyProps> = (props) => {
  return (
    <>
      <KeyData>
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
              props.pluginConfig.cards__galleryCard__dateBreakpoint ??
              DEFAULT.CARDS.GALLERY_CARD.DATE_BREAKPOINT
            }
          />
        </ReleaseData>
      </KeyData>
      <Details
        context="card"
        currentBreakpoint={props.zoomBreakpoint}
        details={props.gallery.details}
        maxLines={
          props.pluginConfig.cards__galleryCard__detailsMaxLines ??
          DEFAULT.CARDS.GALLERY_CARD.DETAILS_MAX_LINES
        }
        userBreakpoint={
          props.pluginConfig.cards__galleryCard__detailsBreakpoint ??
          DEFAULT.CARDS.GALLERY_CARD.DETAILS_BREAKPOINT
        }
      />
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                Gallery card thumbnail component                                */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardThumbnailProps {
  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card" | "modal";

  /** The link to the object page. */
  link: string;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;

  /** The link to the gallery cover thumbnail. */
  src: string;

  /** Adds a blurred version of the thumbnail to the background. */
  thumbnailBackground?: boolean;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The current zoom breakpoint. */
  zoomBreakpoint?: StashCardGridZoom;
}

export const GalleryCardThumbnail: React.FC<GalleryCardThumbnailProps> = (
  props,
) => {
  const componentClass = "vui-gallery-card";
  const thumbnailClass = componentClass + "__thumbnail";
  const coverClass = componentClass + "__thumbnail-cover";
  const coverBackgroundClass = coverClass + "--blurred-bg";
  const coverClassList = cx(coverClass, {
    [coverBackgroundClass]: props.thumbnailBackground,
  });

  const coverStyles: React.CSSProperties = {
    backgroundImage: props.thumbnailBackground
      ? `url(${props.src})`
      : undefined,
  };

  return (
    <div className={thumbnailClass}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={coverClassList} style={coverStyles}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
        <RatingBanner
          context={props.context}
          currentBreakpoint={props.zoomBreakpoint}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userBreakpoint={
            props.pluginConfig.cards__galleryCard__ratingBannerBreakpoint ??
            DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_BREAKPOINT
          }
        />
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

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const GalleryCardModalContent: React.FC<GalleryCardModalContentProps> = (
  props,
) => {
  const componentClass = "vui-gallery-card";
  const userDataClass = componentClass + "__user-data";

  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  const sections: CardModalSectionData[] = [["details"]];
  if (props.gallery.tags.length)
    sections.push(["tags", props.gallery.tags.length]);

  // Only render one of the two rating options
  const willRenderRatingBanner =
    (props.pluginConfig.cards__galleryCard__ratingBannerBreakpoint ??
      DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_BREAKPOINT) > -1;

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={galleryLink}
      pluginConfig={props.pluginConfig}
      section={props.section}
      sections={sections}
      setSection={props.setSection}
      thumbnail={
        <GalleryCardThumbnail
          context="modal"
          link={galleryLink}
          pluginConfig={props.pluginConfig}
          rating100={willRenderRatingBanner ? props.gallery.rating100 : 0}
          ratingSystem={props.ratingSystem}
          src={props.gallery.paths.cover}
          thumbnailBackground={
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundEnabled ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_ENABLED
          }
          titleID={props.titleID}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={
        <>
          <Studio context="modal" studio={props.gallery.studio} />
          <div className={userDataClass}>
            {willRenderRatingBanner ? null : (
              <RatingIcon
                context="modal"
                rating100={props.gallery.rating100}
                ratingSystem={props.ratingSystem}
              />
            )}
            <Organized context="modal" organized={props.gallery.organized} />
          </div>
        </>
      }
    >
      {props.section === "tags" ? (
        <CardModalTagsSection tags={props.gallery.tags} />
      ) : (
        <>
          <KeyData>
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
          </KeyData>
          <Details context="modal" details={props.gallery.details} />
        </>
      )}
    </CardModalContent>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted gallery IDs. */
export const createGalleryCardID = (stashID: string) =>
  "galleryCard-" + stashID;
