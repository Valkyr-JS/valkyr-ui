import React from "react";
import DateComponent from "@/components/cards/data/Date";
import Details from "@/components/cards/data/Details";
import FileSize from "@/components/cards/data/FileSize";
import ImageCollectionIcon from "@/components/cards/data/ImageCollectionIcon";
import ImageCount from "@/components/cards/data/ImageCount";
import Organized from "@/components/cards/data/Organized";
import PerformerList from "@/components/cards/data/PerformerList";
import Photographer from "@/components/cards/data/Photographer";
import RatingIcon from "@/components/cards/data/RatingIcon";
import Studio from "@/components/cards/data/Studio";
import ZipIcon from "@/components/cards/data/ZipIcon";
import CardTitle from "@/components/cards/layouts/Title";
import CastCrew from "@/components/cards/layouts/CastCrew";
import FileData from "@/components/cards/layouts/FileData";
import KeyData from "@/components/cards/layouts/KeyData";
import ReleaseData from "@/components/cards/layouts/ReleaseData";
import TopLine from "@/components/cards/layouts/TopLine";
import { getTitleFromObject } from "@/helpers";

interface CardModalGalleriesSectionProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The Stash object that this list refers to. */
  object: SceneDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

  /** The list of galleries related to the object. */
  galleries: SlimGalleryDataFragment[];

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const CardModalGalleriesSection: React.FC<CardModalGalleriesSectionProps> = (
  props,
) => {
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__gallery-section";
  const dataWrapperClass = componentClass + "__gallery-data-wrapper";
  const imageWrapperClass = componentClass + "__gallery-image-wrapper";
  const userDataClass = componentClass + "__user-data";

  /* -------------------------------------------- Data -------------------------------------------- */

  const getPrimaryFileData = (gallery: SlimGalleryDataFragment) => {
    const primaryFile = gallery.files.length > 0 ? gallery.files[0] : undefined;

    if (!primaryFile) return null;

    // Only render technical details if the user has enabled on cards them at any
    // breakpoint. The data will be available anyway under the file section.
    // Exceptions are duration and resolution which should always be available.
    const willRenderFileSize =
      props.pluginConfig.cards__galleryCard__fileSizeZoomIndex > -1;

    return {
      file: primaryFile,
      args: {
        willRenderFileSize,
      },
    };
  };

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.galleries.map((gl) => {
          const primaryFile = getPrimaryFileData(gl);
          const title = getTitleFromObject(gl);
          const galleryLink = `/galleries/${gl.id}`;
          const titleID = title + "GalleriesSection";

          return (
            <li key={gl.id}>
              <div className={imageWrapperClass}>
                <a href={galleryLink} aria-labelledby={titleID}>
                  <img alt="" src={gl.paths.cover} />
                </a>
              </div>
              <div className={dataWrapperClass}>
                <CardTitle
                  id={titleID}
                  link={galleryLink}
                  size={6}
                  text={title}
                />
                <TopLine>
                  <Studio context="modal" studio={gl.studio} />
                  <div className={userDataClass}>
                    <RatingIcon
                      context="modal"
                      rating100={gl.rating100}
                      ratingSystem={props.ratingSystem}
                    />
                    <Organized context="modal" organized={gl.organized} />
                  </div>
                </TopLine>
                <KeyData>
                  <ReleaseData>
                    <DateComponent
                      context="modal"
                      date={gl.date}
                      localeDateFormat={
                        props.pluginConfig.general__localeDateFormat
                      }
                    />
                  </ReleaseData>
                  <FileData>
                    {primaryFile && primaryFile.args.willRenderFileSize && (
                      <FileSize context="modal" bytes={primaryFile.file.size} />
                    )}
                    <ImageCount
                      abbreviate={props.abbreviateCounters}
                      context="modal"
                      count={gl.image_count}
                    />
                    <ImageCollectionIcon
                      context="modal"
                      isCollection={!primaryFile}
                    />
                    {primaryFile && (
                      <ZipIcon
                        context="modal"
                        isZip={true} // If there is a primary file, it's always a zip. Loose image galleries don't have any files in the gallery data.
                      />
                    )}
                  </FileData>
                </KeyData>
                <Details context="modal" details={gl.details} />
                <CastCrew>
                  <PerformerList
                    context="modal"
                    genderSortFilter={
                      props.pluginConfig.cards__shared__performerListSortFilter
                    }
                    max={undefined}
                    performers={gl.performers}
                    useGenderedColors={
                      props.pluginConfig
                        .cards__shared__performerListGenderColors
                    }
                  />
                  <Photographer
                    context="modal"
                    photographer={gl.photographer}
                  />
                </CastCrew>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardModalGalleriesSection;
