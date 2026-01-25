interface FolderDataFragment {
  id: Folder["id"];
  path: Folder["path"];
}

interface GalleryChapterDataFragment {
  id: GalleryChapter["id"];
  title: GalleryChapter["title"];
  image_index: GalleryChapter["image_index"];

  gallery: {
    id: Gallery["id"];
  };
}

interface GalleryFileDataFragment {
  id: GalleryFile["id"];
  path: GalleryFile["path"];
  size: GalleryFile["size"];
  mod_time: GalleryFile["mod_time"];
  fingerprints: {
    type: Fingerprint["type"];
    value: Fingerprint["value"];
  }[];
}

interface GroupDataFragment {
  id: Group["id"];
  name: Group["name"];
  aliases: Group["aliases"];
  duration: Group["duration"];
  date: Group["date"];
  rating100: Group["rating100"];
  director: Group["director"];

  studio: SlimStudioDataFragment;

  tags: Array<SlimTagDataFragment>;

  containing_groups: Array<{
    group: SlimGroupDataFragment;
    description: GroupDescription["description"];
  }>;

  synopsis: Group["synopsis"];
  urls: Group["urls"];
  front_image_path: Group["front_image_path"];
  back_image_path: Group["back_image_path"];
  scene_count: Group["scene_count"];
  scene_count_all: Group["scene_count"];
  performer_count: Group["performer_count"];
  performer_count_all: Group["performer_count"];
  sub_group_count: Group["sub_group_count"];
  sub_group_count_all: Group["sub_group_count"];
  o_counter: Group["o_counter"];

  scenes: Array<{
    id: Scene["id"];
    title: Scene["title"];
  }>;
}

interface PerformerDataFragment {
  id: Performer["id"];
  name: Performer["name"];
  disambiguation: Performer["disambiguation"];
  urls: Performer["urls"];
  gender: Performer["gender"];
  birthdate: Performer["birthdate"];
  ethnicity: Performer["ethnicity"];
  country: Performer["country"];
  eye_color: Performer["eye_color"];
  height_cm: Performer["height_cm"];
  measurements: Performer["measurements"];
  fake_tits: Performer["fake_tits"];
  penis_length: Performer["penis_length"];
  circumcised: Performer["circumcised"];
  career_length: Performer["career_length"];
  tattoos: Performer["tattoos"];
  piercings: Performer["piercings"];
  alias_list: Performer["alias_list"];
  favorite: Performer["favorite"];
  ignore_auto_tag: Performer["ignore_auto_tag"];
  image_path: Performer["image_path"];
  scene_count: Performer["scene_count"];
  image_count: Performer["image_count"];
  gallery_count: Performer["gallery_count"];
  group_count: Performer["group_count"];
  performer_count: Performer["performer_count"];
  o_counter: Performer["o_counter"];

  tags: Array<SlimTagDataFragment>;

  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;
  rating100: Performer["rating100"];
  details: Performer["details"];
  death_date: Performer["death_date"];
  hair_color: Performer["hair_color"];
  weight: Performer["weight"];

  custom_fields: Performer["custom_fields"];
}

interface SceneDataFrgment {
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
  captions: Maybe<
    Array<{
      language_code: VideoCaption["language_code"];
      caption_type: VideoCaption["caption_type"];
    }>
  >;
  created_at: Scene["created_at"];
  updated_at: Scene["updated_at"];
  resume_time: Scene["resume_time"];
  last_played_at: Scene["last_played_at"];
  play_duration: Scene["play_duration"];
  play_count: Scene["play_count"];

  play_history: Scene["play_history"];
  o_history: Scene["o_history"];

  files: Array<VideoFileDataFrgament>;

  paths: {
    screenshot: ScenePathsType["screenshot"];
    preview: ScenePathsType["preview"];
    stream: ScenePathsType["stream"];
    webp: ScenePathsType["webp"];
    vtt: ScenePathsType["vtt"];
    sprite: ScenePathsType["sprite"];
    funscript: ScenePathsType["funscript"];
    interactive_heatmap: ScenePathsType["interactive_heatmap"];
    caption: ScenePathsType["caption"];
  };

  scene_markers: Array<SceneMarkerDataFragment>;

  galleries: Array<SlimGalleryDataFragment>;

  studio: SlimStudioDataFragment;

  groups: Array<{
    group: SlimGroupDataFragment;
    scene_index;
  }>;

  tags: Array<SlimTagDataFragment>;

  performers: Array<PerformerDataFragment>;

  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;

  sceneStreams: Array<{
    url: SceneStreamEndpoint["url"];
    mime_type: SceneStreamEndpoint["mime_type"];
    label: SceneStreamEndpoint["label"];
  }>;
}

interface SceneMarkerDataFragment {
  id: SceneMarker["id"];
  title: SceneMarker["title"];
  seconds: SceneMarker["seconds"];
  end_seconds: SceneMarker["end_seconds"];
  stream: SceneMarker["stream"];
  preview: SceneMarker["preview"];
  screenshot: SceneMarker["screenshot"];
  scene: SceneMarkerSceneDataFragment;
  primary_tag: {
    id: Tag["id"];
    name: Tag["name"];
  };
  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;
}

interface SceneMarkerSceneDataFragment {
  id: Scene["id"];
  title: Scene["title"];
  files: Array<{
    width: VideoFile["width"];
    height: VideoFile["height"];
    path: VideoFile["path"];
  }>;
  performers: Array<{
    id: Performer["id"];
    name: Performer["name"];
    image_path: Performer["image_path"];
  }>;
}

interface SlimGalleryDataFragment {
  id: Gallery["id"];
  title: Gallery["title"];
  code: Gallery["code"];
  date: Gallery["date"];
  urls: Gallery["urls"];
  details: Gallery["details"];
  photographer: Gallery["photographer"];
  rating100: Gallery["rating100"];
  organized: Gallery["organized"];
  files: Array<GalleryFileDataFragment>;
  folder: FolderDataFragment;
  image_count: Gallery["image_count"];
  chapters: Array<{
    id: GalleryChapter["id"];
    title: GalleryChapter["title"];
    image_index: GalleryChapter["image_index"];
  }>;
  studio: {
    id: Studio["id"];
    name: Studio["name"];
    image_path: Studio["image_path"];
  };
  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;
  performers: Array<{
    id: Performer["id"];
    name: Performer["name"];
    gender: Performer["gender"];
    favorite: Performer["favorite"];
    image_path: Performer["image_path"];
  }>;
  scenes: Array<SlimSceneDataFragment>;
  paths: {
    cover: GalleryPathsType["cover"];
    preview: GalleryPathsType["preview"];
  };
}

interface SlimGroupDataFragment {
  id: Group["id"];
  name: Group["name"];
  front_image_path: Group["front_image_path"];
  rating100: Group["rating100"];
}

interface SlimSceneDataFragment {
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

  files: Array<VideoFileDataFrgament>;

  paths: {
    screenshot: ScenePathsType["screenshot"];
    preview: ScenePathsType["preview"];
    stream: ScenePathsType["stream"];
    webp: ScenePathsType["webp"];
    vtt: ScenePathsType["vtt"];
    sprite: ScenePathsType["sprite"];
    funscript: ScenePathsType["funscript"];
    interactive_heatmap: ScenePathsType["interactive_heatmap"];
    caption: ScenePathsType["caption"];
  };

  scene_markers: {
    id: SceneMarker["id"];
    title: SceneMarker["title"];
    seconds: SceneMarker["seconds"];
    primary_tag: {
      id: Tag["id"];
      name: Tag["name"];
    };
  };

  galleries: Array<{
    id: Gallery["id"];
    files: Array<{
      path: GalleryFile["path"];
    }>;
    folder: {
      path: Folder["path"];
    };
    title: Gallery["title"];
  }>;

  studio: {
    id: Studio["id"];
    name: Studio["name"];
    image_path: Studio["image_path"];
  };

  groups: Array<{
    group: {
      id: Group["id"];
      name: Group["name"];
      front_image_path: Group["front_image_path"];
    };
    scene_index: SceneGroup["scene_index"];
  }>;

  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;

  performers: Array<{
    id: Performer["id"];
    name: Performer["name"];
    disambiguation: Performer["disambiguation"];
    gender: Performer["gender"];
    favorite: Performer["favorite"];
    image_path: Performer["image_path"];
  }>;

  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;
}

interface SlimStudioDataFragment {
  id: Studio["id"];
  name: Studio["name"];
  image_path: Studio["image_path"];
  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;
  parent_studio: {
    id: Studio["id"];
  };
  details: Studio["details"];
  rating100: Studio["rating100"];
  aliases: Studio["aliases"];
  tags: Array<{
    id: Tag["id"];
    name: Tag["name"];
  }>;
  o_counter: Studio["o_counter"];
}

interface SlimTagDataFragment {
  id: Tag["id"];
  name: Tag["name"];
  sort_name: Tag["sort_name"];
  aliases: Tag["aliases"];
  image_path: Tag["image_path"];
  parent_count: Tag["parent_count"];
  child_count: Tag["child_count"];

  stash_ids: Array<{
    endpoint: StashId["endpoint"];
    stash_id: StashId["stash_id"];
    updated_at: StashId["updated_at"];
  }>;
}

interface VideoFileDataFrgament {
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
