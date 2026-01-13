interface FolderData {
  id: Folder["id"];
  path: Folder["path"];
}
interface GalleryFileData {
  id: GalleryFile["id"];
  path: GalleryFile["path"];
  size: GalleryFile["size"];
  mod_time: GalleryFile["mod_time"];
  fingerprints: Array<{
    type: Fingerprint["type"];
    value: Fingerprint["value"];
  }>;
}

interface IGalleryCardGrid {
  galleries: SlimGalleryDataFragment[];
  selectedIds: Set<string>;
  zoomIndex: number;
  onSelectChange: (id: string, selected: boolean, shiftKey: boolean) => void;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Galleries/GalleryCard.tsx#L57 */
interface IGalleryCardProps {
  gallery: Gallery;
  cardWidth?: number;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
}

interface IPlaySceneOptions {
  sceneIndex?: number;
  newPage?: number;
  autoPlay?: boolean;
  continue?: boolean;
  start?: number;
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

interface ISceneCardGrid {
  scenes: SlimSceneDataFragment[];
  queue?: SceneQueue;
  selectedIds: Set<string>;
  zoomIndex: number;
  onSelectChange: (id: string, selected: boolean, shiftKey: boolean) => void;
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

interface SlimGalleryDataFragment {
  chapters: Array<{
    id: GalleryChapter["id"];
    title: GalleryChapter["title"];
    image_index: GalleryChapter["image_index"];
  }>;
  code?: Gallery["code"];
  date?: Gallery["date"];
  details?: Gallery["details"];
  files: Array<GalleryFileData>;
  folder?: Maybe<FolderData>;
  id: Gallery["id"];
  image_count: Gallery["image_count"];
  organized: Gallery["organized"];
  paths: {
    cover: GalleryPathsType["cover"];
    preview: GalleryPathsType["preview"];
  };
  performers: Array<{
    favorite: Performer["favorite"];
    gender?: Performer["gender"];
    id: Performer["id"];
    image_path?: Performer["image_path"];
    name: Performer["name"];
  }>;
  photographer?: Gallery["photographer"];
  rating100?: Gallery["rating100"];
  scenes: Array<SlimSceneDataFragment>;
  studio?: Maybe<{
    id: Studio["id"];
    image_path?: Studio["image_path"];
    name: Studio["name"];
  }>;
  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;
  title?: Gallery["title"];
  urls: Gallery["urls"];
}

interface SlimSceneDataFragment {
  code?: Scene["code"];
  date?: Scene["date"];
  details?: Scene["details"];
  director?: Scene["director"];
  files: Array<VideoFileData>;
  galleries: Array<{
    id: Gallery["id"];
    files: Array<{
      path: GalleryFile["path"];
    }>;
    folder?: Maybe<{
      path: Folder["path"];
    }>;
    title?: Gallery["title"];
  }>;
  groups: Array<{
    group: {
      front_image_path?: Group["front_image_path"];
      id: Group["id"];
      name: Group["name"];
    };
    scene_index?: SceneGroup["scene_index"];
  }>;
  id: Scene["id"];
  interactive: Scene["interactive"];
  interactive_speed?: Scene["interactive_speed"];
  o_counter?: Scene["o_counter"];
  organized: Scene["organized"];
  paths: {
    caption?: ScenePathsType["caption"];
    funscript?: ScenePathsType["funscript"];
    interactive_heatmap?: ScenePathsType["interactive_heatmap"];
    preview?: ScenePathsType["preview"];
    screenshot?: ScenePathsType["screenshot"];
    sprite?: ScenePathsType["sprite"];
    stream?: ScenePathsType["stream"];
    webp?: ScenePathsType["webp"];
    vtt?: ScenePathsType["vtt"];
  };
  performers: Array<{
    disambiguation?: Performer["disambiguation"];
    favorite: Performer["favorite"];
    gender?: Performer["gender"];
    id: Performer["id"];
    image_path?: Performer["image_path"];
    name: Performer["name"];
  }>;
  play_count?: Scene["play_count"];
  play_duration?: Scene["play_duration"];
  rating100?: Scene["rating100"];
  resume_time?: Scene["resume_time"];
  scene_markers: Array<{
    id: SceneMarker["id"];
    primary_tag: {
      id: Tag["id"];
      name: Tag["name"];
    };
    seconds: SceneMarker["seconds"];
    title: SceneMarker["title"];
  }>;
  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;
  studio?: Maybe<{
    id: Studio["id"];
    image_path?: Studio["image_path"];
    name: Studio["name"];
  }>;
  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;
  title?: Scene["title"];
  urls: Scene["urls"];
}

interface VideoFileData {
  id: VideoFile["id"];
  path: VideoFile["path"];
  size: VideoFile["size"];
  mod_time: VideoFile["mod_time"];
  duration: VideoFile["duration"];
  video_codec: VideoFile["video_codec"];
  audio_codec: VideoFile["audio_codec"];
  width: VideoFile["width"];
  height: VideoFile["height"];
  frame_rate: VideoFile["frame_rate"];
  bit_rate: VideoFile["bit_rate"];
  fingerprints: {
    type: Fingerprint["type"];
    value: Fingerprint["value"];
  }[];
}
