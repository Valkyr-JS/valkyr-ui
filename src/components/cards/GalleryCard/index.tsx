import React from "react";
import { Card } from "react-bootstrap";
import CardTitle from "../Title";
import { getTitleFromObject } from "@/helpers";

interface ValkyrUiGalleryCardProps {
  gallery: SlimGalleryDataFragment;
}

const GalleryCard: React.FC<ValkyrUiGalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);

  const galleryLink = `/galleries/${props.gallery.id}`;
  const title = getTitleFromObject(props.gallery)

  return (
    <Card>
      <CardTitle link={galleryLink} text={title} />
    </Card>
  );
};

export default GalleryCard;
