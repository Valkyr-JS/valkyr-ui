import React from "react";

/**
 * Returns the TagLink component from the plugin API, with a fallback if the API
 * isn't available - e.g. in Storybook.
 */
export const getTagLinkComponent = () =>
  window.PluginApi?.components
    ? window.PluginApi?.components.TagLink
    : (props: { tag: { id: string; name: string } }) => (
        <span className="tag-item">{props.tag.name}</span>
      );
