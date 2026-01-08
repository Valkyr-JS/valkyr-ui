import React from "react";
import { CLASSNAME } from "@/constants";
import { getTitleFromObject } from "@/helpers";
import GridCard from "../GridCard";
import "./GalleryCard.scss"

interface ValkyrUiGalleryCardProps {
  gallery: SlimGalleryDataFragment;
}

const GalleryCard: React.FC<ValkyrUiGalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);

  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery);

  return (
    <GridCard
      link={galleryLink}
      objectType="gallery"
      thumbnail={
        <GalleryCardThumbnail
          link={galleryLink}
          src={props.gallery.paths.cover}
        />
      }
      title={title}
    />
  );
};

export default GalleryCard;

interface GalleryCardThumbnailProps {
  link: string;
  src: string;
}

const GalleryCardThumbnail: React.FC<GalleryCardThumbnailProps> = (props) => {
  const componentClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail";
  const coverClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail-cover";
  const imgClass = CLASSNAME.NAMESPACE + "__gallery-card-thumbnail-img";

  return (
    <div className={componentClass}>
      <a href={props.link}>
        <div className={coverClass}>
          <img className={imgClass} loading="lazy" alt="" src={props.src} />
        </div>
      </a>
    </div>
  );
};
