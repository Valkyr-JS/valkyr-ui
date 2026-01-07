import React from "react";
import { Card } from "react-bootstrap";

interface ValkyrUiGalleryCardProps {
  gallery: SlimGalleryDataFragment;
}

const GalleryCard: React.FC<ValkyrUiGalleryCardProps> = (props) => {
  console.log(`props - '${props.gallery.title || props.gallery.id}': `, props);
  return <Card>Gallery Card</Card>;
};

export default GalleryCard;
