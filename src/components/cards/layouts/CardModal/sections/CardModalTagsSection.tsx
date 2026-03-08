import { getTagLinkComponent } from "@/components/apiComponents";
import React from "react";

interface CardModalTagsSectionProps {
  tags: { id: Tag["id"]; name: Tag["name"] }[];
}

const CardModalTagsSection: React.FC<CardModalTagsSectionProps> = (props) => {
  const TagLink = getTagLinkComponent();

  return (
    <div>
      {props.tags.map((t) => {
        return <TagLink key={t.id} tag={t} />;
      })}
    </div>
  );
};

export default CardModalTagsSection;
