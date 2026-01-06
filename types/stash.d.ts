/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Galleries/GalleryCard.tsx#L57 */
interface IGalleryCardProps {
  gallery: Gallery;
  cardWidth?: number;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Scenes/SceneCard.tsx#L94 */
interface ISceneCardProps {
  scene: SlimSceneDataFragment;
  width?: number;
  previewHeight?: number;
  index?: number;
  queue?: SceneQueue;
  compact?: boolean;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
  fromGroupId?: string;
}

interface ISetting {
  id?: string;
  className?: string;
  heading?: React.ReactNode;
  subHeading?: React.ReactNode;
  tooltip?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

interface SlimSceneDataFragment {
  __typename: Scene["__typename"];
  id: Scene["id"];
  title: Scene["title"];
  code: Scene["code"];
  details: Scene["details"];
  director: Scene["director"];
  urls: Scene["urls"];
  date: Scene["date"];
  rating100: Scene["rating100"];
  o_counter: Scene["o_counter"];
  organized: Scene["organized"];
  interactive: Scene["interactive"];
  interactive_speed: Scene["interactive_speed"];
  resume_time: Scene["resume_time"];
  play_duration: Scene["play_duration"];
  play_count: Scene["play_count"];
  files: {
    __typename: VideoFile["__typename"];
    id: VideoFile["id"];
    path: VideoFile["path"];
    size: VideoFile["size"];
    mod_time: VideoFile["mod_time"];
    duration: VideoFile["duration"];
    video_codec: VideoFile["video_codec"];
    audio_codec: VideoFile["audio_codec"];
    width: VideoFile["width"];
    height: Scene["files"]["height"];
    frame_rate: VideoFile["frame_rate"];
    bit_rate: VideoFile["bit_rate"];
    fingerprints: Fingerprint[];
  }[];
  paths: {
    __typename: Scene["paths"]["__typename"];
    screenshot: Scene["paths"]["screenshot"];
    preview: Scene["paths"]["preview"];
    stream: Scene["paths"]["stream"];
    webp: Scene["paths"]["webp"];
    vtt: Scene["paths"]["vtt"];
    sprite: Scene["paths"]["sprite"];
    funscript: Scene["paths"]["funscript"];
    interactive_heatmap: Scene["paths"]["interactive_heatmap"];
    caption: Scene["paths"]["caption"];
  };
  scene_markers: Scene["scene_markers"];
  galleries: Scene["galleries"];
  studio: {
    __typename: Studio["__typename"];
    id: Studio["id"];
    name: Studio["name"];
    image_path: Studio["image_path"];
  } | null;
  groups: Scene["groups"];
  tags: {
    __typename: Tag["__typename"];
    id: Tag["id"];
    name: Tag["name"];
  }[];
  performers: {
    __typename: Performer["__typename"];
    id: Performer["id"];
    name: Performer["name"];
    disambiguation: Performer["disambiguation"];
    gender: "FEMALE" | "MALE";
    favorite: Performer["favorite"];
    image_path: Performer["image_path"];
  }[];
  stash_ids: Scene["stash_ids"];
}
