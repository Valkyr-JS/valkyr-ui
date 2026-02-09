import React, { useState } from "react";
import { getFileIsPortrait, getTitleFromObject, makeSceneUrl } from "@/helpers";
import AspectRatio from "../data/AspectRatio";
import AudioCodec from "../data/AudioCodec";
import BitRate from "../data/BitRate";
import Date from "../data/Date";
import Details from "../data/Details";
import Director from "../data/Director";
import Duration from "../data/Duration";
import FileSize from "../data/FileSize";
import FrameRate from "../data/FrameRate";
import Interactive from "../data/Interactive";
import OCount from "../data/OCount";
import Organized from "../data/Organized";
import PerformerList from "../data/PerformerList";
import PlayCount from "../data/PlayCount";
import RatingIcon from "../data/RatingIcon";
import Resolution from "../data/Resolution";
import Studio from "../data/Studio";
import VideoCodec from "../data/VideoCodec";
import {
  CardModalContent,
  CardModalNavigation,
  CardModalPerformersSection,
  CardModalTagsSection,
} from "../layouts/CardModal";
import CastCrew from "../layouts/CastCrew";
import FileData from "../layouts/FileData";
import GridCard, { CardFooterProps } from "../layouts/GridCard";
import KeyData from "../layouts/KeyData";
import ReleaseData from "../layouts/ReleaseData";
import {
  SimpleImageThumbnail,
  VideoPreviewThumbnail,
} from "../layouts/CardThumbnail";
import "./SceneCard.scss";

interface SceneCardProps extends SelectableCardProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** Footer props. */
  footer: Omit<CardFooterProps, "sections">;

  /** The index of the scene in the current page query. */
  index?: ISceneCardProps["index"];

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const SceneCard: React.FC<SceneCardProps> = (props) => {
  const componentClass = "vui-scene-card";
  const userDataClass = componentClass + "__user-data";

  const id = createSceneCardID(props.scene.id);
  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;
  const isPortrait = getFileIsPortrait(primaryFile);
  const preview = props.pluginConfig.cards__sceneCard__previewsEnabled
    ? (props.scene.paths.preview ?? undefined)
    : undefined;

  const [isHovered, setIsHovered] = useState(false);

  const footerSections: CardModalSectionData[] = [["details"]];
  if (props.scene.performers.length)
    footerSections.push(["performers", props.scene.performers.length]);
  if (props.scene.tags.length)
    footerSections.push(["tags", props.scene.tags.length]);
  const footerProps = { ...props.footer, sections: footerSections };

  return (
    <GridCard
      classname={componentClass}
      footer={footerProps}
      id={id}
      link={sceneLink}
      onSelectedChanged={props.onSelectedChanged}
      onMouseOut={() => setIsHovered(false)}
      onMouseOver={() => setIsHovered(true)}
      pluginConfig={props.pluginConfig}
      selected={props.selected}
      selecting={props.selecting}
      thumbnail={
        <VideoPreviewThumbnail
          backgroundImage={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundImage
          }
          backgroundStyle={
            props.pluginConfig.cards__sceneCard__thumbnailBackgroundStyle
          }
          cardIsHovered={isHovered}
          context="card"
          isPortrait={isPortrait}
          link={sceneLink}
          previewsEnabled={props.pluginConfig.cards__sceneCard__previewsEnabled}
          rating100={props.scene.rating100}
          ratingBannerZoomIndex={
            props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex
          }
          ratingSystem={props.ratingSystem}
          src={props.scene.paths.screenshot as string}
          titleID={id}
          videoSrc={preview}
          zoomIndex={props.zoomIndex}
        />
      }
      title={title}
      topLine={
        <>
          <Studio
            context="card"
            currentZoomIndex={props.zoomIndex}
            studio={props.scene.studio}
            userZoomIndex={props.pluginConfig.cards__sceneCard__studioZoomIndex}
          />
          <div className={userDataClass}>
            <PlayCount
              abbreviate={props.abbreviateCounters}
              context="card"
              count={props.scene.play_count}
              currentZoomIndex={props.zoomIndex}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__playCountZoomIndex
              }
            />
            <OCount
              abbreviate={props.abbreviateCounters}
              context="card"
              count={props.scene.o_counter}
              currentZoomIndex={props.zoomIndex}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__oCountZoomIndex
              }
            />
            <RatingIcon
              context="card"
              currentZoomIndex={props.zoomIndex}
              rating100={props.scene.rating100}
              ratingSystem={props.ratingSystem}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__ratingIconZoomIndex
              }
            />
            <Organized
              context="card"
              currentZoomIndex={props.zoomIndex}
              organized={props.scene.organized}
              userZoomIndex={
                props.pluginConfig.cards__sceneCard__organizedZoomIndex
              }
            />
          </div>
        </>
      }
    >
      <SceneCardBody
        pluginConfig={props.pluginConfig}
        scene={props.scene}
        zoomIndex={props.zoomIndex}
      />
    </GridCard>
  );
};

export default SceneCard;

/* ---------------------------------------------------------------------------------------------- */
/*                                    Scene card body component                                   */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardBodyProps {
  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

  /** The Stash scene data. */
  scene: SlimSceneDataFragment;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

const SceneCardBody: React.FC<SceneCardBodyProps> = (props) => {
  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;

  return (
    <>
      <KeyData>
        <ReleaseData>
          <Date
            context="card"
            currentZoomIndex={props.zoomIndex}
            date={props.scene.date}
            localeDateFormat={props.pluginConfig.general__localeDateFormat}
            userZoomIndex={props.pluginConfig.cards__sceneCard__dateZoomIndex}
          />
        </ReleaseData>
        <FileData>
          {primaryFile && (
            <>
              <Duration
                context="card"
                currentZoomIndex={props.zoomIndex}
                duration={primaryFile.duration}
                timestampPadding={
                  props.pluginConfig.cards__shared__timestampPadding
                }
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__durationZoomIndex
                }
              />
              <FileSize
                context="card"
                currentZoomIndex={props.zoomIndex}
                bytes={primaryFile.size}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__fileSizeZoomIndex
                }
              />
              <AspectRatio
                context="card"
                currentZoomIndex={props.zoomIndex}
                resolution={[primaryFile.width, primaryFile.height]}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__aspectRatioZoomIndex
                }
              />
              <BitRate
                bytes={primaryFile.bit_rate}
                context="card"
                currentZoomIndex={props.zoomIndex}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__bitRateZoomIndex
                }
              />
              <VideoCodec
                context="card"
                codec={primaryFile.video_codec}
                currentZoomIndex={props.zoomIndex}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__videoCodecZoomIndex
                }
              />
              <AudioCodec
                context="card"
                codec={primaryFile.audio_codec}
                currentZoomIndex={props.zoomIndex}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__audioCodecZoomIndex
                }
              />
              <FrameRate
                context="card"
                currentZoomIndex={props.zoomIndex}
                rate={primaryFile.frame_rate}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__frameRateZoomIndex
                }
              />
              <Resolution
                asIcon={props.pluginConfig.cards__sceneCard__resolutionAsIcon}
                context="card"
                currentZoomIndex={props.zoomIndex}
                resolution={[primaryFile.width, primaryFile.height]}
                userZoomIndex={
                  props.pluginConfig.cards__sceneCard__resolutionZoomIndex
                }
              />
            </>
          )}
          <Interactive
            context="card"
            currentZoomIndex={props.zoomIndex}
            interactive={props.scene.interactive}
            userZoomIndex={
              props.pluginConfig.cards__sceneCard__interactiveZoomIndex
            }
          />
        </FileData>
      </KeyData>
      <Details
        context="card"
        currentZoomIndex={props.zoomIndex}
        details={props.scene.details}
        maxLines={props.pluginConfig.cards__sceneCard__detailsMaxLines}
        userZoomIndex={props.pluginConfig.cards__sceneCard__detailsZoomIndex}
      />
      <CastCrew>
        <PerformerList
          context="card"
          currentZoomIndex={props.zoomIndex}
          genderSortFilter={
            props.pluginConfig.cards__shared__performerListSortFilter
          }
          max={props.pluginConfig.cards__shared__performerListMaxItems}
          performers={props.scene.performers}
          useGenderedColors={
            props.pluginConfig.cards__shared__performerListGenderColors
          }
          userZoomIndex={
            props.pluginConfig.cards__sceneCard__performerListZoomIndex
          }
        />
        <Director
          context="card"
          currentZoomIndex={props.zoomIndex}
          director={props.scene.director}
          userZoomIndex={props.pluginConfig.cards__sceneCard__directorZoomIndex}
        />
      </CastCrew>
    </>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                   Scene card modal component                                   */
/* ---------------------------------------------------------------------------------------------- */

interface SceneCardModalContentProps {
  /** Whether counter data should be abbreviated. */
  abbreviateCounters: boolean;

  /** Handler for closing the modal. */
  closeHandler: () => void;

  /** Stash user setting for whether to continue to the next scene when the
   * current one ends. */
  continuePlaylist?: Maybe<boolean> | undefined;

  /** The index of the scene in the current page query. */
  index?: ISceneCardProps["index"];

  /** Properties required for navigating in the modal. */
  navigation?: CardModalNavigation;

  /** The user's plugin configuration for Valkyr UI. */
  pluginConfig: ValkyrUiPluginConfig;

  /** The scenes in the current query. */
  queue?: ISceneCardProps["queue"];

  /** The user's Stash rating system configuration */
  ratingSystem?: RatingSystemOptions;

  /** The Stash scene data. */
  scene: SceneDataFragment;

  /** The currently displayed modal section. */
  section: CardModalSection;

  /** Handler that sets the currently displayed modal section. */
  setSection: (section: CardModalSection) => void;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;
}

export const SceneCardModalContent: React.FC<SceneCardModalContentProps> = (
  props,
) => {
  const componentClass = "vui-scene-card";
  const userDataClass = componentClass + "__user-data";

  const title = getTitleFromObject(props.scene);
  const sceneLink = makeSceneUrl({
    cont: props.continuePlaylist ?? false,
    index: props.index,
    scene: props.scene,
    queue: props.queue,
  });

  const primaryFile =
    props.scene.files.length > 0 ? props.scene.files[0] : undefined;

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

  // Only render one of the two rating options
  const willRenderRatingBanner =
    props.pluginConfig.cards__sceneCard__ratingBannerZoomIndex > -1;

  const sections: CardModalSectionData[] = [["details"]];
  if (props.scene.performers.length)
    sections.push(["performers", props.scene.performers.length]);
  if (props.scene.tags.length) sections.push(["tags", props.scene.tags.length]);

  return (
    <CardModalContent
      closeHandler={props.closeHandler}
      link={sceneLink}
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
          link={sceneLink}
          rating100={props.scene.rating100}
          ratingBannerZoomIndex={
            props.pluginConfig.cards__galleryCard__ratingBannerZoomIndex
          }
          ratingSystem={props.ratingSystem}
          src={props.scene.paths.screenshot as string}
          titleID={props.titleID}
        />
      }
      title={title}
      titleID={props.titleID}
      topLine={
        <>
          <Studio context="modal" studio={props.scene.studio} />
          <div className={userDataClass}>
            <PlayCount
              abbreviate={props.abbreviateCounters}
              context="modal"
              count={props.scene.play_count}
            />
            <OCount
              abbreviate={props.abbreviateCounters}
              context="modal"
              count={props.scene.o_counter}
            />
            {willRenderRatingBanner ? null : (
              <RatingIcon
                context="modal"
                rating100={props.scene.rating100}
                ratingSystem={props.ratingSystem}
              />
            )}
            <Organized context="modal" organized={props.scene.organized} />
          </div>
        </>
      }
    >
      {props.section === "tags" ? (
        <CardModalTagsSection tags={props.scene.tags} />
      ) : props.section === "performers" ? (
        <CardModalPerformersSection
          genderSortFilter={
            props.pluginConfig.cards__shared__performerListSortFilter
          }
          object={props.scene}
          performers={props.scene.performers}
          ratingSystem={props.ratingSystem}
        />
      ) : (
        <>
          <KeyData>
            <ReleaseData>
              <Date
                context="modal"
                date={props.scene.date}
                localeDateFormat={props.pluginConfig.general__localeDateFormat}
              />
            </ReleaseData>
            <FileData>
              {primaryFile && (
                <>
                  <Duration
                    context="modal"
                    duration={primaryFile.duration}
                    timestampPadding={
                      props.pluginConfig.cards__shared__timestampPadding
                    }
                  />
                  {willRenderFileSize && (
                    <FileSize context="modal" bytes={primaryFile.size} />
                  )}
                  {willRenderAspectRatio && (
                    <AspectRatio
                      context="modal"
                      resolution={[primaryFile.width, primaryFile.height]}
                    />
                  )}
                  {willRenderBitRate && (
                    <BitRate bytes={primaryFile.bit_rate} context="modal" />
                  )}
                  {willRenderVideoCodec && (
                    <VideoCodec
                      codec={primaryFile.video_codec}
                      context="modal"
                    />
                  )}
                  {willRenderAudioCodec && (
                    <AudioCodec
                      codec={primaryFile.audio_codec}
                      context="modal"
                    />
                  )}
                  {willRenderFrameRate && (
                    <FrameRate context="modal" rate={primaryFile.frame_rate} />
                  )}
                  <Resolution
                    asIcon={
                      props.pluginConfig.cards__sceneCard__resolutionAsIcon
                    }
                    context="modal"
                    resolution={[primaryFile.width, primaryFile.height]}
                  />
                </>
              )}
              <Interactive
                context="modal"
                interactive={props.scene.interactive}
              />
            </FileData>
          </KeyData>
          <Details context="modal" details={props.scene.details} />
          <CastCrew>
            <PerformerList
              context="modal"
              genderSortFilter={
                props.pluginConfig.cards__shared__performerListSortFilter
              }
              max={undefined}
              performers={props.scene.performers}
              useGenderedColors={
                props.pluginConfig.cards__shared__performerListGenderColors
              }
            />
            <Director context="modal" director={props.scene.director} />
          </CastCrew>
        </>
      )}
    </CardModalContent>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                             Helpers                                            */
/* ---------------------------------------------------------------------------------------------- */

/** Helper function to create consitently formatted scene IDs. */
export const createSceneCardID = (stashID: string) => "sceneCard-" + stashID;
