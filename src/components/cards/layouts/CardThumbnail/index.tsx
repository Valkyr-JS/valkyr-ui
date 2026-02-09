import React from "react";
import cx from "classnames";
import RatingBanner from "../../data/RatingBanner";

const componentClass = "vui-card-thumbnail";
const staticImageClass = componentClass + "--static-image";

const imageWrapperClass = componentClass + "__image-wrapper";
const imageWrapperBackgroundClass = imageWrapperClass + "--blurred-bg";

/* ---------------------------------------------------------------------------------------------- */
/*                                      StaticImageThumbnail                                      */
/* ---------------------------------------------------------------------------------------------- */

interface StaticImageThumbnailProps {
  /** Adds a blurred version of the scene thumbnail to the background. */
  backgroundImage: boolean;

  /** Adds user-defined CSS to the thumbnail background. */
  backgroundStyle: string | null;

  /** Whether the component is being rendered in a card component or modal
   * component. */
  context: "card" | "modal";

  /** The link to the object page. */
  link: string;

  /** The zoom index at which to display the rating banner on scene cards. */
  ratingBannerZoomIndex: StashCardGridZoom;

  /** The object's user rating out of 100 */
  rating100: Maybe<Scalars["Int"]["output"]> | undefined;

  /** The user's Stash rating system configuration. */
  ratingSystem?: RatingSystemOptions;

  /** The link to the thumbnail image. */
  src: string;

  /** HTML ID used for aria labelling on the modal title. */
  titleID: string;

  /** The current zoom index. */
  zoomIndex?: StashCardGridZoom;
}

export const StaticImageThumbnail: React.FC<StaticImageThumbnailProps> = (
  props,
) => {
  const componentClassList = cx(componentClass, staticImageClass);
  const imageWrapperClassList = cx(imageWrapperClass, {
    [imageWrapperBackgroundClass]: props.backgroundImage,
  });

  const coverStyles: React.CSSProperties = {
    background: !!props.backgroundStyle ? props.backgroundStyle : undefined,
    backgroundImage: props.backgroundImage ? `url(${props.src})` : undefined,
  };

  return (
    <div className={componentClassList}>
      <a href={props.link} aria-labelledby={props.titleID}>
        <div className={imageWrapperClassList} style={coverStyles}>
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

interface VideoPreviewThumbnail extends StaticImageThumbnailProps {}
