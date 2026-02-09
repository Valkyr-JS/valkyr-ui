import React, { useEffect, useRef } from "react";
import cx from "classnames";
import RatingBanner from "../../data/RatingBanner";
import "./CardThumbnail.scss";

const componentClass = "vui-card-thumbnail";
const componentPortraitClass = componentClass + "--portrait";
const simpleImageClass = componentClass + "--simple-image";
const videoPreviewClass = componentClass + "--video-preview";

const imageWrapperClass = componentClass + "__image-wrapper";
const imageWrapperBackgroundClass = imageWrapperClass + "--blurred-bg";

/* ---------------------------------------------------------------------------------------------- */
/*                                      SimpleImageThumbnail                                      */
/* ---------------------------------------------------------------------------------------------- */

interface SimpleImageThumbnailProps {
  /** Adds a blurred version of the scene thumbnail to the background. */
  backgroundImage: boolean;

  /** Adds user-defined CSS to the thumbnail background. */
  backgroundStyle: string | null;

  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card" | "modal";

  /** The link to the object page. */
  link: string;

  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The zoom index at which to display the rating banner on scene cards. */
  ratingBannerZoomIndex: StashCardGridZoom;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;

  /** The link to the thumbnail image. */
  src: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

export const SimpleImageThumbnail: React.FC<SimpleImageThumbnailProps> = (
  props,
) => {
  const componentClassList = cx(componentClass, simpleImageClass);
  const imageWrapperClassList = cx(imageWrapperClass, {
    [imageWrapperBackgroundClass]: props.backgroundImage,
  });

  const imageWrapperStyles: React.CSSProperties = {
    background: !!props.backgroundStyle ? props.backgroundStyle : undefined,
    backgroundImage: props.backgroundImage ? `url(${props.src})` : undefined,
  };

  return (
    <div className={componentClassList}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={imageWrapperClassList} style={imageWrapperStyles}>
          <img loading="lazy" alt="" src={props.src} />
        </div>
        <RatingBanner
          context={props.context}
          currentZoomIndex={props.zoomIndex}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userZoomIndex={props.ratingBannerZoomIndex}
        />
      </a>
    </div>
  );
};

/* ---------------------------------------------------------------------------------------------- */
/*                                      VideoPreviewThumbnail                                     */
/* ---------------------------------------------------------------------------------------------- */

interface VideoPreviewThumbnailProps extends SimpleImageThumbnailProps {
  /** Whether a part of the card is currently being hovered over. */
  cardIsHovered?: boolean;

  /** Whether the video file is portrait-oriented or not. */
  isPortrait: boolean;

  /** Enables scene card previews. */
  previewsEnabled: boolean;

  /** The path to the video file. Disabled if `undefined`. */
  videoSrc: string | undefined;
}

export const VideoPreviewThumbnail: React.FC<VideoPreviewThumbnailProps> = (
  props,
) => {
  const componentClassList = cx(componentClass, videoPreviewClass, {
    [componentPortraitClass]: props.isPortrait,
  });
  const imageWrapperClassList = cx(imageWrapperClass, {
    [imageWrapperBackgroundClass]: props.backgroundImage,
  });

  const imageWrapperStyles: React.CSSProperties = {
    background: !!props.backgroundStyle ? props.backgroundStyle : undefined,
    backgroundImage: props.backgroundImage ? `url(${props.src})` : undefined,
  };

  const videoSrc = props.previewsEnabled ? props.videoSrc : undefined;

  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (props.cardIsHovered) {
      // Catch is necessary due to DOMException if user hovers before clicking on page
      videoEl.current?.play().catch(() => {});
    } else videoEl.current?.pause();
  }, [props.cardIsHovered]);

  return (
    <div className={componentClassList}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={imageWrapperClassList} style={imageWrapperStyles}>
          <img loading="lazy" alt="" src={props.src} />
          {videoSrc && (
            <video
              data-testid="video-preview-thumbnail-video"
              disableRemotePlayback
              playsInline
              muted
              loop
              preload="none"
              ref={videoEl}
              src={videoSrc}
            />
          )}
        </div>
        <RatingBanner
          context={props.context}
          currentZoomIndex={props.zoomIndex}
          rating100={props.rating100}
          ratingSystem={props.ratingSystem}
          userZoomIndex={props.ratingBannerZoomIndex}
        />
      </a>
    </div>
  );
};
