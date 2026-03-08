import React from "react";

/**
 * Simple tag fallback for when plugin API isn't available, e.g. storybook.
 */
export const TagLink = window.PluginApi?.components
  ? window.PluginApi?.components.TagLink
  : (props: { tag: { id: string; name: string } }) => (
      <span className="tag-item">{props.tag.name}</span>
    );
