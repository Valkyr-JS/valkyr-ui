import React from "react";
import cx from "classnames";
import { DEFAULT } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import Date from "../data/Date";
import Details from "../data/Details";
import FileSize from "../data/FileSize";
import ImageCollectionIcon from "../data/ImageCollectionIcon";
import ImageCount from "../data/ImageCount";
import Organized from "../data/Organized";
import Photographer from "../data/Photographer";
import RatingBanner from "../data/RatingBanner";
import RatingIcon from "../data/RatingIcon";
import Studio from "../data/Studio";
import ZipIcon from "../data/ZipIcon";
import {
  CardModalContent,
  CardModalNavigation,
  CardModalTagsSection,
} from "../layouts/CardModal";
import CastCrew from "../layouts/CastCrew";
import FileData from "../layouts/FileData";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./GalleryCard.scss";

interface GalleryCardProps {
  /** Footer props. Leave `undefined` to not render the footer. */
  footer: Omit<CardFooterProps, "sections">;

  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiConfigMap;

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const GalleryCard: React.FC<GalleryCardProps> = (props) => {
  const componentClass = "vui-gallery-card";
  const userDataClass = componentClass + "__user-data";

  const id = createGalleryCardID(props.gallery.id);
  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  const footerSections: CardModalSectionData[] = [["details"]];
  if (props.gallery.tags.length)
    footerSections.push(["tags", props.gallery.tags.length]);
  const footerProps = { ...props.footer, sections: footerSections };

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
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundImage ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_IMAGE
          }
          thumbnailBackgroundStyle={
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundStyle ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_STYLE
          }
          titleID={id}
          zoomIndex={props.zoomIndex}
        />
      }
      title={title}
      topLine={
        <>
          <Studio
            context="card"
            currentZoomIndex={props.zoomIndex}
            studio={props.gallery.studio}
            userZoomIndex={
              props.pluginConfig.cards__galleryCard__studioZoomIndex ??
              DEFAULT.CARDS.GALLERY_CARD.STUDIO_ZOOM_INDEX
            }
          />
          <div className={userDataClass}>
            <RatingIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              rating100={props.gallery.rating100}
              ratingSystem={props.ratingSystem}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__ratingIconZoomIndex ??
                DEFAULT.CARDS.GALLERY_CARD.RATING_ICON_ZOOM_INDEX
              }
            />
            <Organized
              context="card"
              currentZoomIndex={props.zoomIndex}
              organized={props.gallery.organized}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__organizedZoomIndex ??
                DEFAULT.CARDS.GALLERY_CARD.ORGANIZED_ZOOM_INDEX
              }
            />
          </div>
        </>
      }
    >
      <GalleryCardBody
        gallery={props.gallery}
        pluginConfig={props.pluginConfig}
        zoomIndex={props.zoomIndex}
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

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const GalleryCardBody: React.FC<GalleryCardBodyProps> = (props) => {
  const primaryFile =
    props.gallery.files.length > 0 ? props.gallery.files[0] : undefined;

  return (
    <>
      <KeyData>
        <ReleaseData>
          <Date
            context="card"
            currentZoomIndex={props.zoomIndex}
            date={props.gallery.date}
            localeDateFormat={
              props.pluginConfig.general__localeDateFormat ??
              DEFAULT.GENERAL.LOCALE_DATE_FORMAT
            }
            userZoomIndex={
              props.pluginConfig.cards__galleryCard__dateZoomIndex ??
              DEFAULT.CARDS.GALLERY_CARD.DATE_ZOOM_INDEX
            }
          />
        </ReleaseData>
        <FileData>
          {primaryFile && (
            <FileSize
              context="card"
              currentZoomIndex={props.zoomIndex}
              bytes={primaryFile.size}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__fileSizeZoomIndex ??
                DEFAULT.CARDS.GALLERY_CARD.FILE_SIZE_ZOOM_INDEX
              }
            />
          )}
          <ImageCount
            context="card"
            currentZoomIndex={props.zoomIndex}
            count={props.gallery.image_count}
            userZoomIndex={
              props.pluginConfig.cards__galleryCard__imageCountZoomIndex ??
              DEFAULT.CARDS.GALLERY_CARD.IMAGE_COUNT
            }
          />
          <ImageCollectionIcon
            context="card"
            currentZoomIndex={props.zoomIndex}
            isCollection={!primaryFile}
            userZoomIndex={
              props.pluginConfig
                .cards__galleryCard__imageCollectionIconZoomIndex ??
              DEFAULT.CARDS.GALLERY_CARD.IMAGE_COLLECTION_ICON_ZOOM_INDEX
            }
          />
          {primaryFile && (
            <ZipIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              isZip={true} // If there is a primary file, it's always a zip. Loose image galleries don't have any files in the gallery data.
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__zipIconZoomIndex ??
                DEFAULT.CARDS.GALLERY_CARD.ZIP_ICON_ZOOM_INDEX
              }
            />
          )}
        </FileData>
      </KeyData>
      <Details
        context="card"
        currentZoomIndex={props.zoomIndex}
        details={props.gallery.details}
        maxLines={
          props.pluginConfig.cards__galleryCard__detailsMaxLines ??
          DEFAULT.CARDS.GALLERY_CARD.DETAILS_MAX_LINES
        }
        userZoomIndex={
          props.pluginConfig.cards__galleryCard__detailsZoomIndex ??
          DEFAULT.CARDS.GALLERY_CARD.DETAILS_ZOOM_INDEX
        }
      />
      <CastCrew>
        <Photographer
          context="card"
          currentZoomIndex={props.zoomIndex}
          photographer={props.gallery.photographer}
          userZoomIndex={
            props.pluginConfig.cards__galleryCard__photographerZoomIndex ??
            DEFAULT.CARDS.GALLERY_CARD.PHOTOGRAPHER_ZOOM_INDEX
          }
        />
      </CastCrew>
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
  thumbnailBackground: boolean;

  /** Adds user-defined CSS to the thumbnail background. */
  thumbnailBackgroundStyle: string | null;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
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
    background: props.thumbnailBackgroundStyle
      ? props.thumbnailBackgroundStyle
      : undefined,
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
          currentZoomIndex={props.zoomIndex}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userZoomIndex={
            props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex ??
            DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_ZOOM_INDEX
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
  gallery: GalleryDataFragment;

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

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

  const primaryFile =
    props.gallery.files.length > 0 ? props.gallery.files[0] : undefined;

  // Only render technical details if the user has enabled on cards them at any
  // breakpoint. The data will be available anyway under the file section.
  const willRenderFileSize =
    primaryFile &&
    (props.pluginConfig.cards__galleryCard__fileSizeZoomIndex ??
      DEFAULT.CARDS.GALLERY_CARD.FILE_SIZE_ZOOM_INDEX) > -1;
  const willRenderZipIcon =
    primaryFile &&
    (props.pluginConfig.cards__galleryCard__zipIconZoomIndex ??
      DEFAULT.CARDS.GALLERY_CARD.ZIP_ICON_ZOOM_INDEX) > -1;

  // Only render one of the two rating options
  const willRenderRatingBanner =
    (props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex ??
      DEFAULT.CARDS.GALLERY_CARD.RATING_BANNER_ZOOM_INDEX) > -1;

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={galleryLink}
      navigation={props.navigation}
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
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundImage ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_IMAGE
          }
          thumbnailBackgroundStyle={
            props.pluginConfig.cards__galleryCard__thumbnailBackgroundStyle ??
            DEFAULT.CARDS.GALLERY_CARD.THUMBNAIL_BACKGROUND_STYLE
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
            <FileData>
              {willRenderFileSize && (
                <FileSize context="modal" bytes={primaryFile.size} />
              )}
              <ImageCount context="modal" count={props.gallery.image_count} />
              <ImageCollectionIcon
                context="modal"
                isCollection={!primaryFile}
              />
              {willRenderZipIcon && (
                <ZipIcon
                  context="modal"
                  isZip={true} // If there is a primary file, it's always a zip. Loose image galleries don't have any files in the gallery data.
                />
              )}
            </FileData>
          </KeyData>
          <Details context="modal" details={props.gallery.details} />
          <CastCrew>
            <Photographer
              context="modal"
              photographer={props.gallery.photographer}
            />
          </CastCrew>
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
