import React from "react";
import { getTitleFromObject } from "@/helpers";
import Date from "../data/Date";
import Details from "../data/Details";
import FileSize from "../data/FileSize";
import ImageCollectionIcon from "../data/ImageCollectionIcon";
import ImageCount from "../data/ImageCount";
import Organized from "../data/Organized";
import PerformerList from "../data/PerformerList";
import Photographer from "../data/Photographer";
import RatingIcon from "../data/RatingIcon";
import Studio from "../data/Studio";
import ZipIcon from "../data/ZipIcon";
import {
  CardModalContent,
  CardModalNavigation,
  CardModalPerformersSection,
  CardModalScenesSection,
  CardModalTagsSection,
} from "../layouts/CardModal";
import { SimpleImageThumbnail } from "../layouts/CardThumbnail";
import CastCrew from "../layouts/CastCrew";
import FileData from "../layouts/FileData";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import "./GalleryCard.scss";

interface GalleryCardProps extends SelectableCardProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** Footer props. Leave `undefined` to not render the footer. */
  footer: Omit<CardFooterProps, "sections">;

  /** The gallery data passed from native Stash components. */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

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
  if (props.gallery.performers.length)
    footerSections.push(["performers", props.gallery.performers.length]);
  if (props.gallery.scenes.length)
    footerSections.push(["scenes", props.gallery.scenes.length]);
  if (props.gallery.tags.length)
    footerSections.push(["tags", props.gallery.tags.length]);
  const footerProps = { ...props.footer, sections: footerSections };

  return (
    <GridCard
      classname={componentClass}
      footer={footerProps}
      id={id}
      link={galleryLink}
      onSelectedChanged={props.onSelectedChanged}
      pluginConfig={props.pluginConfig}
      selected={props.selected}
      selecting={props.selecting}
      thumbnail={
        <SimpleImageThumbnail
          backgroundImage={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage
          }
          backgroundStyle={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle
          }
          context="card"
          link={galleryLink}
          rating100={props.gallery.rating100}
          ratingBannerZoomIndex={
            props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex
          }
          ratingSystem={props.ratingSystem}
          src={props.gallery.paths.cover}
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
              props.pluginConfig.cards__galleryCard__studioZoomIndex
            }
          />
          <div className={userDataClass}>
            <RatingIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              rating100={props.gallery.rating100}
              ratingSystem={props.ratingSystem}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__ratingIconZoomIndex
              }
            />
            <Organized
              context="card"
              currentZoomIndex={props.zoomIndex}
              organized={props.gallery.organized}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__organizedZoomIndex
              }
            />
          </div>
        </>
      }
    >
      <GalleryCardBody
        abbreviateCounters={props.abbreviateCounters}
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
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The Stash gallery data */
  gallery: SlimGalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

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
            localeDateFormat={props.pluginConfig.general__localeDateFormat}
            userZoomIndex={props.pluginConfig.cards__galleryCard__dateZoomIndex}
          />
        </ReleaseData>
        <FileData>
          {primaryFile && (
            <FileSize
              context="card"
              currentZoomIndex={props.zoomIndex}
              bytes={primaryFile.size}
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__fileSizeZoomIndex
              }
            />
          )}
          <ImageCount
            abbreviate={props.abbreviateCounters}
            context="card"
            currentZoomIndex={props.zoomIndex}
            count={props.gallery.image_count}
            userZoomIndex={
              props.pluginConfig.cards__galleryCard__imageCountZoomIndex
            }
          />
          <ImageCollectionIcon
            context="card"
            currentZoomIndex={props.zoomIndex}
            isCollection={!primaryFile}
            userZoomIndex={
              props.pluginConfig
                .cards__galleryCard__imageCollectionIconZoomIndex
            }
          />
          {primaryFile && (
            <ZipIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              isZip={true} // If there is a primary file, it's always a zip. Loose image galleries don't have any files in the gallery data.
              userZoomIndex={
                props.pluginConfig.cards__galleryCard__zipIconZoomIndex
              }
            />
          )}
        </FileData>
      </KeyData>
      <Details
        context="card"
        currentZoomIndex={props.zoomIndex}
        details={props.gallery.details}
        maxLines={props.pluginConfig.cards__galleryCard__detailsMaxLines}
        userZoomIndex={props.pluginConfig.cards__galleryCard__detailsZoomIndex}
      />
      <CastCrew>
        <PerformerList
          context="card"
          currentZoomIndex={props.zoomIndex}
          genderSortFilter={
            props.pluginConfig.cards__shared__performerListSortFilter
          }
          max={props.pluginConfig.cards__shared__performerListMaxItems}
          performers={props.gallery.performers}
          useGenderedColors={
            props.pluginConfig.cards__shared__performerListGenderColors
          }
          userZoomIndex={
            props.pluginConfig.cards__galleryCard__performerListZoomIndex
          }
        />
        <Photographer
          context="card"
          currentZoomIndex={props.zoomIndex}
          photographer={props.gallery.photographer}
          userZoomIndex={
            props.pluginConfig.cards__galleryCard__photographerZoomIndex
          }
        />
      </CastCrew>
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                  Gallery card modal component                                  */
/* ---------------------------------------------------------------------------------------------- */

interface GalleryCardModalContentProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** The Stash gallery data. */
  gallery: GalleryDataFragment;

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

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
  if (props.gallery.performers.length)
    sections.push(["performers", props.gallery.performers.length]);
  if (props.gallery.scenes.length)
    sections.push(["scenes", props.gallery.scenes.length]);
  if (props.gallery.tags.length)
    sections.push(["tags", props.gallery.tags.length]);

  const primaryFile =
    props.gallery.files.length > 0 ? props.gallery.files[0] : undefined;

  // Only render technical details if the user has enabled on cards them at any
  // breakpoint. The data will be available anyway under the file section.
  const willRenderFileSize =
    primaryFile &&
    props.pluginConfig.cards__galleryCard__fileSizeZoomIndex > -1;
  const willRenderZipIcon =
    primaryFile && props.pluginConfig.cards__galleryCard__zipIconZoomIndex > -1;

  // Only render one of the two rating options
  const willRenderRatingBanner =
    props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex > -1;

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
        <SimpleImageThumbnail
          backgroundImage={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage
          }
          backgroundStyle={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle
          }
          context="modal"
          link={galleryLink}
          rating100={props.gallery.rating100}
          ratingBannerZoomIndex={
            props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex
          }
          ratingSystem={props.ratingSystem}
          src={props.gallery.paths.cover}
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
      ) : props.section === "performers" ? (
        <CardModalPerformersSection
          genderSortFilter={
            props.pluginConfig.cards__shared__performerListSortFilter
          }
          object={props.gallery}
          performers={props.gallery.performers}
          ratingSystem={props.ratingSystem}
        />
      ) : props.section === "scenes" ? (
        <CardModalScenesSection
          abbreviateCounters={props.abbreviateCounters}
          pluginConfig={props.pluginConfig}
          object={props.gallery}
          scenes={props.gallery.scenes}
          ratingSystem={props.ratingSystem}
        />
      ) : (
        <>
          <KeyData>
            <ReleaseData>
              <Date
                context="modal"
                date={props.gallery.date}
                localeDateFormat={props.pluginConfig.general__localeDateFormat}
              />
            </ReleaseData>
            <FileData>
              {willRenderFileSize && (
                <FileSize context="modal" bytes={primaryFile.size} />
              )}
              <ImageCount
                abbreviate={props.abbreviateCounters}
                context="modal"
                count={props.gallery.image_count}
              />
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
            <PerformerList
              context="modal"
              genderSortFilter={
                props.pluginConfig.cards__shared__performerListSortFilter
              }
              max={undefined}
              performers={props.gallery.performers}
              useGenderedColors={
                props.pluginConfig.cards__shared__performerListGenderColors
              }
            />
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
