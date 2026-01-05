// import { SceneCard } from "@/components/cards/SceneCard";
import React from "react";
const { PluginApi } = window;

PluginApi.patch.instead<ISceneCardProps>(
  "SceneCard",
  function (props, _, Original) {
    console.log(props);
    return [<Original {...props} />];
  }
);
