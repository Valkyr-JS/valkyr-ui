import React from "react";
import AspectRatio from "@/components/cards/data/AspectRatio";
import AudioCodec from "@/components/cards/data/AudioCodec";
import BitRate from "@/components/cards/data/BitRate";
import DateComponent from "@/components/cards/data/Date";
import Details from "@/components/cards/data/Details";
import Director from "@/components/cards/data/Director";
import Duration from "@/components/cards/data/Duration";
import FileSize from "@/components/cards/data/FileSize";
import FrameRate from "@/components/cards/data/FrameRate";
import Interactive from "@/components/cards/data/Interactive";
import OCount from "@/components/cards/data/OCount";
import Organized from "@/components/cards/data/Organized";
import PerformerList from "@/components/cards/data/PerformerList";
import PlayCount from "@/components/cards/data/PlayCount";
import RatingIcon from "@/components/cards/data/RatingIcon";
import Resolution from "@/components/cards/data/Resolution";
import Studio from "@/components/cards/data/Studio";
import VideoCodec from "@/components/cards/data/VideoCodec";
import CardTitle from "@/components/cards/layouts/Title";
import CastCrew from "@/components/cards/layouts/CastCrew";
import FileData from "@/components/cards/layouts/FileData";
import KeyData from "@/components/cards/layouts/KeyData";
import ReleaseData from "@/components/cards/layouts/ReleaseData";
import TopLine from "@/components/cards/layouts/TopLine";
import { getTitleFromObject, makeSceneUrl } from "@/helpers";

interface CardModalScenesSectionProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** The Stash object that this list refers to. */
  object: GalleryDataFragment;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

  /** The list of scenes related to the object. */
  scenes: SlimSceneDataFragment[];

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;
}

const CardModalScenesSection: React.FC<CardModalScenesSectionProps> = (
  props,
) => {
  const componentClass = "vui-card-modal";
  const sectionClass = componentClass + "__scene-section";
  const dataWrapperClass = componentClass + "__scene-data-wrapper";
  const imageWrapperClass = componentClass + "__scene-image-wrapper";
  const userDataClass = componentClass + "__user-data";

  /* -------------------------------------------- Data -------------------------------------------- */

  const getPrimaryFileData = (scene: SlimSceneDataFragment) => {
    const primaryFile = scene.files.length > 0 ? scene.files[0] : undefined;

    if (!primaryFile) return null;

    // Only render technical details if the user has enabled on cards them at any
    // breakpoint. The data will be available anyway under the file section.
    // Exceptions are duration and resolution which should always be available.
    const willRenderAspectRatio =
      props.pluginConfig.cards__sceneCard__aspectRatioZoomIndex > -1;
    const willRenderAudioCodec =
      props.pluginConfig.cards__sceneCard__audioCodecZoomIndex > -1;
    const willRenderBitRate =
      props.pluginConfig.cards__sceneCard__bitRateZoomIndex > -1;
    const willRenderFileSize =
      props.pluginConfig.cards__sceneCard__fileSizeZoomIndex > -1;
    const willRenderFrameRate =
      props.pluginConfig.cards__sceneCard__frameRateZoomIndex > -1;
    const willRenderVideoCodec =
      props.pluginConfig.cards__sceneCard__videoCodecZoomIndex > -1;

    return {
      file: primaryFile,
      args: {
        willRenderAspectRatio,
        willRenderAudioCodec,
        willRenderBitRate,
        willRenderFileSize,
        willRenderFrameRate,
        willRenderVideoCodec,
      },
    };
  };

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <div className={sectionClass}>
      <ul>
        {props.scenes.map((sc) => {
          const primaryFile = getPrimaryFileData(sc);
          const title = getTitleFromObject(sc);
          const sceneLink = makeSceneUrl({ scene: sc });
          const titleID = title + "SceneSection";

          return (
            <li key={sc.id}>
              {sc.paths.screenshot && (
                <div className={imageWrapperClass}>
                  <a href={sceneLink} aria-labelledby={titleID}>
                    <img alt="" src={sc.paths.screenshot} />
                  </a>
                </div>
              )}
              <div className={dataWrapperClass}>
                <CardTitle
                  id={titleID}
                  link={sceneLink}
                  size={6}
                  text={title}
                />
                <TopLine>
                  <Studio context="modal" studio={sc.studio} />
                  <div className={userDataClass}>
                    <PlayCount
                      abbreviate={props.abbreviateCounters}
                      context="modal"
                      count={sc.play_count}
                    />
                    <OCount
                      abbreviate={props.abbreviateCounters}
                      context="modal"
                      count={sc.o_counter}
                    />

                    <RatingIcon
                      context="modal"
                      rating100={sc.rating100}
                      ratingSystem={props.ratingSystem}
                    />
                    <Organized context="modal" organized={sc.organized} />
                  </div>
                </TopLine>
                <KeyData>
                  <ReleaseData>
                    <DateComponent
                      context="modal"
                      date={sc.date}
                      localeDateFormat={
                        props.pluginConfig.general__localeDateFormat
                      }
                    />
                  </ReleaseData>
                  <FileData>
                    {primaryFile && (
                      <>
                        <Duration
                          context="modal"
                          duration={primaryFile.file.duration}
                          timestampPadding={
                            props.pluginConfig.cards__shared__timestampPadding
                          }
                        />
                        {primaryFile.args.willRenderFileSize && (
                          <FileSize
                            context="modal"
                            bytes={primaryFile.file.size}
                          />
                        )}
                        {primaryFile.args.willRenderAspectRatio && (
                          <AspectRatio
                            context="modal"
                            resolution={[
                              primaryFile.file.width,
                              primaryFile.file.height,
                            ]}
                          />
                        )}
                        {primaryFile.args.willRenderBitRate && (
                          <BitRate
                            bytes={primaryFile.file.bit_rate}
                            context="modal"
                          />
                        )}
                        {primaryFile.args.willRenderVideoCodec && (
                          <VideoCodec
                            codec={primaryFile.file.video_codec}
                            context="modal"
                          />
                        )}
                        {primaryFile.args.willRenderAudioCodec && (
                          <AudioCodec
                            codec={primaryFile.file.audio_codec}
                            context="modal"
                          />
                        )}
                        {primaryFile.args.willRenderFrameRate && (
                          <FrameRate
                            context="modal"
                            rate={primaryFile.file.frame_rate}
                          />
                        )}
                        <Resolution
                          asIcon={
                            props.pluginConfig
                              .cards__sceneCard__resolutionAsIcon
                          }
                          context="modal"
                          resolution={[
                            primaryFile.file.width,
                            primaryFile.file.height,
                          ]}
                        />
                      </>
                    )}
                    <Interactive context="modal" interactive={sc.interactive} />
                  </FileData>
                </KeyData>
                <Details context="modal" details={sc.details} />
                <CastCrew>
                  <PerformerList
                    context="modal"
                    genderSortFilter={
                      props.pluginConfig.cards__shared__performerListSortFilter
                    }
                    max={undefined}
                    performers={sc.performers}
                    useGenderedColors={
                      props.pluginConfig
                        .cards__shared__performerListGenderColors
                    }
                  />
                  <Director context="modal" director={sc.director} />
                </CastCrew>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardModalScenesSection;
