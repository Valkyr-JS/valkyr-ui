import React from "react";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardProps>(
  "SceneCard",
  function (props, _, Original) {
    return [<Original {...props} />];
  }
);
