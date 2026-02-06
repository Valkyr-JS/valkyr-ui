import React from "react";

interface CardModalTagsSectionProps {
  tags: { id: Tag["id"]; name: Tag["name"] }[];
}

const CardModalTagsSection: React.FC<CardModalTagsSectionProps> = (props) => {
  // Simple tag fallback for when plugin API isn't available, e.g. storybook
  const TagLink = window.PluginApi?.components
    ? window.PluginApi?.components.TagLink
    : (props: { tag: { id: string; name: string } }) => (
        <span className="tag-item">{props.tag.name}</span>
      );

  return (
    <div>
      {props.tags.map((t) => {
        return <TagLink tag={t} />;
      })}
    </div>
  );
};

export default CardModalTagsSection;
