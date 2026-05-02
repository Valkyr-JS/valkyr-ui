type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
// Generated on 2026-05-02T17:05:30+01:00

/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: unknown; output: unknown; }
  /** A String -> Boolean map */
  BoolMap: { input: { [key: string]: boolean }; output: { [key: string]: boolean }; }
  Int64: { input: number; output: number; }
  /** A String -> Any map */
  Map: { input: { [key: string]: unknown }; output: { [key: string]: unknown }; }
  /** A plugin ID -> Map (String -> Any map) map */
  PluginConfigMap: { input: { [id: string]: { [key: string]: unknown } }; output: { [id: string]: { [key: string]: unknown } }; }
  SavedObjectFilter: { input: SavedObjectFilter; output: SavedObjectFilter; }
  SavedUIOptions: { input: SavedUIOptions; output: SavedUIOptions; }
  /** An RFC3339 timestamp */
  Time: { input: string; output: string; }
  /**
   * Timestamp is a point in time. It is always output as RFC3339-compatible time points.
   * It can be input as a RFC3339 string, or as "<4h" for "4 hours in the past" or ">5m"
   * for "5 minutes in the future"
   */
  Timestamp: { input: string; output: string; }
  UIConfig: { input: IUIConfig; output: IUIConfig; }
  /** A multipart file upload */
  Upload: { input: File; output: File; }
};

type AddTempDlnaipInput = {
  address: Scalars['String']['input'];
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']['input']>;
};

type AnonymiseDatabaseInput = {
  download?: InputMaybe<Scalars['Boolean']['input']>;
};

type AssignSceneFileInput = {
  file_id: Scalars['ID']['input'];
  scene_id: Scalars['ID']['input'];
};

type AutoTagMetadataInput = {
  /** Paths to tag, null for all files */
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /** IDs of performers to tag files with, or "*" for all */
  performers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: InputMaybe<Array<Scalars['String']['input']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

type AutoTagMetadataOptions = {
  __typename?: 'AutoTagMetadataOptions';
  /** IDs of performers to tag files with, or "*" for all */
  performers?: Maybe<Array<Scalars['String']['output']>>;
  /** IDs of studios to tag files with, or "*" for all */
  studios?: Maybe<Array<Scalars['String']['output']>>;
  /** IDs of tags to tag files with, or "*" for all */
  tags?: Maybe<Array<Scalars['String']['output']>>;
};

type BackupDatabaseInput = {
  download?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, blob files will be included in the backup. This can significantly increase the size of the backup and the time it takes to create it, but allows for a complete backup of the system that can be restored without needing access to the original media files. */
  includeBlobs?: InputMaybe<Scalars['Boolean']['input']>;
};

type BaseFile = {
  basename: Scalars['String']['output'];
  created_at: Scalars['Time']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  fingerprints: Array<Fingerprint>;
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder: Folder;
  /** @deprecated Use parent_folder instead */
  parent_folder_id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int64']['output'];
  updated_at: Scalars['Time']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};


type BaseFileFingerprintArgs = {
  type: Scalars['String']['input'];
};

type BasicFile = BaseFile & {
  __typename?: 'BasicFile';
  basename: Scalars['String']['output'];
  created_at: Scalars['Time']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  fingerprints: Array<Fingerprint>;
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder: Folder;
  /** @deprecated Use parent_folder instead */
  parent_folder_id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int64']['output'];
  updated_at: Scalars['Time']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};


type BasicFileFingerprintArgs = {
  type: Scalars['String']['input'];
};

enum BlobsStorageType {
  /** Database */
  Database = 'DATABASE',
  /** Filesystem */
  Filesystem = 'FILESYSTEM'
}

type BulkGalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  scene_ids?: InputMaybe<BulkUpdateIds>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkGroupUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  containing_groups?: InputMaybe<BulkUpdateGroupDescriptionsInput>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  sub_groups?: InputMaybe<BulkUpdateGroupDescriptionsInput>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkMovieUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkPerformerUpdateInput = {
  /** Duplicate aliases and those equal to name will result in an error (case-insensitive) */
  alias_list?: InputMaybe<BulkUpdateStrings>;
  birthdate?: InputMaybe<Scalars['String']['input']>;
  career_end?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use career_start and career_end */
  career_length?: InputMaybe<Scalars['String']['input']>;
  career_start?: InputMaybe<Scalars['String']['input']>;
  circumcised?: InputMaybe<CircumcisedEnum>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  death_date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  disambiguation?: InputMaybe<Scalars['String']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  eye_color?: InputMaybe<Scalars['String']['input']>;
  fake_tits?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']['input']>;
  height_cm?: InputMaybe<Scalars['Int']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** @deprecated Use urls */
  instagram?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Scalars['String']['input']>;
  penis_length?: InputMaybe<Scalars['Float']['input']>;
  piercings?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  tattoos?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  twitter?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<BulkUpdateStrings>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

type BulkSceneMarkerUpdateInput = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  primary_tag_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']['input']>;
};

type BulkSceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  gallery_ids?: InputMaybe<BulkUpdateIds>;
  group_ids?: InputMaybe<BulkUpdateIds>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use group_ids */
  movie_ids?: InputMaybe<BulkUpdateIds>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<BulkUpdateIds>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkStudioUpdateInput = {
  details?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  parent_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  tag_ids?: InputMaybe<BulkUpdateIds>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<BulkUpdateStrings>;
};

type BulkTagUpdateInput = {
  /** Duplicate aliases and those equal to name will result in an error (case-insensitive) */
  aliases?: InputMaybe<BulkUpdateStrings>;
  child_ids?: InputMaybe<BulkUpdateIds>;
  description?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  parent_ids?: InputMaybe<BulkUpdateIds>;
};

type BulkUpdateGroupDescriptionsInput = {
  groups: Array<GroupDescriptionInput>;
  mode: BulkUpdateIdMode;
};

enum BulkUpdateIdMode {
  Add = 'ADD',
  Remove = 'REMOVE',
  Set = 'SET'
}

type BulkUpdateIds = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  mode: BulkUpdateIdMode;
};

type BulkUpdateStrings = {
  mode: BulkUpdateIdMode;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

enum CircumcisedEnum {
  Cut = 'CUT',
  Uncut = 'UNCUT'
}

type CircumcisionCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<Array<CircumcisedEnum>>;
};

type CleanGeneratedInput = {
  /** Clean blob files without blob entries */
  blobFiles?: InputMaybe<Scalars['Boolean']['input']>;
  /** Do a dry run. Don't delete any files */
  dryRun?: InputMaybe<Scalars['Boolean']['input']>;
  /** Clean image thumbnails/clips without image entries */
  imageThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
  /** Clean marker files without marker entries */
  markers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Clean preview files without scene entries */
  screenshots?: InputMaybe<Scalars['Boolean']['input']>;
  /** Clean sprite and vtt files without scene entries */
  sprites?: InputMaybe<Scalars['Boolean']['input']>;
  /** Clean scene transcodes without scene entries */
  transcodes?: InputMaybe<Scalars['Boolean']['input']>;
};

type CleanMetadataInput = {
  /** Do a dry run. Don't delete any files */
  dryRun: Scalars['Boolean']['input'];
  /**
   * Don't check zip file contents when determining whether to clean a file.
   * This can significantly speed up the clean process, but will potentially miss removed files within zip files.
   * Where users do not modify zip files contents directly, this should be safe to use.
   * Defaults to false.
   */
  ignoreZipFileContents?: InputMaybe<Scalars['Boolean']['input']>;
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ConfigDlnaInput = {
  /** True if DLNA service should be enabled by default */
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Defaults to 1338 */
  port?: InputMaybe<Scalars['Int']['input']>;
  serverName?: InputMaybe<Scalars['String']['input']>;
  /** Order to sort videos */
  videoSortOrder?: InputMaybe<Scalars['String']['input']>;
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ConfigDlnaResult = {
  __typename?: 'ConfigDLNAResult';
  /** True if DLNA service should be enabled by default */
  enabled: Scalars['Boolean']['output'];
  /** List of interfaces to run DLNA on. Empty for all */
  interfaces: Array<Scalars['String']['output']>;
  /** Defaults to 1338 */
  port: Scalars['Int']['output'];
  serverName: Scalars['String']['output'];
  /** Order to sort videos */
  videoSortOrder: Scalars['String']['output'];
  /** List of IPs whitelisted for DLNA service */
  whitelistedIPs: Array<Scalars['String']['output']>;
};

type ConfigDefaultSettingsInput = {
  autoTag?: InputMaybe<AutoTagMetadataInput>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete generated files checkbox will be checked by default */
  deleteGenerated?: InputMaybe<Scalars['Boolean']['input']>;
  generate?: InputMaybe<GenerateMetadataInput>;
  identify?: InputMaybe<IdentifyMetadataInput>;
  scan?: InputMaybe<ScanMetadataInput>;
};

type ConfigDefaultSettingsResult = {
  __typename?: 'ConfigDefaultSettingsResult';
  autoTag?: Maybe<AutoTagMetadataOptions>;
  /** If true, delete file checkbox will be checked by default */
  deleteFile?: Maybe<Scalars['Boolean']['output']>;
  /** If true, delete generated supporting files checkbox will be checked by default */
  deleteGenerated?: Maybe<Scalars['Boolean']['output']>;
  generate?: Maybe<GenerateMetadataOptions>;
  identify?: Maybe<IdentifyMetadataTaskOptions>;
  scan?: Maybe<ScanMetadataOptions>;
};

type ConfigDisableDropdownCreate = {
  __typename?: 'ConfigDisableDropdownCreate';
  gallery: Scalars['Boolean']['output'];
  movie: Scalars['Boolean']['output'];
  performer: Scalars['Boolean']['output'];
  studio: Scalars['Boolean']['output'];
  tag: Scalars['Boolean']['output'];
};

type ConfigDisableDropdownCreateInput = {
  gallery?: InputMaybe<Scalars['Boolean']['input']>;
  movie?: InputMaybe<Scalars['Boolean']['input']>;
  performer?: InputMaybe<Scalars['Boolean']['input']>;
  studio?: InputMaybe<Scalars['Boolean']['input']>;
  tag?: InputMaybe<Scalars['Boolean']['input']>;
};

type ConfigGeneralInput = {
  /** Path to backup directory */
  backupDirectoryPath?: InputMaybe<Scalars['String']['input']>;
  /** Path to blobs - required for filesystem blob storage */
  blobsPath?: InputMaybe<Scalars['String']['input']>;
  /** Where to store blobs */
  blobsStorage?: InputMaybe<BlobsStorageType>;
  /** Path to cache */
  cachePath?: InputMaybe<Scalars['String']['input']>;
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders?: InputMaybe<Scalars['Boolean']['input']>;
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos?: InputMaybe<Scalars['Boolean']['input']>;
  /** Custom Performer Image Location */
  customPerformerImageLocation?: InputMaybe<Scalars['String']['input']>;
  /** Path to the SQLite database */
  databasePath?: InputMaybe<Scalars['String']['input']>;
  /** Path to trash directory - if set, deleted files will be moved here instead of being permanently deleted */
  deleteTrashPath?: InputMaybe<Scalars['String']['input']>;
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange?: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of file regexp to exclude from Video Scans */
  excludes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
  ffmpegPath?: InputMaybe<Scalars['String']['input']>;
  /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
  ffprobePath?: InputMaybe<Scalars['String']['input']>;
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex?: InputMaybe<Scalars['String']['input']>;
  /** Array of gallery zip file extensions */
  galleryExtensions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Path to generated files */
  generatedPath?: InputMaybe<Scalars['String']['input']>;
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Array of image file extensions */
  imageExtensions?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Whether to log http access */
  logAccess?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the log file */
  logFile?: InputMaybe<Scalars['String']['input']>;
  /** Maximum log size */
  logFileMaxSize?: InputMaybe<Scalars['Int']['input']>;
  /** Minimum log level */
  logLevel?: InputMaybe<Scalars['String']['input']>;
  /** Whether to also output to stderr */
  logOut?: InputMaybe<Scalars['Boolean']['input']>;
  /** Maximum session cookie age */
  maxSessionAge?: InputMaybe<Scalars['Int']['input']>;
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: InputMaybe<StreamingResolutionEnum>;
  /** Minimum number of sprites to be generated - only used if useCustomSpriteInterval is true */
  maximumSprites?: InputMaybe<Scalars['Int']['input']>;
  /** Path to import/files */
  metadataPath?: InputMaybe<Scalars['String']['input']>;
  /** Minimum number of sprites to be generated - only used if useCustomSpriteInterval is true */
  minimumSprites?: InputMaybe<Scalars['Int']['input']>;
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks?: InputMaybe<Scalars['Int']['input']>;
  /** Password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** Source of plugin packages */
  pluginPackageSources?: InputMaybe<Array<PackageSourceInput>>;
  /** Path to plugins */
  pluginsPath?: InputMaybe<Scalars['String']['input']>;
  /** Include audio stream in previews */
  previewAudio?: InputMaybe<Scalars['Boolean']['input']>;
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']['input']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']['input']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']['input']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']['input']>;
  /** Python path - resolved using path if unset */
  pythonPath?: InputMaybe<Scalars['String']['input']>;
  /** Source of scraper packages */
  scraperPackageSources?: InputMaybe<Array<PackageSourceInput>>;
  /** Path to scrapers */
  scrapersPath?: InputMaybe<Scalars['String']['input']>;
  /** Time between two different scrubber sprites in seconds - only used if useCustomSpriteInterval is true */
  spriteInterval?: InputMaybe<Scalars['Float']['input']>;
  /** Size of the longest dimension for each sprite in pixels */
  spriteScreenshotSize?: InputMaybe<Scalars['Int']['input']>;
  /** Stash-box instances used for tagging */
  stashBoxes?: InputMaybe<Array<StashBoxInput>>;
  /** Array of file paths to content */
  stashes?: InputMaybe<Array<StashConfigInput>>;
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs?: InputMaybe<Array<Scalars['String']['input']>>;
  /** True if sprite generation should use the sprite interval and min/max sprites settings instead of the default */
  useCustomSpriteInterval?: InputMaybe<Scalars['Boolean']['input']>;
  /** Username */
  username?: InputMaybe<Scalars['String']['input']>;
  /** Array of video file extensions */
  videoExtensions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm?: InputMaybe<HashAlgorithm>;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
};

type ConfigGeneralResult = {
  __typename?: 'ConfigGeneralResult';
  /** API Key */
  apiKey: Scalars['String']['output'];
  /** Path to backup directory */
  backupDirectoryPath: Scalars['String']['output'];
  /** Path to blobs - required for filesystem blob storage */
  blobsPath: Scalars['String']['output'];
  /** Where to store blobs */
  blobsStorage: BlobsStorageType;
  /** Path to cache */
  cachePath: Scalars['String']['output'];
  /** Whether to calculate MD5 checksums for scene video files */
  calculateMD5: Scalars['Boolean']['output'];
  /** Path to the config file used */
  configFilePath: Scalars['String']['output'];
  /** True if galleries should be created from folders with images */
  createGalleriesFromFolders: Scalars['Boolean']['output'];
  /** Create Image Clips from Video extensions when Videos are disabled in Library */
  createImageClipsFromVideos: Scalars['Boolean']['output'];
  /** Custom Performer Image Location */
  customPerformerImageLocation?: Maybe<Scalars['String']['output']>;
  /** Path to the SQLite database */
  databasePath: Scalars['String']['output'];
  /** Path to trash directory - if set, deleted files will be moved here instead of being permanently deleted */
  deleteTrashPath: Scalars['String']['output'];
  /** whether to include range in generated funscript heatmaps */
  drawFunscriptHeatmapRange: Scalars['Boolean']['output'];
  /** Array of file regexp to exclude from Video Scans */
  excludes: Array<Scalars['String']['output']>;
  /** Path to the ffmpeg binary. If empty, stash will attempt to find it in the path or config directory */
  ffmpegPath: Scalars['String']['output'];
  /** Path to the ffprobe binary. If empty, stash will attempt to find it in the path or config directory */
  ffprobePath: Scalars['String']['output'];
  /** Regex used to identify images as gallery covers */
  galleryCoverRegex: Scalars['String']['output'];
  /** Array of gallery zip file extensions */
  galleryExtensions: Array<Scalars['String']['output']>;
  /** Path to generated files */
  generatedPath: Scalars['String']['output'];
  /** Array of file regexp to exclude from Image Scans */
  imageExcludes: Array<Scalars['String']['output']>;
  /** Array of image file extensions */
  imageExtensions: Array<Scalars['String']['output']>;
  /**
   * ffmpeg stream input args - injected before input file
   * These are applied when live transcoding
   */
  liveTranscodeInputArgs: Array<Scalars['String']['output']>;
  /**
   * ffmpeg stream output args - injected before output file
   * These are applied when live transcoding
   */
  liveTranscodeOutputArgs: Array<Scalars['String']['output']>;
  /** Whether to log http access */
  logAccess: Scalars['Boolean']['output'];
  /** Name of the log file */
  logFile?: Maybe<Scalars['String']['output']>;
  /** Maximum log size */
  logFileMaxSize: Scalars['Int']['output'];
  /** Minimum log level */
  logLevel: Scalars['String']['output'];
  /** Whether to also output to stderr */
  logOut: Scalars['Boolean']['output'];
  /** Maximum session cookie age */
  maxSessionAge: Scalars['Int']['output'];
  /** Max streaming transcode size */
  maxStreamingTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Max generated transcode size */
  maxTranscodeSize?: Maybe<StreamingResolutionEnum>;
  /** Maximum number of sprites to be generated - only used if useCustomSpriteInterval is true */
  maximumSprites: Scalars['Int']['output'];
  /** Path to import/files */
  metadataPath: Scalars['String']['output'];
  /** Minimum number of sprites to be generated - only used if useCustomSpriteInterval is true */
  minimumSprites: Scalars['Int']['output'];
  /** Number of parallel tasks to start during scan/generate */
  parallelTasks: Scalars['Int']['output'];
  /** Password */
  password: Scalars['String']['output'];
  /** Source of plugin packages */
  pluginPackageSources: Array<PackageSource>;
  /** Path to plugins */
  pluginsPath: Scalars['String']['output'];
  /** Include audio stream in previews */
  previewAudio: Scalars['Boolean']['output'];
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd: Scalars['String']['output'];
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart: Scalars['String']['output'];
  /** Preset when generating preview */
  previewPreset: PreviewPreset;
  /** Preview segment duration, in seconds */
  previewSegmentDuration: Scalars['Float']['output'];
  /** Number of segments in a preview file */
  previewSegments: Scalars['Int']['output'];
  /** Python path - resolved using path if unset */
  pythonPath: Scalars['String']['output'];
  /** Source of scraper packages */
  scraperPackageSources: Array<PackageSource>;
  /** Path to scrapers */
  scrapersPath: Scalars['String']['output'];
  /** Time between two different scrubber sprites in seconds - only used if useCustomSpriteInterval is true */
  spriteInterval: Scalars['Float']['output'];
  /** Size of the longest dimension for each sprite in pixels */
  spriteScreenshotSize: Scalars['Int']['output'];
  /** Stash-box instances used for tagging */
  stashBoxes: Array<StashBox>;
  /** Array of file paths to content */
  stashes: Array<StashConfig>;
  /** Transcode Hardware Acceleration */
  transcodeHardwareAcceleration: Scalars['Boolean']['output'];
  /**
   * ffmpeg transcode input args - injected before input file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeInputArgs: Array<Scalars['String']['output']>;
  /**
   * ffmpeg transcode output args - injected before output file
   * These are applied to generated transcodes (previews and transcodes)
   */
  transcodeOutputArgs: Array<Scalars['String']['output']>;
  /** True if sprite generation should use the sprite interval and min/max sprites settings instead of the default */
  useCustomSpriteInterval: Scalars['Boolean']['output'];
  /** Username */
  username: Scalars['String']['output'];
  /** Array of video file extensions */
  videoExtensions: Array<Scalars['String']['output']>;
  /** Hash algorithm to use for generated file naming */
  videoFileNamingAlgorithm: HashAlgorithm;
  /** Write image thumbnails to disk when generating on the fly */
  writeImageThumbnails: Scalars['Boolean']['output'];
};

type ConfigImageLightboxInput = {
  disableAnimation?: InputMaybe<Scalars['Boolean']['input']>;
  displayMode?: InputMaybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: InputMaybe<Scalars['Boolean']['input']>;
  scaleUp?: InputMaybe<Scalars['Boolean']['input']>;
  scrollAttemptsBeforeChange?: InputMaybe<Scalars['Int']['input']>;
  scrollMode?: InputMaybe<ImageLightboxScrollMode>;
  slideshowDelay?: InputMaybe<Scalars['Int']['input']>;
};

type ConfigImageLightboxResult = {
  __typename?: 'ConfigImageLightboxResult';
  disableAnimation?: Maybe<Scalars['Boolean']['output']>;
  displayMode?: Maybe<ImageLightboxDisplayMode>;
  resetZoomOnNav?: Maybe<Scalars['Boolean']['output']>;
  scaleUp?: Maybe<Scalars['Boolean']['output']>;
  scrollAttemptsBeforeChange: Scalars['Int']['output'];
  scrollMode?: Maybe<ImageLightboxScrollMode>;
  slideshowDelay?: Maybe<Scalars['Int']['output']>;
};

type ConfigInterfaceInput = {
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** Custom CSS */
  css?: InputMaybe<Scalars['String']['input']>;
  cssEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Custom Locales */
  customLocales?: InputMaybe<Scalars['String']['input']>;
  customLocalesEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** When true, disables all customizations (plugins, CSS, JavaScript, locales) for troubleshooting */
  disableCustomizations?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set to true to disable creating new objects via the dropdown menus */
  disableDropdownCreate?: InputMaybe<ConfigDisableDropdownCreateInput>;
  /** Funscript Time Offset */
  funscriptOffset?: InputMaybe<Scalars['Int']['input']>;
  /** Handy Connection Key */
  handyKey?: InputMaybe<Scalars['String']['input']>;
  imageLightbox?: InputMaybe<ConfigImageLightboxInput>;
  /** Custom Javascript */
  javascript?: InputMaybe<Scalars['String']['input']>;
  javascriptEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** Interface language */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: InputMaybe<Scalars['Int']['input']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: InputMaybe<Array<Scalars['String']['input']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if we should send notifications to the desktop */
  notificationsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if SFW content mode is enabled */
  sfwContentMode?: InputMaybe<Scalars['Boolean']['input']>;
  /** Show scene scrubber by default */
  showScrubber?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: InputMaybe<Scalars['Boolean']['input']>;
  /** Wall playback type */
  wallPlayback?: InputMaybe<Scalars['String']['input']>;
  /** Show title and tags in wall view */
  wallShowTitle?: InputMaybe<Scalars['Boolean']['input']>;
};

type ConfigInterfaceResult = {
  __typename?: 'ConfigInterfaceResult';
  /** If true, video will autostart on load in the scene player */
  autostartVideo?: Maybe<Scalars['Boolean']['output']>;
  /** If true, video will autostart when loading from play random or play selected */
  autostartVideoOnPlaySelected?: Maybe<Scalars['Boolean']['output']>;
  /** If true, next scene in playlist will be played at video end by default */
  continuePlaylistDefault?: Maybe<Scalars['Boolean']['output']>;
  /** Custom CSS */
  css?: Maybe<Scalars['String']['output']>;
  cssEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Custom Locales */
  customLocales?: Maybe<Scalars['String']['output']>;
  customLocalesEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** When true, disables all customizations (plugins, CSS, JavaScript, locales) for troubleshooting */
  disableCustomizations?: Maybe<Scalars['Boolean']['output']>;
  /** Fields are true if creating via dropdown menus are disabled */
  disableDropdownCreate: ConfigDisableDropdownCreate;
  /** Funscript Time Offset */
  funscriptOffset?: Maybe<Scalars['Int']['output']>;
  /** Handy Connection Key */
  handyKey?: Maybe<Scalars['String']['output']>;
  imageLightbox: ConfigImageLightboxResult;
  /** Custom Javascript */
  javascript?: Maybe<Scalars['String']['output']>;
  javascriptEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Interface language */
  language?: Maybe<Scalars['String']['output']>;
  /** Maximum duration (in seconds) in which a scene video will loop in the scene player */
  maximumLoopDuration?: Maybe<Scalars['Int']['output']>;
  /** Ordered list of items that should be shown in the menu */
  menuItems?: Maybe<Array<Scalars['String']['output']>>;
  /** True if we should not auto-open a browser window on startup */
  noBrowser?: Maybe<Scalars['Boolean']['output']>;
  /** True if we should send desktop notifications */
  notificationsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** True if SFW content mode is enabled */
  sfwContentMode: Scalars['Boolean']['output'];
  /** Show scene scrubber by default */
  showScrubber?: Maybe<Scalars['Boolean']['output']>;
  /** If true, studio overlays will be shown as text instead of logo images */
  showStudioAsText?: Maybe<Scalars['Boolean']['output']>;
  /** Enable sound on mouseover previews */
  soundOnPreview?: Maybe<Scalars['Boolean']['output']>;
  /** Whether to use Stash Hosted Funscript */
  useStashHostedFunscript?: Maybe<Scalars['Boolean']['output']>;
  /** Wall playback type */
  wallPlayback?: Maybe<Scalars['String']['output']>;
  /** Show title and tags in wall view */
  wallShowTitle?: Maybe<Scalars['Boolean']['output']>;
};

/** All configuration settings */
type ConfigResult = {
  __typename?: 'ConfigResult';
  defaults: ConfigDefaultSettingsResult;
  dlna: ConfigDlnaResult;
  general: ConfigGeneralResult;
  interface: ConfigInterfaceResult;
  plugins: Scalars['PluginConfigMap']['output'];
  scraping: ConfigScrapingResult;
  ui: Scalars['UIConfig']['output'];
};


/** All configuration settings */
type ConfigResultPluginsArgs = {
  include?: InputMaybe<Array<Scalars['ID']['input']>>;
};

type ConfigScrapingInput = {
  /** Tags blacklist during scraping */
  excludeTagPatterns?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: InputMaybe<Scalars['String']['input']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck?: InputMaybe<Scalars['Boolean']['input']>;
  /** Scraper user agent string */
  scraperUserAgent?: InputMaybe<Scalars['String']['input']>;
};

type ConfigScrapingResult = {
  __typename?: 'ConfigScrapingResult';
  /** Tags blacklist during scraping */
  excludeTagPatterns: Array<Scalars['String']['output']>;
  /** Scraper CDP path. Path to chrome executable or remote address */
  scraperCDPPath?: Maybe<Scalars['String']['output']>;
  /** Whether the scraper should check for invalid certificates */
  scraperCertCheck: Scalars['Boolean']['output'];
  /** Scraper user agent string */
  scraperUserAgent?: Maybe<Scalars['String']['output']>;
};

enum CriterionModifier {
  /** >= AND <= */
  Between = 'BETWEEN',
  /** = */
  Equals = 'EQUALS',
  Excludes = 'EXCLUDES',
  /** > */
  GreaterThan = 'GREATER_THAN',
  Includes = 'INCLUDES',
  /** INCLUDES ALL */
  IncludesAll = 'INCLUDES_ALL',
  /** IS NULL */
  IsNull = 'IS_NULL',
  /** < */
  LessThan = 'LESS_THAN',
  /** MATCHES REGEX */
  MatchesRegex = 'MATCHES_REGEX',
  /** < OR > */
  NotBetween = 'NOT_BETWEEN',
  /** != */
  NotEquals = 'NOT_EQUALS',
  /** NOT MATCHES REGEX */
  NotMatchesRegex = 'NOT_MATCHES_REGEX',
  /** IS NOT NULL */
  NotNull = 'NOT_NULL'
}

type CustomFieldCriterionInput = {
  field: Scalars['String']['input'];
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['Any']['input']>>;
};

type CustomFieldsInput = {
  /** If populated, the entire custom fields map will be replaced with this value */
  full?: InputMaybe<Scalars['Map']['input']>;
  /** If populated, only the keys in this map will be updated */
  partial?: InputMaybe<Scalars['Map']['input']>;
  /** Remove any keys in this list */
  remove?: InputMaybe<Array<Scalars['String']['input']>>;
};

type Dlnaip = {
  __typename?: 'DLNAIP';
  ipAddress: Scalars['String']['output'];
  /** Time until IP will be no longer allowed/disallowed */
  until?: Maybe<Scalars['Time']['output']>;
};

type DlnaStatus = {
  __typename?: 'DLNAStatus';
  allowedIPAddresses: Array<Dlnaip>;
  recentIPAddresses: Array<Scalars['String']['output']>;
  running: Scalars['Boolean']['output'];
  /** If not currently running, time until it will be started. If running, time until it will be stopped */
  until?: Maybe<Scalars['Time']['output']>;
};

type DateCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String']['input'];
  value2?: InputMaybe<Scalars['String']['input']>;
};

type DestroyFilterInput = {
  id: Scalars['ID']['input'];
};

/** Directory structure of a path */
type Directory = {
  __typename?: 'Directory';
  directories: Array<Scalars['String']['output']>;
  parent?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
};

type DisableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']['input']>;
};

type DuplicationCriterionInput = {
  /** Currently unimplemented. Intended for phash distance matching. */
  distance?: InputMaybe<Scalars['Int']['input']>;
  /** @deprecated Use phash field instead */
  duplicated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by phash duplication */
  phash?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by Stash ID duplication */
  stash_id?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by title duplication */
  title?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by URL duplication */
  url?: InputMaybe<Scalars['Boolean']['input']>;
};

type EnableDlnaInput = {
  /** Duration to enable, in minutes. 0 or null for indefinite. */
  duration?: InputMaybe<Scalars['Int']['input']>;
};

type ExportObjectTypeInput = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ExportObjectsInput = {
  galleries?: InputMaybe<ExportObjectTypeInput>;
  groups?: InputMaybe<ExportObjectTypeInput>;
  images?: InputMaybe<ExportObjectTypeInput>;
  includeDependencies?: InputMaybe<Scalars['Boolean']['input']>;
  /** @deprecated Use groups instead */
  movies?: InputMaybe<ExportObjectTypeInput>;
  performers?: InputMaybe<ExportObjectTypeInput>;
  scenes?: InputMaybe<ExportObjectTypeInput>;
  studios?: InputMaybe<ExportObjectTypeInput>;
  tags?: InputMaybe<ExportObjectTypeInput>;
};

type FileDuplicationCriterionInput = {
  /** Currently unimplemented. Intended for phash distance matching. */
  distance?: InputMaybe<Scalars['Int']['input']>;
  /** @deprecated Use phash field instead */
  duplicated?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by phash duplication */
  phash?: InputMaybe<Scalars['Boolean']['input']>;
};

type FileFilterType = {
  AND?: InputMaybe<FileFilterType>;
  NOT?: InputMaybe<FileFilterType>;
  OR?: InputMaybe<FileFilterType>;
  basename?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  dir?: InputMaybe<StringCriterionInput>;
  /** Filter files by duplication criteria (only phash applies to files) */
  duplicated?: InputMaybe<FileDuplicationCriterionInput>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** find files based on hash */
  hashes?: InputMaybe<Array<FingerprintFilterInput>>;
  image_count?: InputMaybe<IntCriterionInput>;
  image_file_filter?: InputMaybe<ImageFileFilterInput>;
  /** Filter by related images that meet this criteria */
  images_filter?: InputMaybe<ImageFilterType>;
  /** Filter by modification time */
  mod_time?: InputMaybe<TimestampCriterionInput>;
  parent_folder?: InputMaybe<HierarchicalMultiCriterionInput>;
  path?: InputMaybe<StringCriterionInput>;
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  video_file_filter?: InputMaybe<VideoFileFilterInput>;
  zip_file?: InputMaybe<MultiCriterionInput>;
};

type FileSetFingerprintsInput = {
  /** only supplied fingerprint types will be modified */
  fingerprints: Array<SetFingerprintsInput>;
  id: Scalars['ID']['input'];
};

enum FilterMode {
  Galleries = 'GALLERIES',
  Groups = 'GROUPS',
  Images = 'IMAGES',
  Movies = 'MOVIES',
  Performers = 'PERFORMERS',
  Scenes = 'SCENES',
  SceneMarkers = 'SCENE_MARKERS',
  Studios = 'STUDIOS',
  Tags = 'TAGS'
}

type FindFilesResultType = {
  __typename?: 'FindFilesResultType';
  count: Scalars['Int']['output'];
  /** Total duration in seconds of any video files */
  duration: Scalars['Float']['output'];
  files: Array<BaseFile>;
  /** Total megapixels of any image files */
  megapixels: Scalars['Float']['output'];
  /** Total file size in bytes */
  size: Scalars['Int']['output'];
};

type FindFilterType = {
  direction?: InputMaybe<SortDirectionEnum>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: InputMaybe<Scalars['Int']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

type FindFoldersResultType = {
  __typename?: 'FindFoldersResultType';
  count: Scalars['Int']['output'];
  folders: Array<Folder>;
};

type FindGalleriesResultType = {
  __typename?: 'FindGalleriesResultType';
  count: Scalars['Int']['output'];
  galleries: Array<Gallery>;
};

type FindGalleryChaptersResultType = {
  __typename?: 'FindGalleryChaptersResultType';
  chapters: Array<GalleryChapter>;
  count: Scalars['Int']['output'];
};

type FindGroupsResultType = {
  __typename?: 'FindGroupsResultType';
  count: Scalars['Int']['output'];
  groups: Array<Group>;
};

type FindImagesResultType = {
  __typename?: 'FindImagesResultType';
  count: Scalars['Int']['output'];
  /** Total file size in bytes */
  filesize: Scalars['Float']['output'];
  images: Array<Image>;
  /** Total megapixels of the images */
  megapixels: Scalars['Float']['output'];
};

type FindJobInput = {
  id: Scalars['ID']['input'];
};

type FindMoviesResultType = {
  __typename?: 'FindMoviesResultType';
  count: Scalars['Int']['output'];
  movies: Array<Movie>;
};

type FindPerformersResultType = {
  __typename?: 'FindPerformersResultType';
  count: Scalars['Int']['output'];
  performers: Array<Performer>;
};

type FindSceneMarkersResultType = {
  __typename?: 'FindSceneMarkersResultType';
  count: Scalars['Int']['output'];
  scene_markers: Array<SceneMarker>;
};

type FindScenesResultType = {
  __typename?: 'FindScenesResultType';
  count: Scalars['Int']['output'];
  /** Total duration in seconds */
  duration: Scalars['Float']['output'];
  /** Total file size in bytes */
  filesize: Scalars['Float']['output'];
  scenes: Array<Scene>;
};

type FindStudiosResultType = {
  __typename?: 'FindStudiosResultType';
  count: Scalars['Int']['output'];
  studios: Array<Studio>;
};

type FindTagsResultType = {
  __typename?: 'FindTagsResultType';
  count: Scalars['Int']['output'];
  tags: Array<Tag>;
};

type Fingerprint = {
  __typename?: 'Fingerprint';
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

type FingerprintFilterInput = {
  /** Hamming distance - defaults to 0 */
  distance?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

type FloatCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['Float']['input'];
  value2?: InputMaybe<Scalars['Float']['input']>;
};

type Folder = {
  __typename?: 'Folder';
  basename: Scalars['String']['output'];
  created_at: Scalars['Time']['output'];
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder?: Maybe<Folder>;
  /** @deprecated Use parent_folder instead */
  parent_folder_id?: Maybe<Scalars['ID']['output']>;
  /** Returns all parent folders in order from immediate parent to top-level */
  parent_folders: Array<Folder>;
  path: Scalars['String']['output'];
  /** Returns direct sub-folders */
  sub_folders: Array<Folder>;
  updated_at: Scalars['Time']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};

type FolderFilterType = {
  AND?: InputMaybe<FolderFilterType>;
  NOT?: InputMaybe<FolderFilterType>;
  OR?: InputMaybe<FolderFilterType>;
  basename?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by files that meet this criteria */
  files_filter?: InputMaybe<FileFilterType>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by modification time */
  mod_time?: InputMaybe<TimestampCriterionInput>;
  parent_folder?: InputMaybe<HierarchicalMultiCriterionInput>;
  path?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  zip_file?: InputMaybe<MultiCriterionInput>;
};

/** Gallery type */
type Gallery = {
  __typename?: 'Gallery';
  chapters: Array<GalleryChapter>;
  code?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Image>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  files: Array<GalleryFile>;
  folder?: Maybe<Folder>;
  id: Scalars['ID']['output'];
  image: Image;
  image_count: Scalars['Int']['output'];
  organized: Scalars['Boolean']['output'];
  paths: GalleryPathsType;
  performers: Array<Performer>;
  photographer?: Maybe<Scalars['String']['output']>;
  rating100?: Maybe<Scalars['Int']['output']>;
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls: Array<Scalars['String']['output']>;
};


/** Gallery type */
type GalleryImageArgs = {
  index: Scalars['Int']['input'];
};

type GalleryAddInput = {
  gallery_id: Scalars['ID']['input'];
  image_ids: Array<Scalars['ID']['input']>;
};

type GalleryChapter = {
  __typename?: 'GalleryChapter';
  created_at: Scalars['Time']['output'];
  gallery: Gallery;
  id: Scalars['ID']['output'];
  image_index: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};

type GalleryChapterCreateInput = {
  gallery_id: Scalars['ID']['input'];
  image_index: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

type GalleryChapterUpdateInput = {
  gallery_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  image_index?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

type GalleryCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title: Scalars['String']['input'];
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type GalleryDestroyInput = {
  /**
   * If true, then the zip file will be deleted if the gallery is zip-file-based.
   * If gallery is folder-based, then any files not associated with other
   * galleries will be deleted, along with the folder, if it is not empty.
   */
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete the file entry from the database if the file is not assigned to any other objects */
  destroy_file_entry?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

type GalleryFile = BaseFile & {
  __typename?: 'GalleryFile';
  basename: Scalars['String']['output'];
  created_at: Scalars['Time']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  fingerprints: Array<Fingerprint>;
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder: Folder;
  /** @deprecated Use parent_folder instead */
  parent_folder_id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int64']['output'];
  updated_at: Scalars['Time']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};


type GalleryFileFingerprintArgs = {
  type: Scalars['String']['input'];
};

type GalleryFilterType = {
  AND?: InputMaybe<GalleryFilterType>;
  NOT?: InputMaybe<GalleryFilterType>;
  OR?: InputMaybe<GalleryFilterType>;
  /** Filter by average image resolution */
  average_resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  /** Filter by studio code */
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by zip-file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related files that meet this criteria */
  files_filter?: InputMaybe<FileFilterType>;
  /** Filter by related folders that meet this criteria */
  folders_filter?: InputMaybe<FolderFilterType>;
  /** Filter to only include galleries that have chapters. `true` or `false` */
  has_chapters?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<IntCriterionInput>;
  /** Filter by number of images in this gallery */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related images that meet this criteria */
  images_filter?: InputMaybe<ImageFilterType>;
  /** Filter to only include galleries missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  /** Filter to include/exclude galleries that were created from zip */
  is_zip?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by parent folder of the zip or folder the gallery is in */
  parent_folder?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter galleries by performer age at time of gallery */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter galleries that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter to only include galleries with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include galleries with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by related performers that meet this criteria */
  performers_filter?: InputMaybe<PerformerFilterType>;
  /** Filter by photographer */
  photographer?: InputMaybe<StringCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with these scenes */
  scenes?: InputMaybe<MultiCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /** Filter to only include galleries with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include galleries with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related tags that meet this criteria */
  tags_filter?: InputMaybe<TagFilterType>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

type GalleryPathsType = {
  __typename?: 'GalleryPathsType';
  cover: Scalars['String']['output'];
  preview: Scalars['String']['output'];
};

type GalleryRemoveInput = {
  gallery_id: Scalars['ID']['input'];
  image_ids: Array<Scalars['ID']['input']>;
};

type GalleryResetCoverInput = {
  gallery_id: Scalars['ID']['input'];
};

type GallerySetCoverInput = {
  cover_image_id: Scalars['ID']['input'];
  gallery_id: Scalars['ID']['input'];
};

type GalleryUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  primary_file_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  scene_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type GenderCriterionInput = {
  modifier: CriterionModifier;
  value?: InputMaybe<GenderEnum>;
  value_list?: InputMaybe<Array<GenderEnum>>;
};

enum GenderEnum {
  Female = 'FEMALE',
  Intersex = 'INTERSEX',
  Male = 'MALE',
  NonBinary = 'NON_BINARY',
  TransgenderFemale = 'TRANSGENDER_FEMALE',
  TransgenderMale = 'TRANSGENDER_MALE'
}

type GenerateApiKeyInput = {
  clear?: InputMaybe<Scalars['Boolean']['input']>;
};

type GenerateMetadataInput = {
  clipPreviews?: InputMaybe<Scalars['Boolean']['input']>;
  covers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate transcodes even if not required */
  forceTranscodes?: InputMaybe<Scalars['Boolean']['input']>;
  /** gallery ids to generate for */
  galleryIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** image ids to generate for */
  imageIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Generate image phashes during scan */
  imagePhashes?: InputMaybe<Scalars['Boolean']['input']>;
  imagePreviews?: InputMaybe<Scalars['Boolean']['input']>;
  imageThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
  interactiveHeatmapsSpeeds?: InputMaybe<Scalars['Boolean']['input']>;
  /** marker ids to generate for */
  markerIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  markerImagePreviews?: InputMaybe<Scalars['Boolean']['input']>;
  markerScreenshots?: InputMaybe<Scalars['Boolean']['input']>;
  markers?: InputMaybe<Scalars['Boolean']['input']>;
  /** overwrite existing media */
  overwrite?: InputMaybe<Scalars['Boolean']['input']>;
  /** paths to run generate on, in addition to the other ID lists */
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Generate video phashes during scan */
  phashes?: InputMaybe<Scalars['Boolean']['input']>;
  previewOptions?: InputMaybe<GeneratePreviewOptionsInput>;
  previews?: InputMaybe<Scalars['Boolean']['input']>;
  /** scene ids to generate for */
  sceneIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sprites?: InputMaybe<Scalars['Boolean']['input']>;
  transcodes?: InputMaybe<Scalars['Boolean']['input']>;
};

type GenerateMetadataOptions = {
  __typename?: 'GenerateMetadataOptions';
  clipPreviews?: Maybe<Scalars['Boolean']['output']>;
  covers?: Maybe<Scalars['Boolean']['output']>;
  imagePreviews?: Maybe<Scalars['Boolean']['output']>;
  imageThumbnails?: Maybe<Scalars['Boolean']['output']>;
  interactiveHeatmapsSpeeds?: Maybe<Scalars['Boolean']['output']>;
  markerImagePreviews?: Maybe<Scalars['Boolean']['output']>;
  markerScreenshots?: Maybe<Scalars['Boolean']['output']>;
  markers?: Maybe<Scalars['Boolean']['output']>;
  phashes?: Maybe<Scalars['Boolean']['output']>;
  previewOptions?: Maybe<GeneratePreviewOptions>;
  previews?: Maybe<Scalars['Boolean']['output']>;
  sprites?: Maybe<Scalars['Boolean']['output']>;
  transcodes?: Maybe<Scalars['Boolean']['output']>;
};

type GeneratePreviewOptions = {
  __typename?: 'GeneratePreviewOptions';
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: Maybe<Scalars['String']['output']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: Maybe<Scalars['String']['output']>;
  /** Preset when generating preview */
  previewPreset?: Maybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: Maybe<Scalars['Float']['output']>;
  /** Number of segments in a preview file */
  previewSegments?: Maybe<Scalars['Int']['output']>;
};

type GeneratePreviewOptionsInput = {
  /** Duration of end of video to exclude when generating previews */
  previewExcludeEnd?: InputMaybe<Scalars['String']['input']>;
  /** Duration of start of video to exclude when generating previews */
  previewExcludeStart?: InputMaybe<Scalars['String']['input']>;
  /** Preset when generating preview */
  previewPreset?: InputMaybe<PreviewPreset>;
  /** Preview segment duration, in seconds */
  previewSegmentDuration?: InputMaybe<Scalars['Float']['input']>;
  /** Number of segments in a preview file */
  previewSegments?: InputMaybe<Scalars['Int']['input']>;
};

type Group = {
  __typename?: 'Group';
  aliases?: Maybe<Scalars['String']['output']>;
  back_image_path?: Maybe<Scalars['String']['output']>;
  containing_groups: Array<GroupDescription>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  date?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  /** Duration in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  front_image_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  o_counter?: Maybe<Scalars['Int']['output']>;
  performer_count: Scalars['Int']['output'];
  rating100?: Maybe<Scalars['Int']['output']>;
  scene_count: Scalars['Int']['output'];
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  sub_group_count: Scalars['Int']['output'];
  sub_groups: Array<GroupDescription>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags: Array<Tag>;
  updated_at: Scalars['Time']['output'];
  urls: Array<Scalars['String']['output']>;
};


type GroupPerformer_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type GroupScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type GroupSub_Group_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

type GroupCreateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']['input']>;
  containing_groups?: InputMaybe<Array<GroupDescriptionInput>>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  /** Duration in seconds */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  sub_groups?: InputMaybe<Array<GroupDescriptionInput>>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** GroupDescription represents a relationship to a group with a description of the relationship */
type GroupDescription = {
  __typename?: 'GroupDescription';
  description?: Maybe<Scalars['String']['output']>;
  group: Group;
};

type GroupDescriptionInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  group_id: Scalars['ID']['input'];
};

type GroupDestroyInput = {
  id: Scalars['ID']['input'];
};

type GroupFilterType = {
  AND?: InputMaybe<GroupFilterType>;
  NOT?: InputMaybe<GroupFilterType>;
  OR?: InputMaybe<GroupFilterType>;
  /** Filter by number of containing groups the group has */
  containing_group_count?: InputMaybe<IntCriterionInput>;
  /** Filter by containing groups */
  containing_groups?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by custom fields */
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  director?: InputMaybe<StringCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter to only include groups missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter to only include groups where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by number of scenes the group has */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /** Filter to only include groups with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  /** Filter by number of sub-groups the group has */
  sub_group_count?: InputMaybe<IntCriterionInput>;
  /** Filter by sub groups */
  sub_groups?: InputMaybe<HierarchicalMultiCriterionInput>;
  synopsis?: InputMaybe<StringCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include groups with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

type GroupSubGroupAddInput = {
  containing_group_id: Scalars['ID']['input'];
  /** The index at which to insert the sub groups. If not provided, the sub groups will be appended to the end */
  insert_index?: InputMaybe<Scalars['Int']['input']>;
  sub_groups: Array<GroupDescriptionInput>;
};

type GroupSubGroupRemoveInput = {
  containing_group_id: Scalars['ID']['input'];
  sub_group_ids: Array<Scalars['ID']['input']>;
};

type GroupUpdateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']['input']>;
  containing_groups?: InputMaybe<Array<GroupDescriptionInput>>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  sub_groups?: InputMaybe<Array<GroupDescriptionInput>>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

enum HashAlgorithm {
  Md5 = 'MD5',
  /** oshash */
  Oshash = 'OSHASH'
}

type HierarchicalMultiCriterionInput = {
  depth?: InputMaybe<Scalars['Int']['input']>;
  excludes?: InputMaybe<Array<Scalars['ID']['input']>>;
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']['input']>>;
};

type HistoryMutationResult = {
  __typename?: 'HistoryMutationResult';
  count: Scalars['Int']['output'];
  history: Array<Scalars['Time']['output']>;
};

type IdentifyFieldOptions = {
  __typename?: 'IdentifyFieldOptions';
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: Maybe<Scalars['Boolean']['output']>;
  field: Scalars['String']['output'];
  strategy: IdentifyFieldStrategy;
};

type IdentifyFieldOptionsInput = {
  /** creates missing objects if needed - only applicable for performers, tags and studios */
  createMissing?: InputMaybe<Scalars['Boolean']['input']>;
  field: Scalars['String']['input'];
  strategy: IdentifyFieldStrategy;
};

enum IdentifyFieldStrategy {
  /** Never sets the field value */
  Ignore = 'IGNORE',
  /**
   * For multi-value fields, merge with existing.
   * For single-value fields, ignore if already set
   */
  Merge = 'MERGE',
  /**
   * Always replaces the value if a value is found.
   * For multi-value fields, any existing values are removed and replaced with the
   * scraped values.
   */
  Overwrite = 'OVERWRITE'
}

type IdentifyMetadataInput = {
  /** Options defined here override the configured defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  /** paths of scenes to identify - ignored if scene ids are set */
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /** scene ids to identify */
  sceneIDs?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySourceInput>;
};

type IdentifyMetadataOptions = {
  __typename?: 'IdentifyMetadataOptions';
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: Maybe<Array<IdentifyFieldOptions>>;
  /**
   * defaults to true if not provided
   * @deprecated Use performerGenders
   */
  includeMalePerformers?: Maybe<Scalars['Boolean']['output']>;
  /** Filter to only include performers with these genders. If not provided, all genders are included. */
  performerGenders?: Maybe<Array<GenderEnum>>;
  /** defaults to true if not provided */
  setCoverImage?: Maybe<Scalars['Boolean']['output']>;
  setOrganized?: Maybe<Scalars['Boolean']['output']>;
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: Maybe<Scalars['String']['output']>;
  /** defaults to true if not provided */
  skipMultipleMatches?: Maybe<Scalars['Boolean']['output']>;
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: Maybe<Scalars['String']['output']>;
  /** defaults to true if not provided */
  skipSingleNamePerformers?: Maybe<Scalars['Boolean']['output']>;
};

type IdentifyMetadataOptionsInput = {
  /** any fields missing from here are defaulted to MERGE and createMissing false */
  fieldOptions?: InputMaybe<Array<IdentifyFieldOptionsInput>>;
  /**
   * defaults to true if not provided
   * @deprecated Use performerGenders
   */
  includeMalePerformers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter to only include performers with these genders. If not provided, all genders are included. */
  performerGenders?: InputMaybe<Array<GenderEnum>>;
  /** defaults to true if not provided */
  setCoverImage?: InputMaybe<Scalars['Boolean']['input']>;
  setOrganized?: InputMaybe<Scalars['Boolean']['input']>;
  /** tag to tag skipped multiple matches with */
  skipMultipleMatchTag?: InputMaybe<Scalars['String']['input']>;
  /** defaults to true if not provided */
  skipMultipleMatches?: InputMaybe<Scalars['Boolean']['input']>;
  /** tag to tag skipped single name performers with */
  skipSingleNamePerformerTag?: InputMaybe<Scalars['String']['input']>;
  /** defaults to true if not provided */
  skipSingleNamePerformers?: InputMaybe<Scalars['Boolean']['input']>;
};

type IdentifyMetadataTaskOptions = {
  __typename?: 'IdentifyMetadataTaskOptions';
  /** Options defined here override the configured defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  /** An ordered list of sources to identify items with. Only the first source that finds a match is used. */
  sources: Array<IdentifySource>;
};

type IdentifySource = {
  __typename?: 'IdentifySource';
  /** Options defined for a source override the defaults */
  options?: Maybe<IdentifyMetadataOptions>;
  source: ScraperSource;
};

type IdentifySourceInput = {
  /** Options defined for a source override the defaults */
  options?: InputMaybe<IdentifyMetadataOptionsInput>;
  source: ScraperSourceInput;
};

type Image = {
  __typename?: 'Image';
  code?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use visual_files */
  files: Array<ImageFile>;
  galleries: Array<Gallery>;
  id: Scalars['ID']['output'];
  o_counter?: Maybe<Scalars['Int']['output']>;
  organized: Scalars['Boolean']['output'];
  paths: ImagePathsType;
  performers: Array<Performer>;
  photographer?: Maybe<Scalars['String']['output']>;
  rating100?: Maybe<Scalars['Int']['output']>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls: Array<Scalars['String']['output']>;
  visual_files: Array<VisualFile>;
};

type ImageDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete the file entry from the database if the file is not assigned to any other objects */
  destroy_file_entry?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

type ImageFile = BaseFile & {
  __typename?: 'ImageFile';
  basename: Scalars['String']['output'];
  created_at: Scalars['Time']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  fingerprints: Array<Fingerprint>;
  format: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder: Folder;
  /** @deprecated Use parent_folder instead */
  parent_folder_id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int64']['output'];
  updated_at: Scalars['Time']['output'];
  width: Scalars['Int']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};


type ImageFileFingerprintArgs = {
  type: Scalars['String']['input'];
};

type ImageFileFilterInput = {
  format?: InputMaybe<StringCriterionInput>;
  orientation?: InputMaybe<OrientationCriterionInput>;
  resolution?: InputMaybe<ResolutionCriterionInput>;
};

type ImageFileType = {
  __typename?: 'ImageFileType';
  height: Scalars['Int']['output'];
  mod_time: Scalars['Time']['output'];
  size: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

type ImageFilterType = {
  AND?: InputMaybe<ImageFilterType>;
  NOT?: InputMaybe<ImageFilterType>;
  OR?: InputMaybe<ImageFilterType>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  /** Filter by studio code */
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by custom fields */
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related files that meet this criteria */
  files_filter?: InputMaybe<FileFilterType>;
  /** Filter to only include images with these galleries */
  galleries?: InputMaybe<MultiCriterionInput>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  /**  Filter by image id */
  id?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by orientation */
  orientation?: InputMaybe<OrientationCriterionInput>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter images by performer age at time of image */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter images that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter to only include images with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include images with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by related performers that meet this criteria */
  performers_filter?: InputMaybe<PerformerFilterType>;
  /** Filter by file phash distance */
  phash_distance?: InputMaybe<PhashDistanceCriterionInput>;
  /** Filter by photographer */
  photographer?: InputMaybe<StringCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter to only include images with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include images with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related tags that meet this criteria */
  tags_filter?: InputMaybe<TagFilterType>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

enum ImageLightboxDisplayMode {
  FitX = 'FIT_X',
  FitXy = 'FIT_XY',
  Original = 'ORIGINAL'
}

enum ImageLightboxScrollMode {
  PanY = 'PAN_Y',
  Zoom = 'ZOOM'
}

type ImagePathsType = {
  __typename?: 'ImagePathsType';
  image?: Maybe<Scalars['String']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

type ImageUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  primary_file_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ImagesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete the file entry from the database if the file is not assigned to any other objects */
  destroy_file_entry?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

enum ImportDuplicateEnum {
  Fail = 'FAIL',
  Ignore = 'IGNORE',
  Overwrite = 'OVERWRITE'
}

enum ImportMissingRefEnum {
  Create = 'CREATE',
  Fail = 'FAIL',
  Ignore = 'IGNORE'
}

type ImportObjectsInput = {
  duplicateBehaviour: ImportDuplicateEnum;
  file: Scalars['Upload']['input'];
  missingRefBehaviour: ImportMissingRefEnum;
};

type IntCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['Int']['input'];
  value2?: InputMaybe<Scalars['Int']['input']>;
};

type Job = {
  __typename?: 'Job';
  addTime: Scalars['Time']['output'];
  description: Scalars['String']['output'];
  endTime?: Maybe<Scalars['Time']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  progress?: Maybe<Scalars['Float']['output']>;
  startTime?: Maybe<Scalars['Time']['output']>;
  status: JobStatus;
  subTasks?: Maybe<Array<Scalars['String']['output']>>;
};

enum JobStatus {
  Cancelled = 'CANCELLED',
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Ready = 'READY',
  Running = 'RUNNING',
  Stopping = 'STOPPING'
}

type JobStatusUpdate = {
  __typename?: 'JobStatusUpdate';
  job: Job;
  type: JobStatusUpdateType;
};

enum JobStatusUpdateType {
  Add = 'ADD',
  Remove = 'REMOVE',
  Update = 'UPDATE'
}

type LatestVersion = {
  __typename?: 'LatestVersion';
  release_date: Scalars['String']['output'];
  shorthash: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

type LogEntry = {
  __typename?: 'LogEntry';
  level: LogLevel;
  message: Scalars['String']['output'];
  time: Scalars['Time']['output'];
};

enum LogLevel {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Progress = 'Progress',
  Trace = 'Trace',
  Warning = 'Warning'
}

type MarkerStringsResultType = {
  __typename?: 'MarkerStringsResultType';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

type MigrateBlobsInput = {
  deleteOld?: InputMaybe<Scalars['Boolean']['input']>;
};

type MigrateInput = {
  backupPath: Scalars['String']['input'];
};

type MigrateSceneScreenshotsInput = {
  deleteFiles?: InputMaybe<Scalars['Boolean']['input']>;
  overwriteExisting?: InputMaybe<Scalars['Boolean']['input']>;
};

type MoveFilesInput = {
  /** valid only for single file id. If empty, existing basename is used */
  destination_basename?: InputMaybe<Scalars['String']['input']>;
  /** valid for single or multiple file ids */
  destination_folder?: InputMaybe<Scalars['String']['input']>;
  /** valid for single or multiple file ids */
  destination_folder_id?: InputMaybe<Scalars['ID']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

type Movie = {
  __typename?: 'Movie';
  aliases?: Maybe<Scalars['String']['output']>;
  back_image_path?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Time']['output'];
  date?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  /** Duration in seconds */
  duration?: Maybe<Scalars['Int']['output']>;
  front_image_path?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  rating100?: Maybe<Scalars['Int']['output']>;
  scene_count: Scalars['Int']['output'];
  scenes: Array<Scene>;
  studio?: Maybe<Studio>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags: Array<Tag>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls: Array<Scalars['String']['output']>;
};


type MovieScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

type MovieCreateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  /** Duration in seconds */
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type MovieDestroyInput = {
  id: Scalars['ID']['input'];
};

type MovieFilterType = {
  AND?: InputMaybe<MovieFilterType>;
  NOT?: InputMaybe<MovieFilterType>;
  OR?: InputMaybe<MovieFilterType>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  director?: InputMaybe<StringCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter to only include movies where performer appears in a scene */
  performers?: InputMaybe<MultiCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /** Filter to only include movies with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  synopsis?: InputMaybe<StringCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include movies with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

type MovieUpdateInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  back_image?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  front_image?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type MultiCriterionInput = {
  excludes?: InputMaybe<Array<Scalars['ID']['input']>>;
  modifier: CriterionModifier;
  value?: InputMaybe<Array<Scalars['ID']['input']>>;
};

type Mutation = {
  __typename?: 'Mutation';
  addGalleryImages: Scalars['Boolean']['output'];
  addGroupSubGroups: Scalars['Boolean']['output'];
  /** Enables an IP address for DLNA for an optional duration */
  addTempDLNAIP: Scalars['Boolean']['output'];
  /** Anonymise the database in a separate file. Optionally returns a link to download the database file */
  anonymiseDatabase?: Maybe<Scalars['String']['output']>;
  /** Backup the database. Optionally returns a link to download the database file */
  backupDatabase?: Maybe<Scalars['String']['output']>;
  bulkGalleryUpdate?: Maybe<Array<Gallery>>;
  bulkGroupUpdate?: Maybe<Array<Group>>;
  bulkImageUpdate?: Maybe<Array<Image>>;
  /** @deprecated Use bulkGroupUpdate instead */
  bulkMovieUpdate?: Maybe<Array<Movie>>;
  bulkPerformerUpdate?: Maybe<Array<Performer>>;
  bulkSceneMarkerUpdate?: Maybe<Array<SceneMarker>>;
  bulkSceneUpdate?: Maybe<Array<Scene>>;
  bulkStudioUpdate?: Maybe<Array<Studio>>;
  bulkTagUpdate?: Maybe<Array<Tag>>;
  configureDLNA: ConfigDlnaResult;
  configureDefaults: ConfigDefaultSettingsResult;
  /** Change general configuration options */
  configureGeneral: ConfigGeneralResult;
  configureInterface: ConfigInterfaceResult;
  /** overwrites the entire plugin configuration for the given plugin */
  configurePlugin: Scalars['Map']['output'];
  configureScraping: ConfigScrapingResult;
  /**
   * overwrites the UI configuration
   * if input is provided, then the entire UI configuration is replaced
   * if partial is provided, then the partial UI configuration is merged into the existing UI configuration
   */
  configureUI: Scalars['UIConfig']['output'];
  /**
   * sets a single UI key value
   * key is a dot separated path to the value
   */
  configureUISetting: Scalars['Map']['output'];
  deleteFiles: Scalars['Boolean']['output'];
  /** Deletes file entries from the database without deleting the files from the filesystem */
  destroyFiles: Scalars['Boolean']['output'];
  destroySavedFilter: Scalars['Boolean']['output'];
  /** Disables DLNA for an optional duration. Has no effect if DLNA is disabled by default */
  disableDLNA: Scalars['Boolean']['output'];
  /** Downloads and installs ffmpeg and ffprobe binaries into the configuration directory. Returns the job ID. */
  downloadFFMpeg: Scalars['ID']['output'];
  /** Enables DLNA for an optional duration. Has no effect if DLNA is enabled by default */
  enableDLNA: Scalars['Boolean']['output'];
  /** DANGEROUS: Execute an arbitrary SQL statement without returning any rows. */
  execSQL: SqlExecResult;
  /** Returns a link to download the result */
  exportObjects?: Maybe<Scalars['String']['output']>;
  fileSetFingerprints: Scalars['Boolean']['output'];
  galleriesUpdate?: Maybe<Array<Maybe<Gallery>>>;
  galleryChapterCreate?: Maybe<GalleryChapter>;
  galleryChapterDestroy: Scalars['Boolean']['output'];
  galleryChapterUpdate?: Maybe<GalleryChapter>;
  galleryCreate?: Maybe<Gallery>;
  galleryDestroy: Scalars['Boolean']['output'];
  galleryUpdate?: Maybe<Gallery>;
  /** Generate and set (or clear) API key */
  generateAPIKey: Scalars['String']['output'];
  groupCreate?: Maybe<Group>;
  groupDestroy: Scalars['Boolean']['output'];
  groupUpdate?: Maybe<Group>;
  groupsDestroy: Scalars['Boolean']['output'];
  /** Decrements the o-counter for an image. Returns the new value */
  imageDecrementO: Scalars['Int']['output'];
  imageDestroy: Scalars['Boolean']['output'];
  /** Increments the o-counter for an image. Returns the new value */
  imageIncrementO: Scalars['Int']['output'];
  /** Resets the o-counter for a image to 0. Returns the new value */
  imageResetO: Scalars['Int']['output'];
  imageUpdate?: Maybe<Image>;
  imagesDestroy: Scalars['Boolean']['output'];
  imagesUpdate?: Maybe<Array<Maybe<Image>>>;
  /** Performs an incremental import. Returns the job ID */
  importObjects: Scalars['ID']['output'];
  /**
   * Installs the given packages.
   * If a package is already installed, it will be updated if needed..
   * If an error occurs when installing a package, the job will continue to install the remaining packages.
   * Returns the job ID
   */
  installPackages: Scalars['ID']['output'];
  /** Start auto-tagging. Returns the job ID */
  metadataAutoTag: Scalars['ID']['output'];
  /** Clean metadata. Returns the job ID */
  metadataClean: Scalars['ID']['output'];
  /** Clean generated files. Returns the job ID */
  metadataCleanGenerated: Scalars['ID']['output'];
  /** Start a full export. Outputs to the metadata directory. Returns the job ID */
  metadataExport: Scalars['ID']['output'];
  /** Start generating content. Returns the job ID */
  metadataGenerate: Scalars['ID']['output'];
  /** Identifies scenes using scrapers. Returns the job ID */
  metadataIdentify: Scalars['ID']['output'];
  /** Start an full import. Completely wipes the database and imports from the metadata directory. Returns the job ID */
  metadataImport: Scalars['ID']['output'];
  /** Start a scan. Returns the job ID */
  metadataScan: Scalars['ID']['output'];
  /** Migrates the schema to the required version. Returns the job ID */
  migrate: Scalars['ID']['output'];
  /** Migrates blobs from the old storage system to the current one */
  migrateBlobs: Scalars['ID']['output'];
  /** Migrate generated files for the current hash naming */
  migrateHashNaming: Scalars['ID']['output'];
  /** Migrates legacy scene screenshot files into the blob storage */
  migrateSceneScreenshots: Scalars['ID']['output'];
  /**
   * Moves the given files to the given destination. Returns true if successful.
   * Either the destination_folder or destination_folder_id must be provided.
   * If both are provided, the destination_folder_id takes precedence.
   * Destination folder must be a subfolder of one of the stash library paths.
   * If provided, destination_basename must be a valid filename with an extension that
   * matches one of the media extensions.
   * Creates folder hierarchy if needed.
   */
  moveFiles: Scalars['Boolean']['output'];
  /** @deprecated Use groupCreate instead */
  movieCreate?: Maybe<Movie>;
  /** @deprecated Use groupDestroy instead */
  movieDestroy: Scalars['Boolean']['output'];
  /** @deprecated Use groupUpdate instead */
  movieUpdate?: Maybe<Movie>;
  /** @deprecated Use groupsDestroy instead */
  moviesDestroy: Scalars['Boolean']['output'];
  /** Optimises the database. Returns the job ID */
  optimiseDatabase: Scalars['ID']['output'];
  performerCreate?: Maybe<Performer>;
  performerDestroy: Scalars['Boolean']['output'];
  performerMerge: Performer;
  performerUpdate?: Maybe<Performer>;
  performersDestroy: Scalars['Boolean']['output'];
  /** DANGEROUS: Execute an arbitrary SQL statement that returns rows. */
  querySQL: SqlQueryResult;
  reloadPlugins: Scalars['Boolean']['output'];
  /** Reload scrapers */
  reloadScrapers: Scalars['Boolean']['output'];
  removeGalleryImages: Scalars['Boolean']['output'];
  removeGroupSubGroups: Scalars['Boolean']['output'];
  /** Removes an IP address from the temporary DLNA whitelist */
  removeTempDLNAIP: Scalars['Boolean']['output'];
  /** Reorder sub groups within a group. Returns true if successful. */
  reorderSubGroups: Scalars['Boolean']['output'];
  resetGalleryCover: Scalars['Boolean']['output'];
  /** Reveal the file in the system file manager */
  revealFileInFileManager: Scalars['Boolean']['output'];
  /** Reveal the folder in the system file manager */
  revealFolderInFileManager: Scalars['Boolean']['output'];
  /**
   * Runs a plugin operation. The operation is run immediately and does not use the job queue.
   * Returns a map of the result.
   */
  runPluginOperation?: Maybe<Scalars['Any']['output']>;
  /**
   * Run a plugin task.
   * If task_name is provided, then the task must exist in the plugin config and the tasks configuration
   * will be used to run the plugin.
   * If no task_name is provided, then the plugin will be executed with the arguments provided only.
   * Returns the job ID
   */
  runPluginTask: Scalars['ID']['output'];
  saveFilter: SavedFilter;
  /** Increments the o-counter for a scene. Uses the current time if none provided. */
  sceneAddO: HistoryMutationResult;
  /** Increments the play count for the scene. Uses the current time if none provided. */
  sceneAddPlay: HistoryMutationResult;
  sceneAssignFile: Scalars['Boolean']['output'];
  sceneCreate?: Maybe<Scene>;
  /**
   * Decrements the o-counter for a scene. Returns the new value
   * @deprecated Use sceneRemoveO instead
   */
  sceneDecrementO: Scalars['Int']['output'];
  /** Decrements the o-counter for a scene, removing the last recorded time if specific time not provided. Returns the new value */
  sceneDeleteO: HistoryMutationResult;
  /** Decrements the play count for the scene, removing the specific times or the last recorded time if not provided. */
  sceneDeletePlay: HistoryMutationResult;
  sceneDestroy: Scalars['Boolean']['output'];
  /** Generates screenshot at specified time in seconds. Leave empty to generate default screenshot */
  sceneGenerateScreenshot: Scalars['String']['output'];
  /**
   * Increments the o-counter for a scene. Returns the new value
   * @deprecated Use sceneAddO instead
   */
  sceneIncrementO: Scalars['Int']['output'];
  /**
   * Increments the play count for the scene. Returns the new play count value.
   * @deprecated Use sceneAddPlay instead
   */
  sceneIncrementPlayCount: Scalars['Int']['output'];
  sceneMarkerCreate?: Maybe<SceneMarker>;
  sceneMarkerDestroy: Scalars['Boolean']['output'];
  sceneMarkerUpdate?: Maybe<SceneMarker>;
  sceneMarkersDestroy: Scalars['Boolean']['output'];
  sceneMerge?: Maybe<Scene>;
  /** Resets the resume time point and play duration */
  sceneResetActivity: Scalars['Boolean']['output'];
  /** Resets the o-counter for a scene to 0. Returns the new value */
  sceneResetO: Scalars['Int']['output'];
  /** Resets the play count for a scene to 0. Returns the new play count value. */
  sceneResetPlayCount: Scalars['Int']['output'];
  /** Sets the resume time point (if provided) and adds the provided duration to the scene's play duration */
  sceneSaveActivity: Scalars['Boolean']['output'];
  sceneUpdate?: Maybe<Scene>;
  scenesDestroy: Scalars['Boolean']['output'];
  scenesUpdate?: Maybe<Array<Maybe<Scene>>>;
  /** @deprecated now uses UI config */
  setDefaultFilter: Scalars['Boolean']['output'];
  setGalleryCover: Scalars['Boolean']['output'];
  /**
   * Enable/disable plugins - enabledMap is a map of plugin IDs to enabled booleans.
   * Plugins not in the map are not affected.
   */
  setPluginsEnabled: Scalars['Boolean']['output'];
  setup: Scalars['Boolean']['output'];
  /** Run batch performer tag task. Returns the job ID. */
  stashBoxBatchPerformerTag: Scalars['String']['output'];
  /** Run batch studio tag task. Returns the job ID. */
  stashBoxBatchStudioTag: Scalars['String']['output'];
  /** Run batch tag tag task. Returns the job ID. */
  stashBoxBatchTagTag: Scalars['String']['output'];
  stopAllJobs: Scalars['Boolean']['output'];
  stopJob: Scalars['Boolean']['output'];
  studioCreate?: Maybe<Studio>;
  studioDestroy: Scalars['Boolean']['output'];
  studioUpdate?: Maybe<Studio>;
  studiosDestroy: Scalars['Boolean']['output'];
  /** Submit fingerprints to stash-box instance */
  submitStashBoxFingerprints: Scalars['Boolean']['output'];
  /** Submit performer as draft to stash-box instance */
  submitStashBoxPerformerDraft?: Maybe<Scalars['ID']['output']>;
  /** Submit scene as draft to stash-box instance */
  submitStashBoxSceneDraft?: Maybe<Scalars['ID']['output']>;
  tagCreate?: Maybe<Tag>;
  tagDestroy: Scalars['Boolean']['output'];
  tagUpdate?: Maybe<Tag>;
  tagsDestroy: Scalars['Boolean']['output'];
  tagsMerge?: Maybe<Tag>;
  /**
   * Uninstalls the given packages.
   * If an error occurs when uninstalling a package, the job will continue to uninstall the remaining packages.
   * Returns the job ID
   */
  uninstallPackages: Scalars['ID']['output'];
  /**
   * Updates the given packages.
   * If a package is not installed, it will not be installed.
   * If a package does not need to be updated, it will not be updated.
   * If no packages are provided, all packages of the given type will be updated.
   * If an error occurs when updating a package, the job will continue to update the remaining packages.
   * Returns the job ID.
   */
  updatePackages: Scalars['ID']['output'];
};


type MutationAddGalleryImagesArgs = {
  input: GalleryAddInput;
};


type MutationAddGroupSubGroupsArgs = {
  input: GroupSubGroupAddInput;
};


type MutationAddTempDlnaipArgs = {
  input: AddTempDlnaipInput;
};


type MutationAnonymiseDatabaseArgs = {
  input: AnonymiseDatabaseInput;
};


type MutationBackupDatabaseArgs = {
  input: BackupDatabaseInput;
};


type MutationBulkGalleryUpdateArgs = {
  input: BulkGalleryUpdateInput;
};


type MutationBulkGroupUpdateArgs = {
  input: BulkGroupUpdateInput;
};


type MutationBulkImageUpdateArgs = {
  input: BulkImageUpdateInput;
};


type MutationBulkMovieUpdateArgs = {
  input: BulkMovieUpdateInput;
};


type MutationBulkPerformerUpdateArgs = {
  input: BulkPerformerUpdateInput;
};


type MutationBulkSceneMarkerUpdateArgs = {
  input: BulkSceneMarkerUpdateInput;
};


type MutationBulkSceneUpdateArgs = {
  input: BulkSceneUpdateInput;
};


type MutationBulkStudioUpdateArgs = {
  input: BulkStudioUpdateInput;
};


type MutationBulkTagUpdateArgs = {
  input: BulkTagUpdateInput;
};


type MutationConfigureDlnaArgs = {
  input: ConfigDlnaInput;
};


type MutationConfigureDefaultsArgs = {
  input: ConfigDefaultSettingsInput;
};


type MutationConfigureGeneralArgs = {
  input: ConfigGeneralInput;
};


type MutationConfigureInterfaceArgs = {
  input: ConfigInterfaceInput;
};


type MutationConfigurePluginArgs = {
  input: Scalars['Map']['input'];
  plugin_id: Scalars['ID']['input'];
};


type MutationConfigureScrapingArgs = {
  input: ConfigScrapingInput;
};


type MutationConfigureUiArgs = {
  input?: InputMaybe<Scalars['Map']['input']>;
  partial?: InputMaybe<Scalars['Map']['input']>;
};


type MutationConfigureUiSettingArgs = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Any']['input']>;
};


type MutationDeleteFilesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationDestroyFilesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationDestroySavedFilterArgs = {
  input: DestroyFilterInput;
};


type MutationDisableDlnaArgs = {
  input: DisableDlnaInput;
};


type MutationEnableDlnaArgs = {
  input: EnableDlnaInput;
};


type MutationExecSqlArgs = {
  args?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  sql: Scalars['String']['input'];
};


type MutationExportObjectsArgs = {
  input: ExportObjectsInput;
};


type MutationFileSetFingerprintsArgs = {
  input: FileSetFingerprintsInput;
};


type MutationGalleriesUpdateArgs = {
  input: Array<GalleryUpdateInput>;
};


type MutationGalleryChapterCreateArgs = {
  input: GalleryChapterCreateInput;
};


type MutationGalleryChapterDestroyArgs = {
  id: Scalars['ID']['input'];
};


type MutationGalleryChapterUpdateArgs = {
  input: GalleryChapterUpdateInput;
};


type MutationGalleryCreateArgs = {
  input: GalleryCreateInput;
};


type MutationGalleryDestroyArgs = {
  input: GalleryDestroyInput;
};


type MutationGalleryUpdateArgs = {
  input: GalleryUpdateInput;
};


type MutationGenerateApiKeyArgs = {
  input: GenerateApiKeyInput;
};


type MutationGroupCreateArgs = {
  input: GroupCreateInput;
};


type MutationGroupDestroyArgs = {
  input: GroupDestroyInput;
};


type MutationGroupUpdateArgs = {
  input: GroupUpdateInput;
};


type MutationGroupsDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationImageDecrementOArgs = {
  id: Scalars['ID']['input'];
};


type MutationImageDestroyArgs = {
  input: ImageDestroyInput;
};


type MutationImageIncrementOArgs = {
  id: Scalars['ID']['input'];
};


type MutationImageResetOArgs = {
  id: Scalars['ID']['input'];
};


type MutationImageUpdateArgs = {
  input: ImageUpdateInput;
};


type MutationImagesDestroyArgs = {
  input: ImagesDestroyInput;
};


type MutationImagesUpdateArgs = {
  input: Array<ImageUpdateInput>;
};


type MutationImportObjectsArgs = {
  input: ImportObjectsInput;
};


type MutationInstallPackagesArgs = {
  packages: Array<PackageSpecInput>;
  type: PackageType;
};


type MutationMetadataAutoTagArgs = {
  input: AutoTagMetadataInput;
};


type MutationMetadataCleanArgs = {
  input: CleanMetadataInput;
};


type MutationMetadataCleanGeneratedArgs = {
  input: CleanGeneratedInput;
};


type MutationMetadataGenerateArgs = {
  input: GenerateMetadataInput;
};


type MutationMetadataIdentifyArgs = {
  input: IdentifyMetadataInput;
};


type MutationMetadataScanArgs = {
  input: ScanMetadataInput;
};


type MutationMigrateArgs = {
  input: MigrateInput;
};


type MutationMigrateBlobsArgs = {
  input: MigrateBlobsInput;
};


type MutationMigrateSceneScreenshotsArgs = {
  input: MigrateSceneScreenshotsInput;
};


type MutationMoveFilesArgs = {
  input: MoveFilesInput;
};


type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};


type MutationMovieDestroyArgs = {
  input: MovieDestroyInput;
};


type MutationMovieUpdateArgs = {
  input: MovieUpdateInput;
};


type MutationMoviesDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationPerformerCreateArgs = {
  input: PerformerCreateInput;
};


type MutationPerformerDestroyArgs = {
  input: PerformerDestroyInput;
};


type MutationPerformerMergeArgs = {
  input: PerformerMergeInput;
};


type MutationPerformerUpdateArgs = {
  input: PerformerUpdateInput;
};


type MutationPerformersDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationQuerySqlArgs = {
  args?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  sql: Scalars['String']['input'];
};


type MutationRemoveGalleryImagesArgs = {
  input: GalleryRemoveInput;
};


type MutationRemoveGroupSubGroupsArgs = {
  input: GroupSubGroupRemoveInput;
};


type MutationRemoveTempDlnaipArgs = {
  input: RemoveTempDlnaipInput;
};


type MutationReorderSubGroupsArgs = {
  input: ReorderSubGroupsInput;
};


type MutationResetGalleryCoverArgs = {
  input: GalleryResetCoverInput;
};


type MutationRevealFileInFileManagerArgs = {
  id: Scalars['ID']['input'];
};


type MutationRevealFolderInFileManagerArgs = {
  id: Scalars['ID']['input'];
};


type MutationRunPluginOperationArgs = {
  args?: InputMaybe<Scalars['Map']['input']>;
  plugin_id: Scalars['ID']['input'];
};


type MutationRunPluginTaskArgs = {
  args?: InputMaybe<Array<PluginArgInput>>;
  args_map?: InputMaybe<Scalars['Map']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  plugin_id: Scalars['ID']['input'];
  task_name?: InputMaybe<Scalars['String']['input']>;
};


type MutationSaveFilterArgs = {
  input: SaveFilterInput;
};


type MutationSceneAddOArgs = {
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};


type MutationSceneAddPlayArgs = {
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};


type MutationSceneAssignFileArgs = {
  input: AssignSceneFileInput;
};


type MutationSceneCreateArgs = {
  input: SceneCreateInput;
};


type MutationSceneDecrementOArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneDeleteOArgs = {
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};


type MutationSceneDeletePlayArgs = {
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};


type MutationSceneDestroyArgs = {
  input: SceneDestroyInput;
};


type MutationSceneGenerateScreenshotArgs = {
  at?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
};


type MutationSceneIncrementOArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneIncrementPlayCountArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneMarkerCreateArgs = {
  input: SceneMarkerCreateInput;
};


type MutationSceneMarkerDestroyArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneMarkerUpdateArgs = {
  input: SceneMarkerUpdateInput;
};


type MutationSceneMarkersDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationSceneMergeArgs = {
  input: SceneMergeInput;
};


type MutationSceneResetActivityArgs = {
  id: Scalars['ID']['input'];
  reset_duration?: InputMaybe<Scalars['Boolean']['input']>;
  reset_resume?: InputMaybe<Scalars['Boolean']['input']>;
};


type MutationSceneResetOArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneResetPlayCountArgs = {
  id: Scalars['ID']['input'];
};


type MutationSceneSaveActivityArgs = {
  id: Scalars['ID']['input'];
  playDuration?: InputMaybe<Scalars['Float']['input']>;
  resume_time?: InputMaybe<Scalars['Float']['input']>;
};


type MutationSceneUpdateArgs = {
  input: SceneUpdateInput;
};


type MutationScenesDestroyArgs = {
  input: ScenesDestroyInput;
};


type MutationScenesUpdateArgs = {
  input: Array<SceneUpdateInput>;
};


type MutationSetDefaultFilterArgs = {
  input: SetDefaultFilterInput;
};


type MutationSetGalleryCoverArgs = {
  input: GallerySetCoverInput;
};


type MutationSetPluginsEnabledArgs = {
  enabledMap: Scalars['BoolMap']['input'];
};


type MutationSetupArgs = {
  input: SetupInput;
};


type MutationStashBoxBatchPerformerTagArgs = {
  input: StashBoxBatchTagInput;
};


type MutationStashBoxBatchStudioTagArgs = {
  input: StashBoxBatchTagInput;
};


type MutationStashBoxBatchTagTagArgs = {
  input: StashBoxBatchTagInput;
};


type MutationStopJobArgs = {
  job_id: Scalars['ID']['input'];
};


type MutationStudioCreateArgs = {
  input: StudioCreateInput;
};


type MutationStudioDestroyArgs = {
  input: StudioDestroyInput;
};


type MutationStudioUpdateArgs = {
  input: StudioUpdateInput;
};


type MutationStudiosDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationSubmitStashBoxFingerprintsArgs = {
  input: StashBoxFingerprintSubmissionInput;
};


type MutationSubmitStashBoxPerformerDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


type MutationSubmitStashBoxSceneDraftArgs = {
  input: StashBoxDraftSubmissionInput;
};


type MutationTagCreateArgs = {
  input: TagCreateInput;
};


type MutationTagDestroyArgs = {
  input: TagDestroyInput;
};


type MutationTagUpdateArgs = {
  input: TagUpdateInput;
};


type MutationTagsDestroyArgs = {
  ids: Array<Scalars['ID']['input']>;
};


type MutationTagsMergeArgs = {
  input: TagsMergeInput;
};


type MutationUninstallPackagesArgs = {
  packages: Array<PackageSpecInput>;
  type: PackageType;
};


type MutationUpdatePackagesArgs = {
  packages?: InputMaybe<Array<PackageSpecInput>>;
  type: PackageType;
};

type OrientationCriterionInput = {
  value: Array<OrientationEnum>;
};

enum OrientationEnum {
  /** Landscape */
  Landscape = 'LANDSCAPE',
  /** Portrait */
  Portrait = 'PORTRAIT',
  /** Square */
  Square = 'SQUARE'
}

type Package = {
  __typename?: 'Package';
  date?: Maybe<Scalars['Timestamp']['output']>;
  metadata: Scalars['Map']['output'];
  name: Scalars['String']['output'];
  package_id: Scalars['String']['output'];
  requires: Array<Package>;
  sourceURL: Scalars['String']['output'];
  /** The version of this package currently available from the remote source */
  source_package?: Maybe<Package>;
  version?: Maybe<Scalars['String']['output']>;
};

type PackageSource = {
  __typename?: 'PackageSource';
  local_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

type PackageSourceInput = {
  local_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

type PackageSpecInput = {
  id: Scalars['String']['input'];
  sourceURL: Scalars['String']['input'];
};

enum PackageType {
  Plugin = 'Plugin',
  Scraper = 'Scraper'
}

type Performer = {
  __typename?: 'Performer';
  alias_list: Array<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['String']['output']>;
  career_end?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use career_start and career_end */
  career_length?: Maybe<Scalars['String']['output']>;
  career_start?: Maybe<Scalars['String']['output']>;
  circumcised?: Maybe<CircumcisedEnum>;
  country?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  death_date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  disambiguation?: Maybe<Scalars['String']['output']>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  eye_color?: Maybe<Scalars['String']['output']>;
  fake_tits?: Maybe<Scalars['String']['output']>;
  favorite: Scalars['Boolean']['output'];
  gallery_count: Scalars['Int']['output'];
  gender?: Maybe<GenderEnum>;
  group_count: Scalars['Int']['output'];
  groups: Array<Group>;
  hair_color?: Maybe<Scalars['String']['output']>;
  height_cm?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  ignore_auto_tag: Scalars['Boolean']['output'];
  image_count: Scalars['Int']['output'];
  image_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use urls */
  instagram?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<Scalars['String']['output']>;
  /** @deprecated use group_count instead */
  movie_count: Scalars['Int']['output'];
  /** @deprecated use groups instead */
  movies: Array<Movie>;
  name: Scalars['String']['output'];
  o_counter?: Maybe<Scalars['Int']['output']>;
  penis_length?: Maybe<Scalars['Float']['output']>;
  performer_count: Scalars['Int']['output'];
  piercings?: Maybe<Scalars['String']['output']>;
  rating100?: Maybe<Scalars['Int']['output']>;
  scene_count: Scalars['Int']['output'];
  scenes: Array<Scene>;
  stash_ids: Array<StashId>;
  tags: Array<Tag>;
  tattoos?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use urls */
  twitter?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
  weight?: Maybe<Scalars['Int']['output']>;
};

type PerformerCreateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  alias_list?: InputMaybe<Array<Scalars['String']['input']>>;
  birthdate?: InputMaybe<Scalars['String']['input']>;
  career_end?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use career_start and career_end */
  career_length?: InputMaybe<Scalars['String']['input']>;
  career_start?: InputMaybe<Scalars['String']['input']>;
  circumcised?: InputMaybe<CircumcisedEnum>;
  country?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  death_date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  disambiguation?: InputMaybe<Scalars['String']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  eye_color?: InputMaybe<Scalars['String']['input']>;
  fake_tits?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']['input']>;
  height_cm?: InputMaybe<Scalars['Int']['input']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  instagram?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  penis_length?: InputMaybe<Scalars['Float']['input']>;
  piercings?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  tattoos?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  twitter?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

type PerformerDestroyInput = {
  id: Scalars['ID']['input'];
};

type PerformerFilterType = {
  AND?: InputMaybe<PerformerFilterType>;
  NOT?: InputMaybe<PerformerFilterType>;
  OR?: InputMaybe<PerformerFilterType>;
  /** Filter by age */
  age?: InputMaybe<IntCriterionInput>;
  /** Filter by aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by birth year */
  birth_year?: InputMaybe<IntCriterionInput>;
  /** Filter by birthdate */
  birthdate?: InputMaybe<DateCriterionInput>;
  /** Filter by career end */
  career_end?: InputMaybe<DateCriterionInput>;
  /**
   * Deprecated: use career_start and career_end. This filter is non-functional.
   * @deprecated Use career_start and career_end
   */
  career_length?: InputMaybe<StringCriterionInput>;
  /** Filter by career start */
  career_start?: InputMaybe<DateCriterionInput>;
  /** Filter by circumcision */
  circumcised?: InputMaybe<CircumcisionCriterionInput>;
  /** Filter by country */
  country?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by death date */
  death_date?: InputMaybe<DateCriterionInput>;
  /** Filter by death year */
  death_year?: InputMaybe<IntCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  disambiguation?: InputMaybe<StringCriterionInput>;
  /** Filter by ethnicity */
  ethnicity?: InputMaybe<StringCriterionInput>;
  /** Filter by eye color */
  eye_color?: InputMaybe<StringCriterionInput>;
  /** Filter by fake tits value */
  fake_tits?: InputMaybe<StringCriterionInput>;
  /** Filter by favorite */
  filter_favorites?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by gender */
  gender?: InputMaybe<GenderCriterionInput>;
  /** Filter by groups where performer appears in scene */
  groups?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by hair color */
  hair_color?: InputMaybe<StringCriterionInput>;
  /** Filter by height in cm */
  height_cm?: InputMaybe<IntCriterionInput>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related images that meet this criteria */
  images_filter?: InputMaybe<ImageFilterType>;
  /** Filter to only include performers missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  /** Filter by marker count (via scene) */
  marker_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scene markers (via scene) that meet this criteria */
  markers_filter?: InputMaybe<SceneMarkerFilterType>;
  /** Filter by measurements */
  measurements?: InputMaybe<StringCriterionInput>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by o count */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by penis length value */
  penis_length?: InputMaybe<FloatCriterionInput>;
  /** Filter by performers where performer appears with another performer in scene/image/gallery */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by piercings */
  piercings?: InputMaybe<StringCriterionInput>;
  /** Filter by play count */
  play_count?: InputMaybe<IntCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /**
   * Filter by StashID
   * @deprecated use stash_ids_endpoint instead
   */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by StashIDs */
  stash_ids_endpoint?: InputMaybe<StashIDsCriterionInput>;
  /** Filter by studios where performer appears in scene/image/gallery */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include performers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related tags that meet this criteria */
  tags_filter?: InputMaybe<TagFilterType>;
  /** Filter by tattoos */
  tattoos?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
  /** Filter by weight */
  weight?: InputMaybe<IntCriterionInput>;
};

type PerformerMergeInput = {
  destination: Scalars['ID']['input'];
  source: Array<Scalars['ID']['input']>;
  values?: InputMaybe<PerformerUpdateInput>;
};

type PerformerUpdateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  alias_list?: InputMaybe<Array<Scalars['String']['input']>>;
  birthdate?: InputMaybe<Scalars['String']['input']>;
  career_end?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use career_start and career_end */
  career_length?: InputMaybe<Scalars['String']['input']>;
  career_start?: InputMaybe<Scalars['String']['input']>;
  circumcised?: InputMaybe<CircumcisedEnum>;
  country?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  death_date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  disambiguation?: InputMaybe<Scalars['String']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  eye_color?: InputMaybe<Scalars['String']['input']>;
  fake_tits?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  gender?: InputMaybe<GenderEnum>;
  hair_color?: InputMaybe<Scalars['String']['input']>;
  height_cm?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  instagram?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  penis_length?: InputMaybe<Scalars['Float']['input']>;
  piercings?: InputMaybe<Scalars['String']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  tattoos?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  twitter?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

type PhashDistanceCriterionInput = {
  distance?: InputMaybe<Scalars['Int']['input']>;
  modifier: CriterionModifier;
  value: Scalars['String']['input'];
};

type Plugin = {
  __typename?: 'Plugin';
  description?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  hooks?: Maybe<Array<PluginHook>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  paths: PluginPaths;
  /**
   * Plugin IDs of plugins that this plugin depends on.
   * Applies only for UI plugins to indicate css/javascript load order.
   */
  requires?: Maybe<Array<Scalars['ID']['output']>>;
  settings?: Maybe<Array<PluginSetting>>;
  tasks?: Maybe<Array<PluginTask>>;
  url?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

type PluginArgInput = {
  key: Scalars['String']['input'];
  value?: InputMaybe<PluginValueInput>;
};

type PluginHook = {
  __typename?: 'PluginHook';
  description?: Maybe<Scalars['String']['output']>;
  hooks?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  plugin: Plugin;
};

type PluginPaths = {
  __typename?: 'PluginPaths';
  css?: Maybe<Array<Scalars['String']['output']>>;
  javascript?: Maybe<Array<Scalars['String']['output']>>;
};

type PluginResult = {
  __typename?: 'PluginResult';
  error?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
};

type PluginSetting = {
  __typename?: 'PluginSetting';
  description?: Maybe<Scalars['String']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: PluginSettingTypeEnum;
};

enum PluginSettingTypeEnum {
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  String = 'STRING'
}

type PluginTask = {
  __typename?: 'PluginTask';
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  plugin: Plugin;
};

type PluginValueInput = {
  a?: InputMaybe<Array<PluginValueInput>>;
  b?: InputMaybe<Scalars['Boolean']['input']>;
  f?: InputMaybe<Scalars['Float']['input']>;
  i?: InputMaybe<Scalars['Int']['input']>;
  o?: InputMaybe<Array<PluginArgInput>>;
  str?: InputMaybe<Scalars['String']['input']>;
};

enum PreviewPreset {
  /** X264_FAST */
  Fast = 'fast',
  /** X264_MEDIUM */
  Medium = 'medium',
  /** X264_SLOW */
  Slow = 'slow',
  /** X264_SLOWER */
  Slower = 'slower',
  /** X264_ULTRAFAST */
  Ultrafast = 'ultrafast',
  /** X264_VERYFAST */
  Veryfast = 'veryfast',
  /** X264_VERYSLOW */
  Veryslow = 'veryslow'
}

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** @deprecated Use findGalleries instead */
  allGalleries: Array<Gallery>;
  /** @deprecated Use findImages instead */
  allImages: Array<Image>;
  /** @deprecated Use findGroups instead */
  allMovies: Array<Movie>;
  allPerformers: Array<Performer>;
  /** @deprecated Use findSceneMarkers instead */
  allSceneMarkers: Array<SceneMarker>;
  /** @deprecated Use findScenes instead */
  allScenes: Array<Scene>;
  /** @deprecated Use findStudios instead */
  allStudios: Array<Studio>;
  /** @deprecated Use findTags instead */
  allTags: Array<Tag>;
  /** List available packages */
  availablePackages: Array<Package>;
  /** Returns the current, complete configuration */
  configuration: ConfigResult;
  /** Returns an array of paths for the given path */
  directory: Directory;
  dlnaStatus: DlnaStatus;
  /** @deprecated default filter now stored in UI config */
  findDefaultFilter?: Maybe<SavedFilter>;
  /**
   * Returns any groups of scenes that are perceptual duplicates within the queried distance
   * and the difference between their duration is smaller than durationDiff
   */
  findDuplicateScenes: Array<Array<Scene>>;
  /** Find a file by its id or path */
  findFile: BaseFile;
  /** Queries for Files */
  findFiles: FindFilesResultType;
  /** Find a file by its id or path */
  findFolder: Folder;
  /** Queries for Files */
  findFolders: FindFoldersResultType;
  findGalleries: FindGalleriesResultType;
  findGallery?: Maybe<Gallery>;
  /** Find a group by ID */
  findGroup?: Maybe<Group>;
  /** A function which queries Group objects */
  findGroups: FindGroupsResultType;
  findImage?: Maybe<Image>;
  /** A function which queries Scene objects */
  findImages: FindImagesResultType;
  findJob?: Maybe<Job>;
  /**
   * Find a movie by ID
   * @deprecated Use findGroup instead
   */
  findMovie?: Maybe<Movie>;
  /**
   * A function which queries Movie objects
   * @deprecated Use findGroups instead
   */
  findMovies: FindMoviesResultType;
  /** Find a performer by ID */
  findPerformer?: Maybe<Performer>;
  /** A function which queries Performer objects */
  findPerformers: FindPerformersResultType;
  findSavedFilter?: Maybe<SavedFilter>;
  findSavedFilters: Array<SavedFilter>;
  /** Find a scene by ID or Checksum */
  findScene?: Maybe<Scene>;
  findSceneByHash?: Maybe<Scene>;
  /** A function which queries SceneMarker objects */
  findSceneMarkers: FindSceneMarkersResultType;
  /** A function which queries Scene objects */
  findScenes: FindScenesResultType;
  findScenesByPathRegex: FindScenesResultType;
  /** Find a studio by ID */
  findStudio?: Maybe<Studio>;
  /** A function which queries Studio objects */
  findStudios: FindStudiosResultType;
  findTag?: Maybe<Tag>;
  findTags: FindTagsResultType;
  /** List installed packages */
  installedPackages: Array<Package>;
  jobQueue?: Maybe<Array<Job>>;
  latestversion: LatestVersion;
  /** List available scrapers */
  listScrapers: Array<Scraper>;
  logs: Array<LogEntry>;
  /** Get marker strings */
  markerStrings: Array<Maybe<MarkerStringsResultType>>;
  /** Retrieve random scene markers for the wall */
  markerWall: Array<SceneMarker>;
  parseSceneFilenames: SceneParserResultType;
  /** List available plugin operations */
  pluginTasks?: Maybe<Array<PluginTask>>;
  /** List loaded plugins */
  plugins?: Maybe<Array<Plugin>>;
  /** Organize scene markers by tag for a given scene ID */
  sceneMarkerTags: Array<SceneMarkerTag>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  /** Retrieve random scenes for the wall */
  sceneWall: Array<Scene>;
  /** Scrapes a complete gallery record based on a URL */
  scrapeGalleryURL?: Maybe<ScrapedGallery>;
  /** Scrapes a complete group record based on a URL */
  scrapeGroupURL?: Maybe<ScrapedGroup>;
  /** Scrapes a complete image record based on a URL */
  scrapeImageURL?: Maybe<ScrapedImage>;
  /**
   * Scrapes a complete movie record based on a URL
   * @deprecated Use scrapeGroupURL instead
   */
  scrapeMovieURL?: Maybe<ScrapedMovie>;
  /** Scrape for multiple performers */
  scrapeMultiPerformers: Array<Array<ScrapedPerformer>>;
  /** Scrape for multiple scenes */
  scrapeMultiScenes: Array<Array<ScrapedScene>>;
  /** Scrapes a complete performer record based on a URL */
  scrapePerformerURL?: Maybe<ScrapedPerformer>;
  /** Scrapes a complete scene record based on a URL */
  scrapeSceneURL?: Maybe<ScrapedScene>;
  /** Scrape for a single gallery */
  scrapeSingleGallery: Array<ScrapedGallery>;
  /** Scrape for a single group */
  scrapeSingleGroup: Array<ScrapedGroup>;
  /** Scrape for a single image */
  scrapeSingleImage: Array<ScrapedImage>;
  /**
   * Scrape for a single movie
   * @deprecated Use scrapeSingleGroup instead
   */
  scrapeSingleMovie: Array<ScrapedMovie>;
  /** Scrape for a single performer */
  scrapeSinglePerformer: Array<ScrapedPerformer>;
  /** Scrape for a single scene */
  scrapeSingleScene: Array<ScrapedScene>;
  /** Scrape for a single studio */
  scrapeSingleStudio: Array<ScrapedStudio>;
  /** Scrape for a single tag */
  scrapeSingleTag: Array<ScrapedTag>;
  /** Scrapes content based on a URL */
  scrapeURL?: Maybe<ScrapedContent>;
  /** Get stats */
  stats: StatsResultType;
  systemStatus: SystemStatus;
  validateStashBoxCredentials: StashBoxValidationResult;
  version: Version;
};


/** The query root for this schema */
type QueryAvailablePackagesArgs = {
  source: Scalars['String']['input'];
  type: PackageType;
};


/** The query root for this schema */
type QueryDirectoryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryFindDefaultFilterArgs = {
  mode: FilterMode;
};


/** The query root for this schema */
type QueryFindDuplicateScenesArgs = {
  distance?: InputMaybe<Scalars['Int']['input']>;
  duration_diff?: InputMaybe<Scalars['Float']['input']>;
};


/** The query root for this schema */
type QueryFindFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryFindFilesArgs = {
  file_filter?: InputMaybe<FileFilterType>;
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** The query root for this schema */
type QueryFindFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryFindFoldersArgs = {
  filter?: InputMaybe<FindFilterType>;
  folder_filter?: InputMaybe<FolderFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** The query root for this schema */
type QueryFindGalleriesArgs = {
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** The query root for this schema */
type QueryFindGalleryArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindGroupArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindGroupsArgs = {
  filter?: InputMaybe<FindFilterType>;
  group_filter?: InputMaybe<GroupFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


/** The query root for this schema */
type QueryFindImageArgs = {
  checksum?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The query root for this schema */
type QueryFindImagesArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};


/** The query root for this schema */
type QueryFindJobArgs = {
  input: FindJobInput;
};


/** The query root for this schema */
type QueryFindMovieArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindMoviesArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  movie_filter?: InputMaybe<MovieFilterType>;
};


/** The query root for this schema */
type QueryFindPerformerArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindPerformersArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  performer_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};


/** The query root for this schema */
type QueryFindSavedFilterArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindSavedFiltersArgs = {
  mode?: InputMaybe<FilterMode>;
};


/** The query root for this schema */
type QueryFindSceneArgs = {
  checksum?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The query root for this schema */
type QueryFindSceneByHashArgs = {
  input: SceneHashInput;
};


/** The query root for this schema */
type QueryFindSceneMarkersArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
};


/** The query root for this schema */
type QueryFindScenesArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']['input']>>;
};


/** The query root for this schema */
type QueryFindScenesByPathRegexArgs = {
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
type QueryFindStudioArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindStudiosArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  studio_filter?: InputMaybe<StudioFilterType>;
};


/** The query root for this schema */
type QueryFindTagArgs = {
  id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QueryFindTagsArgs = {
  filter?: InputMaybe<FindFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  tag_filter?: InputMaybe<TagFilterType>;
};


/** The query root for this schema */
type QueryInstalledPackagesArgs = {
  type: PackageType;
};


/** The query root for this schema */
type QueryListScrapersArgs = {
  types: Array<ScrapeContentType>;
};


/** The query root for this schema */
type QueryMarkerStringsArgs = {
  q?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryMarkerWallArgs = {
  q?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryParseSceneFilenamesArgs = {
  config: SceneParserInput;
  filter?: InputMaybe<FindFilterType>;
};


/** The query root for this schema */
type QuerySceneMarkerTagsArgs = {
  scene_id: Scalars['ID']['input'];
};


/** The query root for this schema */
type QuerySceneStreamsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


/** The query root for this schema */
type QuerySceneWallArgs = {
  q?: InputMaybe<Scalars['String']['input']>;
};


/** The query root for this schema */
type QueryScrapeGalleryUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeGroupUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeImageUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeMovieUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeMultiPerformersArgs = {
  input: ScrapeMultiPerformersInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeMultiScenesArgs = {
  input: ScrapeMultiScenesInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapePerformerUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeSceneUrlArgs = {
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryScrapeSingleGalleryArgs = {
  input: ScrapeSingleGalleryInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleGroupArgs = {
  input: ScrapeSingleGroupInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleImageArgs = {
  input: ScrapeSingleImageInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleMovieArgs = {
  input: ScrapeSingleMovieInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSinglePerformerArgs = {
  input: ScrapeSinglePerformerInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleSceneArgs = {
  input: ScrapeSingleSceneInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleStudioArgs = {
  input: ScrapeSingleStudioInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeSingleTagArgs = {
  input: ScrapeSingleTagInput;
  source: ScraperSourceInput;
};


/** The query root for this schema */
type QueryScrapeUrlArgs = {
  ty: ScrapeContentType;
  url: Scalars['String']['input'];
};


/** The query root for this schema */
type QueryValidateStashBoxCredentialsArgs = {
  input: StashBoxInput;
};

type RemoveTempDlnaipInput = {
  address: Scalars['String']['input'];
};

type ReorderSubGroupsInput = {
  /** ID of the group to reorder sub groups for */
  group_id: Scalars['ID']['input'];
  /** If true, the sub groups will be inserted after the insert_index, otherwise they will be inserted before */
  insert_after?: InputMaybe<Scalars['Boolean']['input']>;
  /** The sub-group ID at which to insert the sub groups */
  insert_at_id: Scalars['ID']['input'];
  /**
   * IDs of the sub groups to reorder. These must be a subset of the current sub groups.
   * Sub groups will be inserted in this order at the insert_index
   */
  sub_group_ids: Array<Scalars['ID']['input']>;
};

type ResolutionCriterionInput = {
  modifier: CriterionModifier;
  value: ResolutionEnum;
};

enum ResolutionEnum {
  /** 8K */
  EightK = 'EIGHT_K',
  /** 5K */
  FiveK = 'FIVE_K',
  /** 4K */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 8K+ */
  Huge = 'HUGE',
  /** 240p */
  Low = 'LOW',
  /** 1440p */
  QuadHd = 'QUAD_HD',
  /** 360p */
  R360P = 'R360P',
  /** 7K */
  SevenK = 'SEVEN_K',
  /** 6K */
  SixK = 'SIX_K',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD',
  /** 144p */
  VeryLow = 'VERY_LOW',
  /**
   * 1920p
   * @deprecated Use 4K instead
   */
  VrHd = 'VR_HD',
  /** 540p */
  WebHd = 'WEB_HD'
}

type SqlExecResult = {
  __typename?: 'SQLExecResult';
  /**
   * The integer generated by the database in response to a command.
   * Typically this will be from an "auto increment" column when inserting a new row.
   * Not all databases support this feature, and the syntax of such statements varies.
   */
  last_insert_id?: Maybe<Scalars['Int64']['output']>;
  /**
   * The number of rows affected by the query, usually an UPDATE, INSERT, or DELETE.
   * Not all queries or databases support this feature.
   */
  rows_affected?: Maybe<Scalars['Int64']['output']>;
};

type SqlQueryResult = {
  __typename?: 'SQLQueryResult';
  /** The column names, in the order they appear in the result set. */
  columns: Array<Scalars['String']['output']>;
  /** The returned rows. */
  rows: Array<Array<Maybe<Scalars['Any']['output']>>>;
};

type SaveFilterInput = {
  find_filter?: InputMaybe<FindFilterType>;
  /** provide ID to overwrite existing filter */
  id?: InputMaybe<Scalars['ID']['input']>;
  mode: FilterMode;
  name: Scalars['String']['input'];
  object_filter?: InputMaybe<Scalars['SavedObjectFilter']['input']>;
  ui_options?: InputMaybe<Scalars['SavedUIOptions']['input']>;
};

type SavedFilter = {
  __typename?: 'SavedFilter';
  /**
   * JSON-encoded filter string
   * @deprecated use find_filter and object_filter instead
   */
  filter: Scalars['String']['output'];
  find_filter?: Maybe<SavedFindFilterType>;
  id: Scalars['ID']['output'];
  mode: FilterMode;
  name: Scalars['String']['output'];
  object_filter?: Maybe<Scalars['SavedObjectFilter']['output']>;
  ui_options?: Maybe<Scalars['SavedUIOptions']['output']>;
};

type SavedFindFilterType = {
  __typename?: 'SavedFindFilterType';
  direction?: Maybe<SortDirectionEnum>;
  page?: Maybe<Scalars['Int']['output']>;
  /** use per_page = -1 to indicate all results. Defaults to 25. */
  per_page?: Maybe<Scalars['Int']['output']>;
  q?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['String']['output']>;
};

/** Filter options for meta data scannning */
type ScanMetaDataFilterInput = {
  /** If set, files with a modification time before this time point are ignored by the scan */
  minModTime?: InputMaybe<Scalars['Timestamp']['input']>;
};

type ScanMetadataInput = {
  /** Filter options for the scan */
  filter?: InputMaybe<ScanMetaDataFilterInput>;
  paths?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Forces a rescan on files even if modification time is unchanged */
  rescan?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate covers during scan */
  scanGenerateCovers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate image phashes during scan */
  scanGenerateImagePhashes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate image previews during scan */
  scanGenerateImagePreviews?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate video phashes during scan */
  scanGeneratePhashes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate previews during scan */
  scanGeneratePreviews?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate sprites during scan */
  scanGenerateSprites?: InputMaybe<Scalars['Boolean']['input']>;
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails?: InputMaybe<Scalars['Boolean']['input']>;
};

type ScanMetadataOptions = {
  __typename?: 'ScanMetadataOptions';
  /** Forces a rescan on files even if modification time is unchanged */
  rescan: Scalars['Boolean']['output'];
  /** Generate image clip previews during scan */
  scanGenerateClipPreviews: Scalars['Boolean']['output'];
  /** Generate covers during scan */
  scanGenerateCovers: Scalars['Boolean']['output'];
  /** Generate image phashes during scan */
  scanGenerateImagePhashes?: Maybe<Scalars['Boolean']['output']>;
  /** Generate image previews during scan */
  scanGenerateImagePreviews: Scalars['Boolean']['output'];
  /** Generate video phashes during scan */
  scanGeneratePhashes: Scalars['Boolean']['output'];
  /** Generate previews during scan */
  scanGeneratePreviews: Scalars['Boolean']['output'];
  /** Generate sprites during scan */
  scanGenerateSprites: Scalars['Boolean']['output'];
  /** Generate image thumbnails during scan */
  scanGenerateThumbnails: Scalars['Boolean']['output'];
};

type Scene = {
  __typename?: 'Scene';
  captions?: Maybe<Array<VideoCaption>>;
  code?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  files: Array<VideoFile>;
  galleries: Array<Gallery>;
  groups: Array<SceneGroup>;
  id: Scalars['ID']['output'];
  interactive: Scalars['Boolean']['output'];
  interactive_speed?: Maybe<Scalars['Int']['output']>;
  /** The last time play count was updated */
  last_played_at?: Maybe<Scalars['Time']['output']>;
  /** @deprecated Use groups */
  movies: Array<SceneMovie>;
  o_counter?: Maybe<Scalars['Int']['output']>;
  /** Times the o counter was incremented */
  o_history: Array<Scalars['Time']['output']>;
  organized: Scalars['Boolean']['output'];
  paths: ScenePathsType;
  performers: Array<Performer>;
  /** The number ot times a scene has been played */
  play_count?: Maybe<Scalars['Int']['output']>;
  /** The total time a scene has spent playing */
  play_duration?: Maybe<Scalars['Float']['output']>;
  /** Times a scene was played */
  play_history: Array<Scalars['Time']['output']>;
  rating100?: Maybe<Scalars['Int']['output']>;
  /** The time index a scene was left at */
  resume_time?: Maybe<Scalars['Float']['output']>;
  /** Return valid stream paths */
  sceneStreams: Array<SceneStreamEndpoint>;
  scene_markers: Array<SceneMarker>;
  stash_ids: Array<StashId>;
  studio?: Maybe<Studio>;
  tags: Array<Tag>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls: Array<Scalars['String']['output']>;
};

type SceneCreateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  /**
   * The first id will be assigned as primary.
   * Files will be reassigned from existing scenes if applicable.
   * Files must not already be primary for another scene.
   */
  file_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  groups?: InputMaybe<Array<SceneGroupInput>>;
  /** @deprecated Use groups */
  movies?: InputMaybe<Array<SceneMovieInput>>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type SceneDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete the file entry from the database if the file is not assigned to any other objects */
  destroy_file_entry?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

type SceneFileType = {
  __typename?: 'SceneFileType';
  audio_codec?: Maybe<Scalars['String']['output']>;
  bitrate?: Maybe<Scalars['Int']['output']>;
  duration?: Maybe<Scalars['Float']['output']>;
  framerate?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  video_codec?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

type SceneFilterType = {
  AND?: InputMaybe<SceneFilterType>;
  NOT?: InputMaybe<SceneFilterType>;
  OR?: InputMaybe<SceneFilterType>;
  /** Filter by audio codec */
  audio_codec?: InputMaybe<StringCriterionInput>;
  /** Filter by bit rate */
  bitrate?: InputMaybe<IntCriterionInput>;
  /** Filter by captions */
  captions?: InputMaybe<StringCriterionInput>;
  /** Filter by file checksum */
  checksum?: InputMaybe<StringCriterionInput>;
  code?: InputMaybe<StringCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by date */
  date?: InputMaybe<DateCriterionInput>;
  details?: InputMaybe<StringCriterionInput>;
  director?: InputMaybe<StringCriterionInput>;
  /** Filter Scenes by duplication criteria */
  duplicated?: InputMaybe<DuplicationCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<IntCriterionInput>;
  /** Filter by file count */
  file_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related files that meet this criteria */
  files_filter?: InputMaybe<FileFilterType>;
  /** Filter by frame rate */
  framerate?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes with this gallery */
  galleries?: InputMaybe<MultiCriterionInput>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  /** Filter to only include scenes with this group */
  groups?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related groups that meet this criteria */
  groups_filter?: InputMaybe<GroupFilterType>;
  /** Filter to only include scenes which have markers. `true` or `false` */
  has_markers?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<IntCriterionInput>;
  /** Filter by interactive */
  interactive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by InteractiveSpeed */
  interactive_speed?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  /** Filter by scene last played time */
  last_played_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by related markers that meet this criteria */
  markers_filter?: InputMaybe<SceneMarkerFilterType>;
  /**
   * Filter to only include scenes with this movie
   * @deprecated use groups instead
   */
  movies?: InputMaybe<MultiCriterionInput>;
  /**
   * Filter by related movies that meet this criteria
   * @deprecated use groups_filter instead
   */
  movies_filter?: InputMaybe<MovieFilterType>;
  /** Filter by o-counter */
  o_counter?: InputMaybe<IntCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by orientation */
  orientation?: InputMaybe<OrientationCriterionInput>;
  /** Filter by file oshash */
  oshash?: InputMaybe<StringCriterionInput>;
  /** Filter by path */
  path?: InputMaybe<StringCriterionInput>;
  /** Filter scenes by performer age at time of scene */
  performer_age?: InputMaybe<IntCriterionInput>;
  /** Filter by performer count */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter scenes that have performers that have been favorited */
  performer_favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter to only include scenes with performers with these tags */
  performer_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter to only include scenes with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by related performers that meet this criteria */
  performers_filter?: InputMaybe<PerformerFilterType>;
  /**
   * Filter by file phash
   * @deprecated Use phash_distance instead
   */
  phash?: InputMaybe<StringCriterionInput>;
  /** Filter by file phash distance */
  phash_distance?: InputMaybe<PhashDistanceCriterionInput>;
  /** Filter by play count */
  play_count?: InputMaybe<IntCriterionInput>;
  /** Filter by play duration (in seconds) */
  play_duration?: InputMaybe<IntCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by resolution */
  resolution?: InputMaybe<ResolutionCriterionInput>;
  /** Filter by resume time */
  resume_time?: InputMaybe<IntCriterionInput>;
  /** Filter by StashID count */
  stash_id_count?: InputMaybe<IntCriterionInput>;
  /**
   * Filter by StashID
   * @deprecated use stash_ids_endpoint instead
   */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by StashIDs */
  stash_ids_endpoint?: InputMaybe<StashIDsCriterionInput>;
  /** Filter to only include scenes with this studio */
  studios?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include scenes with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by related tags that meet this criteria */
  tags_filter?: InputMaybe<TagFilterType>;
  title?: InputMaybe<StringCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
  /** Filter by video codec */
  video_codec?: InputMaybe<StringCriterionInput>;
};

type SceneGroup = {
  __typename?: 'SceneGroup';
  group: Group;
  scene_index?: Maybe<Scalars['Int']['output']>;
};

type SceneGroupInput = {
  group_id: Scalars['ID']['input'];
  scene_index?: InputMaybe<Scalars['Int']['input']>;
};

type SceneHashInput = {
  checksum?: InputMaybe<Scalars['String']['input']>;
  oshash?: InputMaybe<Scalars['String']['input']>;
};

type SceneMarker = {
  __typename?: 'SceneMarker';
  created_at: Scalars['Time']['output'];
  /** The optional end time of the marker (in seconds). Supports decimals. */
  end_seconds?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** The path to the preview image for this marker */
  preview: Scalars['String']['output'];
  primary_tag: Tag;
  scene: Scene;
  /** The path to the screenshot image for this marker */
  screenshot: Scalars['String']['output'];
  /** The required start time of the marker (in seconds). Supports decimals. */
  seconds: Scalars['Float']['output'];
  /** The path to stream this marker */
  stream: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};

type SceneMarkerCreateInput = {
  /** The optional end time of the marker (in seconds). Supports decimals. */
  end_seconds?: InputMaybe<Scalars['Float']['input']>;
  primary_tag_id: Scalars['ID']['input'];
  scene_id: Scalars['ID']['input'];
  /** The required start time of the marker (in seconds). Supports decimals. */
  seconds: Scalars['Float']['input'];
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title: Scalars['String']['input'];
};

type SceneMarkerFilterType = {
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by duration (in seconds) */
  duration?: InputMaybe<FloatCriterionInput>;
  /** Filter to only include scene markers with these performers */
  performers?: InputMaybe<MultiCriterionInput>;
  /** Filter by scene creation time */
  scene_created_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by scene date */
  scene_date?: InputMaybe<DateCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scene_filter?: InputMaybe<SceneFilterType>;
  /** Filter to only include scene markers attached to a scene with these tags */
  scene_tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by scene last update time */
  scene_updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter to only include scene markers from these scenes */
  scenes?: InputMaybe<MultiCriterionInput>;
  /** Filter to only include scene markers with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
};

type SceneMarkerTag = {
  __typename?: 'SceneMarkerTag';
  scene_markers: Array<SceneMarker>;
  tag: Tag;
};

type SceneMarkerUpdateInput = {
  /** The end time of the marker (in seconds). Supports decimals. */
  end_seconds?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  primary_tag_id?: InputMaybe<Scalars['ID']['input']>;
  scene_id?: InputMaybe<Scalars['ID']['input']>;
  /** The start time of the marker (in seconds). Supports decimals. */
  seconds?: InputMaybe<Scalars['Float']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

type SceneMergeInput = {
  destination: Scalars['ID']['input'];
  o_history?: InputMaybe<Scalars['Boolean']['input']>;
  play_history?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * If destination scene has no files, then the primary file of the
   * first source scene will be assigned as primary
   */
  source: Array<Scalars['ID']['input']>;
  values?: InputMaybe<SceneUpdateInput>;
};

type SceneMovie = {
  __typename?: 'SceneMovie';
  movie: Movie;
  scene_index?: Maybe<Scalars['Int']['output']>;
};

type SceneMovieId = {
  __typename?: 'SceneMovieID';
  movie_id: Scalars['ID']['output'];
  scene_index?: Maybe<Scalars['String']['output']>;
};

type SceneMovieInput = {
  movie_id: Scalars['ID']['input'];
  scene_index?: InputMaybe<Scalars['Int']['input']>;
};

type SceneParserInput = {
  capitalizeTitle?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreOrganized?: InputMaybe<Scalars['Boolean']['input']>;
  ignoreWords?: InputMaybe<Array<Scalars['String']['input']>>;
  whitespaceCharacters?: InputMaybe<Scalars['String']['input']>;
};

type SceneParserResult = {
  __typename?: 'SceneParserResult';
  code?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  gallery_ids?: Maybe<Array<Scalars['ID']['output']>>;
  movies?: Maybe<Array<SceneMovieId>>;
  performer_ids?: Maybe<Array<Scalars['ID']['output']>>;
  /** @deprecated Use 1-100 range with rating100 */
  rating?: Maybe<Scalars['Int']['output']>;
  rating100?: Maybe<Scalars['Int']['output']>;
  scene: Scene;
  studio_id?: Maybe<Scalars['ID']['output']>;
  tag_ids?: Maybe<Array<Scalars['ID']['output']>>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

type SceneParserResultType = {
  __typename?: 'SceneParserResultType';
  count: Scalars['Int']['output'];
  results: Array<SceneParserResult>;
};

type ScenePathsType = {
  __typename?: 'ScenePathsType';
  caption?: Maybe<Scalars['String']['output']>;
  funscript?: Maybe<Scalars['String']['output']>;
  interactive_heatmap?: Maybe<Scalars['String']['output']>;
  preview?: Maybe<Scalars['String']['output']>;
  screenshot?: Maybe<Scalars['String']['output']>;
  sprite?: Maybe<Scalars['String']['output']>;
  stream?: Maybe<Scalars['String']['output']>;
  vtt?: Maybe<Scalars['String']['output']>;
  webp?: Maybe<Scalars['String']['output']>;
};

type SceneStreamEndpoint = {
  __typename?: 'SceneStreamEndpoint';
  label?: Maybe<Scalars['String']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

type SceneUpdateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  cover_image?: InputMaybe<Scalars['String']['input']>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  gallery_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  groups?: InputMaybe<Array<SceneGroupInput>>;
  id: Scalars['ID']['input'];
  /** @deprecated Use groups */
  movies?: InputMaybe<Array<SceneMovieInput>>;
  /** @deprecated Unsupported - Use sceneIncrementO/sceneDecrementO */
  o_counter?: InputMaybe<Scalars['Int']['input']>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The number ot times a scene has been played
   * @deprecated Unsupported - Use sceneIncrementPlayCount/sceneDecrementPlayCount
   */
  play_count?: InputMaybe<Scalars['Int']['input']>;
  /** The total time a scene has spent playing */
  play_duration?: InputMaybe<Scalars['Float']['input']>;
  primary_file_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  /** The time index a scene was left at */
  resume_time?: InputMaybe<Scalars['Float']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  studio_id?: InputMaybe<Scalars['ID']['input']>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ScenesDestroyInput = {
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
  /** If true, delete the file entry from the database if the file is not assigned to any other objects */
  destroy_file_entry?: InputMaybe<Scalars['Boolean']['input']>;
  ids: Array<Scalars['ID']['input']>;
};

/** Type of the content a scraper generates */
enum ScrapeContentType {
  Gallery = 'GALLERY',
  Group = 'GROUP',
  Image = 'IMAGE',
  Movie = 'MOVIE',
  Performer = 'PERFORMER',
  Scene = 'SCENE'
}

type ScrapeMultiPerformersInput = {
  /** Instructs to query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

type ScrapeMultiScenesInput = {
  /** Instructs to query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

type ScrapeSingleGalleryInput = {
  /** Instructs to query by gallery id */
  gallery_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by gallery fragment */
  gallery_input?: InputMaybe<ScrapedGalleryInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSingleGroupInput = {
  /** Instructs to query by group id */
  group_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by group fragment */
  group_input?: InputMaybe<ScrapedGroupInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSingleImageInput = {
  /** Instructs to query by image id */
  image_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by image fragment */
  image_input?: InputMaybe<ScrapedImageInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSingleMovieInput = {
  /** Instructs to query by movie id */
  movie_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by movie fragment */
  movie_input?: InputMaybe<ScrapedMovieInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSinglePerformerInput = {
  /** Instructs to query by performer id */
  performer_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by performer fragment */
  performer_input?: InputMaybe<ScrapedPerformerInput>;
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSingleSceneInput = {
  /** Instructs to query by string */
  query?: InputMaybe<Scalars['String']['input']>;
  /** Instructs to query by scene fingerprints */
  scene_id?: InputMaybe<Scalars['ID']['input']>;
  /** Instructs to query by scene fragment */
  scene_input?: InputMaybe<ScrapedSceneInput>;
};

type ScrapeSingleStudioInput = {
  /** Query can be either a name or a Stash ID */
  query?: InputMaybe<Scalars['String']['input']>;
};

type ScrapeSingleTagInput = {
  /** Query can be either a name or a Stash ID */
  query?: InputMaybe<Scalars['String']['input']>;
};

enum ScrapeType {
  /** From existing object */
  Fragment = 'FRAGMENT',
  /** From text query */
  Name = 'NAME',
  /** From URL */
  Url = 'URL'
}

/** Scraped Content is the forming union over the different scrapers */
type ScrapedContent = ScrapedGallery | ScrapedGroup | ScrapedImage | ScrapedMovie | ScrapedPerformer | ScrapedScene | ScrapedStudio | ScrapedTag;

type ScrapedGallery = {
  __typename?: 'ScrapedGallery';
  code?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  photographer?: Maybe<Scalars['String']['output']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']['output']>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedGalleryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  photographer?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A group from a scraping operation... */
type ScrapedGroup = {
  __typename?: 'ScrapedGroup';
  aliases?: Maybe<Scalars['String']['output']>;
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  stored_id?: Maybe<Scalars['ID']['output']>;
  studio?: Maybe<ScrapedStudio>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<ScrapedTag>>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedGroupInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ScrapedImage = {
  __typename?: 'ScrapedImage';
  code?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  photographer?: Maybe<Scalars['String']['output']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedImageInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A movie from a scraping operation... */
type ScrapedMovie = {
  __typename?: 'ScrapedMovie';
  aliases?: Maybe<Scalars['String']['output']>;
  /** This should be a base64 encoded data URL */
  back_image?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  /** This should be a base64 encoded data URL */
  front_image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  stored_id?: Maybe<Scalars['ID']['output']>;
  studio?: Maybe<ScrapedStudio>;
  synopsis?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<ScrapedTag>>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedMovieInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  synopsis?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A performer from a scraping operation... */
type ScrapedPerformer = {
  __typename?: 'ScrapedPerformer';
  aliases?: Maybe<Scalars['String']['output']>;
  birthdate?: Maybe<Scalars['String']['output']>;
  career_end?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use career_start and career_end */
  career_length?: Maybe<Scalars['String']['output']>;
  career_start?: Maybe<Scalars['String']['output']>;
  circumcised?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  death_date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  disambiguation?: Maybe<Scalars['String']['output']>;
  ethnicity?: Maybe<Scalars['String']['output']>;
  eye_color?: Maybe<Scalars['String']['output']>;
  fake_tits?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  hair_color?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  /**
   * This should be a base64 encoded data URL
   * @deprecated use images instead
   */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Scalars['String']['output']>>;
  /** @deprecated use urls */
  instagram?: Maybe<Scalars['String']['output']>;
  measurements?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  penis_length?: Maybe<Scalars['String']['output']>;
  piercings?: Maybe<Scalars['String']['output']>;
  remote_site_id?: Maybe<Scalars['String']['output']>;
  /** Set if performer matched */
  stored_id?: Maybe<Scalars['ID']['output']>;
  tags?: Maybe<Array<ScrapedTag>>;
  tattoos?: Maybe<Scalars['String']['output']>;
  /** @deprecated use urls */
  twitter?: Maybe<Scalars['String']['output']>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
  weight?: Maybe<Scalars['String']['output']>;
};

type ScrapedPerformerInput = {
  aliases?: InputMaybe<Scalars['String']['input']>;
  birthdate?: InputMaybe<Scalars['String']['input']>;
  career_end?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use career_start and career_end */
  career_length?: InputMaybe<Scalars['String']['input']>;
  career_start?: InputMaybe<Scalars['String']['input']>;
  circumcised?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  death_date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  disambiguation?: InputMaybe<Scalars['String']['input']>;
  ethnicity?: InputMaybe<Scalars['String']['input']>;
  eye_color?: InputMaybe<Scalars['String']['input']>;
  fake_tits?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  hair_color?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  instagram?: InputMaybe<Scalars['String']['input']>;
  measurements?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  penis_length?: InputMaybe<Scalars['String']['input']>;
  piercings?: InputMaybe<Scalars['String']['input']>;
  remote_site_id?: InputMaybe<Scalars['String']['input']>;
  /** Set if performer matched */
  stored_id?: InputMaybe<Scalars['ID']['input']>;
  tattoos?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  twitter?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

type ScrapedScene = {
  __typename?: 'ScrapedScene';
  code?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  director?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  file?: Maybe<SceneFileType>;
  fingerprints?: Maybe<Array<StashBoxFingerprint>>;
  groups?: Maybe<Array<ScrapedGroup>>;
  /** This should be a base64 encoded data URL */
  image?: Maybe<Scalars['String']['output']>;
  /** @deprecated use groups */
  movies?: Maybe<Array<ScrapedMovie>>;
  performers?: Maybe<Array<ScrapedPerformer>>;
  remote_site_id?: Maybe<Scalars['String']['output']>;
  studio?: Maybe<ScrapedStudio>;
  tags?: Maybe<Array<ScrapedTag>>;
  title?: Maybe<Scalars['String']['output']>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedSceneInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  director?: InputMaybe<Scalars['String']['input']>;
  remote_site_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type ScrapedStudio = {
  __typename?: 'ScrapedStudio';
  /** Aliases must be comma-delimited to be parsed correctly */
  aliases?: Maybe<Scalars['String']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<ScrapedStudio>;
  remote_site_id?: Maybe<Scalars['String']['output']>;
  /** Set if studio matched */
  stored_id?: Maybe<Scalars['ID']['output']>;
  tags?: Maybe<Array<ScrapedTag>>;
  /** @deprecated use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type ScrapedTag = {
  __typename?: 'ScrapedTag';
  alias_list?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parent?: Maybe<ScrapedTag>;
  /** Remote site ID, if applicable */
  remote_site_id?: Maybe<Scalars['String']['output']>;
  /** Set if tag matched */
  stored_id?: Maybe<Scalars['ID']['output']>;
};

type Scraper = {
  __typename?: 'Scraper';
  /** Details for gallery scraper */
  gallery?: Maybe<ScraperSpec>;
  /** Details for group scraper */
  group?: Maybe<ScraperSpec>;
  id: Scalars['ID']['output'];
  /** Details for image scraper */
  image?: Maybe<ScraperSpec>;
  /**
   * Details for movie scraper
   * @deprecated use group
   */
  movie?: Maybe<ScraperSpec>;
  name: Scalars['String']['output'];
  /** Details for performer scraper */
  performer?: Maybe<ScraperSpec>;
  /** Details for scene scraper */
  scene?: Maybe<ScraperSpec>;
};

type ScraperSource = {
  __typename?: 'ScraperSource';
  /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
  scraper_id?: Maybe<Scalars['ID']['output']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: Maybe<Scalars['String']['output']>;
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: Maybe<Scalars['Int']['output']>;
};

type ScraperSourceInput = {
  /** Scraper ID to scrape with. Should be unset if stash_box_endpoint/stash_box_index is set */
  scraper_id?: InputMaybe<Scalars['ID']['input']>;
  /** Stash-box endpoint */
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /**
   * Index of the configured stash-box instance to use. Should be unset if scraper_id is set
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: InputMaybe<Scalars['Int']['input']>;
};

type ScraperSpec = {
  __typename?: 'ScraperSpec';
  supported_scrapes: Array<ScrapeType>;
  /** URLs matching these can be scraped with */
  urls?: Maybe<Array<Scalars['String']['output']>>;
};

type SetDefaultFilterInput = {
  /** null to clear */
  find_filter?: InputMaybe<FindFilterType>;
  mode: FilterMode;
  object_filter?: InputMaybe<Scalars['Map']['input']>;
  ui_options?: InputMaybe<Scalars['Map']['input']>;
};

type SetFingerprintsInput = {
  type: Scalars['String']['input'];
  /** a null value will remove the fingerprint */
  value?: InputMaybe<Scalars['String']['input']>;
};

type SetupInput = {
  /** Empty to indicate default - only applicable if storeBlobsInDatabase is false */
  blobsLocation: Scalars['String']['input'];
  /** Empty to indicate default */
  cacheLocation: Scalars['String']['input'];
  /** Empty to indicate $HOME/.stash/config.yml default */
  configLocation: Scalars['String']['input'];
  /** Empty to indicate default */
  databaseFile: Scalars['String']['input'];
  /** Empty to indicate default */
  generatedLocation: Scalars['String']['input'];
  /** True if SFW content mode is enabled */
  sfwContentMode?: InputMaybe<Scalars['Boolean']['input']>;
  stashes: Array<StashConfigInput>;
  storeBlobsInDatabase: Scalars['Boolean']['input'];
};

enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

type StashBox = {
  __typename?: 'StashBox';
  api_key: Scalars['String']['output'];
  endpoint: Scalars['String']['output'];
  max_requests_per_minute: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/**
 * Accepts either ids, or a combination of names and stash_ids.
 * If none are set, then all existing items will be tagged.
 */
type StashBoxBatchTagInput = {
  /** If batch adding studios, should their parent studios also be created? */
  createParent: Scalars['Boolean']['input'];
  /**
   * Stash endpoint to use for the tagging
   * @deprecated use stash_box_endpoint
   */
  endpoint?: InputMaybe<Scalars['Int']['input']>;
  /** Fields to exclude when executing the tagging */
  exclude_fields?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * IDs in stash of the items to update.
   * If set, names and stash_ids fields will be ignored.
   */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Names of the items in the stash-box instance to search for and create */
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * IDs in stash of the performers to update
   * @deprecated use ids
   */
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Names of the performers in the stash-box instance to search for and create
   * @deprecated use names
   */
  performer_names?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Refresh items already tagged by StashBox if true. Only tag items with no StashBox tagging if false */
  refresh: Scalars['Boolean']['input'];
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /** Stash IDs of the items in the stash-box instance to search for and create */
  stash_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

type StashBoxDraftSubmissionInput = {
  id: Scalars['String']['input'];
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use stash_box_endpoint */
  stash_box_index?: InputMaybe<Scalars['Int']['input']>;
};

type StashBoxFingerprint = {
  __typename?: 'StashBoxFingerprint';
  algorithm: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  hash: Scalars['String']['output'];
};

type StashBoxFingerprintSubmissionInput = {
  scene_ids: Array<Scalars['String']['input']>;
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use stash_box_endpoint */
  stash_box_index?: InputMaybe<Scalars['Int']['input']>;
};

type StashBoxInput = {
  api_key: Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
  max_requests_per_minute?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

type StashBoxPerformerQueryInput = {
  /** Instructs query by scene fingerprints */
  performer_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Query by query string */
  q?: InputMaybe<Scalars['String']['input']>;
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /**
   * Index of the configured stash-box instance to use
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: InputMaybe<Scalars['Int']['input']>;
};

type StashBoxPerformerQueryResult = {
  __typename?: 'StashBoxPerformerQueryResult';
  query: Scalars['String']['output'];
  results: Array<ScrapedPerformer>;
};

type StashBoxSceneQueryInput = {
  /** Query by query string */
  q?: InputMaybe<Scalars['String']['input']>;
  /** Instructs query by scene fingerprints */
  scene_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Endpoint of the stash-box instance to use */
  stash_box_endpoint?: InputMaybe<Scalars['String']['input']>;
  /**
   * Index of the configured stash-box instance to use
   * @deprecated use stash_box_endpoint
   */
  stash_box_index?: InputMaybe<Scalars['Int']['input']>;
};

type StashBoxValidationResult = {
  __typename?: 'StashBoxValidationResult';
  status: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};

type StashConfig = {
  __typename?: 'StashConfig';
  excludeImage: Scalars['Boolean']['output'];
  excludeVideo: Scalars['Boolean']['output'];
  path: Scalars['String']['output'];
};

/** Stash configuration details */
type StashConfigInput = {
  excludeImage: Scalars['Boolean']['input'];
  excludeVideo: Scalars['Boolean']['input'];
  path: Scalars['String']['input'];
};

type StashId = {
  __typename?: 'StashID';
  endpoint: Scalars['String']['output'];
  stash_id: Scalars['String']['output'];
  updated_at: Scalars['Time']['output'];
};

type StashIdCriterionInput = {
  /**
   * If present, this value is treated as a predicate.
   * That is, it will filter based on stash_id with the matching endpoint
   */
  endpoint?: InputMaybe<Scalars['String']['input']>;
  modifier: CriterionModifier;
  stash_id?: InputMaybe<Scalars['String']['input']>;
};

type StashIdInput = {
  endpoint: Scalars['String']['input'];
  stash_id: Scalars['String']['input'];
  updated_at?: InputMaybe<Scalars['Time']['input']>;
};

type StashIDsCriterionInput = {
  /**
   * If present, this value is treated as a predicate.
   * That is, it will filter based on stash_ids with the matching endpoint
   */
  endpoint?: InputMaybe<Scalars['String']['input']>;
  modifier: CriterionModifier;
  stash_ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

type StatsResultType = {
  __typename?: 'StatsResultType';
  gallery_count: Scalars['Int']['output'];
  group_count: Scalars['Int']['output'];
  image_count: Scalars['Int']['output'];
  images_size: Scalars['Float']['output'];
  /** @deprecated use group_count instead */
  movie_count: Scalars['Int']['output'];
  performer_count: Scalars['Int']['output'];
  scene_count: Scalars['Int']['output'];
  scenes_duration: Scalars['Float']['output'];
  scenes_played: Scalars['Int']['output'];
  scenes_size: Scalars['Float']['output'];
  studio_count: Scalars['Int']['output'];
  tag_count: Scalars['Int']['output'];
  total_o_count: Scalars['Int']['output'];
  total_play_count: Scalars['Int']['output'];
  total_play_duration: Scalars['Float']['output'];
};

enum StreamingResolutionEnum {
  /** 4k */
  FourK = 'FOUR_K',
  /** 1080p */
  FullHd = 'FULL_HD',
  /** 240p */
  Low = 'LOW',
  /** Original */
  Original = 'ORIGINAL',
  /** 480p */
  Standard = 'STANDARD',
  /** 720p */
  StandardHd = 'STANDARD_HD'
}

type StringCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String']['input'];
};

type Studio = {
  __typename?: 'Studio';
  aliases: Array<Scalars['String']['output']>;
  child_studios: Array<Studio>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  details?: Maybe<Scalars['String']['output']>;
  favorite: Scalars['Boolean']['output'];
  gallery_count: Scalars['Int']['output'];
  group_count: Scalars['Int']['output'];
  groups: Array<Group>;
  id: Scalars['ID']['output'];
  ignore_auto_tag: Scalars['Boolean']['output'];
  image_count: Scalars['Int']['output'];
  image_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated use group_count instead */
  movie_count: Scalars['Int']['output'];
  /** @deprecated use groups instead */
  movies: Array<Movie>;
  name: Scalars['String']['output'];
  o_counter?: Maybe<Scalars['Int']['output']>;
  organized: Scalars['Boolean']['output'];
  parent_studio?: Maybe<Studio>;
  performer_count: Scalars['Int']['output'];
  rating100?: Maybe<Scalars['Int']['output']>;
  scene_count: Scalars['Int']['output'];
  stash_ids: Array<StashId>;
  tags: Array<Tag>;
  updated_at: Scalars['Time']['output'];
  /** @deprecated Use urls */
  url?: Maybe<Scalars['String']['output']>;
  urls: Array<Scalars['String']['output']>;
};


type StudioGallery_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type StudioGroup_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type StudioImage_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type StudioMovie_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type StudioPerformer_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type StudioScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

type StudioCreateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  parent_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type StudioDestroyInput = {
  id: Scalars['ID']['input'];
};

type StudioFilterType = {
  AND?: InputMaybe<StudioFilterType>;
  NOT?: InputMaybe<StudioFilterType>;
  OR?: InputMaybe<StudioFilterType>;
  /** Filter by studio aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by subsidiary studio count */
  child_count?: InputMaybe<IntCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  details?: InputMaybe<StringCriterionInput>;
  /** Filter by favorite */
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  /** Filter by gallery count */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by group count */
  group_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related groups that meet this criteria */
  groups_filter?: InputMaybe<GroupFilterType>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by image count */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related images that meet this criteria */
  images_filter?: InputMaybe<ImageFilterType>;
  /** Filter to only include studios missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by organized */
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter to only include studios with this parent studio */
  parents?: InputMaybe<MultiCriterionInput>;
  rating100?: InputMaybe<IntCriterionInput>;
  /** Filter by scene count */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /**
   * Filter by StashID
   * @deprecated use stash_ids_endpoint instead
   */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by StashIDs */
  stash_ids_endpoint?: InputMaybe<StashIDsCriterionInput>;
  /** Filter by tag count */
  tag_count?: InputMaybe<IntCriterionInput>;
  /** Filter to only include studios with these tags */
  tags?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
  /** Filter by url */
  url?: InputMaybe<StringCriterionInput>;
};

type StudioUpdateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  details?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organized?: InputMaybe<Scalars['Boolean']['input']>;
  parent_id?: InputMaybe<Scalars['ID']['input']>;
  rating100?: InputMaybe<Scalars['Int']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use urls */
  url?: InputMaybe<Scalars['String']['input']>;
  urls?: InputMaybe<Array<Scalars['String']['input']>>;
};

type Subscription = {
  __typename?: 'Subscription';
  /** Update from the metadata manager */
  jobsSubscribe: JobStatusUpdate;
  loggingSubscribe: Array<LogEntry>;
  scanCompleteSubscribe: Scalars['Boolean']['output'];
};

type SystemStatus = {
  __typename?: 'SystemStatus';
  appSchema: Scalars['Int']['output'];
  configPath?: Maybe<Scalars['String']['output']>;
  databasePath?: Maybe<Scalars['String']['output']>;
  databaseSchema?: Maybe<Scalars['Int']['output']>;
  ffmpegPath?: Maybe<Scalars['String']['output']>;
  ffprobePath?: Maybe<Scalars['String']['output']>;
  homeDir: Scalars['String']['output'];
  os: Scalars['String']['output'];
  status: SystemStatusEnum;
  workingDir: Scalars['String']['output'];
};

enum SystemStatusEnum {
  NeedsMigration = 'NEEDS_MIGRATION',
  Ok = 'OK',
  Setup = 'SETUP'
}

type Tag = {
  __typename?: 'Tag';
  aliases: Array<Scalars['String']['output']>;
  child_count: Scalars['Int']['output'];
  children: Array<Tag>;
  created_at: Scalars['Time']['output'];
  custom_fields: Scalars['Map']['output'];
  description?: Maybe<Scalars['String']['output']>;
  favorite: Scalars['Boolean']['output'];
  gallery_count: Scalars['Int']['output'];
  group_count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  ignore_auto_tag: Scalars['Boolean']['output'];
  image_count: Scalars['Int']['output'];
  image_path?: Maybe<Scalars['String']['output']>;
  /** @deprecated use group_count instead */
  movie_count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent_count: Scalars['Int']['output'];
  parents: Array<Tag>;
  performer_count: Scalars['Int']['output'];
  scene_count: Scalars['Int']['output'];
  scene_marker_count: Scalars['Int']['output'];
  /** Value that does not appear in the UI but overrides name for sorting */
  sort_name?: Maybe<Scalars['String']['output']>;
  stash_ids: Array<StashId>;
  studio_count: Scalars['Int']['output'];
  updated_at: Scalars['Time']['output'];
};


type TagGallery_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagGroup_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagImage_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagMovie_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagPerformer_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagScene_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagScene_Marker_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


type TagStudio_CountArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

type TagCreateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  custom_fields?: InputMaybe<Scalars['Map']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parent_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Value that does not appear in the UI but overrides name for sorting */
  sort_name?: InputMaybe<Scalars['String']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
};

type TagDestroyInput = {
  id: Scalars['ID']['input'];
};

type TagFilterType = {
  AND?: InputMaybe<TagFilterType>;
  NOT?: InputMaybe<TagFilterType>;
  OR?: InputMaybe<TagFilterType>;
  /** Filter by tag aliases */
  aliases?: InputMaybe<StringCriterionInput>;
  /** Filter by number of child tags the tag has */
  child_count?: InputMaybe<IntCriterionInput>;
  /** Filter by child tags */
  children?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by creation time */
  created_at?: InputMaybe<TimestampCriterionInput>;
  custom_fields?: InputMaybe<Array<CustomFieldCriterionInput>>;
  /** Filter by tag description */
  description?: InputMaybe<StringCriterionInput>;
  /** Filter by favorite */
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by related galleries that meet this criteria */
  galleries_filter?: InputMaybe<GalleryFilterType>;
  /** Filter by number of galleries with this tag */
  gallery_count?: InputMaybe<IntCriterionInput>;
  /** Filter by number of group with this tag */
  group_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related groups that meet this criteria */
  groups_filter?: InputMaybe<GroupFilterType>;
  /** Filter by autotag ignore value */
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by number of images with this tag */
  image_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related images that meet this criteria */
  images_filter?: InputMaybe<ImageFilterType>;
  /** Filter to only include tags missing this property */
  is_missing?: InputMaybe<Scalars['String']['input']>;
  /** Filter by number of markers with this tag */
  marker_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scene markers that meet this criteria */
  markers_filter?: InputMaybe<SceneMarkerFilterType>;
  /** Filter by number of movies with this tag */
  movie_count?: InputMaybe<IntCriterionInput>;
  /** Filter by tag name */
  name?: InputMaybe<StringCriterionInput>;
  /** Filter by number of parent tags the tag has */
  parent_count?: InputMaybe<IntCriterionInput>;
  /** Filter by parent tags */
  parents?: InputMaybe<HierarchicalMultiCriterionInput>;
  /** Filter by number of performers with this tag */
  performer_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related performers that meet this criteria */
  performers_filter?: InputMaybe<PerformerFilterType>;
  /** Filter by number of scenes with this tag */
  scene_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related scenes that meet this criteria */
  scenes_filter?: InputMaybe<SceneFilterType>;
  /** Filter by tag sort_name */
  sort_name?: InputMaybe<StringCriterionInput>;
  /**
   * Filter by StashID
   * @deprecated use stash_ids_endpoint instead
   */
  stash_id_endpoint?: InputMaybe<StashIdCriterionInput>;
  /** Filter by StashID */
  stash_ids_endpoint?: InputMaybe<StashIDsCriterionInput>;
  /** Filter by number of studios with this tag */
  studio_count?: InputMaybe<IntCriterionInput>;
  /** Filter by related studios that meet this criteria */
  studios_filter?: InputMaybe<StudioFilterType>;
  /** Filter by last update time */
  updated_at?: InputMaybe<TimestampCriterionInput>;
};

type TagUpdateInput = {
  /** Duplicate aliases and those equal to name will be ignored (case-insensitive) */
  aliases?: InputMaybe<Array<Scalars['String']['input']>>;
  child_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  custom_fields?: InputMaybe<CustomFieldsInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  ignore_auto_tag?: InputMaybe<Scalars['Boolean']['input']>;
  /** This should be a URL or a base64 encoded data URL */
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Value that does not appear in the UI but overrides name for sorting */
  sort_name?: InputMaybe<Scalars['String']['input']>;
  stash_ids?: InputMaybe<Array<StashIdInput>>;
};

type TagsMergeInput = {
  destination: Scalars['ID']['input'];
  source: Array<Scalars['ID']['input']>;
  values?: InputMaybe<TagUpdateInput>;
};

type TimestampCriterionInput = {
  modifier: CriterionModifier;
  value: Scalars['String']['input'];
  value2?: InputMaybe<Scalars['String']['input']>;
};

type Version = {
  __typename?: 'Version';
  build_time: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  version?: Maybe<Scalars['String']['output']>;
};

type VideoCaption = {
  __typename?: 'VideoCaption';
  caption_type: Scalars['String']['output'];
  language_code: Scalars['String']['output'];
};

type VideoFile = BaseFile & {
  __typename?: 'VideoFile';
  audio_codec: Scalars['String']['output'];
  basename: Scalars['String']['output'];
  bit_rate: Scalars['Int']['output'];
  created_at: Scalars['Time']['output'];
  duration: Scalars['Float']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  fingerprints: Array<Fingerprint>;
  format: Scalars['String']['output'];
  frame_rate: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mod_time: Scalars['Time']['output'];
  parent_folder: Folder;
  /** @deprecated Use parent_folder instead */
  parent_folder_id: Scalars['ID']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Int64']['output'];
  updated_at: Scalars['Time']['output'];
  video_codec: Scalars['String']['output'];
  width: Scalars['Int']['output'];
  zip_file?: Maybe<BasicFile>;
  /** @deprecated Use zip_file instead */
  zip_file_id?: Maybe<Scalars['ID']['output']>;
};


type VideoFileFingerprintArgs = {
  type: Scalars['String']['input'];
};

type VideoFileFilterInput = {
  audio_codec?: InputMaybe<StringCriterionInput>;
  bitrate?: InputMaybe<IntCriterionInput>;
  captions?: InputMaybe<StringCriterionInput>;
  /** in seconds */
  duration?: InputMaybe<IntCriterionInput>;
  format?: InputMaybe<StringCriterionInput>;
  framerate?: InputMaybe<IntCriterionInput>;
  interactive?: InputMaybe<Scalars['Boolean']['input']>;
  interactive_speed?: InputMaybe<IntCriterionInput>;
  orientation?: InputMaybe<OrientationCriterionInput>;
  resolution?: InputMaybe<ResolutionCriterionInput>;
  video_codec?: InputMaybe<StringCriterionInput>;
};

type VisualFile = ImageFile | VideoFile;

type ConfigGeneralDataFragment = { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, deleteTrashPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, ffmpegPath: string, ffprobePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, logFileMaxSize: number, useCustomSpriteInterval: boolean, spriteInterval: number, minimumSprites: number, maximumSprites: number, spriteScreenshotSize: number, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string, max_requests_per_minute: number }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> };

type ConfigInterfaceDataFragment = { __typename?: 'ConfigInterfaceResult', sfwContentMode: boolean, menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, disableCustomizations?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number, disableAnimation?: boolean | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean, gallery: boolean } };

type ConfigDlnaDataFragment = { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, port: number, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string };

type ConfigScrapingDataFragment = { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> };

type IdentifyFieldOptionsDataFragment = { __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null };

type IdentifyMetadataOptionsDataFragment = { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null };

type ScraperSourceDataFragment = { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null };

type ConfigDefaultSettingsDataFragment = { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, imageThumbnails?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null };

type ConfigDataFragment = { __typename?: 'ConfigResult', ui: IUIConfig, plugins: { [id: string]: { [key: string]: unknown } }, general: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, deleteTrashPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, ffmpegPath: string, ffprobePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, logFileMaxSize: number, useCustomSpriteInterval: boolean, spriteInterval: number, minimumSprites: number, maximumSprites: number, spriteScreenshotSize: number, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string, max_requests_per_minute: number }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> }, interface: { __typename?: 'ConfigInterfaceResult', sfwContentMode: boolean, menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, disableCustomizations?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number, disableAnimation?: boolean | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean, gallery: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, port: number, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, imageThumbnails?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

type FolderDataFragment = { __typename?: 'Folder', id: string, basename: string, path: string };

type VideoFileDataFragment = { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type ImageFileDataFragment = { __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type GalleryFileDataFragment = { __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type VisualFileData_ImageFile_Fragment = { __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type VisualFileData_VideoFile_Fragment = { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> };

type VisualFileDataFragment = VisualFileData_ImageFile_Fragment | VisualFileData_VideoFile_Fragment;

type SelectFolderDataFragment = { __typename?: 'Folder', id: string, path: string, basename: string };

type RecursiveFolderDataFragment = { __typename?: 'Folder', id: string, path: string, basename: string, parent_folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string }> };

type SavedFilterDataFragment = { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: SavedObjectFilter | null, ui_options?: SavedUIOptions | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null };

type GalleryChapterDataFragment = { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } };

type SlimGalleryDataFragment = { __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } };

type GalleryDataFragment = { __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> };

type SelectGalleryDataFragment = { __typename?: 'Gallery', id: string, title?: string | null, date?: string | null, code?: string | null, studio?: { __typename?: 'Studio', name: string } | null, cover?: { __typename?: 'Image', paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, paths: { __typename?: 'GalleryPathsType', preview: string }, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null };

type SlimGroupDataFragment = { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null };

type SelectGroupDataFragment = { __typename?: 'Group', id: string, name: string, aliases?: string | null, date?: string | null, front_image_path?: string | null, studio?: { __typename?: 'Studio', name: string } | null };

type GroupDataFragment = { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> };

type ListGroupDataFragment = { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> };

type SlimImageDataFragment = { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> };

type ImageDataFragment = { __typename?: 'Image', id: string, title?: string | null, code?: string | null, rating100?: number | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, organized: boolean, o_counter?: number | null, created_at: string, updated_at: string, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> };

type JobDataFragment = { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: string | null, endTime?: string | null, addTime: string, error?: string | null };

type LogEntryDataFragment = { __typename?: 'LogEntry', time: string, level: LogLevel, message: string };

type PackageDataFragment = { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string };

type SlimPerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, urls?: Array<string> | null, image_path?: string | null, favorite: boolean, ignore_auto_tag: boolean, country?: string | null, birthdate?: string | null, ethnicity?: string | null, hair_color?: string | null, eye_color?: string | null, height_cm?: number | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, rating100?: number | null, death_date?: string | null, weight?: number | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> };

type SelectPerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, alias_list: Array<string>, image_path?: string | null, birthdate?: string | null, death_date?: string | null };

type PerformerDataFragment = { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> };

type SceneMarkerDataFragment = { __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> };

type SceneMarkerSceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> };

type SlimSceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> };

type SceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> };

type SelectSceneDataFragment = { __typename?: 'Scene', id: string, title?: string | null, date?: string | null, code?: string | null, studio?: { __typename?: 'Studio', name: string } | null, files: Array<{ __typename?: 'VideoFile', path: string }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null } };

type ScrapedStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedPerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedScenePerformerDataFragment = { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedGroupStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null };

type ScrapedGroupDataFragment = { __typename?: 'ScrapedGroup', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedSceneGroupDataFragment = { __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedSceneStudioDataFragment = { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null };

type ScrapedSceneTagDataFragment = { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null };

type ScrapedSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, groups?: Array<{ __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null };

type ScrapedGalleryDataFragment = { __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null };

type ScrapedImageDataFragment = { __typename?: 'ScrapedImage', title?: string | null, code?: string | null, details?: string | null, photographer?: string | null, urls?: Array<string> | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null };

type ScrapedStashBoxSceneDataFragment = { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, url?: string | null, date?: string | null, image?: string | null, remote_site_id?: string | null, duration?: number | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, groups?: Array<{ __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null };

type ScrapedStashBoxPerformerDataFragment = { __typename?: 'StashBoxPerformerQueryResult', query: string, results: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> };

type SlimStudioDataFragment = { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> };

type StudioDataFragment = { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> };

type SelectStudioDataFragment = { __typename?: 'Studio', id: string, name: string, aliases: Array<string>, details?: string | null, image_path?: string | null, parent_studio?: { __typename?: 'Studio', id: string, name: string } | null };

type SlimTagDataFragment = { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> };

type TagDataFragment = { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> };

type SelectTagDataFragment = { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, favorite: boolean, description?: string | null, aliases: Array<string>, image_path?: string | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> };

type TagListDataFragment = { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> };

type SetupMutationVariables = Exact<{
  input: SetupInput;
}>;


type SetupMutation = { __typename?: 'Mutation', setup: boolean };

type MigrateMutationVariables = Exact<{
  input: MigrateInput;
}>;


type MigrateMutation = { __typename?: 'Mutation', migrate: string };

type DownloadFfMpegMutationVariables = Exact<{ [key: string]: never; }>;


type DownloadFfMpegMutation = { __typename?: 'Mutation', downloadFFMpeg: string };

type ConfigureGeneralMutationVariables = Exact<{
  input: ConfigGeneralInput;
}>;


type ConfigureGeneralMutation = { __typename?: 'Mutation', configureGeneral: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, deleteTrashPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, ffmpegPath: string, ffprobePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, logFileMaxSize: number, useCustomSpriteInterval: boolean, spriteInterval: number, minimumSprites: number, maximumSprites: number, spriteScreenshotSize: number, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string, max_requests_per_minute: number }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> } };

type ConfigureInterfaceMutationVariables = Exact<{
  input: ConfigInterfaceInput;
}>;


type ConfigureInterfaceMutation = { __typename?: 'Mutation', configureInterface: { __typename?: 'ConfigInterfaceResult', sfwContentMode: boolean, menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, disableCustomizations?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number, disableAnimation?: boolean | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean, gallery: boolean } } };

type ConfigureDlnaMutationVariables = Exact<{
  input: ConfigDlnaInput;
}>;


type ConfigureDlnaMutation = { __typename?: 'Mutation', configureDLNA: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, port: number, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string } };

type ConfigureScrapingMutationVariables = Exact<{
  input: ConfigScrapingInput;
}>;


type ConfigureScrapingMutation = { __typename?: 'Mutation', configureScraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> } };

type ConfigureDefaultsMutationVariables = Exact<{
  input: ConfigDefaultSettingsInput;
}>;


type ConfigureDefaultsMutation = { __typename?: 'Mutation', configureDefaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, imageThumbnails?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } };

type ConfigureUiMutationVariables = Exact<{
  input?: InputMaybe<Scalars['Map']['input']>;
  partial?: InputMaybe<Scalars['Map']['input']>;
}>;


type ConfigureUiMutation = { __typename?: 'Mutation', configureUI: IUIConfig };

type ConfigureUiSettingMutationVariables = Exact<{
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Any']['input']>;
}>;


type ConfigureUiSettingMutation = { __typename?: 'Mutation', configureUISetting: { [key: string]: unknown } };

type GenerateApiKeyMutationVariables = Exact<{
  input: GenerateApiKeyInput;
}>;


type GenerateApiKeyMutation = { __typename?: 'Mutation', generateAPIKey: string };

type EnableDlnaMutationVariables = Exact<{
  input: EnableDlnaInput;
}>;


type EnableDlnaMutation = { __typename?: 'Mutation', enableDLNA: boolean };

type DisableDlnaMutationVariables = Exact<{
  input: DisableDlnaInput;
}>;


type DisableDlnaMutation = { __typename?: 'Mutation', disableDLNA: boolean };

type AddTempDlnaipMutationVariables = Exact<{
  input: AddTempDlnaipInput;
}>;


type AddTempDlnaipMutation = { __typename?: 'Mutation', addTempDLNAIP: boolean };

type RemoveTempDlnaipMutationVariables = Exact<{
  input: RemoveTempDlnaipInput;
}>;


type RemoveTempDlnaipMutation = { __typename?: 'Mutation', removeTempDLNAIP: boolean };

type DeleteFilesMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type DeleteFilesMutation = { __typename?: 'Mutation', deleteFiles: boolean };

type RevealFileInFileManagerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type RevealFileInFileManagerMutation = { __typename?: 'Mutation', revealFileInFileManager: boolean };

type RevealFolderInFileManagerMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type RevealFolderInFileManagerMutation = { __typename?: 'Mutation', revealFolderInFileManager: boolean };

type SaveFilterMutationVariables = Exact<{
  input: SaveFilterInput;
}>;


type SaveFilterMutation = { __typename?: 'Mutation', saveFilter: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: SavedObjectFilter | null, ui_options?: SavedUIOptions | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null } };

type DestroySavedFilterMutationVariables = Exact<{
  input: DestroyFilterInput;
}>;


type DestroySavedFilterMutation = { __typename?: 'Mutation', destroySavedFilter: boolean };

type GalleryChapterCreateMutationVariables = Exact<{
  title: Scalars['String']['input'];
  image_index: Scalars['Int']['input'];
  gallery_id: Scalars['ID']['input'];
}>;


type GalleryChapterCreateMutation = { __typename?: 'Mutation', galleryChapterCreate?: { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } } | null };

type GalleryChapterUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  image_index: Scalars['Int']['input'];
  gallery_id: Scalars['ID']['input'];
}>;


type GalleryChapterUpdateMutation = { __typename?: 'Mutation', galleryChapterUpdate?: { __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } } | null };

type GalleryChapterDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type GalleryChapterDestroyMutation = { __typename?: 'Mutation', galleryChapterDestroy: boolean };

type GalleryCreateMutationVariables = Exact<{
  input: GalleryCreateInput;
}>;


type GalleryCreateMutation = { __typename?: 'Mutation', galleryCreate?: { __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type GalleryUpdateMutationVariables = Exact<{
  input: GalleryUpdateInput;
}>;


type GalleryUpdateMutation = { __typename?: 'Mutation', galleryUpdate?: { __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type BulkGalleryUpdateMutationVariables = Exact<{
  input: BulkGalleryUpdateInput;
}>;


type BulkGalleryUpdateMutation = { __typename?: 'Mutation', bulkGalleryUpdate?: Array<{ __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> | null };

type GalleriesUpdateMutationVariables = Exact<{
  input: Array<GalleryUpdateInput> | GalleryUpdateInput;
}>;


type GalleriesUpdateMutation = { __typename?: 'Mutation', galleriesUpdate?: Array<{ __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null> | null };

type GalleryDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
}>;


type GalleryDestroyMutation = { __typename?: 'Mutation', galleryDestroy: boolean };

type AddGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID']['input'];
  image_ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type AddGalleryImagesMutation = { __typename?: 'Mutation', addGalleryImages: boolean };

type RemoveGalleryImagesMutationVariables = Exact<{
  gallery_id: Scalars['ID']['input'];
  image_ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type RemoveGalleryImagesMutation = { __typename?: 'Mutation', removeGalleryImages: boolean };

type SetGalleryCoverMutationVariables = Exact<{
  gallery_id: Scalars['ID']['input'];
  cover_image_id: Scalars['ID']['input'];
}>;


type SetGalleryCoverMutation = { __typename?: 'Mutation', setGalleryCover: boolean };

type ResetGalleryCoverMutationVariables = Exact<{
  gallery_id: Scalars['ID']['input'];
}>;


type ResetGalleryCoverMutation = { __typename?: 'Mutation', resetGalleryCover: boolean };

type GroupCreateMutationVariables = Exact<{
  input: GroupCreateInput;
}>;


type GroupCreateMutation = { __typename?: 'Mutation', groupCreate?: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

type GroupUpdateMutationVariables = Exact<{
  input: GroupUpdateInput;
}>;


type GroupUpdateMutation = { __typename?: 'Mutation', groupUpdate?: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

type BulkGroupUpdateMutationVariables = Exact<{
  input: BulkGroupUpdateInput;
}>;


type BulkGroupUpdateMutation = { __typename?: 'Mutation', bulkGroupUpdate?: Array<{ __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> }> | null };

type GroupDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type GroupDestroyMutation = { __typename?: 'Mutation', groupDestroy: boolean };

type GroupsDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type GroupsDestroyMutation = { __typename?: 'Mutation', groupsDestroy: boolean };

type AddGroupSubGroupsMutationVariables = Exact<{
  input: GroupSubGroupAddInput;
}>;


type AddGroupSubGroupsMutation = { __typename?: 'Mutation', addGroupSubGroups: boolean };

type RemoveGroupSubGroupsMutationVariables = Exact<{
  input: GroupSubGroupRemoveInput;
}>;


type RemoveGroupSubGroupsMutation = { __typename?: 'Mutation', removeGroupSubGroups: boolean };

type ReorderSubGroupsMutationVariables = Exact<{
  input: ReorderSubGroupsInput;
}>;


type ReorderSubGroupsMutation = { __typename?: 'Mutation', reorderSubGroups: boolean };

type ImageUpdateMutationVariables = Exact<{
  input: ImageUpdateInput;
}>;


type ImageUpdateMutation = { __typename?: 'Mutation', imageUpdate?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null };

type BulkImageUpdateMutationVariables = Exact<{
  input: BulkImageUpdateInput;
}>;


type BulkImageUpdateMutation = { __typename?: 'Mutation', bulkImageUpdate?: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> }> | null };

type ImagesUpdateMutationVariables = Exact<{
  input: Array<ImageUpdateInput> | ImageUpdateInput;
}>;


type ImagesUpdateMutation = { __typename?: 'Mutation', imagesUpdate?: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null> | null };

type ImageIncrementOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type ImageIncrementOMutation = { __typename?: 'Mutation', imageIncrementO: number };

type ImageDecrementOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type ImageDecrementOMutation = { __typename?: 'Mutation', imageDecrementO: number };

type ImageResetOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type ImageResetOMutation = { __typename?: 'Mutation', imageResetO: number };

type ImageDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
}>;


type ImageDestroyMutation = { __typename?: 'Mutation', imageDestroy: boolean };

type ImagesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
}>;


type ImagesDestroyMutation = { __typename?: 'Mutation', imagesDestroy: boolean };

type StopJobMutationVariables = Exact<{
  job_id: Scalars['ID']['input'];
}>;


type StopJobMutation = { __typename?: 'Mutation', stopJob: boolean };

type StopAllJobsMutationVariables = Exact<{ [key: string]: never; }>;


type StopAllJobsMutation = { __typename?: 'Mutation', stopAllJobs: boolean };

type MetadataImportMutationVariables = Exact<{ [key: string]: never; }>;


type MetadataImportMutation = { __typename?: 'Mutation', metadataImport: string };

type MetadataExportMutationVariables = Exact<{ [key: string]: never; }>;


type MetadataExportMutation = { __typename?: 'Mutation', metadataExport: string };

type ExportObjectsMutationVariables = Exact<{
  input: ExportObjectsInput;
}>;


type ExportObjectsMutation = { __typename?: 'Mutation', exportObjects?: string | null };

type ImportObjectsMutationVariables = Exact<{
  input: ImportObjectsInput;
}>;


type ImportObjectsMutation = { __typename?: 'Mutation', importObjects: string };

type MetadataScanMutationVariables = Exact<{
  input: ScanMetadataInput;
}>;


type MetadataScanMutation = { __typename?: 'Mutation', metadataScan: string };

type MetadataGenerateMutationVariables = Exact<{
  input: GenerateMetadataInput;
}>;


type MetadataGenerateMutation = { __typename?: 'Mutation', metadataGenerate: string };

type MetadataAutoTagMutationVariables = Exact<{
  input: AutoTagMetadataInput;
}>;


type MetadataAutoTagMutation = { __typename?: 'Mutation', metadataAutoTag: string };

type MetadataIdentifyMutationVariables = Exact<{
  input: IdentifyMetadataInput;
}>;


type MetadataIdentifyMutation = { __typename?: 'Mutation', metadataIdentify: string };

type MetadataCleanMutationVariables = Exact<{
  input: CleanMetadataInput;
}>;


type MetadataCleanMutation = { __typename?: 'Mutation', metadataClean: string };

type MetadataCleanGeneratedMutationVariables = Exact<{
  input: CleanGeneratedInput;
}>;


type MetadataCleanGeneratedMutation = { __typename?: 'Mutation', metadataCleanGenerated: string };

type MigrateHashNamingMutationVariables = Exact<{ [key: string]: never; }>;


type MigrateHashNamingMutation = { __typename?: 'Mutation', migrateHashNaming: string };

type BackupDatabaseMutationVariables = Exact<{
  input: BackupDatabaseInput;
}>;


type BackupDatabaseMutation = { __typename?: 'Mutation', backupDatabase?: string | null };

type AnonymiseDatabaseMutationVariables = Exact<{
  input: AnonymiseDatabaseInput;
}>;


type AnonymiseDatabaseMutation = { __typename?: 'Mutation', anonymiseDatabase?: string | null };

type OptimiseDatabaseMutationVariables = Exact<{ [key: string]: never; }>;


type OptimiseDatabaseMutation = { __typename?: 'Mutation', optimiseDatabase: string };

type MigrateSceneScreenshotsMutationVariables = Exact<{
  input: MigrateSceneScreenshotsInput;
}>;


type MigrateSceneScreenshotsMutation = { __typename?: 'Mutation', migrateSceneScreenshots: string };

type MigrateBlobsMutationVariables = Exact<{
  input: MigrateBlobsInput;
}>;


type MigrateBlobsMutation = { __typename?: 'Mutation', migrateBlobs: string };

type PerformerCreateMutationVariables = Exact<{
  input: PerformerCreateInput;
}>;


type PerformerCreateMutation = { __typename?: 'Mutation', performerCreate?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> } | null };

type PerformerUpdateMutationVariables = Exact<{
  input: PerformerUpdateInput;
}>;


type PerformerUpdateMutation = { __typename?: 'Mutation', performerUpdate?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> } | null };

type BulkPerformerUpdateMutationVariables = Exact<{
  input: BulkPerformerUpdateInput;
}>;


type BulkPerformerUpdateMutation = { __typename?: 'Mutation', bulkPerformerUpdate?: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }> | null };

type PerformerDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type PerformerDestroyMutation = { __typename?: 'Mutation', performerDestroy: boolean };

type PerformersDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type PerformersDestroyMutation = { __typename?: 'Mutation', performersDestroy: boolean };

type PerformerMergeMutationVariables = Exact<{
  input: PerformerMergeInput;
}>;


type PerformerMergeMutation = { __typename?: 'Mutation', performerMerge: { __typename?: 'Performer', id: string } };

type ReloadPluginsMutationVariables = Exact<{ [key: string]: never; }>;


type ReloadPluginsMutation = { __typename?: 'Mutation', reloadPlugins: boolean };

type RunPluginTaskMutationVariables = Exact<{
  plugin_id: Scalars['ID']['input'];
  task_name: Scalars['String']['input'];
  args_map?: InputMaybe<Scalars['Map']['input']>;
}>;


type RunPluginTaskMutation = { __typename?: 'Mutation', runPluginTask: string };

type ConfigurePluginMutationVariables = Exact<{
  plugin_id: Scalars['ID']['input'];
  input: Scalars['Map']['input'];
}>;


type ConfigurePluginMutation = { __typename?: 'Mutation', configurePlugin: { [key: string]: unknown } };

type SetPluginsEnabledMutationVariables = Exact<{
  enabledMap: Scalars['BoolMap']['input'];
}>;


type SetPluginsEnabledMutation = { __typename?: 'Mutation', setPluginsEnabled: boolean };

type InstallPluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type InstallPluginPackagesMutation = { __typename?: 'Mutation', installPackages: string };

type UpdatePluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type UpdatePluginPackagesMutation = { __typename?: 'Mutation', updatePackages: string };

type UninstallPluginPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type UninstallPluginPackagesMutation = { __typename?: 'Mutation', uninstallPackages: string };

type SceneMarkerCreateMutationVariables = Exact<{
  title: Scalars['String']['input'];
  seconds: Scalars['Float']['input'];
  end_seconds?: InputMaybe<Scalars['Float']['input']>;
  scene_id: Scalars['ID']['input'];
  primary_tag_id: Scalars['ID']['input'];
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type SceneMarkerCreateMutation = { __typename?: 'Mutation', sceneMarkerCreate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null };

type SceneMarkerUpdateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  seconds: Scalars['Float']['input'];
  end_seconds?: InputMaybe<Scalars['Float']['input']>;
  scene_id: Scalars['ID']['input'];
  primary_tag_id: Scalars['ID']['input'];
  tag_ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type SceneMarkerUpdateMutation = { __typename?: 'Mutation', sceneMarkerUpdate?: { __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null };

type BulkSceneMarkerUpdateMutationVariables = Exact<{
  input: BulkSceneMarkerUpdateInput;
}>;


type BulkSceneMarkerUpdateMutation = { __typename?: 'Mutation', bulkSceneMarkerUpdate?: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> | null };

type SceneMarkerDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type SceneMarkerDestroyMutation = { __typename?: 'Mutation', sceneMarkerDestroy: boolean };

type SceneMarkersDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type SceneMarkersDestroyMutation = { __typename?: 'Mutation', sceneMarkersDestroy: boolean };

type SceneCreateMutationVariables = Exact<{
  input: SceneCreateInput;
}>;


type SceneCreateMutation = { __typename?: 'Mutation', sceneCreate?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

type SceneUpdateMutationVariables = Exact<{
  input: SceneUpdateInput;
}>;


type SceneUpdateMutation = { __typename?: 'Mutation', sceneUpdate?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

type BulkSceneUpdateMutationVariables = Exact<{
  input: BulkSceneUpdateInput;
}>;


type BulkSceneUpdateMutation = { __typename?: 'Mutation', bulkSceneUpdate?: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> | null };

type ScenesUpdateMutationVariables = Exact<{
  input: Array<SceneUpdateInput> | SceneUpdateInput;
}>;


type ScenesUpdateMutation = { __typename?: 'Mutation', scenesUpdate?: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null> | null };

type SceneSaveActivityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  resume_time?: InputMaybe<Scalars['Float']['input']>;
  playDuration?: InputMaybe<Scalars['Float']['input']>;
}>;


type SceneSaveActivityMutation = { __typename?: 'Mutation', sceneSaveActivity: boolean };

type SceneResetActivityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  reset_resume: Scalars['Boolean']['input'];
  reset_duration: Scalars['Boolean']['input'];
}>;


type SceneResetActivityMutation = { __typename?: 'Mutation', sceneResetActivity: boolean };

type SceneAddPlayMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']> | Scalars['Timestamp']['input']>;
}>;


type SceneAddPlayMutation = { __typename?: 'Mutation', sceneAddPlay: { __typename?: 'HistoryMutationResult', count: number, history: Array<string> } };

type SceneDeletePlayMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']> | Scalars['Timestamp']['input']>;
}>;


type SceneDeletePlayMutation = { __typename?: 'Mutation', sceneDeletePlay: { __typename?: 'HistoryMutationResult', count: number, history: Array<string> } };

type SceneResetPlayCountMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type SceneResetPlayCountMutation = { __typename?: 'Mutation', sceneResetPlayCount: number };

type SceneAddOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']> | Scalars['Timestamp']['input']>;
}>;


type SceneAddOMutation = { __typename?: 'Mutation', sceneAddO: { __typename?: 'HistoryMutationResult', count: number, history: Array<string> } };

type SceneDeleteOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  times?: InputMaybe<Array<Scalars['Timestamp']['input']> | Scalars['Timestamp']['input']>;
}>;


type SceneDeleteOMutation = { __typename?: 'Mutation', sceneDeleteO: { __typename?: 'HistoryMutationResult', count: number, history: Array<string> } };

type SceneResetOMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type SceneResetOMutation = { __typename?: 'Mutation', sceneResetO: number };

type SceneDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
}>;


type SceneDestroyMutation = { __typename?: 'Mutation', sceneDestroy: boolean };

type ScenesDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  delete_file?: InputMaybe<Scalars['Boolean']['input']>;
  delete_generated?: InputMaybe<Scalars['Boolean']['input']>;
}>;


type ScenesDestroyMutation = { __typename?: 'Mutation', scenesDestroy: boolean };

type SceneGenerateScreenshotMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  at?: InputMaybe<Scalars['Float']['input']>;
}>;


type SceneGenerateScreenshotMutation = { __typename?: 'Mutation', sceneGenerateScreenshot: string };

type SceneAssignFileMutationVariables = Exact<{
  input: AssignSceneFileInput;
}>;


type SceneAssignFileMutation = { __typename?: 'Mutation', sceneAssignFile: boolean };

type SceneMergeMutationVariables = Exact<{
  input: SceneMergeInput;
}>;


type SceneMergeMutation = { __typename?: 'Mutation', sceneMerge?: { __typename?: 'Scene', id: string } | null };

type ReloadScrapersMutationVariables = Exact<{ [key: string]: never; }>;


type ReloadScrapersMutation = { __typename?: 'Mutation', reloadScrapers: boolean };

type InstallScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type InstallScraperPackagesMutation = { __typename?: 'Mutation', installPackages: string };

type UpdateScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type UpdateScraperPackagesMutation = { __typename?: 'Mutation', updatePackages: string };

type UninstallScraperPackagesMutationVariables = Exact<{
  packages: Array<PackageSpecInput> | PackageSpecInput;
}>;


type UninstallScraperPackagesMutation = { __typename?: 'Mutation', uninstallPackages: string };

type SubmitStashBoxFingerprintsMutationVariables = Exact<{
  input: StashBoxFingerprintSubmissionInput;
}>;


type SubmitStashBoxFingerprintsMutation = { __typename?: 'Mutation', submitStashBoxFingerprints: boolean };

type StashBoxBatchPerformerTagMutationVariables = Exact<{
  input: StashBoxBatchTagInput;
}>;


type StashBoxBatchPerformerTagMutation = { __typename?: 'Mutation', stashBoxBatchPerformerTag: string };

type StashBoxBatchStudioTagMutationVariables = Exact<{
  input: StashBoxBatchTagInput;
}>;


type StashBoxBatchStudioTagMutation = { __typename?: 'Mutation', stashBoxBatchStudioTag: string };

type StashBoxBatchTagTagMutationVariables = Exact<{
  input: StashBoxBatchTagInput;
}>;


type StashBoxBatchTagTagMutation = { __typename?: 'Mutation', stashBoxBatchTagTag: string };

type SubmitStashBoxSceneDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


type SubmitStashBoxSceneDraftMutation = { __typename?: 'Mutation', submitStashBoxSceneDraft?: string | null };

type SubmitStashBoxPerformerDraftMutationVariables = Exact<{
  input: StashBoxDraftSubmissionInput;
}>;


type SubmitStashBoxPerformerDraftMutation = { __typename?: 'Mutation', submitStashBoxPerformerDraft?: string | null };

type StudioCreateMutationVariables = Exact<{
  input: StudioCreateInput;
}>;


type StudioCreateMutation = { __typename?: 'Mutation', studioCreate?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type StudioUpdateMutationVariables = Exact<{
  input: StudioUpdateInput;
}>;


type StudioUpdateMutation = { __typename?: 'Mutation', studioUpdate?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type BulkStudioUpdateMutationVariables = Exact<{
  input: BulkStudioUpdateInput;
}>;


type BulkStudioUpdateMutation = { __typename?: 'Mutation', bulkStudioUpdate?: Array<{ __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> | null };

type StudioDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type StudioDestroyMutation = { __typename?: 'Mutation', studioDestroy: boolean };

type StudiosDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type StudiosDestroyMutation = { __typename?: 'Mutation', studiosDestroy: boolean };

type TagCreateMutationVariables = Exact<{
  input: TagCreateInput;
}>;


type TagCreateMutation = { __typename?: 'Mutation', tagCreate?: { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type TagDestroyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type TagDestroyMutation = { __typename?: 'Mutation', tagDestroy: boolean };

type TagsDestroyMutationVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type TagsDestroyMutation = { __typename?: 'Mutation', tagsDestroy: boolean };

type TagUpdateMutationVariables = Exact<{
  input: TagUpdateInput;
}>;


type TagUpdateMutation = { __typename?: 'Mutation', tagUpdate?: { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type BulkTagUpdateMutationVariables = Exact<{
  input: BulkTagUpdateInput;
}>;


type BulkTagUpdateMutation = { __typename?: 'Mutation', bulkTagUpdate?: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> | null };

type TagsMergeMutationVariables = Exact<{
  source: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  destination: Scalars['ID']['input'];
  values?: InputMaybe<TagUpdateInput>;
}>;


type TagsMergeMutation = { __typename?: 'Mutation', tagsMerge?: { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type DlnaStatusQueryVariables = Exact<{ [key: string]: never; }>;


type DlnaStatusQuery = { __typename?: 'Query', dlnaStatus: { __typename?: 'DLNAStatus', running: boolean, until?: string | null, recentIPAddresses: Array<string>, allowedIPAddresses: Array<{ __typename?: 'DLNAIP', ipAddress: string, until?: string | null }> } };

type FindSavedFilterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindSavedFilterQuery = { __typename?: 'Query', findSavedFilter?: { __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: SavedObjectFilter | null, ui_options?: SavedUIOptions | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null } | null };

type FindSavedFiltersQueryVariables = Exact<{
  mode?: InputMaybe<FilterMode>;
}>;


type FindSavedFiltersQuery = { __typename?: 'Query', findSavedFilters: Array<{ __typename?: 'SavedFilter', id: string, mode: FilterMode, name: string, object_filter?: SavedObjectFilter | null, ui_options?: SavedUIOptions | null, find_filter?: { __typename?: 'SavedFindFilterType', q?: string | null, page?: number | null, per_page?: number | null, sort?: string | null, direction?: SortDirectionEnum | null } | null }> };

type FindRootFoldersForSelectQueryVariables = Exact<{
  zip_file_filter?: InputMaybe<MultiCriterionInput>;
}>;


type FindRootFoldersForSelectQuery = { __typename?: 'Query', findFolders: { __typename?: 'FindFoldersResultType', count: number, folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string }> } };

type FindFoldersForQueryQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  folder_filter?: InputMaybe<FolderFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindFoldersForQueryQuery = { __typename?: 'Query', findFolders: { __typename?: 'FindFoldersResultType', count: number, folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string, parent_folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string }> }> } };

type FindFolderHierarchyForIDsQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


type FindFolderHierarchyForIDsQuery = { __typename?: 'Query', findFolders: { __typename?: 'FindFoldersResultType', count: number, folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string, parent_folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string, sub_folders: Array<{ __typename?: 'Folder', id: string, path: string, basename: string, zip_file?: { __typename?: 'BasicFile', id: string } | null }> }> }> } };

type FindGalleriesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
}>;


type FindGalleriesQuery = { __typename?: 'Query', findGalleries: { __typename?: 'FindGalleriesResultType', count: number, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }> } };

type FindGalleryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindGalleryQuery = { __typename?: 'Query', findGallery?: { __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type FindGalleriesForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  gallery_filter?: InputMaybe<GalleryFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindGalleriesForSelectQuery = { __typename?: 'Query', findGalleries: { __typename?: 'FindGalleriesResultType', count: number, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, date?: string | null, code?: string | null, studio?: { __typename?: 'Studio', name: string } | null, cover?: { __typename?: 'Image', paths: { __typename?: 'ImagePathsType', thumbnail?: string | null } } | null, paths: { __typename?: 'GalleryPathsType', preview: string }, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }> } };

type FindGalleryImageIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  index: Scalars['Int']['input'];
}>;


type FindGalleryImageIdQuery = { __typename?: 'Query', findGallery?: { __typename?: 'Gallery', image: { __typename?: 'Image', id: string } } | null };

type FindImagesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


type FindImagesQuery = { __typename?: 'Query', findImages: { __typename?: 'FindImagesResultType', count: number, images: Array<{ __typename?: 'Image', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, o_counter?: number | null, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> }> } };

type FindImagesMetadataQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  image_filter?: InputMaybe<ImageFilterType>;
  image_ids?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


type FindImagesMetadataQuery = { __typename?: 'Query', findImages: { __typename?: 'FindImagesResultType', megapixels: number, filesize: number } };

type FindImageQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  checksum?: InputMaybe<Scalars['String']['input']>;
}>;


type FindImageQuery = { __typename?: 'Query', findImage?: { __typename?: 'Image', id: string, title?: string | null, code?: string | null, rating100?: number | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, organized: boolean, o_counter?: number | null, created_at: string, updated_at: string, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'ImagePathsType', thumbnail?: string | null, preview?: string | null, image?: string | null }, galleries: Array<{ __typename?: 'Gallery', id: string, created_at: string, updated_at: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, custom_fields: { [key: string]: unknown }, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string }, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number, gallery: { __typename?: 'Gallery', id: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, visual_files: Array<{ __typename?: 'ImageFile', id: string, path: string, size: number, mod_time: string, width: number, height: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> } | { __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }> } | null };

type JobQueueQueryVariables = Exact<{ [key: string]: never; }>;


type JobQueueQuery = { __typename?: 'Query', jobQueue?: Array<{ __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: string | null, endTime?: string | null, addTime: string, error?: string | null }> | null };

type FindJobQueryVariables = Exact<{
  input: FindJobInput;
}>;


type FindJobQuery = { __typename?: 'Query', findJob?: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, startTime?: string | null, endTime?: string | null, addTime: string, error?: string | null } | null };

type SceneWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']['input']>;
}>;


type SceneWallQuery = { __typename?: 'Query', sceneWall: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> };

type MarkerWallQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']['input']>;
}>;


type MarkerWallQuery = { __typename?: 'Query', markerWall: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> };

type MarkerStringsQueryVariables = Exact<{
  q?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;


type MarkerStringsQuery = { __typename?: 'Query', markerStrings: Array<{ __typename?: 'MarkerStringsResultType', id: string, count: number, title: string } | null> };

type StatsQueryVariables = Exact<{ [key: string]: never; }>;


type StatsQuery = { __typename?: 'Query', stats: { __typename?: 'StatsResultType', scene_count: number, scenes_size: number, scenes_duration: number, image_count: number, images_size: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, tag_count: number, total_o_count: number, total_play_duration: number, total_play_count: number, scenes_played: number } };

type LogsQueryVariables = Exact<{ [key: string]: never; }>;


type LogsQuery = { __typename?: 'Query', logs: Array<{ __typename?: 'LogEntry', time: string, level: LogLevel, message: string }> };

type VersionQueryVariables = Exact<{ [key: string]: never; }>;


type VersionQuery = { __typename?: 'Query', version: { __typename?: 'Version', version?: string | null, hash: string, build_time: string } };

type LatestVersionQueryVariables = Exact<{ [key: string]: never; }>;


type LatestVersionQuery = { __typename?: 'Query', latestversion: { __typename?: 'LatestVersion', version: string, shorthash: string, release_date: string, url: string } };

type FindGroupsQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  group_filter?: InputMaybe<GroupFilterType>;
}>;


type FindGroupsQuery = { __typename?: 'Query', findGroups: { __typename?: 'FindGroupsResultType', count: number, groups: Array<{ __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> }> } };

type FindGroupQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindGroupQuery = { __typename?: 'Query', findGroup?: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } | null };

type FindGroupsForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  group_filter?: InputMaybe<GroupFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindGroupsForSelectQuery = { __typename?: 'Query', findGroups: { __typename?: 'FindGroupsResultType', count: number, groups: Array<{ __typename?: 'Group', id: string, name: string, aliases?: string | null, date?: string | null, front_image_path?: string | null, studio?: { __typename?: 'Studio', name: string } | null }> } };

type FindPerformersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  performer_ids?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


type FindPerformersQuery = { __typename?: 'Query', findPerformers: { __typename?: 'FindPerformersResultType', count: number, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }> } };

type FindPerformerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindPerformerQuery = { __typename?: 'Query', findPerformer?: { __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> } | null };

type FindPerformersForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  performer_filter?: InputMaybe<PerformerFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindPerformersForSelectQuery = { __typename?: 'Query', findPerformers: { __typename?: 'FindPerformersResultType', count: number, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, alias_list: Array<string>, image_path?: string | null, birthdate?: string | null, death_date?: string | null }> } };

type PluginsQueryVariables = Exact<{ [key: string]: never; }>;


type PluginsQuery = { __typename?: 'Query', plugins?: Array<{ __typename?: 'Plugin', id: string, name: string, enabled: boolean, description?: string | null, url?: string | null, version?: string | null, requires?: Array<string> | null, tasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null }> | null, hooks?: Array<{ __typename?: 'PluginHook', name: string, description?: string | null, hooks?: Array<string> | null }> | null, settings?: Array<{ __typename?: 'PluginSetting', name: string, display_name?: string | null, description?: string | null, type: PluginSettingTypeEnum }> | null, paths: { __typename?: 'PluginPaths', css?: Array<string> | null, javascript?: Array<string> | null } }> | null };

type PluginTasksQueryVariables = Exact<{ [key: string]: never; }>;


type PluginTasksQuery = { __typename?: 'Query', pluginTasks?: Array<{ __typename?: 'PluginTask', name: string, description?: string | null, plugin: { __typename?: 'Plugin', id: string, name: string, enabled: boolean } }> | null };

type InstalledPluginPackagesQueryVariables = Exact<{ [key: string]: never; }>;


type InstalledPluginPackagesQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string }> };

type InstalledPluginPackagesStatusQueryVariables = Exact<{ [key: string]: never; }>;


type InstalledPluginPackagesStatusQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string, source_package?: { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string } | null }> };

type AvailablePluginPackagesQueryVariables = Exact<{
  source: Scalars['String']['input'];
}>;


type AvailablePluginPackagesQuery = { __typename?: 'Query', availablePackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string, requires: Array<{ __typename?: 'Package', package_id: string }> }> };

type FindSceneMarkersQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_marker_filter?: InputMaybe<SceneMarkerFilterType>;
}>;


type FindSceneMarkersQuery = { __typename?: 'Query', findSceneMarkers: { __typename?: 'FindSceneMarkersResultType', count: number, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> } };

type FindScenesQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  scene_ids?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


type FindScenesQuery = { __typename?: 'Query', findScenes: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } };

type FindScenesByPathRegexQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
}>;


type FindScenesByPathRegexQuery = { __typename?: 'Query', findScenesByPathRegex: { __typename?: 'FindScenesResultType', count: number, filesize: number, duration: number, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } };

type FindDuplicateScenesQueryVariables = Exact<{
  distance?: InputMaybe<Scalars['Int']['input']>;
  duration_diff?: InputMaybe<Scalars['Float']['input']>;
}>;


type FindDuplicateScenesQuery = { __typename?: 'Query', findDuplicateScenes: Array<Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>> };

type FindSceneQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  checksum?: InputMaybe<Scalars['String']['input']>;
}>;


type FindSceneQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

type FindFullScenesQueryVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['Int']['input']> | Scalars['Int']['input']>;
}>;


type FindFullScenesQuery = { __typename?: 'Query', findScenes: { __typename?: 'FindScenesResultType', scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, created_at: string, updated_at: string, resume_time?: number | null, last_played_at?: string | null, play_duration?: number | null, play_count?: number | null, play_history: Array<string>, o_history: Array<string>, custom_fields: { [key: string]: unknown }, captions?: Array<{ __typename?: 'VideoCaption', language_code: string, caption_type: string }> | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, code?: string | null, date?: string | null, urls: Array<string>, details?: string | null, photographer?: string | null, rating100?: number | null, organized: boolean, image_count: number, files: Array<{ __typename?: 'GalleryFile', id: string, path: string, size: number, mod_time: string, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, folder?: { __typename?: 'Folder', id: string, basename: string, path: string } | null, chapters: Array<{ __typename?: 'GalleryChapter', id: string, title: string, image_index: number }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, paths: { __typename?: 'GalleryPathsType', cover: string, preview: string } }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, aliases?: string | null, duration?: number | null, date?: string | null, rating100?: number | null, director?: string | null, synopsis?: string | null, urls: Array<string>, front_image_path?: string | null, back_image_path?: string | null, scene_count: number, performer_count: number, sub_group_count: number, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, performer_count_all: number, sub_group_count_all: number, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null, details?: string | null, rating100?: number | null, aliases: Array<string>, favorite: boolean, ignore_auto_tag: boolean, organized: boolean, o_counter?: number | null, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parent_studio?: { __typename?: 'Studio', id: string } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } | null, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, containing_groups: Array<{ __typename?: 'GroupDescription', description?: string | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null, rating100?: number | null } }>, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null }> } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, urls?: Array<string> | null, gender?: GenderEnum | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height_cm?: number | null, measurements?: string | null, fake_tits?: string | null, penis_length?: number | null, circumcised?: CircumcisedEnum | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, alias_list: Array<string>, favorite: boolean, ignore_auto_tag: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, group_count: number, performer_count: number, o_counter?: number | null, rating100?: number | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: number | null, custom_fields: { [key: string]: unknown }, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }> }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> }> } };

type FindSceneMarkerTagsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindSceneMarkerTagsQuery = { __typename?: 'Query', sceneMarkerTags: Array<{ __typename?: 'SceneMarkerTag', tag: { __typename?: 'Tag', id: string, name: string }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, end_seconds?: number | null, stream: string, preview: string, screenshot: string, scene: { __typename?: 'Scene', id: string, title?: string | null, files: Array<{ __typename?: 'VideoFile', width: number, height: number, path: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, image_path?: string | null }> }, primary_tag: { __typename?: 'Tag', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> }> }> };

type ParseSceneFilenamesQueryVariables = Exact<{
  filter: FindFilterType;
  config: SceneParserInput;
}>;


type ParseSceneFilenamesQuery = { __typename?: 'Query', parseSceneFilenames: { __typename?: 'SceneParserResultType', count: number, results: Array<{ __typename?: 'SceneParserResult', title?: string | null, code?: string | null, details?: string | null, director?: string | null, url?: string | null, date?: string | null, rating?: number | null, studio_id?: string | null, gallery_ids?: Array<string> | null, performer_ids?: Array<string> | null, tag_ids?: Array<string> | null, scene: { __typename?: 'Scene', id: string, title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls: Array<string>, date?: string | null, rating100?: number | null, o_counter?: number | null, organized: boolean, interactive: boolean, interactive_speed?: number | null, resume_time?: number | null, play_duration?: number | null, play_count?: number | null, files: Array<{ __typename?: 'VideoFile', id: string, path: string, size: number, mod_time: string, duration: number, video_codec: string, audio_codec: string, width: number, height: number, frame_rate: number, bit_rate: number, fingerprints: Array<{ __typename?: 'Fingerprint', type: string, value: string }> }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null, preview?: string | null, stream?: string | null, webp?: string | null, vtt?: string | null, sprite?: string | null, funscript?: string | null, interactive_heatmap?: string | null, caption?: string | null }, scene_markers: Array<{ __typename?: 'SceneMarker', id: string, title: string, seconds: number, primary_tag: { __typename?: 'Tag', id: string, name: string } }>, galleries: Array<{ __typename?: 'Gallery', id: string, title?: string | null, files: Array<{ __typename?: 'GalleryFile', path: string }>, folder?: { __typename?: 'Folder', path: string } | null }>, studio?: { __typename?: 'Studio', id: string, name: string, image_path?: string | null } | null, groups: Array<{ __typename?: 'SceneGroup', scene_index?: number | null, group: { __typename?: 'Group', id: string, name: string, front_image_path?: string | null } }>, tags: Array<{ __typename?: 'Tag', id: string, name: string }>, performers: Array<{ __typename?: 'Performer', id: string, name: string, disambiguation?: string | null, gender?: GenderEnum | null, favorite: boolean, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }, movies?: Array<{ __typename?: 'SceneMovieID', movie_id: string }> | null }> } };

type SceneStreamsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type SceneStreamsQuery = { __typename?: 'Query', findScene?: { __typename?: 'Scene', sceneStreams: Array<{ __typename?: 'SceneStreamEndpoint', url: string, mime_type?: string | null, label?: string | null }> } | null };

type FindScenesForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  scene_filter?: InputMaybe<SceneFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindScenesForSelectQuery = { __typename?: 'Query', findScenes: { __typename?: 'FindScenesResultType', count: number, scenes: Array<{ __typename?: 'Scene', id: string, title?: string | null, date?: string | null, code?: string | null, studio?: { __typename?: 'Studio', name: string } | null, files: Array<{ __typename?: 'VideoFile', path: string }>, paths: { __typename?: 'ScenePathsType', screenshot?: string | null } }> } };

type ListPerformerScrapersQueryVariables = Exact<{ [key: string]: never; }>;


type ListPerformerScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, performer?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

type ListSceneScrapersQueryVariables = Exact<{ [key: string]: never; }>;


type ListSceneScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, scene?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

type ListGalleryScrapersQueryVariables = Exact<{ [key: string]: never; }>;


type ListGalleryScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, gallery?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

type ListImageScrapersQueryVariables = Exact<{ [key: string]: never; }>;


type ListImageScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, image?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

type ListGroupScrapersQueryVariables = Exact<{ [key: string]: never; }>;


type ListGroupScrapersQuery = { __typename?: 'Query', listScrapers: Array<{ __typename?: 'Scraper', id: string, name: string, group?: { __typename?: 'ScraperSpec', urls?: Array<string> | null, supported_scrapes: Array<ScrapeType> } | null }> };

type ScrapeSingleStudioQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleStudioInput;
}>;


type ScrapeSingleStudioQuery = { __typename?: 'Query', scrapeSingleStudio: Array<{ __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> };

type ScrapeSingleTagQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleTagInput;
}>;


type ScrapeSingleTagQuery = { __typename?: 'Query', scrapeSingleTag: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> };

type ScrapeSinglePerformerQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSinglePerformerInput;
}>;


type ScrapeSinglePerformerQuery = { __typename?: 'Query', scrapeSinglePerformer: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> };

type ScrapeMultiPerformersQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiPerformersInput;
}>;


type ScrapeMultiPerformersQuery = { __typename?: 'Query', scrapeMultiPerformers: Array<Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }>> };

type ScrapePerformerUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


type ScrapePerformerUrlQuery = { __typename?: 'Query', scrapePerformerURL?: { __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null };

type ScrapeSingleSceneQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleSceneInput;
}>;


type ScrapeSingleSceneQuery = { __typename?: 'Query', scrapeSingleScene: Array<{ __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, groups?: Array<{ __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }> };

type ScrapeMultiScenesQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeMultiScenesInput;
}>;


type ScrapeMultiScenesQuery = { __typename?: 'Query', scrapeMultiScenes: Array<Array<{ __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, groups?: Array<{ __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null }>> };

type ScrapeSceneUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


type ScrapeSceneUrlQuery = { __typename?: 'Query', scrapeSceneURL?: { __typename?: 'ScrapedScene', title?: string | null, code?: string | null, details?: string | null, director?: string | null, urls?: Array<string> | null, date?: string | null, image?: string | null, remote_site_id?: string | null, file?: { __typename?: 'SceneFileType', size?: string | null, duration?: number | null, video_codec?: string | null, audio_codec?: string | null, width?: number | null, height?: number | null, framerate?: number | null, bitrate?: number | null } | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, groups?: Array<{ __typename?: 'ScrapedGroup', stored_id?: string | null, name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null, fingerprints?: Array<{ __typename?: 'StashBoxFingerprint', hash: string, algorithm: string, duration: number }> | null } | null };

type ScrapeSingleGalleryQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleGalleryInput;
}>;


type ScrapeSingleGalleryQuery = { __typename?: 'Query', scrapeSingleGallery: Array<{ __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null }> };

type ScrapeSingleImageQueryVariables = Exact<{
  source: ScraperSourceInput;
  input: ScrapeSingleImageInput;
}>;


type ScrapeSingleImageQuery = { __typename?: 'Query', scrapeSingleImage: Array<{ __typename?: 'ScrapedImage', title?: string | null, code?: string | null, details?: string | null, photographer?: string | null, urls?: Array<string> | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null }> };

type ScrapeGalleryUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


type ScrapeGalleryUrlQuery = { __typename?: 'Query', scrapeGalleryURL?: { __typename?: 'ScrapedGallery', title?: string | null, code?: string | null, details?: string | null, urls?: Array<string> | null, photographer?: string | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null } | null };

type ScrapeImageUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


type ScrapeImageUrlQuery = { __typename?: 'Query', scrapeImageURL?: { __typename?: 'ScrapedImage', title?: string | null, code?: string | null, details?: string | null, photographer?: string | null, urls?: Array<string> | null, date?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null, image?: string | null, details?: string | null, aliases?: string | null, remote_site_id?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null, performers?: Array<{ __typename?: 'ScrapedPerformer', stored_id?: string | null, name?: string | null, disambiguation?: string | null, gender?: string | null, urls?: Array<string> | null, birthdate?: string | null, ethnicity?: string | null, country?: string | null, eye_color?: string | null, height?: string | null, measurements?: string | null, fake_tits?: string | null, penis_length?: string | null, circumcised?: string | null, career_start?: string | null, career_end?: string | null, tattoos?: string | null, piercings?: string | null, aliases?: string | null, remote_site_id?: string | null, images?: Array<string> | null, details?: string | null, death_date?: string | null, hair_color?: string | null, weight?: string | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null }> | null } | null };

type ScrapeGroupUrlQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


type ScrapeGroupUrlQuery = { __typename?: 'Query', scrapeGroupURL?: { __typename?: 'ScrapedGroup', name?: string | null, aliases?: string | null, duration?: string | null, date?: string | null, rating?: string | null, director?: string | null, urls?: Array<string> | null, synopsis?: string | null, front_image?: string | null, back_image?: string | null, studio?: { __typename?: 'ScrapedStudio', stored_id?: string | null, name: string, urls?: Array<string> | null } | null, tags?: Array<{ __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null, alias_list?: Array<string> | null, remote_site_id?: string | null, parent?: { __typename?: 'ScrapedTag', stored_id?: string | null, name: string, description?: string | null } | null }> | null } | null };

type InstalledScraperPackagesQueryVariables = Exact<{ [key: string]: never; }>;


type InstalledScraperPackagesQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string }> };

type InstalledScraperPackagesStatusQueryVariables = Exact<{ [key: string]: never; }>;


type InstalledScraperPackagesStatusQuery = { __typename?: 'Query', installedPackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string, source_package?: { __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string } | null }> };

type AvailableScraperPackagesQueryVariables = Exact<{
  source: Scalars['String']['input'];
}>;


type AvailableScraperPackagesQuery = { __typename?: 'Query', availablePackages: Array<{ __typename?: 'Package', package_id: string, name: string, version?: string | null, date?: string | null, metadata: { [key: string]: unknown }, sourceURL: string, requires: Array<{ __typename?: 'Package', package_id: string }> }> };

type ConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


type ConfigurationQuery = { __typename?: 'Query', configuration: { __typename?: 'ConfigResult', ui: IUIConfig, plugins: { [id: string]: { [key: string]: unknown } }, general: { __typename?: 'ConfigGeneralResult', databasePath: string, backupDirectoryPath: string, deleteTrashPath: string, generatedPath: string, metadataPath: string, scrapersPath: string, pluginsPath: string, cachePath: string, blobsPath: string, blobsStorage: BlobsStorageType, ffmpegPath: string, ffprobePath: string, calculateMD5: boolean, videoFileNamingAlgorithm: HashAlgorithm, parallelTasks: number, previewAudio: boolean, previewSegments: number, previewSegmentDuration: number, previewExcludeStart: string, previewExcludeEnd: string, previewPreset: PreviewPreset, transcodeHardwareAcceleration: boolean, maxTranscodeSize?: StreamingResolutionEnum | null, maxStreamingTranscodeSize?: StreamingResolutionEnum | null, writeImageThumbnails: boolean, createImageClipsFromVideos: boolean, apiKey: string, username: string, password: string, maxSessionAge: number, logFile?: string | null, logOut: boolean, logLevel: string, logAccess: boolean, logFileMaxSize: number, useCustomSpriteInterval: boolean, spriteInterval: number, minimumSprites: number, maximumSprites: number, spriteScreenshotSize: number, createGalleriesFromFolders: boolean, galleryCoverRegex: string, videoExtensions: Array<string>, imageExtensions: Array<string>, galleryExtensions: Array<string>, excludes: Array<string>, imageExcludes: Array<string>, customPerformerImageLocation?: string | null, pythonPath: string, transcodeInputArgs: Array<string>, transcodeOutputArgs: Array<string>, liveTranscodeInputArgs: Array<string>, liveTranscodeOutputArgs: Array<string>, drawFunscriptHeatmapRange: boolean, stashes: Array<{ __typename?: 'StashConfig', path: string, excludeVideo: boolean, excludeImage: boolean }>, stashBoxes: Array<{ __typename?: 'StashBox', name: string, endpoint: string, api_key: string, max_requests_per_minute: number }>, scraperPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }>, pluginPackageSources: Array<{ __typename?: 'PackageSource', name?: string | null, url: string, local_path?: string | null }> }, interface: { __typename?: 'ConfigInterfaceResult', sfwContentMode: boolean, menuItems?: Array<string> | null, soundOnPreview?: boolean | null, wallShowTitle?: boolean | null, wallPlayback?: string | null, showScrubber?: boolean | null, maximumLoopDuration?: number | null, noBrowser?: boolean | null, notificationsEnabled?: boolean | null, autostartVideo?: boolean | null, autostartVideoOnPlaySelected?: boolean | null, continuePlaylistDefault?: boolean | null, showStudioAsText?: boolean | null, css?: string | null, cssEnabled?: boolean | null, javascript?: string | null, javascriptEnabled?: boolean | null, customLocales?: string | null, customLocalesEnabled?: boolean | null, disableCustomizations?: boolean | null, language?: string | null, handyKey?: string | null, funscriptOffset?: number | null, useStashHostedFunscript?: boolean | null, imageLightbox: { __typename?: 'ConfigImageLightboxResult', slideshowDelay?: number | null, displayMode?: ImageLightboxDisplayMode | null, scaleUp?: boolean | null, resetZoomOnNav?: boolean | null, scrollMode?: ImageLightboxScrollMode | null, scrollAttemptsBeforeChange: number, disableAnimation?: boolean | null }, disableDropdownCreate: { __typename?: 'ConfigDisableDropdownCreate', performer: boolean, tag: boolean, studio: boolean, movie: boolean, gallery: boolean } }, dlna: { __typename?: 'ConfigDLNAResult', serverName: string, enabled: boolean, port: number, whitelistedIPs: Array<string>, interfaces: Array<string>, videoSortOrder: string }, scraping: { __typename?: 'ConfigScrapingResult', scraperUserAgent?: string | null, scraperCertCheck: boolean, scraperCDPPath?: string | null, excludeTagPatterns: Array<string> }, defaults: { __typename?: 'ConfigDefaultSettingsResult', deleteFile?: boolean | null, deleteGenerated?: boolean | null, scan?: { __typename?: 'ScanMetadataOptions', scanGenerateCovers: boolean, scanGeneratePreviews: boolean, scanGenerateImagePreviews: boolean, scanGenerateSprites: boolean, scanGeneratePhashes: boolean, scanGenerateThumbnails: boolean, scanGenerateClipPreviews: boolean } | null, identify?: { __typename?: 'IdentifyMetadataTaskOptions', sources: Array<{ __typename?: 'IdentifySource', source: { __typename?: 'ScraperSource', stash_box_index?: number | null, stash_box_endpoint?: string | null, scraper_id?: string | null }, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null }>, options?: { __typename?: 'IdentifyMetadataOptions', setCoverImage?: boolean | null, setOrganized?: boolean | null, performerGenders?: Array<GenderEnum> | null, skipMultipleMatches?: boolean | null, skipMultipleMatchTag?: string | null, skipSingleNamePerformers?: boolean | null, skipSingleNamePerformerTag?: string | null, fieldOptions?: Array<{ __typename?: 'IdentifyFieldOptions', field: string, strategy: IdentifyFieldStrategy, createMissing?: boolean | null }> | null } | null } | null, autoTag?: { __typename?: 'AutoTagMetadataOptions', performers?: Array<string> | null, studios?: Array<string> | null, tags?: Array<string> | null } | null, generate?: { __typename?: 'GenerateMetadataOptions', covers?: boolean | null, sprites?: boolean | null, previews?: boolean | null, imagePreviews?: boolean | null, markers?: boolean | null, markerImagePreviews?: boolean | null, markerScreenshots?: boolean | null, transcodes?: boolean | null, phashes?: boolean | null, interactiveHeatmapsSpeeds?: boolean | null, clipPreviews?: boolean | null, imageThumbnails?: boolean | null, previewOptions?: { __typename?: 'GeneratePreviewOptions', previewSegments?: number | null, previewSegmentDuration?: number | null, previewExcludeStart?: string | null, previewExcludeEnd?: string | null, previewPreset?: PreviewPreset | null } | null } | null } } };

type DirectoryQueryVariables = Exact<{
  path?: InputMaybe<Scalars['String']['input']>;
}>;


type DirectoryQuery = { __typename?: 'Query', directory: { __typename?: 'Directory', path: string, parent?: string | null, directories: Array<string> } };

type ValidateStashBoxQueryVariables = Exact<{
  input: StashBoxInput;
}>;


type ValidateStashBoxQuery = { __typename?: 'Query', validateStashBoxCredentials: { __typename?: 'StashBoxValidationResult', valid: boolean, status: string } };

type SystemStatusQueryVariables = Exact<{ [key: string]: never; }>;


type SystemStatusQuery = { __typename?: 'Query', systemStatus: { __typename?: 'SystemStatus', databaseSchema?: number | null, databasePath?: string | null, appSchema: number, status: SystemStatusEnum, configPath?: string | null, os: string, workingDir: string, homeDir: string, ffmpegPath?: string | null, ffprobePath?: string | null } };

type FindStudiosQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
}>;


type FindStudiosQuery = { __typename?: 'Query', findStudios: { __typename?: 'FindStudiosResultType', count: number, studios: Array<{ __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> } };

type FindStudioQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindStudioQuery = { __typename?: 'Query', findStudio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, ignore_auto_tag: boolean, organized: boolean, image_path?: string | null, scene_count: number, image_count: number, gallery_count: number, performer_count: number, group_count: number, details?: string | null, rating100?: number | null, favorite: boolean, aliases: Array<string>, o_counter?: number | null, custom_fields: { [key: string]: unknown }, scene_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, group_count_all: number, parent_studio?: { __typename?: 'Studio', id: string, name: string, url?: string | null, urls: Array<string>, image_path?: string | null } | null, child_studios: Array<{ __typename?: 'Studio', id: string, name: string, image_path?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', stash_id: string, endpoint: string, updated_at: string }>, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type FindStudiosForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  studio_filter?: InputMaybe<StudioFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindStudiosForSelectQuery = { __typename?: 'Query', findStudios: { __typename?: 'FindStudiosResultType', count: number, studios: Array<{ __typename?: 'Studio', id: string, name: string, aliases: Array<string>, details?: string | null, image_path?: string | null, parent_studio?: { __typename?: 'Studio', id: string, name: string } | null }> } };

type FindTagsQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindTagsQuery = { __typename?: 'Query', findTags: { __typename?: 'FindTagsResultType', count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> } };

type FindTagQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


type FindTagQuery = { __typename?: 'Query', findTag?: { __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, custom_fields: { [key: string]: unknown }, scene_count_all: number, scene_marker_count_all: number, image_count_all: number, gallery_count_all: number, performer_count_all: number, studio_count_all: number, group_count_all: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } | null };

type FindTagsForSelectQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
  ids?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;


type FindTagsForSelectQuery = { __typename?: 'Query', findTags: { __typename?: 'FindTagsResultType', count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, favorite: boolean, description?: string | null, aliases: Array<string>, image_path?: string | null, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null }>, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> } };

type FindTagsForListQueryVariables = Exact<{
  filter?: InputMaybe<FindFilterType>;
  tag_filter?: InputMaybe<TagFilterType>;
}>;


type FindTagsForListQuery = { __typename?: 'Query', findTags: { __typename?: 'FindTagsResultType', count: number, tags: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, description?: string | null, aliases: Array<string>, ignore_auto_tag: boolean, favorite: boolean, image_path?: string | null, scene_count: number, scene_marker_count: number, image_count: number, gallery_count: number, performer_count: number, studio_count: number, group_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }>, parents: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }>, children: Array<{ __typename?: 'Tag', id: string, name: string, sort_name?: string | null, aliases: Array<string>, image_path?: string | null, parent_count: number, child_count: number, stash_ids: Array<{ __typename?: 'StashID', endpoint: string, stash_id: string, updated_at: string }> }> }> } };

type JobsSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


type JobsSubscribeSubscription = { __typename?: 'Subscription', jobsSubscribe: { __typename?: 'JobStatusUpdate', type: JobStatusUpdateType, job: { __typename?: 'Job', id: string, status: JobStatus, subTasks?: Array<string> | null, description: string, progress?: number | null, error?: string | null, startTime?: string | null } } };

type LoggingSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


type LoggingSubscribeSubscription = { __typename?: 'Subscription', loggingSubscribe: Array<{ __typename?: 'LogEntry', time: string, level: LogLevel, message: string }> };

type ScanCompleteSubscribeSubscriptionVariables = Exact<{ [key: string]: never; }>;


type ScanCompleteSubscribeSubscription = { __typename?: 'Subscription', scanCompleteSubscribe: boolean };

const ConfigGeneralDataFragmentDoc = gql`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  backupDirectoryPath
  deleteTrashPath
  generatedPath
  metadataPath
  scrapersPath
  pluginsPath
  cachePath
  blobsPath
  blobsStorage
  ffmpegPath
  ffprobePath
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  transcodeHardwareAcceleration
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  createImageClipsFromVideos
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  logFileMaxSize
  useCustomSpriteInterval
  spriteInterval
  minimumSprites
  maximumSprites
  spriteScreenshotSize
  createGalleriesFromFolders
  galleryCoverRegex
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  stashBoxes {
    name
    endpoint
    api_key
    max_requests_per_minute
  }
  pythonPath
  transcodeInputArgs
  transcodeOutputArgs
  liveTranscodeInputArgs
  liveTranscodeOutputArgs
  drawFunscriptHeatmapRange
  scraperPackageSources {
    name
    url
    local_path
  }
  pluginPackageSources {
    name
    url
    local_path
  }
}
    `;
const ConfigInterfaceDataFragmentDoc = gql`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  sfwContentMode
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  javascript
  javascriptEnabled
  customLocales
  customLocalesEnabled
  disableCustomizations
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
    scrollAttemptsBeforeChange
    disableAnimation
  }
  disableDropdownCreate {
    performer
    tag
    studio
    movie
    gallery
  }
  handyKey
  funscriptOffset
  useStashHostedFunscript
}
    `;
const ConfigDlnaDataFragmentDoc = gql`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  port
  whitelistedIPs
  interfaces
  videoSortOrder
}
    `;
const ConfigScrapingDataFragmentDoc = gql`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `;
const ScraperSourceDataFragmentDoc = gql`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `;
const IdentifyFieldOptionsDataFragmentDoc = gql`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `;
const IdentifyMetadataOptionsDataFragmentDoc = gql`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  performerGenders
  skipMultipleMatches
  skipMultipleMatchTag
  skipSingleNamePerformers
  skipSingleNamePerformerTag
}
    ${IdentifyFieldOptionsDataFragmentDoc}`;
const ConfigDefaultSettingsDataFragmentDoc = gql`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    scanGenerateCovers
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
    scanGenerateClipPreviews
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    covers
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
    clipPreviews
    imageThumbnails
  }
  deleteFile
  deleteGenerated
}
    ${ScraperSourceDataFragmentDoc}
${IdentifyMetadataOptionsDataFragmentDoc}`;
const ConfigDataFragmentDoc = gql`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
  ui
  plugins
}
    ${ConfigGeneralDataFragmentDoc}
${ConfigInterfaceDataFragmentDoc}
${ConfigDlnaDataFragmentDoc}
${ConfigScrapingDataFragmentDoc}
${ConfigDefaultSettingsDataFragmentDoc}`;
const ImageFileDataFragmentDoc = gql`
    fragment ImageFileData on ImageFile {
  id
  path
  size
  mod_time
  width
  height
  fingerprints {
    type
    value
  }
}
    `;
const SelectFolderDataFragmentDoc = gql`
    fragment SelectFolderData on Folder {
  id
  path
  basename
}
    `;
const RecursiveFolderDataFragmentDoc = gql`
    fragment RecursiveFolderData on Folder {
  ...SelectFolderData
  parent_folders {
    ...SelectFolderData
  }
}
    ${SelectFolderDataFragmentDoc}`;
const SavedFilterDataFragmentDoc = gql`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  find_filter {
    q
    page
    per_page
    sort
    direction
  }
  object_filter
  ui_options
}
    `;
const SelectGalleryDataFragmentDoc = gql`
    fragment SelectGalleryData on Gallery {
  id
  title
  date
  code
  studio {
    name
  }
  cover {
    paths {
      thumbnail
    }
  }
  paths {
    preview
  }
  files {
    path
  }
  folder {
    path
  }
}
    `;
const SelectGroupDataFragmentDoc = gql`
    fragment SelectGroupData on Group {
  id
  name
  aliases
  date
  studio {
    name
  }
  front_image_path
}
    `;
const SlimStudioDataFragmentDoc = gql`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  parent_studio {
    id
  }
  details
  rating100
  aliases
  tags {
    id
    name
  }
  favorite
  ignore_auto_tag
  organized
  o_counter
}
    `;
const SlimTagDataFragmentDoc = gql`
    fragment SlimTagData on Tag {
  id
  name
  sort_name
  aliases
  image_path
  parent_count
  child_count
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    `;
const SlimGroupDataFragmentDoc = gql`
    fragment SlimGroupData on Group {
  id
  name
  front_image_path
  rating100
}
    `;
const ListGroupDataFragmentDoc = gql`
    fragment ListGroupData on Group {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  containing_groups {
    group {
      ...SlimGroupData
    }
    description
  }
  synopsis
  urls
  front_image_path
  back_image_path
  scene_count
  performer_count
  sub_group_count
  o_counter
  scenes {
    id
    title
  }
}
    ${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${SlimGroupDataFragmentDoc}`;
const VisualFileDataFragmentDoc = gql`
    fragment VisualFileData on VisualFile {
  ... on BaseFile {
    id
    path
    size
    mod_time
    fingerprints {
      type
      value
    }
  }
  ... on ImageFile {
    id
    path
    size
    mod_time
    width
    height
    fingerprints {
      type
      value
    }
  }
  ... on VideoFile {
    id
    path
    size
    mod_time
    duration
    video_codec
    audio_codec
    width
    height
    frame_rate
    bit_rate
    fingerprints {
      type
      value
    }
  }
}
    `;
const SlimImageDataFragmentDoc = gql`
    fragment SlimImageData on Image {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  o_counter
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    id
    title
    files {
      path
    }
    folder {
      path
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  visual_files {
    ...VisualFileData
  }
}
    ${VisualFileDataFragmentDoc}`;
const GalleryFileDataFragmentDoc = gql`
    fragment GalleryFileData on GalleryFile {
  id
  path
  size
  mod_time
  fingerprints {
    type
    value
  }
}
    `;
const FolderDataFragmentDoc = gql`
    fragment FolderData on Folder {
  id
  basename
  path
}
    `;
const GalleryChapterDataFragmentDoc = gql`
    fragment GalleryChapterData on GalleryChapter {
  id
  title
  image_index
  gallery {
    id
  }
}
    `;
const PerformerDataFragmentDoc = gql`
    fragment PerformerData on Performer {
  id
  name
  disambiguation
  urls
  gender
  birthdate
  ethnicity
  country
  eye_color
  height_cm
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  alias_list
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  group_count
  performer_count
  o_counter
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  rating100
  details
  death_date
  hair_color
  weight
  custom_fields
}
    ${SlimTagDataFragmentDoc}`;
const VideoFileDataFragmentDoc = gql`
    fragment VideoFileData on VideoFile {
  id
  path
  size
  mod_time
  duration
  video_codec
  audio_codec
  width
  height
  frame_rate
  bit_rate
  fingerprints {
    type
    value
  }
}
    `;
const SlimSceneDataFragmentDoc = gql`
    fragment SlimSceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  resume_time
  play_duration
  play_count
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    id
    title
    seconds
    primary_tag {
      id
      name
    }
  }
  galleries {
    id
    files {
      path
    }
    folder {
      path
    }
    title
  }
  studio {
    id
    name
    image_path
  }
  groups {
    group {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    disambiguation
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    ${VideoFileDataFragmentDoc}`;
const GalleryDataFragmentDoc = gql`
    fragment GalleryData on Gallery {
  id
  created_at
  updated_at
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  paths {
    cover
    preview
  }
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  chapters {
    ...GalleryChapterData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
  custom_fields
}
    ${GalleryFileDataFragmentDoc}
${FolderDataFragmentDoc}
${GalleryChapterDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}
${SlimSceneDataFragmentDoc}`;
const ImageDataFragmentDoc = gql`
    fragment ImageData on Image {
  id
  title
  code
  rating100
  date
  urls
  details
  photographer
  organized
  o_counter
  created_at
  updated_at
  paths {
    thumbnail
    preview
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  visual_files {
    ...VisualFileData
  }
  custom_fields
}
    ${GalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}
${VisualFileDataFragmentDoc}`;
const JobDataFragmentDoc = gql`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
  error
}
    `;
const LogEntryDataFragmentDoc = gql`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `;
const PackageDataFragmentDoc = gql`
    fragment PackageData on Package {
  package_id
  name
  version
  date
  metadata
  sourceURL
}
    `;
const SlimPerformerDataFragmentDoc = gql`
    fragment SlimPerformerData on Performer {
  id
  name
  disambiguation
  gender
  urls
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height_cm
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  alias_list
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  rating100
  death_date
  weight
}
    `;
const SelectPerformerDataFragmentDoc = gql`
    fragment SelectPerformerData on Performer {
  id
  name
  disambiguation
  alias_list
  image_path
  birthdate
  death_date
}
    `;
const SceneMarkerSceneDataFragmentDoc = gql`
    fragment SceneMarkerSceneData on Scene {
  id
  title
  files {
    width
    height
    path
  }
  performers {
    id
    name
    image_path
  }
}
    `;
const SceneMarkerDataFragmentDoc = gql`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  end_seconds
  stream
  preview
  screenshot
  scene {
    ...SceneMarkerSceneData
  }
  primary_tag {
    id
    name
  }
  tags {
    id
    name
  }
}
    ${SceneMarkerSceneDataFragmentDoc}`;
const SlimGalleryDataFragmentDoc = gql`
    fragment SlimGalleryData on Gallery {
  id
  title
  code
  date
  urls
  details
  photographer
  rating100
  organized
  files {
    ...GalleryFileData
  }
  folder {
    ...FolderData
  }
  image_count
  chapters {
    id
    title
    image_index
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    ...SlimSceneData
  }
  paths {
    cover
    preview
  }
}
    ${GalleryFileDataFragmentDoc}
${FolderDataFragmentDoc}
${SlimSceneDataFragmentDoc}`;
const GroupDataFragmentDoc = gql`
    fragment GroupData on Group {
  id
  name
  aliases
  duration
  date
  rating100
  director
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  containing_groups {
    group {
      ...SlimGroupData
    }
    description
  }
  synopsis
  urls
  front_image_path
  back_image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  sub_group_count
  sub_group_count_all: sub_group_count(depth: -1)
  o_counter
  scenes {
    id
    title
  }
  custom_fields
}
    ${SlimStudioDataFragmentDoc}
${SlimTagDataFragmentDoc}
${SlimGroupDataFragmentDoc}`;
const SceneDataFragmentDoc = gql`
    fragment SceneData on Scene {
  id
  title
  code
  details
  director
  urls
  date
  rating100
  o_counter
  organized
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  created_at
  updated_at
  resume_time
  last_played_at
  play_duration
  play_count
  play_history
  o_history
  files {
    ...VideoFileData
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  groups {
    group {
      ...GroupData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  sceneStreams {
    url
    mime_type
    label
  }
  custom_fields
}
    ${VideoFileDataFragmentDoc}
${SceneMarkerDataFragmentDoc}
${SlimGalleryDataFragmentDoc}
${SlimStudioDataFragmentDoc}
${GroupDataFragmentDoc}
${SlimTagDataFragmentDoc}
${PerformerDataFragmentDoc}`;
const SelectSceneDataFragmentDoc = gql`
    fragment SelectSceneData on Scene {
  id
  title
  date
  code
  studio {
    name
  }
  files {
    path
  }
  paths {
    screenshot
  }
}
    `;
const ScrapedSceneTagDataFragmentDoc = gql`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
  description
  alias_list
  parent {
    stored_id
    name
    description
  }
  remote_site_id
}
    `;
const ScrapedStudioDataFragmentDoc = gql`
    fragment ScrapedStudioData on ScrapedStudio {
  stored_id
  name
  urls
  parent {
    stored_id
    name
    urls
    image
    details
    aliases
    tags {
      ...ScrapedSceneTagData
    }
    remote_site_id
  }
  image
  details
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
}
    ${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedPerformerDataFragmentDoc = gql`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedGroupStudioDataFragmentDoc = gql`
    fragment ScrapedGroupStudioData on ScrapedStudio {
  stored_id
  name
  urls
}
    `;
const ScrapedGroupDataFragmentDoc = gql`
    fragment ScrapedGroupData on ScrapedGroup {
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${ScrapedGroupStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedSceneStudioDataFragmentDoc = gql`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  urls
  parent {
    stored_id
    name
    urls
    image
    details
    aliases
    tags {
      ...ScrapedSceneTagData
    }
    remote_site_id
  }
  image
  details
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
}
    ${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedScenePerformerDataFragmentDoc = gql`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  disambiguation
  gender
  urls
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  penis_length
  circumcised
  career_start
  career_end
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedSceneGroupDataFragmentDoc = gql`
    fragment ScrapedSceneGroupData on ScrapedGroup {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  urls
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedGroupStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
}
    ${ScrapedGroupStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}`;
const ScrapedSceneDataFragmentDoc = gql`
    fragment ScrapedSceneData on ScrapedScene {
  title
  code
  details
  director
  urls
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
  fingerprints {
    hash
    algorithm
    duration
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneGroupDataFragmentDoc}`;
const ScrapedGalleryDataFragmentDoc = gql`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  code
  details
  urls
  photographer
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}`;
const ScrapedImageDataFragmentDoc = gql`
    fragment ScrapedImageData on ScrapedImage {
  title
  code
  details
  photographer
  urls
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}`;
const ScrapedStashBoxSceneDataFragmentDoc = gql`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  code
  details
  director
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  groups {
    ...ScrapedSceneGroupData
  }
}
    ${ScrapedSceneStudioDataFragmentDoc}
${ScrapedSceneTagDataFragmentDoc}
${ScrapedScenePerformerDataFragmentDoc}
${ScrapedSceneGroupDataFragmentDoc}`;
const ScrapedStashBoxPerformerDataFragmentDoc = gql`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${ScrapedScenePerformerDataFragmentDoc}`;
const StudioDataFragmentDoc = gql`
    fragment StudioData on Studio {
  id
  name
  url
  urls
  parent_studio {
    id
    name
    url
    urls
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  organized
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  stash_ids {
    stash_id
    endpoint
    updated_at
  }
  details
  rating100
  favorite
  aliases
  tags {
    ...SlimTagData
  }
  o_counter
  custom_fields
}
    ${SlimTagDataFragmentDoc}`;
const SelectStudioDataFragmentDoc = gql`
    fragment SelectStudioData on Studio {
  id
  name
  aliases
  details
  image_path
  parent_studio {
    id
    name
  }
}
    `;
const TagDataFragmentDoc = gql`
    fragment TagData on Tag {
  id
  name
  sort_name
  description
  aliases
  ignore_auto_tag
  favorite
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  image_path
  scene_count
  scene_count_all: scene_count(depth: -1)
  scene_marker_count
  scene_marker_count_all: scene_marker_count(depth: -1)
  image_count
  image_count_all: image_count(depth: -1)
  gallery_count
  gallery_count_all: gallery_count(depth: -1)
  performer_count
  performer_count_all: performer_count(depth: -1)
  studio_count
  studio_count_all: studio_count(depth: -1)
  group_count
  group_count_all: group_count(depth: -1)
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
  custom_fields
}
    ${SlimTagDataFragmentDoc}`;
const SelectTagDataFragmentDoc = gql`
    fragment SelectTagData on Tag {
  id
  name
  sort_name
  favorite
  description
  aliases
  image_path
  parents {
    id
    name
    sort_name
  }
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
}
    `;
const TagListDataFragmentDoc = gql`
    fragment TagListData on Tag {
  id
  name
  sort_name
  description
  aliases
  ignore_auto_tag
  favorite
  stash_ids {
    endpoint
    stash_id
    updated_at
  }
  image_path
  scene_count
  scene_marker_count
  image_count
  gallery_count
  performer_count
  studio_count
  group_count
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${SlimTagDataFragmentDoc}`;
const SetupDocument = gql`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;
type SetupMutationFn = Apollo.MutationFunction<SetupMutation, SetupMutationVariables>;

/**
 * __useSetupMutation__
 *
 * To run a mutation, you first call `useSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setupMutation, { data, loading, error }] = useSetupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSetupMutation(baseOptions?: Apollo.MutationHookOptions<SetupMutation, SetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetupMutation, SetupMutationVariables>(SetupDocument, options);
      }
type SetupMutationHookResult = ReturnType<typeof useSetupMutation>;
type SetupMutationResult = Apollo.MutationResult<SetupMutation>;
type SetupMutationOptions = Apollo.BaseMutationOptions<SetupMutation, SetupMutationVariables>;
const MigrateDocument = gql`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;
type MigrateMutationFn = Apollo.MutationFunction<MigrateMutation, MigrateMutationVariables>;

/**
 * __useMigrateMutation__
 *
 * To run a mutation, you first call `useMigrateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateMutation, { data, loading, error }] = useMigrateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMigrateMutation(baseOptions?: Apollo.MutationHookOptions<MigrateMutation, MigrateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateMutation, MigrateMutationVariables>(MigrateDocument, options);
      }
type MigrateMutationHookResult = ReturnType<typeof useMigrateMutation>;
type MigrateMutationResult = Apollo.MutationResult<MigrateMutation>;
type MigrateMutationOptions = Apollo.BaseMutationOptions<MigrateMutation, MigrateMutationVariables>;
const DownloadFfMpegDocument = gql`
    mutation DownloadFFMpeg {
  downloadFFMpeg
}
    `;
type DownloadFfMpegMutationFn = Apollo.MutationFunction<DownloadFfMpegMutation, DownloadFfMpegMutationVariables>;

/**
 * __useDownloadFfMpegMutation__
 *
 * To run a mutation, you first call `useDownloadFfMpegMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDownloadFfMpegMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [downloadFfMpegMutation, { data, loading, error }] = useDownloadFfMpegMutation({
 *   variables: {
 *   },
 * });
 */
function useDownloadFfMpegMutation(baseOptions?: Apollo.MutationHookOptions<DownloadFfMpegMutation, DownloadFfMpegMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DownloadFfMpegMutation, DownloadFfMpegMutationVariables>(DownloadFfMpegDocument, options);
      }
type DownloadFfMpegMutationHookResult = ReturnType<typeof useDownloadFfMpegMutation>;
type DownloadFfMpegMutationResult = Apollo.MutationResult<DownloadFfMpegMutation>;
type DownloadFfMpegMutationOptions = Apollo.BaseMutationOptions<DownloadFfMpegMutation, DownloadFfMpegMutationVariables>;
const ConfigureGeneralDocument = gql`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${ConfigGeneralDataFragmentDoc}`;
type ConfigureGeneralMutationFn = Apollo.MutationFunction<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>;

/**
 * __useConfigureGeneralMutation__
 *
 * To run a mutation, you first call `useConfigureGeneralMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureGeneralMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureGeneralMutation, { data, loading, error }] = useConfigureGeneralMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigureGeneralMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>(ConfigureGeneralDocument, options);
      }
type ConfigureGeneralMutationHookResult = ReturnType<typeof useConfigureGeneralMutation>;
type ConfigureGeneralMutationResult = Apollo.MutationResult<ConfigureGeneralMutation>;
type ConfigureGeneralMutationOptions = Apollo.BaseMutationOptions<ConfigureGeneralMutation, ConfigureGeneralMutationVariables>;
const ConfigureInterfaceDocument = gql`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${ConfigInterfaceDataFragmentDoc}`;
type ConfigureInterfaceMutationFn = Apollo.MutationFunction<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>;

/**
 * __useConfigureInterfaceMutation__
 *
 * To run a mutation, you first call `useConfigureInterfaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureInterfaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureInterfaceMutation, { data, loading, error }] = useConfigureInterfaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigureInterfaceMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>(ConfigureInterfaceDocument, options);
      }
type ConfigureInterfaceMutationHookResult = ReturnType<typeof useConfigureInterfaceMutation>;
type ConfigureInterfaceMutationResult = Apollo.MutationResult<ConfigureInterfaceMutation>;
type ConfigureInterfaceMutationOptions = Apollo.BaseMutationOptions<ConfigureInterfaceMutation, ConfigureInterfaceMutationVariables>;
const ConfigureDlnaDocument = gql`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${ConfigDlnaDataFragmentDoc}`;
type ConfigureDlnaMutationFn = Apollo.MutationFunction<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>;

/**
 * __useConfigureDlnaMutation__
 *
 * To run a mutation, you first call `useConfigureDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureDlnaMutation, { data, loading, error }] = useConfigureDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigureDlnaMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>(ConfigureDlnaDocument, options);
      }
type ConfigureDlnaMutationHookResult = ReturnType<typeof useConfigureDlnaMutation>;
type ConfigureDlnaMutationResult = Apollo.MutationResult<ConfigureDlnaMutation>;
type ConfigureDlnaMutationOptions = Apollo.BaseMutationOptions<ConfigureDlnaMutation, ConfigureDlnaMutationVariables>;
const ConfigureScrapingDocument = gql`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${ConfigScrapingDataFragmentDoc}`;
type ConfigureScrapingMutationFn = Apollo.MutationFunction<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>;

/**
 * __useConfigureScrapingMutation__
 *
 * To run a mutation, you first call `useConfigureScrapingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureScrapingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureScrapingMutation, { data, loading, error }] = useConfigureScrapingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigureScrapingMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>(ConfigureScrapingDocument, options);
      }
type ConfigureScrapingMutationHookResult = ReturnType<typeof useConfigureScrapingMutation>;
type ConfigureScrapingMutationResult = Apollo.MutationResult<ConfigureScrapingMutation>;
type ConfigureScrapingMutationOptions = Apollo.BaseMutationOptions<ConfigureScrapingMutation, ConfigureScrapingMutationVariables>;
const ConfigureDefaultsDocument = gql`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${ConfigDefaultSettingsDataFragmentDoc}`;
type ConfigureDefaultsMutationFn = Apollo.MutationFunction<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>;

/**
 * __useConfigureDefaultsMutation__
 *
 * To run a mutation, you first call `useConfigureDefaultsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureDefaultsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureDefaultsMutation, { data, loading, error }] = useConfigureDefaultsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigureDefaultsMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>(ConfigureDefaultsDocument, options);
      }
type ConfigureDefaultsMutationHookResult = ReturnType<typeof useConfigureDefaultsMutation>;
type ConfigureDefaultsMutationResult = Apollo.MutationResult<ConfigureDefaultsMutation>;
type ConfigureDefaultsMutationOptions = Apollo.BaseMutationOptions<ConfigureDefaultsMutation, ConfigureDefaultsMutationVariables>;
const ConfigureUiDocument = gql`
    mutation ConfigureUI($input: Map, $partial: Map) {
  configureUI(input: $input, partial: $partial)
}
    `;
type ConfigureUiMutationFn = Apollo.MutationFunction<ConfigureUiMutation, ConfigureUiMutationVariables>;

/**
 * __useConfigureUiMutation__
 *
 * To run a mutation, you first call `useConfigureUiMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureUiMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureUiMutation, { data, loading, error }] = useConfigureUiMutation({
 *   variables: {
 *      input: // value for 'input'
 *      partial: // value for 'partial'
 *   },
 * });
 */
function useConfigureUiMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureUiMutation, ConfigureUiMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureUiMutation, ConfigureUiMutationVariables>(ConfigureUiDocument, options);
      }
type ConfigureUiMutationHookResult = ReturnType<typeof useConfigureUiMutation>;
type ConfigureUiMutationResult = Apollo.MutationResult<ConfigureUiMutation>;
type ConfigureUiMutationOptions = Apollo.BaseMutationOptions<ConfigureUiMutation, ConfigureUiMutationVariables>;
const ConfigureUiSettingDocument = gql`
    mutation ConfigureUISetting($key: String!, $value: Any) {
  configureUISetting(key: $key, value: $value)
}
    `;
type ConfigureUiSettingMutationFn = Apollo.MutationFunction<ConfigureUiSettingMutation, ConfigureUiSettingMutationVariables>;

/**
 * __useConfigureUiSettingMutation__
 *
 * To run a mutation, you first call `useConfigureUiSettingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigureUiSettingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configureUiSettingMutation, { data, loading, error }] = useConfigureUiSettingMutation({
 *   variables: {
 *      key: // value for 'key'
 *      value: // value for 'value'
 *   },
 * });
 */
function useConfigureUiSettingMutation(baseOptions?: Apollo.MutationHookOptions<ConfigureUiSettingMutation, ConfigureUiSettingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigureUiSettingMutation, ConfigureUiSettingMutationVariables>(ConfigureUiSettingDocument, options);
      }
type ConfigureUiSettingMutationHookResult = ReturnType<typeof useConfigureUiSettingMutation>;
type ConfigureUiSettingMutationResult = Apollo.MutationResult<ConfigureUiSettingMutation>;
type ConfigureUiSettingMutationOptions = Apollo.BaseMutationOptions<ConfigureUiSettingMutation, ConfigureUiSettingMutationVariables>;
const GenerateApiKeyDocument = gql`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;
type GenerateApiKeyMutationFn = Apollo.MutationFunction<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>;

/**
 * __useGenerateApiKeyMutation__
 *
 * To run a mutation, you first call `useGenerateApiKeyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateApiKeyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateApiKeyMutation, { data, loading, error }] = useGenerateApiKeyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGenerateApiKeyMutation(baseOptions?: Apollo.MutationHookOptions<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>(GenerateApiKeyDocument, options);
      }
type GenerateApiKeyMutationHookResult = ReturnType<typeof useGenerateApiKeyMutation>;
type GenerateApiKeyMutationResult = Apollo.MutationResult<GenerateApiKeyMutation>;
type GenerateApiKeyMutationOptions = Apollo.BaseMutationOptions<GenerateApiKeyMutation, GenerateApiKeyMutationVariables>;
const EnableDlnaDocument = gql`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;
type EnableDlnaMutationFn = Apollo.MutationFunction<EnableDlnaMutation, EnableDlnaMutationVariables>;

/**
 * __useEnableDlnaMutation__
 *
 * To run a mutation, you first call `useEnableDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEnableDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [enableDlnaMutation, { data, loading, error }] = useEnableDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useEnableDlnaMutation(baseOptions?: Apollo.MutationHookOptions<EnableDlnaMutation, EnableDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EnableDlnaMutation, EnableDlnaMutationVariables>(EnableDlnaDocument, options);
      }
type EnableDlnaMutationHookResult = ReturnType<typeof useEnableDlnaMutation>;
type EnableDlnaMutationResult = Apollo.MutationResult<EnableDlnaMutation>;
type EnableDlnaMutationOptions = Apollo.BaseMutationOptions<EnableDlnaMutation, EnableDlnaMutationVariables>;
const DisableDlnaDocument = gql`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;
type DisableDlnaMutationFn = Apollo.MutationFunction<DisableDlnaMutation, DisableDlnaMutationVariables>;

/**
 * __useDisableDlnaMutation__
 *
 * To run a mutation, you first call `useDisableDlnaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDisableDlnaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [disableDlnaMutation, { data, loading, error }] = useDisableDlnaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useDisableDlnaMutation(baseOptions?: Apollo.MutationHookOptions<DisableDlnaMutation, DisableDlnaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DisableDlnaMutation, DisableDlnaMutationVariables>(DisableDlnaDocument, options);
      }
type DisableDlnaMutationHookResult = ReturnType<typeof useDisableDlnaMutation>;
type DisableDlnaMutationResult = Apollo.MutationResult<DisableDlnaMutation>;
type DisableDlnaMutationOptions = Apollo.BaseMutationOptions<DisableDlnaMutation, DisableDlnaMutationVariables>;
const AddTempDlnaipDocument = gql`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;
type AddTempDlnaipMutationFn = Apollo.MutationFunction<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>;

/**
 * __useAddTempDlnaipMutation__
 *
 * To run a mutation, you first call `useAddTempDlnaipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTempDlnaipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTempDlnaipMutation, { data, loading, error }] = useAddTempDlnaipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useAddTempDlnaipMutation(baseOptions?: Apollo.MutationHookOptions<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>(AddTempDlnaipDocument, options);
      }
type AddTempDlnaipMutationHookResult = ReturnType<typeof useAddTempDlnaipMutation>;
type AddTempDlnaipMutationResult = Apollo.MutationResult<AddTempDlnaipMutation>;
type AddTempDlnaipMutationOptions = Apollo.BaseMutationOptions<AddTempDlnaipMutation, AddTempDlnaipMutationVariables>;
const RemoveTempDlnaipDocument = gql`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;
type RemoveTempDlnaipMutationFn = Apollo.MutationFunction<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>;

/**
 * __useRemoveTempDlnaipMutation__
 *
 * To run a mutation, you first call `useRemoveTempDlnaipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTempDlnaipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTempDlnaipMutation, { data, loading, error }] = useRemoveTempDlnaipMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useRemoveTempDlnaipMutation(baseOptions?: Apollo.MutationHookOptions<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>(RemoveTempDlnaipDocument, options);
      }
type RemoveTempDlnaipMutationHookResult = ReturnType<typeof useRemoveTempDlnaipMutation>;
type RemoveTempDlnaipMutationResult = Apollo.MutationResult<RemoveTempDlnaipMutation>;
type RemoveTempDlnaipMutationOptions = Apollo.BaseMutationOptions<RemoveTempDlnaipMutation, RemoveTempDlnaipMutationVariables>;
const DeleteFilesDocument = gql`
    mutation DeleteFiles($ids: [ID!]!) {
  deleteFiles(ids: $ids)
}
    `;
type DeleteFilesMutationFn = Apollo.MutationFunction<DeleteFilesMutation, DeleteFilesMutationVariables>;

/**
 * __useDeleteFilesMutation__
 *
 * To run a mutation, you first call `useDeleteFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFilesMutation, { data, loading, error }] = useDeleteFilesMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useDeleteFilesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFilesMutation, DeleteFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFilesMutation, DeleteFilesMutationVariables>(DeleteFilesDocument, options);
      }
type DeleteFilesMutationHookResult = ReturnType<typeof useDeleteFilesMutation>;
type DeleteFilesMutationResult = Apollo.MutationResult<DeleteFilesMutation>;
type DeleteFilesMutationOptions = Apollo.BaseMutationOptions<DeleteFilesMutation, DeleteFilesMutationVariables>;
const RevealFileInFileManagerDocument = gql`
    mutation RevealFileInFileManager($id: ID!) {
  revealFileInFileManager(id: $id)
}
    `;
type RevealFileInFileManagerMutationFn = Apollo.MutationFunction<RevealFileInFileManagerMutation, RevealFileInFileManagerMutationVariables>;

/**
 * __useRevealFileInFileManagerMutation__
 *
 * To run a mutation, you first call `useRevealFileInFileManagerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevealFileInFileManagerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revealFileInFileManagerMutation, { data, loading, error }] = useRevealFileInFileManagerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useRevealFileInFileManagerMutation(baseOptions?: Apollo.MutationHookOptions<RevealFileInFileManagerMutation, RevealFileInFileManagerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevealFileInFileManagerMutation, RevealFileInFileManagerMutationVariables>(RevealFileInFileManagerDocument, options);
      }
type RevealFileInFileManagerMutationHookResult = ReturnType<typeof useRevealFileInFileManagerMutation>;
type RevealFileInFileManagerMutationResult = Apollo.MutationResult<RevealFileInFileManagerMutation>;
type RevealFileInFileManagerMutationOptions = Apollo.BaseMutationOptions<RevealFileInFileManagerMutation, RevealFileInFileManagerMutationVariables>;
const RevealFolderInFileManagerDocument = gql`
    mutation RevealFolderInFileManager($id: ID!) {
  revealFolderInFileManager(id: $id)
}
    `;
type RevealFolderInFileManagerMutationFn = Apollo.MutationFunction<RevealFolderInFileManagerMutation, RevealFolderInFileManagerMutationVariables>;

/**
 * __useRevealFolderInFileManagerMutation__
 *
 * To run a mutation, you first call `useRevealFolderInFileManagerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRevealFolderInFileManagerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [revealFolderInFileManagerMutation, { data, loading, error }] = useRevealFolderInFileManagerMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useRevealFolderInFileManagerMutation(baseOptions?: Apollo.MutationHookOptions<RevealFolderInFileManagerMutation, RevealFolderInFileManagerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RevealFolderInFileManagerMutation, RevealFolderInFileManagerMutationVariables>(RevealFolderInFileManagerDocument, options);
      }
type RevealFolderInFileManagerMutationHookResult = ReturnType<typeof useRevealFolderInFileManagerMutation>;
type RevealFolderInFileManagerMutationResult = Apollo.MutationResult<RevealFolderInFileManagerMutation>;
type RevealFolderInFileManagerMutationOptions = Apollo.BaseMutationOptions<RevealFolderInFileManagerMutation, RevealFolderInFileManagerMutationVariables>;
const SaveFilterDocument = gql`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;
type SaveFilterMutationFn = Apollo.MutationFunction<SaveFilterMutation, SaveFilterMutationVariables>;

/**
 * __useSaveFilterMutation__
 *
 * To run a mutation, you first call `useSaveFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFilterMutation, { data, loading, error }] = useSaveFilterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSaveFilterMutation(baseOptions?: Apollo.MutationHookOptions<SaveFilterMutation, SaveFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveFilterMutation, SaveFilterMutationVariables>(SaveFilterDocument, options);
      }
type SaveFilterMutationHookResult = ReturnType<typeof useSaveFilterMutation>;
type SaveFilterMutationResult = Apollo.MutationResult<SaveFilterMutation>;
type SaveFilterMutationOptions = Apollo.BaseMutationOptions<SaveFilterMutation, SaveFilterMutationVariables>;
const DestroySavedFilterDocument = gql`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;
type DestroySavedFilterMutationFn = Apollo.MutationFunction<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>;

/**
 * __useDestroySavedFilterMutation__
 *
 * To run a mutation, you first call `useDestroySavedFilterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDestroySavedFilterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [destroySavedFilterMutation, { data, loading, error }] = useDestroySavedFilterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useDestroySavedFilterMutation(baseOptions?: Apollo.MutationHookOptions<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>(DestroySavedFilterDocument, options);
      }
type DestroySavedFilterMutationHookResult = ReturnType<typeof useDestroySavedFilterMutation>;
type DestroySavedFilterMutationResult = Apollo.MutationResult<DestroySavedFilterMutation>;
type DestroySavedFilterMutationOptions = Apollo.BaseMutationOptions<DestroySavedFilterMutation, DestroySavedFilterMutationVariables>;
const GalleryChapterCreateDocument = gql`
    mutation GalleryChapterCreate($title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterCreate(
    input: {title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${GalleryChapterDataFragmentDoc}`;
type GalleryChapterCreateMutationFn = Apollo.MutationFunction<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>;

/**
 * __useGalleryChapterCreateMutation__
 *
 * To run a mutation, you first call `useGalleryChapterCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterCreateMutation, { data, loading, error }] = useGalleryChapterCreateMutation({
 *   variables: {
 *      title: // value for 'title'
 *      image_index: // value for 'image_index'
 *      gallery_id: // value for 'gallery_id'
 *   },
 * });
 */
function useGalleryChapterCreateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>(GalleryChapterCreateDocument, options);
      }
type GalleryChapterCreateMutationHookResult = ReturnType<typeof useGalleryChapterCreateMutation>;
type GalleryChapterCreateMutationResult = Apollo.MutationResult<GalleryChapterCreateMutation>;
type GalleryChapterCreateMutationOptions = Apollo.BaseMutationOptions<GalleryChapterCreateMutation, GalleryChapterCreateMutationVariables>;
const GalleryChapterUpdateDocument = gql`
    mutation GalleryChapterUpdate($id: ID!, $title: String!, $image_index: Int!, $gallery_id: ID!) {
  galleryChapterUpdate(
    input: {id: $id, title: $title, image_index: $image_index, gallery_id: $gallery_id}
  ) {
    ...GalleryChapterData
  }
}
    ${GalleryChapterDataFragmentDoc}`;
type GalleryChapterUpdateMutationFn = Apollo.MutationFunction<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>;

/**
 * __useGalleryChapterUpdateMutation__
 *
 * To run a mutation, you first call `useGalleryChapterUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterUpdateMutation, { data, loading, error }] = useGalleryChapterUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      image_index: // value for 'image_index'
 *      gallery_id: // value for 'gallery_id'
 *   },
 * });
 */
function useGalleryChapterUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>(GalleryChapterUpdateDocument, options);
      }
type GalleryChapterUpdateMutationHookResult = ReturnType<typeof useGalleryChapterUpdateMutation>;
type GalleryChapterUpdateMutationResult = Apollo.MutationResult<GalleryChapterUpdateMutation>;
type GalleryChapterUpdateMutationOptions = Apollo.BaseMutationOptions<GalleryChapterUpdateMutation, GalleryChapterUpdateMutationVariables>;
const GalleryChapterDestroyDocument = gql`
    mutation GalleryChapterDestroy($id: ID!) {
  galleryChapterDestroy(id: $id)
}
    `;
type GalleryChapterDestroyMutationFn = Apollo.MutationFunction<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>;

/**
 * __useGalleryChapterDestroyMutation__
 *
 * To run a mutation, you first call `useGalleryChapterDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryChapterDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryChapterDestroyMutation, { data, loading, error }] = useGalleryChapterDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGalleryChapterDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>(GalleryChapterDestroyDocument, options);
      }
type GalleryChapterDestroyMutationHookResult = ReturnType<typeof useGalleryChapterDestroyMutation>;
type GalleryChapterDestroyMutationResult = Apollo.MutationResult<GalleryChapterDestroyMutation>;
type GalleryChapterDestroyMutationOptions = Apollo.BaseMutationOptions<GalleryChapterDestroyMutation, GalleryChapterDestroyMutationVariables>;
const GalleryCreateDocument = gql`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
type GalleryCreateMutationFn = Apollo.MutationFunction<GalleryCreateMutation, GalleryCreateMutationVariables>;

/**
 * __useGalleryCreateMutation__
 *
 * To run a mutation, you first call `useGalleryCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryCreateMutation, { data, loading, error }] = useGalleryCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGalleryCreateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryCreateMutation, GalleryCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryCreateMutation, GalleryCreateMutationVariables>(GalleryCreateDocument, options);
      }
type GalleryCreateMutationHookResult = ReturnType<typeof useGalleryCreateMutation>;
type GalleryCreateMutationResult = Apollo.MutationResult<GalleryCreateMutation>;
type GalleryCreateMutationOptions = Apollo.BaseMutationOptions<GalleryCreateMutation, GalleryCreateMutationVariables>;
const GalleryUpdateDocument = gql`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
type GalleryUpdateMutationFn = Apollo.MutationFunction<GalleryUpdateMutation, GalleryUpdateMutationVariables>;

/**
 * __useGalleryUpdateMutation__
 *
 * To run a mutation, you first call `useGalleryUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryUpdateMutation, { data, loading, error }] = useGalleryUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGalleryUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleryUpdateMutation, GalleryUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryUpdateMutation, GalleryUpdateMutationVariables>(GalleryUpdateDocument, options);
      }
type GalleryUpdateMutationHookResult = ReturnType<typeof useGalleryUpdateMutation>;
type GalleryUpdateMutationResult = Apollo.MutationResult<GalleryUpdateMutation>;
type GalleryUpdateMutationOptions = Apollo.BaseMutationOptions<GalleryUpdateMutation, GalleryUpdateMutationVariables>;
const BulkGalleryUpdateDocument = gql`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
type BulkGalleryUpdateMutationFn = Apollo.MutationFunction<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>;

/**
 * __useBulkGalleryUpdateMutation__
 *
 * To run a mutation, you first call `useBulkGalleryUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkGalleryUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkGalleryUpdateMutation, { data, loading, error }] = useBulkGalleryUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkGalleryUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>(BulkGalleryUpdateDocument, options);
      }
type BulkGalleryUpdateMutationHookResult = ReturnType<typeof useBulkGalleryUpdateMutation>;
type BulkGalleryUpdateMutationResult = Apollo.MutationResult<BulkGalleryUpdateMutation>;
type BulkGalleryUpdateMutationOptions = Apollo.BaseMutationOptions<BulkGalleryUpdateMutation, BulkGalleryUpdateMutationVariables>;
const GalleriesUpdateDocument = gql`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;
type GalleriesUpdateMutationFn = Apollo.MutationFunction<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>;

/**
 * __useGalleriesUpdateMutation__
 *
 * To run a mutation, you first call `useGalleriesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleriesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleriesUpdateMutation, { data, loading, error }] = useGalleriesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGalleriesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>(GalleriesUpdateDocument, options);
      }
type GalleriesUpdateMutationHookResult = ReturnType<typeof useGalleriesUpdateMutation>;
type GalleriesUpdateMutationResult = Apollo.MutationResult<GalleriesUpdateMutation>;
type GalleriesUpdateMutationOptions = Apollo.BaseMutationOptions<GalleriesUpdateMutation, GalleriesUpdateMutationVariables>;
const GalleryDestroyDocument = gql`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
type GalleryDestroyMutationFn = Apollo.MutationFunction<GalleryDestroyMutation, GalleryDestroyMutationVariables>;

/**
 * __useGalleryDestroyMutation__
 *
 * To run a mutation, you first call `useGalleryDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGalleryDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [galleryDestroyMutation, { data, loading, error }] = useGalleryDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
function useGalleryDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GalleryDestroyMutation, GalleryDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GalleryDestroyMutation, GalleryDestroyMutationVariables>(GalleryDestroyDocument, options);
      }
type GalleryDestroyMutationHookResult = ReturnType<typeof useGalleryDestroyMutation>;
type GalleryDestroyMutationResult = Apollo.MutationResult<GalleryDestroyMutation>;
type GalleryDestroyMutationOptions = Apollo.BaseMutationOptions<GalleryDestroyMutation, GalleryDestroyMutationVariables>;
const AddGalleryImagesDocument = gql`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
type AddGalleryImagesMutationFn = Apollo.MutationFunction<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>;

/**
 * __useAddGalleryImagesMutation__
 *
 * To run a mutation, you first call `useAddGalleryImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGalleryImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGalleryImagesMutation, { data, loading, error }] = useAddGalleryImagesMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
function useAddGalleryImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>(AddGalleryImagesDocument, options);
      }
type AddGalleryImagesMutationHookResult = ReturnType<typeof useAddGalleryImagesMutation>;
type AddGalleryImagesMutationResult = Apollo.MutationResult<AddGalleryImagesMutation>;
type AddGalleryImagesMutationOptions = Apollo.BaseMutationOptions<AddGalleryImagesMutation, AddGalleryImagesMutationVariables>;
const RemoveGalleryImagesDocument = gql`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;
type RemoveGalleryImagesMutationFn = Apollo.MutationFunction<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>;

/**
 * __useRemoveGalleryImagesMutation__
 *
 * To run a mutation, you first call `useRemoveGalleryImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveGalleryImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeGalleryImagesMutation, { data, loading, error }] = useRemoveGalleryImagesMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
function useRemoveGalleryImagesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>(RemoveGalleryImagesDocument, options);
      }
type RemoveGalleryImagesMutationHookResult = ReturnType<typeof useRemoveGalleryImagesMutation>;
type RemoveGalleryImagesMutationResult = Apollo.MutationResult<RemoveGalleryImagesMutation>;
type RemoveGalleryImagesMutationOptions = Apollo.BaseMutationOptions<RemoveGalleryImagesMutation, RemoveGalleryImagesMutationVariables>;
const SetGalleryCoverDocument = gql`
    mutation SetGalleryCover($gallery_id: ID!, $cover_image_id: ID!) {
  setGalleryCover(
    input: {gallery_id: $gallery_id, cover_image_id: $cover_image_id}
  )
}
    `;
type SetGalleryCoverMutationFn = Apollo.MutationFunction<SetGalleryCoverMutation, SetGalleryCoverMutationVariables>;

/**
 * __useSetGalleryCoverMutation__
 *
 * To run a mutation, you first call `useSetGalleryCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetGalleryCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setGalleryCoverMutation, { data, loading, error }] = useSetGalleryCoverMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *      cover_image_id: // value for 'cover_image_id'
 *   },
 * });
 */
function useSetGalleryCoverMutation(baseOptions?: Apollo.MutationHookOptions<SetGalleryCoverMutation, SetGalleryCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetGalleryCoverMutation, SetGalleryCoverMutationVariables>(SetGalleryCoverDocument, options);
      }
type SetGalleryCoverMutationHookResult = ReturnType<typeof useSetGalleryCoverMutation>;
type SetGalleryCoverMutationResult = Apollo.MutationResult<SetGalleryCoverMutation>;
type SetGalleryCoverMutationOptions = Apollo.BaseMutationOptions<SetGalleryCoverMutation, SetGalleryCoverMutationVariables>;
const ResetGalleryCoverDocument = gql`
    mutation ResetGalleryCover($gallery_id: ID!) {
  resetGalleryCover(input: {gallery_id: $gallery_id})
}
    `;
type ResetGalleryCoverMutationFn = Apollo.MutationFunction<ResetGalleryCoverMutation, ResetGalleryCoverMutationVariables>;

/**
 * __useResetGalleryCoverMutation__
 *
 * To run a mutation, you first call `useResetGalleryCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetGalleryCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetGalleryCoverMutation, { data, loading, error }] = useResetGalleryCoverMutation({
 *   variables: {
 *      gallery_id: // value for 'gallery_id'
 *   },
 * });
 */
function useResetGalleryCoverMutation(baseOptions?: Apollo.MutationHookOptions<ResetGalleryCoverMutation, ResetGalleryCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetGalleryCoverMutation, ResetGalleryCoverMutationVariables>(ResetGalleryCoverDocument, options);
      }
type ResetGalleryCoverMutationHookResult = ReturnType<typeof useResetGalleryCoverMutation>;
type ResetGalleryCoverMutationResult = Apollo.MutationResult<ResetGalleryCoverMutation>;
type ResetGalleryCoverMutationOptions = Apollo.BaseMutationOptions<ResetGalleryCoverMutation, ResetGalleryCoverMutationVariables>;
const GroupCreateDocument = gql`
    mutation GroupCreate($input: GroupCreateInput!) {
  groupCreate(input: $input) {
    ...GroupData
  }
}
    ${GroupDataFragmentDoc}`;
type GroupCreateMutationFn = Apollo.MutationFunction<GroupCreateMutation, GroupCreateMutationVariables>;

/**
 * __useGroupCreateMutation__
 *
 * To run a mutation, you first call `useGroupCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGroupCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [groupCreateMutation, { data, loading, error }] = useGroupCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGroupCreateMutation(baseOptions?: Apollo.MutationHookOptions<GroupCreateMutation, GroupCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GroupCreateMutation, GroupCreateMutationVariables>(GroupCreateDocument, options);
      }
type GroupCreateMutationHookResult = ReturnType<typeof useGroupCreateMutation>;
type GroupCreateMutationResult = Apollo.MutationResult<GroupCreateMutation>;
type GroupCreateMutationOptions = Apollo.BaseMutationOptions<GroupCreateMutation, GroupCreateMutationVariables>;
const GroupUpdateDocument = gql`
    mutation GroupUpdate($input: GroupUpdateInput!) {
  groupUpdate(input: $input) {
    ...GroupData
  }
}
    ${GroupDataFragmentDoc}`;
type GroupUpdateMutationFn = Apollo.MutationFunction<GroupUpdateMutation, GroupUpdateMutationVariables>;

/**
 * __useGroupUpdateMutation__
 *
 * To run a mutation, you first call `useGroupUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGroupUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [groupUpdateMutation, { data, loading, error }] = useGroupUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useGroupUpdateMutation(baseOptions?: Apollo.MutationHookOptions<GroupUpdateMutation, GroupUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GroupUpdateMutation, GroupUpdateMutationVariables>(GroupUpdateDocument, options);
      }
type GroupUpdateMutationHookResult = ReturnType<typeof useGroupUpdateMutation>;
type GroupUpdateMutationResult = Apollo.MutationResult<GroupUpdateMutation>;
type GroupUpdateMutationOptions = Apollo.BaseMutationOptions<GroupUpdateMutation, GroupUpdateMutationVariables>;
const BulkGroupUpdateDocument = gql`
    mutation BulkGroupUpdate($input: BulkGroupUpdateInput!) {
  bulkGroupUpdate(input: $input) {
    ...GroupData
  }
}
    ${GroupDataFragmentDoc}`;
type BulkGroupUpdateMutationFn = Apollo.MutationFunction<BulkGroupUpdateMutation, BulkGroupUpdateMutationVariables>;

/**
 * __useBulkGroupUpdateMutation__
 *
 * To run a mutation, you first call `useBulkGroupUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkGroupUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkGroupUpdateMutation, { data, loading, error }] = useBulkGroupUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkGroupUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkGroupUpdateMutation, BulkGroupUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkGroupUpdateMutation, BulkGroupUpdateMutationVariables>(BulkGroupUpdateDocument, options);
      }
type BulkGroupUpdateMutationHookResult = ReturnType<typeof useBulkGroupUpdateMutation>;
type BulkGroupUpdateMutationResult = Apollo.MutationResult<BulkGroupUpdateMutation>;
type BulkGroupUpdateMutationOptions = Apollo.BaseMutationOptions<BulkGroupUpdateMutation, BulkGroupUpdateMutationVariables>;
const GroupDestroyDocument = gql`
    mutation GroupDestroy($id: ID!) {
  groupDestroy(input: {id: $id})
}
    `;
type GroupDestroyMutationFn = Apollo.MutationFunction<GroupDestroyMutation, GroupDestroyMutationVariables>;

/**
 * __useGroupDestroyMutation__
 *
 * To run a mutation, you first call `useGroupDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGroupDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [groupDestroyMutation, { data, loading, error }] = useGroupDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useGroupDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GroupDestroyMutation, GroupDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GroupDestroyMutation, GroupDestroyMutationVariables>(GroupDestroyDocument, options);
      }
type GroupDestroyMutationHookResult = ReturnType<typeof useGroupDestroyMutation>;
type GroupDestroyMutationResult = Apollo.MutationResult<GroupDestroyMutation>;
type GroupDestroyMutationOptions = Apollo.BaseMutationOptions<GroupDestroyMutation, GroupDestroyMutationVariables>;
const GroupsDestroyDocument = gql`
    mutation GroupsDestroy($ids: [ID!]!) {
  groupsDestroy(ids: $ids)
}
    `;
type GroupsDestroyMutationFn = Apollo.MutationFunction<GroupsDestroyMutation, GroupsDestroyMutationVariables>;

/**
 * __useGroupsDestroyMutation__
 *
 * To run a mutation, you first call `useGroupsDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGroupsDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [groupsDestroyMutation, { data, loading, error }] = useGroupsDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useGroupsDestroyMutation(baseOptions?: Apollo.MutationHookOptions<GroupsDestroyMutation, GroupsDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GroupsDestroyMutation, GroupsDestroyMutationVariables>(GroupsDestroyDocument, options);
      }
type GroupsDestroyMutationHookResult = ReturnType<typeof useGroupsDestroyMutation>;
type GroupsDestroyMutationResult = Apollo.MutationResult<GroupsDestroyMutation>;
type GroupsDestroyMutationOptions = Apollo.BaseMutationOptions<GroupsDestroyMutation, GroupsDestroyMutationVariables>;
const AddGroupSubGroupsDocument = gql`
    mutation AddGroupSubGroups($input: GroupSubGroupAddInput!) {
  addGroupSubGroups(input: $input)
}
    `;
type AddGroupSubGroupsMutationFn = Apollo.MutationFunction<AddGroupSubGroupsMutation, AddGroupSubGroupsMutationVariables>;

/**
 * __useAddGroupSubGroupsMutation__
 *
 * To run a mutation, you first call `useAddGroupSubGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGroupSubGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGroupSubGroupsMutation, { data, loading, error }] = useAddGroupSubGroupsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useAddGroupSubGroupsMutation(baseOptions?: Apollo.MutationHookOptions<AddGroupSubGroupsMutation, AddGroupSubGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGroupSubGroupsMutation, AddGroupSubGroupsMutationVariables>(AddGroupSubGroupsDocument, options);
      }
type AddGroupSubGroupsMutationHookResult = ReturnType<typeof useAddGroupSubGroupsMutation>;
type AddGroupSubGroupsMutationResult = Apollo.MutationResult<AddGroupSubGroupsMutation>;
type AddGroupSubGroupsMutationOptions = Apollo.BaseMutationOptions<AddGroupSubGroupsMutation, AddGroupSubGroupsMutationVariables>;
const RemoveGroupSubGroupsDocument = gql`
    mutation RemoveGroupSubGroups($input: GroupSubGroupRemoveInput!) {
  removeGroupSubGroups(input: $input)
}
    `;
type RemoveGroupSubGroupsMutationFn = Apollo.MutationFunction<RemoveGroupSubGroupsMutation, RemoveGroupSubGroupsMutationVariables>;

/**
 * __useRemoveGroupSubGroupsMutation__
 *
 * To run a mutation, you first call `useRemoveGroupSubGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveGroupSubGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeGroupSubGroupsMutation, { data, loading, error }] = useRemoveGroupSubGroupsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useRemoveGroupSubGroupsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveGroupSubGroupsMutation, RemoveGroupSubGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveGroupSubGroupsMutation, RemoveGroupSubGroupsMutationVariables>(RemoveGroupSubGroupsDocument, options);
      }
type RemoveGroupSubGroupsMutationHookResult = ReturnType<typeof useRemoveGroupSubGroupsMutation>;
type RemoveGroupSubGroupsMutationResult = Apollo.MutationResult<RemoveGroupSubGroupsMutation>;
type RemoveGroupSubGroupsMutationOptions = Apollo.BaseMutationOptions<RemoveGroupSubGroupsMutation, RemoveGroupSubGroupsMutationVariables>;
const ReorderSubGroupsDocument = gql`
    mutation ReorderSubGroups($input: ReorderSubGroupsInput!) {
  reorderSubGroups(input: $input)
}
    `;
type ReorderSubGroupsMutationFn = Apollo.MutationFunction<ReorderSubGroupsMutation, ReorderSubGroupsMutationVariables>;

/**
 * __useReorderSubGroupsMutation__
 *
 * To run a mutation, you first call `useReorderSubGroupsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderSubGroupsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderSubGroupsMutation, { data, loading, error }] = useReorderSubGroupsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useReorderSubGroupsMutation(baseOptions?: Apollo.MutationHookOptions<ReorderSubGroupsMutation, ReorderSubGroupsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderSubGroupsMutation, ReorderSubGroupsMutationVariables>(ReorderSubGroupsDocument, options);
      }
type ReorderSubGroupsMutationHookResult = ReturnType<typeof useReorderSubGroupsMutation>;
type ReorderSubGroupsMutationResult = Apollo.MutationResult<ReorderSubGroupsMutation>;
type ReorderSubGroupsMutationOptions = Apollo.BaseMutationOptions<ReorderSubGroupsMutation, ReorderSubGroupsMutationVariables>;
const ImageUpdateDocument = gql`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
type ImageUpdateMutationFn = Apollo.MutationFunction<ImageUpdateMutation, ImageUpdateMutationVariables>;

/**
 * __useImageUpdateMutation__
 *
 * To run a mutation, you first call `useImageUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageUpdateMutation, { data, loading, error }] = useImageUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useImageUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ImageUpdateMutation, ImageUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageUpdateMutation, ImageUpdateMutationVariables>(ImageUpdateDocument, options);
      }
type ImageUpdateMutationHookResult = ReturnType<typeof useImageUpdateMutation>;
type ImageUpdateMutationResult = Apollo.MutationResult<ImageUpdateMutation>;
type ImageUpdateMutationOptions = Apollo.BaseMutationOptions<ImageUpdateMutation, ImageUpdateMutationVariables>;
const BulkImageUpdateDocument = gql`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
type BulkImageUpdateMutationFn = Apollo.MutationFunction<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>;

/**
 * __useBulkImageUpdateMutation__
 *
 * To run a mutation, you first call `useBulkImageUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkImageUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkImageUpdateMutation, { data, loading, error }] = useBulkImageUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkImageUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>(BulkImageUpdateDocument, options);
      }
type BulkImageUpdateMutationHookResult = ReturnType<typeof useBulkImageUpdateMutation>;
type BulkImageUpdateMutationResult = Apollo.MutationResult<BulkImageUpdateMutation>;
type BulkImageUpdateMutationOptions = Apollo.BaseMutationOptions<BulkImageUpdateMutation, BulkImageUpdateMutationVariables>;
const ImagesUpdateDocument = gql`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${SlimImageDataFragmentDoc}`;
type ImagesUpdateMutationFn = Apollo.MutationFunction<ImagesUpdateMutation, ImagesUpdateMutationVariables>;

/**
 * __useImagesUpdateMutation__
 *
 * To run a mutation, you first call `useImagesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImagesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imagesUpdateMutation, { data, loading, error }] = useImagesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useImagesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ImagesUpdateMutation, ImagesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImagesUpdateMutation, ImagesUpdateMutationVariables>(ImagesUpdateDocument, options);
      }
type ImagesUpdateMutationHookResult = ReturnType<typeof useImagesUpdateMutation>;
type ImagesUpdateMutationResult = Apollo.MutationResult<ImagesUpdateMutation>;
type ImagesUpdateMutationOptions = Apollo.BaseMutationOptions<ImagesUpdateMutation, ImagesUpdateMutationVariables>;
const ImageIncrementODocument = gql`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;
type ImageIncrementOMutationFn = Apollo.MutationFunction<ImageIncrementOMutation, ImageIncrementOMutationVariables>;

/**
 * __useImageIncrementOMutation__
 *
 * To run a mutation, you first call `useImageIncrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageIncrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageIncrementOMutation, { data, loading, error }] = useImageIncrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useImageIncrementOMutation(baseOptions?: Apollo.MutationHookOptions<ImageIncrementOMutation, ImageIncrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageIncrementOMutation, ImageIncrementOMutationVariables>(ImageIncrementODocument, options);
      }
type ImageIncrementOMutationHookResult = ReturnType<typeof useImageIncrementOMutation>;
type ImageIncrementOMutationResult = Apollo.MutationResult<ImageIncrementOMutation>;
type ImageIncrementOMutationOptions = Apollo.BaseMutationOptions<ImageIncrementOMutation, ImageIncrementOMutationVariables>;
const ImageDecrementODocument = gql`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;
type ImageDecrementOMutationFn = Apollo.MutationFunction<ImageDecrementOMutation, ImageDecrementOMutationVariables>;

/**
 * __useImageDecrementOMutation__
 *
 * To run a mutation, you first call `useImageDecrementOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageDecrementOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageDecrementOMutation, { data, loading, error }] = useImageDecrementOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useImageDecrementOMutation(baseOptions?: Apollo.MutationHookOptions<ImageDecrementOMutation, ImageDecrementOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageDecrementOMutation, ImageDecrementOMutationVariables>(ImageDecrementODocument, options);
      }
type ImageDecrementOMutationHookResult = ReturnType<typeof useImageDecrementOMutation>;
type ImageDecrementOMutationResult = Apollo.MutationResult<ImageDecrementOMutation>;
type ImageDecrementOMutationOptions = Apollo.BaseMutationOptions<ImageDecrementOMutation, ImageDecrementOMutationVariables>;
const ImageResetODocument = gql`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;
type ImageResetOMutationFn = Apollo.MutationFunction<ImageResetOMutation, ImageResetOMutationVariables>;

/**
 * __useImageResetOMutation__
 *
 * To run a mutation, you first call `useImageResetOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageResetOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageResetOMutation, { data, loading, error }] = useImageResetOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useImageResetOMutation(baseOptions?: Apollo.MutationHookOptions<ImageResetOMutation, ImageResetOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageResetOMutation, ImageResetOMutationVariables>(ImageResetODocument, options);
      }
type ImageResetOMutationHookResult = ReturnType<typeof useImageResetOMutation>;
type ImageResetOMutationResult = Apollo.MutationResult<ImageResetOMutation>;
type ImageResetOMutationOptions = Apollo.BaseMutationOptions<ImageResetOMutation, ImageResetOMutationVariables>;
const ImageDestroyDocument = gql`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
type ImageDestroyMutationFn = Apollo.MutationFunction<ImageDestroyMutation, ImageDestroyMutationVariables>;

/**
 * __useImageDestroyMutation__
 *
 * To run a mutation, you first call `useImageDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageDestroyMutation, { data, loading, error }] = useImageDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
function useImageDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ImageDestroyMutation, ImageDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageDestroyMutation, ImageDestroyMutationVariables>(ImageDestroyDocument, options);
      }
type ImageDestroyMutationHookResult = ReturnType<typeof useImageDestroyMutation>;
type ImageDestroyMutationResult = Apollo.MutationResult<ImageDestroyMutation>;
type ImageDestroyMutationOptions = Apollo.BaseMutationOptions<ImageDestroyMutation, ImageDestroyMutationVariables>;
const ImagesDestroyDocument = gql`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
type ImagesDestroyMutationFn = Apollo.MutationFunction<ImagesDestroyMutation, ImagesDestroyMutationVariables>;

/**
 * __useImagesDestroyMutation__
 *
 * To run a mutation, you first call `useImagesDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImagesDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imagesDestroyMutation, { data, loading, error }] = useImagesDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
function useImagesDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ImagesDestroyMutation, ImagesDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImagesDestroyMutation, ImagesDestroyMutationVariables>(ImagesDestroyDocument, options);
      }
type ImagesDestroyMutationHookResult = ReturnType<typeof useImagesDestroyMutation>;
type ImagesDestroyMutationResult = Apollo.MutationResult<ImagesDestroyMutation>;
type ImagesDestroyMutationOptions = Apollo.BaseMutationOptions<ImagesDestroyMutation, ImagesDestroyMutationVariables>;
const StopJobDocument = gql`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;
type StopJobMutationFn = Apollo.MutationFunction<StopJobMutation, StopJobMutationVariables>;

/**
 * __useStopJobMutation__
 *
 * To run a mutation, you first call `useStopJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopJobMutation, { data, loading, error }] = useStopJobMutation({
 *   variables: {
 *      job_id: // value for 'job_id'
 *   },
 * });
 */
function useStopJobMutation(baseOptions?: Apollo.MutationHookOptions<StopJobMutation, StopJobMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopJobMutation, StopJobMutationVariables>(StopJobDocument, options);
      }
type StopJobMutationHookResult = ReturnType<typeof useStopJobMutation>;
type StopJobMutationResult = Apollo.MutationResult<StopJobMutation>;
type StopJobMutationOptions = Apollo.BaseMutationOptions<StopJobMutation, StopJobMutationVariables>;
const StopAllJobsDocument = gql`
    mutation StopAllJobs {
  stopAllJobs
}
    `;
type StopAllJobsMutationFn = Apollo.MutationFunction<StopAllJobsMutation, StopAllJobsMutationVariables>;

/**
 * __useStopAllJobsMutation__
 *
 * To run a mutation, you first call `useStopAllJobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopAllJobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopAllJobsMutation, { data, loading, error }] = useStopAllJobsMutation({
 *   variables: {
 *   },
 * });
 */
function useStopAllJobsMutation(baseOptions?: Apollo.MutationHookOptions<StopAllJobsMutation, StopAllJobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StopAllJobsMutation, StopAllJobsMutationVariables>(StopAllJobsDocument, options);
      }
type StopAllJobsMutationHookResult = ReturnType<typeof useStopAllJobsMutation>;
type StopAllJobsMutationResult = Apollo.MutationResult<StopAllJobsMutation>;
type StopAllJobsMutationOptions = Apollo.BaseMutationOptions<StopAllJobsMutation, StopAllJobsMutationVariables>;
const MetadataImportDocument = gql`
    mutation MetadataImport {
  metadataImport
}
    `;
type MetadataImportMutationFn = Apollo.MutationFunction<MetadataImportMutation, MetadataImportMutationVariables>;

/**
 * __useMetadataImportMutation__
 *
 * To run a mutation, you first call `useMetadataImportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataImportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataImportMutation, { data, loading, error }] = useMetadataImportMutation({
 *   variables: {
 *   },
 * });
 */
function useMetadataImportMutation(baseOptions?: Apollo.MutationHookOptions<MetadataImportMutation, MetadataImportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataImportMutation, MetadataImportMutationVariables>(MetadataImportDocument, options);
      }
type MetadataImportMutationHookResult = ReturnType<typeof useMetadataImportMutation>;
type MetadataImportMutationResult = Apollo.MutationResult<MetadataImportMutation>;
type MetadataImportMutationOptions = Apollo.BaseMutationOptions<MetadataImportMutation, MetadataImportMutationVariables>;
const MetadataExportDocument = gql`
    mutation Metadata{
  metadataExport
}
    `;
type MetadataExportMutationFn = Apollo.MutationFunction<MetadataExportMutation, MetadataExportMutationVariables>;

/**
 * __useMetadataExportMutation__
 *
 * To run a mutation, you first call `useMetadataExportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataExportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataExportMutation, { data, loading, error }] = useMetadataExportMutation({
 *   variables: {
 *   },
 * });
 */
function useMetadataExportMutation(baseOptions?: Apollo.MutationHookOptions<MetadataExportMutation, MetadataExportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataExportMutation, MetadataExportMutationVariables>(MetadataExportDocument, options);
      }
type MetadataExportMutationHookResult = ReturnType<typeof useMetadataExportMutation>;
type MetadataExportMutationResult = Apollo.MutationResult<MetadataExportMutation>;
type MetadataExportMutationOptions = Apollo.BaseMutationOptions<MetadataExportMutation, MetadataExportMutationVariables>;
const ExportObjectsDocument = gql`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;
type ExportObjectsMutationFn = Apollo.MutationFunction<ExportObjectsMutation, ExportObjectsMutationVariables>;

/**
 * __useExportObjectsMutation__
 *
 * To run a mutation, you first call `useExportObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportObjectsMutation, { data, loading, error }] = useExportObjectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useExportObjectsMutation(baseOptions?: Apollo.MutationHookOptions<ExportObjectsMutation, ExportObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExportObjectsMutation, ExportObjectsMutationVariables>(ExportObjectsDocument, options);
      }
type ExportObjectsMutationHookResult = ReturnType<typeof useExportObjectsMutation>;
type ExportObjectsMutationResult = Apollo.MutationResult<ExportObjectsMutation>;
type ExportObjectsMutationOptions = Apollo.BaseMutationOptions<ExportObjectsMutation, ExportObjectsMutationVariables>;
const ImportObjectsDocument = gql`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;
type ImportObjectsMutationFn = Apollo.MutationFunction<ImportObjectsMutation, ImportObjectsMutationVariables>;

/**
 * __useImportObjectsMutation__
 *
 * To run a mutation, you first call `useImportObjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImportObjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [importObjectsMutation, { data, loading, error }] = useImportObjectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useImportObjectsMutation(baseOptions?: Apollo.MutationHookOptions<ImportObjectsMutation, ImportObjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImportObjectsMutation, ImportObjectsMutationVariables>(ImportObjectsDocument, options);
      }
type ImportObjectsMutationHookResult = ReturnType<typeof useImportObjectsMutation>;
type ImportObjectsMutationResult = Apollo.MutationResult<ImportObjectsMutation>;
type ImportObjectsMutationOptions = Apollo.BaseMutationOptions<ImportObjectsMutation, ImportObjectsMutationVariables>;
const MetadataScanDocument = gql`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;
type MetadataScanMutationFn = Apollo.MutationFunction<MetadataScanMutation, MetadataScanMutationVariables>;

/**
 * __useMetadataScanMutation__
 *
 * To run a mutation, you first call `useMetadataScanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataScanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataScanMutation, { data, loading, error }] = useMetadataScanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataScanMutation(baseOptions?: Apollo.MutationHookOptions<MetadataScanMutation, MetadataScanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataScanMutation, MetadataScanMutationVariables>(MetadataScanDocument, options);
      }
type MetadataScanMutationHookResult = ReturnType<typeof useMetadataScanMutation>;
type MetadataScanMutationResult = Apollo.MutationResult<MetadataScanMutation>;
type MetadataScanMutationOptions = Apollo.BaseMutationOptions<MetadataScanMutation, MetadataScanMutationVariables>;
const MetadataGenerateDocument = gql`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;
type MetadataGenerateMutationFn = Apollo.MutationFunction<MetadataGenerateMutation, MetadataGenerateMutationVariables>;

/**
 * __useMetadataGenerateMutation__
 *
 * To run a mutation, you first call `useMetadataGenerateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataGenerateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataGenerateMutation, { data, loading, error }] = useMetadataGenerateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataGenerateMutation(baseOptions?: Apollo.MutationHookOptions<MetadataGenerateMutation, MetadataGenerateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataGenerateMutation, MetadataGenerateMutationVariables>(MetadataGenerateDocument, options);
      }
type MetadataGenerateMutationHookResult = ReturnType<typeof useMetadataGenerateMutation>;
type MetadataGenerateMutationResult = Apollo.MutationResult<MetadataGenerateMutation>;
type MetadataGenerateMutationOptions = Apollo.BaseMutationOptions<MetadataGenerateMutation, MetadataGenerateMutationVariables>;
const MetadataAutoTagDocument = gql`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;
type MetadataAutoTagMutationFn = Apollo.MutationFunction<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>;

/**
 * __useMetadataAutoTagMutation__
 *
 * To run a mutation, you first call `useMetadataAutoTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataAutoTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataAutoTagMutation, { data, loading, error }] = useMetadataAutoTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataAutoTagMutation(baseOptions?: Apollo.MutationHookOptions<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>(MetadataAutoTagDocument, options);
      }
type MetadataAutoTagMutationHookResult = ReturnType<typeof useMetadataAutoTagMutation>;
type MetadataAutoTagMutationResult = Apollo.MutationResult<MetadataAutoTagMutation>;
type MetadataAutoTagMutationOptions = Apollo.BaseMutationOptions<MetadataAutoTagMutation, MetadataAutoTagMutationVariables>;
const MetadataIdentifyDocument = gql`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;
type MetadataIdentifyMutationFn = Apollo.MutationFunction<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>;

/**
 * __useMetadataIdentifyMutation__
 *
 * To run a mutation, you first call `useMetadataIdentifyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataIdentifyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataIdentifyMutation, { data, loading, error }] = useMetadataIdentifyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataIdentifyMutation(baseOptions?: Apollo.MutationHookOptions<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>(MetadataIdentifyDocument, options);
      }
type MetadataIdentifyMutationHookResult = ReturnType<typeof useMetadataIdentifyMutation>;
type MetadataIdentifyMutationResult = Apollo.MutationResult<MetadataIdentifyMutation>;
type MetadataIdentifyMutationOptions = Apollo.BaseMutationOptions<MetadataIdentifyMutation, MetadataIdentifyMutationVariables>;
const MetadataCleanDocument = gql`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;
type MetadataCleanMutationFn = Apollo.MutationFunction<MetadataCleanMutation, MetadataCleanMutationVariables>;

/**
 * __useMetadataCleanMutation__
 *
 * To run a mutation, you first call `useMetadataCleanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataCleanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataCleanMutation, { data, loading, error }] = useMetadataCleanMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataCleanMutation(baseOptions?: Apollo.MutationHookOptions<MetadataCleanMutation, MetadataCleanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataCleanMutation, MetadataCleanMutationVariables>(MetadataCleanDocument, options);
      }
type MetadataCleanMutationHookResult = ReturnType<typeof useMetadataCleanMutation>;
type MetadataCleanMutationResult = Apollo.MutationResult<MetadataCleanMutation>;
type MetadataCleanMutationOptions = Apollo.BaseMutationOptions<MetadataCleanMutation, MetadataCleanMutationVariables>;
const MetadataCleanGeneratedDocument = gql`
    mutation MetadataCleanGenerated($input: CleanGeneratedInput!) {
  metadataCleanGenerated(input: $input)
}
    `;
type MetadataCleanGeneratedMutationFn = Apollo.MutationFunction<MetadataCleanGeneratedMutation, MetadataCleanGeneratedMutationVariables>;

/**
 * __useMetadataCleanGeneratedMutation__
 *
 * To run a mutation, you first call `useMetadataCleanGeneratedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMetadataCleanGeneratedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [metadataCleanGeneratedMutation, { data, loading, error }] = useMetadataCleanGeneratedMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMetadataCleanGeneratedMutation(baseOptions?: Apollo.MutationHookOptions<MetadataCleanGeneratedMutation, MetadataCleanGeneratedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MetadataCleanGeneratedMutation, MetadataCleanGeneratedMutationVariables>(MetadataCleanGeneratedDocument, options);
      }
type MetadataCleanGeneratedMutationHookResult = ReturnType<typeof useMetadataCleanGeneratedMutation>;
type MetadataCleanGeneratedMutationResult = Apollo.MutationResult<MetadataCleanGeneratedMutation>;
type MetadataCleanGeneratedMutationOptions = Apollo.BaseMutationOptions<MetadataCleanGeneratedMutation, MetadataCleanGeneratedMutationVariables>;
const MigrateHashNamingDocument = gql`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;
type MigrateHashNamingMutationFn = Apollo.MutationFunction<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>;

/**
 * __useMigrateHashNamingMutation__
 *
 * To run a mutation, you first call `useMigrateHashNamingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateHashNamingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateHashNamingMutation, { data, loading, error }] = useMigrateHashNamingMutation({
 *   variables: {
 *   },
 * });
 */
function useMigrateHashNamingMutation(baseOptions?: Apollo.MutationHookOptions<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>(MigrateHashNamingDocument, options);
      }
type MigrateHashNamingMutationHookResult = ReturnType<typeof useMigrateHashNamingMutation>;
type MigrateHashNamingMutationResult = Apollo.MutationResult<MigrateHashNamingMutation>;
type MigrateHashNamingMutationOptions = Apollo.BaseMutationOptions<MigrateHashNamingMutation, MigrateHashNamingMutationVariables>;
const BackupDatabaseDocument = gql`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;
type BackupDatabaseMutationFn = Apollo.MutationFunction<BackupDatabaseMutation, BackupDatabaseMutationVariables>;

/**
 * __useBackupDatabaseMutation__
 *
 * To run a mutation, you first call `useBackupDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBackupDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [backupDatabaseMutation, { data, loading, error }] = useBackupDatabaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBackupDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<BackupDatabaseMutation, BackupDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BackupDatabaseMutation, BackupDatabaseMutationVariables>(BackupDatabaseDocument, options);
      }
type BackupDatabaseMutationHookResult = ReturnType<typeof useBackupDatabaseMutation>;
type BackupDatabaseMutationResult = Apollo.MutationResult<BackupDatabaseMutation>;
type BackupDatabaseMutationOptions = Apollo.BaseMutationOptions<BackupDatabaseMutation, BackupDatabaseMutationVariables>;
const AnonymiseDatabaseDocument = gql`
    mutation AnonymiseDatabase($input: AnonymiseDatabaseInput!) {
  anonymiseDatabase(input: $input)
}
    `;
type AnonymiseDatabaseMutationFn = Apollo.MutationFunction<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>;

/**
 * __useAnonymiseDatabaseMutation__
 *
 * To run a mutation, you first call `useAnonymiseDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonymiseDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonymiseDatabaseMutation, { data, loading, error }] = useAnonymiseDatabaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useAnonymiseDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>(AnonymiseDatabaseDocument, options);
      }
type AnonymiseDatabaseMutationHookResult = ReturnType<typeof useAnonymiseDatabaseMutation>;
type AnonymiseDatabaseMutationResult = Apollo.MutationResult<AnonymiseDatabaseMutation>;
type AnonymiseDatabaseMutationOptions = Apollo.BaseMutationOptions<AnonymiseDatabaseMutation, AnonymiseDatabaseMutationVariables>;
const OptimiseDatabaseDocument = gql`
    mutation OptimiseDatabase {
  optimiseDatabase
}
    `;
type OptimiseDatabaseMutationFn = Apollo.MutationFunction<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>;

/**
 * __useOptimiseDatabaseMutation__
 *
 * To run a mutation, you first call `useOptimiseDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOptimiseDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [optimiseDatabaseMutation, { data, loading, error }] = useOptimiseDatabaseMutation({
 *   variables: {
 *   },
 * });
 */
function useOptimiseDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>(OptimiseDatabaseDocument, options);
      }
type OptimiseDatabaseMutationHookResult = ReturnType<typeof useOptimiseDatabaseMutation>;
type OptimiseDatabaseMutationResult = Apollo.MutationResult<OptimiseDatabaseMutation>;
type OptimiseDatabaseMutationOptions = Apollo.BaseMutationOptions<OptimiseDatabaseMutation, OptimiseDatabaseMutationVariables>;
const MigrateSceneScreenshotsDocument = gql`
    mutation MigrateSceneScreenshots($input: MigrateSceneScreenshotsInput!) {
  migrateSceneScreenshots(input: $input)
}
    `;
type MigrateSceneScreenshotsMutationFn = Apollo.MutationFunction<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>;

/**
 * __useMigrateSceneScreenshotsMutation__
 *
 * To run a mutation, you first call `useMigrateSceneScreenshotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateSceneScreenshotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateSceneScreenshotsMutation, { data, loading, error }] = useMigrateSceneScreenshotsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMigrateSceneScreenshotsMutation(baseOptions?: Apollo.MutationHookOptions<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>(MigrateSceneScreenshotsDocument, options);
      }
type MigrateSceneScreenshotsMutationHookResult = ReturnType<typeof useMigrateSceneScreenshotsMutation>;
type MigrateSceneScreenshotsMutationResult = Apollo.MutationResult<MigrateSceneScreenshotsMutation>;
type MigrateSceneScreenshotsMutationOptions = Apollo.BaseMutationOptions<MigrateSceneScreenshotsMutation, MigrateSceneScreenshotsMutationVariables>;
const MigrateBlobsDocument = gql`
    mutation MigrateBlobs($input: MigrateBlobsInput!) {
  migrateBlobs(input: $input)
}
    `;
type MigrateBlobsMutationFn = Apollo.MutationFunction<MigrateBlobsMutation, MigrateBlobsMutationVariables>;

/**
 * __useMigrateBlobsMutation__
 *
 * To run a mutation, you first call `useMigrateBlobsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMigrateBlobsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [migrateBlobsMutation, { data, loading, error }] = useMigrateBlobsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useMigrateBlobsMutation(baseOptions?: Apollo.MutationHookOptions<MigrateBlobsMutation, MigrateBlobsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MigrateBlobsMutation, MigrateBlobsMutationVariables>(MigrateBlobsDocument, options);
      }
type MigrateBlobsMutationHookResult = ReturnType<typeof useMigrateBlobsMutation>;
type MigrateBlobsMutationResult = Apollo.MutationResult<MigrateBlobsMutation>;
type MigrateBlobsMutationOptions = Apollo.BaseMutationOptions<MigrateBlobsMutation, MigrateBlobsMutationVariables>;
const PerformerCreateDocument = gql`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
type PerformerCreateMutationFn = Apollo.MutationFunction<PerformerCreateMutation, PerformerCreateMutationVariables>;

/**
 * __usePerformerCreateMutation__
 *
 * To run a mutation, you first call `usePerformerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerCreateMutation, { data, loading, error }] = usePerformerCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function usePerformerCreateMutation(baseOptions?: Apollo.MutationHookOptions<PerformerCreateMutation, PerformerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerCreateMutation, PerformerCreateMutationVariables>(PerformerCreateDocument, options);
      }
type PerformerCreateMutationHookResult = ReturnType<typeof usePerformerCreateMutation>;
type PerformerCreateMutationResult = Apollo.MutationResult<PerformerCreateMutation>;
type PerformerCreateMutationOptions = Apollo.BaseMutationOptions<PerformerCreateMutation, PerformerCreateMutationVariables>;
const PerformerUpdateDocument = gql`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
type PerformerUpdateMutationFn = Apollo.MutationFunction<PerformerUpdateMutation, PerformerUpdateMutationVariables>;

/**
 * __usePerformerUpdateMutation__
 *
 * To run a mutation, you first call `usePerformerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerUpdateMutation, { data, loading, error }] = usePerformerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function usePerformerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<PerformerUpdateMutation, PerformerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerUpdateMutation, PerformerUpdateMutationVariables>(PerformerUpdateDocument, options);
      }
type PerformerUpdateMutationHookResult = ReturnType<typeof usePerformerUpdateMutation>;
type PerformerUpdateMutationResult = Apollo.MutationResult<PerformerUpdateMutation>;
type PerformerUpdateMutationOptions = Apollo.BaseMutationOptions<PerformerUpdateMutation, PerformerUpdateMutationVariables>;
const BulkPerformerUpdateDocument = gql`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;
type BulkPerformerUpdateMutationFn = Apollo.MutationFunction<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>;

/**
 * __useBulkPerformerUpdateMutation__
 *
 * To run a mutation, you first call `useBulkPerformerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkPerformerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkPerformerUpdateMutation, { data, loading, error }] = useBulkPerformerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkPerformerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>(BulkPerformerUpdateDocument, options);
      }
type BulkPerformerUpdateMutationHookResult = ReturnType<typeof useBulkPerformerUpdateMutation>;
type BulkPerformerUpdateMutationResult = Apollo.MutationResult<BulkPerformerUpdateMutation>;
type BulkPerformerUpdateMutationOptions = Apollo.BaseMutationOptions<BulkPerformerUpdateMutation, BulkPerformerUpdateMutationVariables>;
const PerformerDestroyDocument = gql`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;
type PerformerDestroyMutationFn = Apollo.MutationFunction<PerformerDestroyMutation, PerformerDestroyMutationVariables>;

/**
 * __usePerformerDestroyMutation__
 *
 * To run a mutation, you first call `usePerformerDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerDestroyMutation, { data, loading, error }] = usePerformerDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function usePerformerDestroyMutation(baseOptions?: Apollo.MutationHookOptions<PerformerDestroyMutation, PerformerDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerDestroyMutation, PerformerDestroyMutationVariables>(PerformerDestroyDocument, options);
      }
type PerformerDestroyMutationHookResult = ReturnType<typeof usePerformerDestroyMutation>;
type PerformerDestroyMutationResult = Apollo.MutationResult<PerformerDestroyMutation>;
type PerformerDestroyMutationOptions = Apollo.BaseMutationOptions<PerformerDestroyMutation, PerformerDestroyMutationVariables>;
const PerformersDestroyDocument = gql`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;
type PerformersDestroyMutationFn = Apollo.MutationFunction<PerformersDestroyMutation, PerformersDestroyMutationVariables>;

/**
 * __usePerformersDestroyMutation__
 *
 * To run a mutation, you first call `usePerformersDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformersDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performersDestroyMutation, { data, loading, error }] = usePerformersDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function usePerformersDestroyMutation(baseOptions?: Apollo.MutationHookOptions<PerformersDestroyMutation, PerformersDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformersDestroyMutation, PerformersDestroyMutationVariables>(PerformersDestroyDocument, options);
      }
type PerformersDestroyMutationHookResult = ReturnType<typeof usePerformersDestroyMutation>;
type PerformersDestroyMutationResult = Apollo.MutationResult<PerformersDestroyMutation>;
type PerformersDestroyMutationOptions = Apollo.BaseMutationOptions<PerformersDestroyMutation, PerformersDestroyMutationVariables>;
const PerformerMergeDocument = gql`
    mutation PerformerMerge($input: PerformerMergeInput!) {
  performerMerge(input: $input) {
    id
  }
}
    `;
type PerformerMergeMutationFn = Apollo.MutationFunction<PerformerMergeMutation, PerformerMergeMutationVariables>;

/**
 * __usePerformerMergeMutation__
 *
 * To run a mutation, you first call `usePerformerMergeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePerformerMergeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [performerMergeMutation, { data, loading, error }] = usePerformerMergeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function usePerformerMergeMutation(baseOptions?: Apollo.MutationHookOptions<PerformerMergeMutation, PerformerMergeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PerformerMergeMutation, PerformerMergeMutationVariables>(PerformerMergeDocument, options);
      }
type PerformerMergeMutationHookResult = ReturnType<typeof usePerformerMergeMutation>;
type PerformerMergeMutationResult = Apollo.MutationResult<PerformerMergeMutation>;
type PerformerMergeMutationOptions = Apollo.BaseMutationOptions<PerformerMergeMutation, PerformerMergeMutationVariables>;
const ReloadPluginsDocument = gql`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;
type ReloadPluginsMutationFn = Apollo.MutationFunction<ReloadPluginsMutation, ReloadPluginsMutationVariables>;

/**
 * __useReloadPluginsMutation__
 *
 * To run a mutation, you first call `useReloadPluginsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReloadPluginsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reloadPluginsMutation, { data, loading, error }] = useReloadPluginsMutation({
 *   variables: {
 *   },
 * });
 */
function useReloadPluginsMutation(baseOptions?: Apollo.MutationHookOptions<ReloadPluginsMutation, ReloadPluginsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReloadPluginsMutation, ReloadPluginsMutationVariables>(ReloadPluginsDocument, options);
      }
type ReloadPluginsMutationHookResult = ReturnType<typeof useReloadPluginsMutation>;
type ReloadPluginsMutationResult = Apollo.MutationResult<ReloadPluginsMutation>;
type ReloadPluginsMutationOptions = Apollo.BaseMutationOptions<ReloadPluginsMutation, ReloadPluginsMutationVariables>;
const RunPluginTaskDocument = gql`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args_map: Map) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args_map: $args_map)
}
    `;
type RunPluginTaskMutationFn = Apollo.MutationFunction<RunPluginTaskMutation, RunPluginTaskMutationVariables>;

/**
 * __useRunPluginTaskMutation__
 *
 * To run a mutation, you first call `useRunPluginTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRunPluginTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [runPluginTaskMutation, { data, loading, error }] = useRunPluginTaskMutation({
 *   variables: {
 *      plugin_id: // value for 'plugin_id'
 *      task_name: // value for 'task_name'
 *      args_map: // value for 'args_map'
 *   },
 * });
 */
function useRunPluginTaskMutation(baseOptions?: Apollo.MutationHookOptions<RunPluginTaskMutation, RunPluginTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RunPluginTaskMutation, RunPluginTaskMutationVariables>(RunPluginTaskDocument, options);
      }
type RunPluginTaskMutationHookResult = ReturnType<typeof useRunPluginTaskMutation>;
type RunPluginTaskMutationResult = Apollo.MutationResult<RunPluginTaskMutation>;
type RunPluginTaskMutationOptions = Apollo.BaseMutationOptions<RunPluginTaskMutation, RunPluginTaskMutationVariables>;
const ConfigurePluginDocument = gql`
    mutation ConfigurePlugin($plugin_id: ID!, $input: Map!) {
  configurePlugin(plugin_id: $plugin_id, input: $input)
}
    `;
type ConfigurePluginMutationFn = Apollo.MutationFunction<ConfigurePluginMutation, ConfigurePluginMutationVariables>;

/**
 * __useConfigurePluginMutation__
 *
 * To run a mutation, you first call `useConfigurePluginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigurePluginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configurePluginMutation, { data, loading, error }] = useConfigurePluginMutation({
 *   variables: {
 *      plugin_id: // value for 'plugin_id'
 *      input: // value for 'input'
 *   },
 * });
 */
function useConfigurePluginMutation(baseOptions?: Apollo.MutationHookOptions<ConfigurePluginMutation, ConfigurePluginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigurePluginMutation, ConfigurePluginMutationVariables>(ConfigurePluginDocument, options);
      }
type ConfigurePluginMutationHookResult = ReturnType<typeof useConfigurePluginMutation>;
type ConfigurePluginMutationResult = Apollo.MutationResult<ConfigurePluginMutation>;
type ConfigurePluginMutationOptions = Apollo.BaseMutationOptions<ConfigurePluginMutation, ConfigurePluginMutationVariables>;
const SetPluginsEnabledDocument = gql`
    mutation SetPluginsEnabled($enabledMap: BoolMap!) {
  setPluginsEnabled(enabledMap: $enabledMap)
}
    `;
type SetPluginsEnabledMutationFn = Apollo.MutationFunction<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>;

/**
 * __useSetPluginsEnabledMutation__
 *
 * To run a mutation, you first call `useSetPluginsEnabledMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPluginsEnabledMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPluginsEnabledMutation, { data, loading, error }] = useSetPluginsEnabledMutation({
 *   variables: {
 *      enabledMap: // value for 'enabledMap'
 *   },
 * });
 */
function useSetPluginsEnabledMutation(baseOptions?: Apollo.MutationHookOptions<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>(SetPluginsEnabledDocument, options);
      }
type SetPluginsEnabledMutationHookResult = ReturnType<typeof useSetPluginsEnabledMutation>;
type SetPluginsEnabledMutationResult = Apollo.MutationResult<SetPluginsEnabledMutation>;
type SetPluginsEnabledMutationOptions = Apollo.BaseMutationOptions<SetPluginsEnabledMutation, SetPluginsEnabledMutationVariables>;
const InstallPluginPackagesDocument = gql`
    mutation InstallPluginPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Plugin, packages: $packages)
}
    `;
type InstallPluginPackagesMutationFn = Apollo.MutationFunction<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>;

/**
 * __useInstallPluginPackagesMutation__
 *
 * To run a mutation, you first call `useInstallPluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstallPluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [installPluginPackagesMutation, { data, loading, error }] = useInstallPluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useInstallPluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>(InstallPluginPackagesDocument, options);
      }
type InstallPluginPackagesMutationHookResult = ReturnType<typeof useInstallPluginPackagesMutation>;
type InstallPluginPackagesMutationResult = Apollo.MutationResult<InstallPluginPackagesMutation>;
type InstallPluginPackagesMutationOptions = Apollo.BaseMutationOptions<InstallPluginPackagesMutation, InstallPluginPackagesMutationVariables>;
const UpdatePluginPackagesDocument = gql`
    mutation UpdatePluginPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Plugin, packages: $packages)
}
    `;
type UpdatePluginPackagesMutationFn = Apollo.MutationFunction<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>;

/**
 * __useUpdatePluginPackagesMutation__
 *
 * To run a mutation, you first call `useUpdatePluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePluginPackagesMutation, { data, loading, error }] = useUpdatePluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useUpdatePluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>(UpdatePluginPackagesDocument, options);
      }
type UpdatePluginPackagesMutationHookResult = ReturnType<typeof useUpdatePluginPackagesMutation>;
type UpdatePluginPackagesMutationResult = Apollo.MutationResult<UpdatePluginPackagesMutation>;
type UpdatePluginPackagesMutationOptions = Apollo.BaseMutationOptions<UpdatePluginPackagesMutation, UpdatePluginPackagesMutationVariables>;
const UninstallPluginPackagesDocument = gql`
    mutation UninstallPluginPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Plugin, packages: $packages)
}
    `;
type UninstallPluginPackagesMutationFn = Apollo.MutationFunction<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>;

/**
 * __useUninstallPluginPackagesMutation__
 *
 * To run a mutation, you first call `useUninstallPluginPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUninstallPluginPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uninstallPluginPackagesMutation, { data, loading, error }] = useUninstallPluginPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useUninstallPluginPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>(UninstallPluginPackagesDocument, options);
      }
type UninstallPluginPackagesMutationHookResult = ReturnType<typeof useUninstallPluginPackagesMutation>;
type UninstallPluginPackagesMutationResult = Apollo.MutationResult<UninstallPluginPackagesMutation>;
type UninstallPluginPackagesMutationOptions = Apollo.BaseMutationOptions<UninstallPluginPackagesMutation, UninstallPluginPackagesMutationVariables>;
const SceneMarkerCreateDocument = gql`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;
type SceneMarkerCreateMutationFn = Apollo.MutationFunction<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>;

/**
 * __useSceneMarkerCreateMutation__
 *
 * To run a mutation, you first call `useSceneMarkerCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerCreateMutation, { data, loading, error }] = useSceneMarkerCreateMutation({
 *   variables: {
 *      title: // value for 'title'
 *      seconds: // value for 'seconds'
 *      end_seconds: // value for 'end_seconds'
 *      scene_id: // value for 'scene_id'
 *      primary_tag_id: // value for 'primary_tag_id'
 *      tag_ids: // value for 'tag_ids'
 *   },
 * });
 */
function useSceneMarkerCreateMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>(SceneMarkerCreateDocument, options);
      }
type SceneMarkerCreateMutationHookResult = ReturnType<typeof useSceneMarkerCreateMutation>;
type SceneMarkerCreateMutationResult = Apollo.MutationResult<SceneMarkerCreateMutation>;
type SceneMarkerCreateMutationOptions = Apollo.BaseMutationOptions<SceneMarkerCreateMutation, SceneMarkerCreateMutationVariables>;
const SceneMarkerUpdateDocument = gql`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $end_seconds: Float, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, end_seconds: $end_seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;
type SceneMarkerUpdateMutationFn = Apollo.MutationFunction<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>;

/**
 * __useSceneMarkerUpdateMutation__
 *
 * To run a mutation, you first call `useSceneMarkerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerUpdateMutation, { data, loading, error }] = useSceneMarkerUpdateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      seconds: // value for 'seconds'
 *      end_seconds: // value for 'end_seconds'
 *      scene_id: // value for 'scene_id'
 *      primary_tag_id: // value for 'primary_tag_id'
 *      tag_ids: // value for 'tag_ids'
 *   },
 * });
 */
function useSceneMarkerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>(SceneMarkerUpdateDocument, options);
      }
type SceneMarkerUpdateMutationHookResult = ReturnType<typeof useSceneMarkerUpdateMutation>;
type SceneMarkerUpdateMutationResult = Apollo.MutationResult<SceneMarkerUpdateMutation>;
type SceneMarkerUpdateMutationOptions = Apollo.BaseMutationOptions<SceneMarkerUpdateMutation, SceneMarkerUpdateMutationVariables>;
const BulkSceneMarkerUpdateDocument = gql`
    mutation BulkSceneMarkerUpdate($input: BulkSceneMarkerUpdateInput!) {
  bulkSceneMarkerUpdate(input: $input) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;
type BulkSceneMarkerUpdateMutationFn = Apollo.MutationFunction<BulkSceneMarkerUpdateMutation, BulkSceneMarkerUpdateMutationVariables>;

/**
 * __useBulkSceneMarkerUpdateMutation__
 *
 * To run a mutation, you first call `useBulkSceneMarkerUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkSceneMarkerUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkSceneMarkerUpdateMutation, { data, loading, error }] = useBulkSceneMarkerUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkSceneMarkerUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkSceneMarkerUpdateMutation, BulkSceneMarkerUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkSceneMarkerUpdateMutation, BulkSceneMarkerUpdateMutationVariables>(BulkSceneMarkerUpdateDocument, options);
      }
type BulkSceneMarkerUpdateMutationHookResult = ReturnType<typeof useBulkSceneMarkerUpdateMutation>;
type BulkSceneMarkerUpdateMutationResult = Apollo.MutationResult<BulkSceneMarkerUpdateMutation>;
type BulkSceneMarkerUpdateMutationOptions = Apollo.BaseMutationOptions<BulkSceneMarkerUpdateMutation, BulkSceneMarkerUpdateMutationVariables>;
const SceneMarkerDestroyDocument = gql`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;
type SceneMarkerDestroyMutationFn = Apollo.MutationFunction<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>;

/**
 * __useSceneMarkerDestroyMutation__
 *
 * To run a mutation, you first call `useSceneMarkerDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkerDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkerDestroyMutation, { data, loading, error }] = useSceneMarkerDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useSceneMarkerDestroyMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>(SceneMarkerDestroyDocument, options);
      }
type SceneMarkerDestroyMutationHookResult = ReturnType<typeof useSceneMarkerDestroyMutation>;
type SceneMarkerDestroyMutationResult = Apollo.MutationResult<SceneMarkerDestroyMutation>;
type SceneMarkerDestroyMutationOptions = Apollo.BaseMutationOptions<SceneMarkerDestroyMutation, SceneMarkerDestroyMutationVariables>;
const SceneMarkersDestroyDocument = gql`
    mutation SceneMarkersDestroy($ids: [ID!]!) {
  sceneMarkersDestroy(ids: $ids)
}
    `;
type SceneMarkersDestroyMutationFn = Apollo.MutationFunction<SceneMarkersDestroyMutation, SceneMarkersDestroyMutationVariables>;

/**
 * __useSceneMarkersDestroyMutation__
 *
 * To run a mutation, you first call `useSceneMarkersDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMarkersDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMarkersDestroyMutation, { data, loading, error }] = useSceneMarkersDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useSceneMarkersDestroyMutation(baseOptions?: Apollo.MutationHookOptions<SceneMarkersDestroyMutation, SceneMarkersDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMarkersDestroyMutation, SceneMarkersDestroyMutationVariables>(SceneMarkersDestroyDocument, options);
      }
type SceneMarkersDestroyMutationHookResult = ReturnType<typeof useSceneMarkersDestroyMutation>;
type SceneMarkersDestroyMutationResult = Apollo.MutationResult<SceneMarkersDestroyMutation>;
type SceneMarkersDestroyMutationOptions = Apollo.BaseMutationOptions<SceneMarkersDestroyMutation, SceneMarkersDestroyMutationVariables>;
const SceneCreateDocument = gql`
    mutation SceneCreate($input: SceneCreateInput!) {
  sceneCreate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
type SceneCreateMutationFn = Apollo.MutationFunction<SceneCreateMutation, SceneCreateMutationVariables>;

/**
 * __useSceneCreateMutation__
 *
 * To run a mutation, you first call `useSceneCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneCreateMutation, { data, loading, error }] = useSceneCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSceneCreateMutation(baseOptions?: Apollo.MutationHookOptions<SceneCreateMutation, SceneCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneCreateMutation, SceneCreateMutationVariables>(SceneCreateDocument, options);
      }
type SceneCreateMutationHookResult = ReturnType<typeof useSceneCreateMutation>;
type SceneCreateMutationResult = Apollo.MutationResult<SceneCreateMutation>;
type SceneCreateMutationOptions = Apollo.BaseMutationOptions<SceneCreateMutation, SceneCreateMutationVariables>;
const SceneUpdateDocument = gql`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
type SceneUpdateMutationFn = Apollo.MutationFunction<SceneUpdateMutation, SceneUpdateMutationVariables>;

/**
 * __useSceneUpdateMutation__
 *
 * To run a mutation, you first call `useSceneUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneUpdateMutation, { data, loading, error }] = useSceneUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSceneUpdateMutation(baseOptions?: Apollo.MutationHookOptions<SceneUpdateMutation, SceneUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneUpdateMutation, SceneUpdateMutationVariables>(SceneUpdateDocument, options);
      }
type SceneUpdateMutationHookResult = ReturnType<typeof useSceneUpdateMutation>;
type SceneUpdateMutationResult = Apollo.MutationResult<SceneUpdateMutation>;
type SceneUpdateMutationOptions = Apollo.BaseMutationOptions<SceneUpdateMutation, SceneUpdateMutationVariables>;
const BulkSceneUpdateDocument = gql`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
type BulkSceneUpdateMutationFn = Apollo.MutationFunction<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>;

/**
 * __useBulkSceneUpdateMutation__
 *
 * To run a mutation, you first call `useBulkSceneUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkSceneUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkSceneUpdateMutation, { data, loading, error }] = useBulkSceneUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkSceneUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>(BulkSceneUpdateDocument, options);
      }
type BulkSceneUpdateMutationHookResult = ReturnType<typeof useBulkSceneUpdateMutation>;
type BulkSceneUpdateMutationResult = Apollo.MutationResult<BulkSceneUpdateMutation>;
type BulkSceneUpdateMutationOptions = Apollo.BaseMutationOptions<BulkSceneUpdateMutation, BulkSceneUpdateMutationVariables>;
const ScenesUpdateDocument = gql`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;
type ScenesUpdateMutationFn = Apollo.MutationFunction<ScenesUpdateMutation, ScenesUpdateMutationVariables>;

/**
 * __useScenesUpdateMutation__
 *
 * To run a mutation, you first call `useScenesUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScenesUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scenesUpdateMutation, { data, loading, error }] = useScenesUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useScenesUpdateMutation(baseOptions?: Apollo.MutationHookOptions<ScenesUpdateMutation, ScenesUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScenesUpdateMutation, ScenesUpdateMutationVariables>(ScenesUpdateDocument, options);
      }
type ScenesUpdateMutationHookResult = ReturnType<typeof useScenesUpdateMutation>;
type ScenesUpdateMutationResult = Apollo.MutationResult<ScenesUpdateMutation>;
type ScenesUpdateMutationOptions = Apollo.BaseMutationOptions<ScenesUpdateMutation, ScenesUpdateMutationVariables>;
const SceneSaveActivityDocument = gql`
    mutation SceneSaveActivity($id: ID!, $resume_time: Float, $playDuration: Float) {
  sceneSaveActivity(
    id: $id
    resume_time: $resume_time
    playDuration: $playDuration
  )
}
    `;
type SceneSaveActivityMutationFn = Apollo.MutationFunction<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>;

/**
 * __useSceneSaveActivityMutation__
 *
 * To run a mutation, you first call `useSceneSaveActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneSaveActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneSaveActivityMutation, { data, loading, error }] = useSceneSaveActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      resume_time: // value for 'resume_time'
 *      playDuration: // value for 'playDuration'
 *   },
 * });
 */
function useSceneSaveActivityMutation(baseOptions?: Apollo.MutationHookOptions<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>(SceneSaveActivityDocument, options);
      }
type SceneSaveActivityMutationHookResult = ReturnType<typeof useSceneSaveActivityMutation>;
type SceneSaveActivityMutationResult = Apollo.MutationResult<SceneSaveActivityMutation>;
type SceneSaveActivityMutationOptions = Apollo.BaseMutationOptions<SceneSaveActivityMutation, SceneSaveActivityMutationVariables>;
const SceneResetActivityDocument = gql`
    mutation SceneResetActivity($id: ID!, $reset_resume: Boolean!, $reset_duration: Boolean!) {
  sceneResetActivity(
    id: $id
    reset_resume: $reset_resume
    reset_duration: $reset_duration
  )
}
    `;
type SceneResetActivityMutationFn = Apollo.MutationFunction<SceneResetActivityMutation, SceneResetActivityMutationVariables>;

/**
 * __useSceneResetActivityMutation__
 *
 * To run a mutation, you first call `useSceneResetActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneResetActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneResetActivityMutation, { data, loading, error }] = useSceneResetActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      reset_resume: // value for 'reset_resume'
 *      reset_duration: // value for 'reset_duration'
 *   },
 * });
 */
function useSceneResetActivityMutation(baseOptions?: Apollo.MutationHookOptions<SceneResetActivityMutation, SceneResetActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneResetActivityMutation, SceneResetActivityMutationVariables>(SceneResetActivityDocument, options);
      }
type SceneResetActivityMutationHookResult = ReturnType<typeof useSceneResetActivityMutation>;
type SceneResetActivityMutationResult = Apollo.MutationResult<SceneResetActivityMutation>;
type SceneResetActivityMutationOptions = Apollo.BaseMutationOptions<SceneResetActivityMutation, SceneResetActivityMutationVariables>;
const SceneAddPlayDocument = gql`
    mutation SceneAddPlay($id: ID!, $times: [Timestamp!]) {
  sceneAddPlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
type SceneAddPlayMutationFn = Apollo.MutationFunction<SceneAddPlayMutation, SceneAddPlayMutationVariables>;

/**
 * __useSceneAddPlayMutation__
 *
 * To run a mutation, you first call `useSceneAddPlayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneAddPlayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneAddPlayMutation, { data, loading, error }] = useSceneAddPlayMutation({
 *   variables: {
 *      id: // value for 'id'
 *      times: // value for 'times'
 *   },
 * });
 */
function useSceneAddPlayMutation(baseOptions?: Apollo.MutationHookOptions<SceneAddPlayMutation, SceneAddPlayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneAddPlayMutation, SceneAddPlayMutationVariables>(SceneAddPlayDocument, options);
      }
type SceneAddPlayMutationHookResult = ReturnType<typeof useSceneAddPlayMutation>;
type SceneAddPlayMutationResult = Apollo.MutationResult<SceneAddPlayMutation>;
type SceneAddPlayMutationOptions = Apollo.BaseMutationOptions<SceneAddPlayMutation, SceneAddPlayMutationVariables>;
const SceneDeletePlayDocument = gql`
    mutation SceneDeletePlay($id: ID!, $times: [Timestamp!]) {
  sceneDeletePlay(id: $id, times: $times) {
    count
    history
  }
}
    `;
type SceneDeletePlayMutationFn = Apollo.MutationFunction<SceneDeletePlayMutation, SceneDeletePlayMutationVariables>;

/**
 * __useSceneDeletePlayMutation__
 *
 * To run a mutation, you first call `useSceneDeletePlayMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneDeletePlayMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneDeletePlayMutation, { data, loading, error }] = useSceneDeletePlayMutation({
 *   variables: {
 *      id: // value for 'id'
 *      times: // value for 'times'
 *   },
 * });
 */
function useSceneDeletePlayMutation(baseOptions?: Apollo.MutationHookOptions<SceneDeletePlayMutation, SceneDeletePlayMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneDeletePlayMutation, SceneDeletePlayMutationVariables>(SceneDeletePlayDocument, options);
      }
type SceneDeletePlayMutationHookResult = ReturnType<typeof useSceneDeletePlayMutation>;
type SceneDeletePlayMutationResult = Apollo.MutationResult<SceneDeletePlayMutation>;
type SceneDeletePlayMutationOptions = Apollo.BaseMutationOptions<SceneDeletePlayMutation, SceneDeletePlayMutationVariables>;
const SceneResetPlayCountDocument = gql`
    mutation SceneResetPlayCount($id: ID!) {
  sceneResetPlayCount(id: $id)
}
    `;
type SceneResetPlayCountMutationFn = Apollo.MutationFunction<SceneResetPlayCountMutation, SceneResetPlayCountMutationVariables>;

/**
 * __useSceneResetPlayCountMutation__
 *
 * To run a mutation, you first call `useSceneResetPlayCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneResetPlayCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneResetPlayCountMutation, { data, loading, error }] = useSceneResetPlayCountMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useSceneResetPlayCountMutation(baseOptions?: Apollo.MutationHookOptions<SceneResetPlayCountMutation, SceneResetPlayCountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneResetPlayCountMutation, SceneResetPlayCountMutationVariables>(SceneResetPlayCountDocument, options);
      }
type SceneResetPlayCountMutationHookResult = ReturnType<typeof useSceneResetPlayCountMutation>;
type SceneResetPlayCountMutationResult = Apollo.MutationResult<SceneResetPlayCountMutation>;
type SceneResetPlayCountMutationOptions = Apollo.BaseMutationOptions<SceneResetPlayCountMutation, SceneResetPlayCountMutationVariables>;
const SceneAddODocument = gql`
    mutation SceneAddO($id: ID!, $times: [Timestamp!]) {
  sceneAddO(id: $id, times: $times) {
    count
    history
  }
}
    `;
type SceneAddOMutationFn = Apollo.MutationFunction<SceneAddOMutation, SceneAddOMutationVariables>;

/**
 * __useSceneAddOMutation__
 *
 * To run a mutation, you first call `useSceneAddOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneAddOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneAddOMutation, { data, loading, error }] = useSceneAddOMutation({
 *   variables: {
 *      id: // value for 'id'
 *      times: // value for 'times'
 *   },
 * });
 */
function useSceneAddOMutation(baseOptions?: Apollo.MutationHookOptions<SceneAddOMutation, SceneAddOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneAddOMutation, SceneAddOMutationVariables>(SceneAddODocument, options);
      }
type SceneAddOMutationHookResult = ReturnType<typeof useSceneAddOMutation>;
type SceneAddOMutationResult = Apollo.MutationResult<SceneAddOMutation>;
type SceneAddOMutationOptions = Apollo.BaseMutationOptions<SceneAddOMutation, SceneAddOMutationVariables>;
const SceneDeleteODocument = gql`
    mutation SceneDeleteO($id: ID!, $times: [Timestamp!]) {
  sceneDeleteO(id: $id, times: $times) {
    count
    history
  }
}
    `;
type SceneDeleteOMutationFn = Apollo.MutationFunction<SceneDeleteOMutation, SceneDeleteOMutationVariables>;

/**
 * __useSceneDeleteOMutation__
 *
 * To run a mutation, you first call `useSceneDeleteOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneDeleteOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneDeleteOMutation, { data, loading, error }] = useSceneDeleteOMutation({
 *   variables: {
 *      id: // value for 'id'
 *      times: // value for 'times'
 *   },
 * });
 */
function useSceneDeleteOMutation(baseOptions?: Apollo.MutationHookOptions<SceneDeleteOMutation, SceneDeleteOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneDeleteOMutation, SceneDeleteOMutationVariables>(SceneDeleteODocument, options);
      }
type SceneDeleteOMutationHookResult = ReturnType<typeof useSceneDeleteOMutation>;
type SceneDeleteOMutationResult = Apollo.MutationResult<SceneDeleteOMutation>;
type SceneDeleteOMutationOptions = Apollo.BaseMutationOptions<SceneDeleteOMutation, SceneDeleteOMutationVariables>;
const SceneResetODocument = gql`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;
type SceneResetOMutationFn = Apollo.MutationFunction<SceneResetOMutation, SceneResetOMutationVariables>;

/**
 * __useSceneResetOMutation__
 *
 * To run a mutation, you first call `useSceneResetOMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneResetOMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneResetOMutation, { data, loading, error }] = useSceneResetOMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useSceneResetOMutation(baseOptions?: Apollo.MutationHookOptions<SceneResetOMutation, SceneResetOMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneResetOMutation, SceneResetOMutationVariables>(SceneResetODocument, options);
      }
type SceneResetOMutationHookResult = ReturnType<typeof useSceneResetOMutation>;
type SceneResetOMutationResult = Apollo.MutationResult<SceneResetOMutation>;
type SceneResetOMutationOptions = Apollo.BaseMutationOptions<SceneResetOMutation, SceneResetOMutationVariables>;
const SceneDestroyDocument = gql`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
type SceneDestroyMutationFn = Apollo.MutationFunction<SceneDestroyMutation, SceneDestroyMutationVariables>;

/**
 * __useSceneDestroyMutation__
 *
 * To run a mutation, you first call `useSceneDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneDestroyMutation, { data, loading, error }] = useSceneDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
function useSceneDestroyMutation(baseOptions?: Apollo.MutationHookOptions<SceneDestroyMutation, SceneDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneDestroyMutation, SceneDestroyMutationVariables>(SceneDestroyDocument, options);
      }
type SceneDestroyMutationHookResult = ReturnType<typeof useSceneDestroyMutation>;
type SceneDestroyMutationResult = Apollo.MutationResult<SceneDestroyMutation>;
type SceneDestroyMutationOptions = Apollo.BaseMutationOptions<SceneDestroyMutation, SceneDestroyMutationVariables>;
const ScenesDestroyDocument = gql`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;
type ScenesDestroyMutationFn = Apollo.MutationFunction<ScenesDestroyMutation, ScenesDestroyMutationVariables>;

/**
 * __useScenesDestroyMutation__
 *
 * To run a mutation, you first call `useScenesDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useScenesDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [scenesDestroyMutation, { data, loading, error }] = useScenesDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      delete_file: // value for 'delete_file'
 *      delete_generated: // value for 'delete_generated'
 *   },
 * });
 */
function useScenesDestroyMutation(baseOptions?: Apollo.MutationHookOptions<ScenesDestroyMutation, ScenesDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ScenesDestroyMutation, ScenesDestroyMutationVariables>(ScenesDestroyDocument, options);
      }
type ScenesDestroyMutationHookResult = ReturnType<typeof useScenesDestroyMutation>;
type ScenesDestroyMutationResult = Apollo.MutationResult<ScenesDestroyMutation>;
type ScenesDestroyMutationOptions = Apollo.BaseMutationOptions<ScenesDestroyMutation, ScenesDestroyMutationVariables>;
const SceneGenerateScreenshotDocument = gql`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;
type SceneGenerateScreenshotMutationFn = Apollo.MutationFunction<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>;

/**
 * __useSceneGenerateScreenshotMutation__
 *
 * To run a mutation, you first call `useSceneGenerateScreenshotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneGenerateScreenshotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneGenerateScreenshotMutation, { data, loading, error }] = useSceneGenerateScreenshotMutation({
 *   variables: {
 *      id: // value for 'id'
 *      at: // value for 'at'
 *   },
 * });
 */
function useSceneGenerateScreenshotMutation(baseOptions?: Apollo.MutationHookOptions<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>(SceneGenerateScreenshotDocument, options);
      }
type SceneGenerateScreenshotMutationHookResult = ReturnType<typeof useSceneGenerateScreenshotMutation>;
type SceneGenerateScreenshotMutationResult = Apollo.MutationResult<SceneGenerateScreenshotMutation>;
type SceneGenerateScreenshotMutationOptions = Apollo.BaseMutationOptions<SceneGenerateScreenshotMutation, SceneGenerateScreenshotMutationVariables>;
const SceneAssignFileDocument = gql`
    mutation SceneAssignFile($input: AssignSceneFileInput!) {
  sceneAssignFile(input: $input)
}
    `;
type SceneAssignFileMutationFn = Apollo.MutationFunction<SceneAssignFileMutation, SceneAssignFileMutationVariables>;

/**
 * __useSceneAssignFileMutation__
 *
 * To run a mutation, you first call `useSceneAssignFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneAssignFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneAssignFileMutation, { data, loading, error }] = useSceneAssignFileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSceneAssignFileMutation(baseOptions?: Apollo.MutationHookOptions<SceneAssignFileMutation, SceneAssignFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneAssignFileMutation, SceneAssignFileMutationVariables>(SceneAssignFileDocument, options);
      }
type SceneAssignFileMutationHookResult = ReturnType<typeof useSceneAssignFileMutation>;
type SceneAssignFileMutationResult = Apollo.MutationResult<SceneAssignFileMutation>;
type SceneAssignFileMutationOptions = Apollo.BaseMutationOptions<SceneAssignFileMutation, SceneAssignFileMutationVariables>;
const SceneMergeDocument = gql`
    mutation SceneMerge($input: SceneMergeInput!) {
  sceneMerge(input: $input) {
    id
  }
}
    `;
type SceneMergeMutationFn = Apollo.MutationFunction<SceneMergeMutation, SceneMergeMutationVariables>;

/**
 * __useSceneMergeMutation__
 *
 * To run a mutation, you first call `useSceneMergeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSceneMergeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sceneMergeMutation, { data, loading, error }] = useSceneMergeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSceneMergeMutation(baseOptions?: Apollo.MutationHookOptions<SceneMergeMutation, SceneMergeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SceneMergeMutation, SceneMergeMutationVariables>(SceneMergeDocument, options);
      }
type SceneMergeMutationHookResult = ReturnType<typeof useSceneMergeMutation>;
type SceneMergeMutationResult = Apollo.MutationResult<SceneMergeMutation>;
type SceneMergeMutationOptions = Apollo.BaseMutationOptions<SceneMergeMutation, SceneMergeMutationVariables>;
const ReloadScrapersDocument = gql`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;
type ReloadScrapersMutationFn = Apollo.MutationFunction<ReloadScrapersMutation, ReloadScrapersMutationVariables>;

/**
 * __useReloadScrapersMutation__
 *
 * To run a mutation, you first call `useReloadScrapersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReloadScrapersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reloadScrapersMutation, { data, loading, error }] = useReloadScrapersMutation({
 *   variables: {
 *   },
 * });
 */
function useReloadScrapersMutation(baseOptions?: Apollo.MutationHookOptions<ReloadScrapersMutation, ReloadScrapersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReloadScrapersMutation, ReloadScrapersMutationVariables>(ReloadScrapersDocument, options);
      }
type ReloadScrapersMutationHookResult = ReturnType<typeof useReloadScrapersMutation>;
type ReloadScrapersMutationResult = Apollo.MutationResult<ReloadScrapersMutation>;
type ReloadScrapersMutationOptions = Apollo.BaseMutationOptions<ReloadScrapersMutation, ReloadScrapersMutationVariables>;
const InstallScraperPackagesDocument = gql`
    mutation InstallScraperPackages($packages: [PackageSpecInput!]!) {
  installPackages(type: Scraper, packages: $packages)
}
    `;
type InstallScraperPackagesMutationFn = Apollo.MutationFunction<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>;

/**
 * __useInstallScraperPackagesMutation__
 *
 * To run a mutation, you first call `useInstallScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInstallScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [installScraperPackagesMutation, { data, loading, error }] = useInstallScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useInstallScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>(InstallScraperPackagesDocument, options);
      }
type InstallScraperPackagesMutationHookResult = ReturnType<typeof useInstallScraperPackagesMutation>;
type InstallScraperPackagesMutationResult = Apollo.MutationResult<InstallScraperPackagesMutation>;
type InstallScraperPackagesMutationOptions = Apollo.BaseMutationOptions<InstallScraperPackagesMutation, InstallScraperPackagesMutationVariables>;
const UpdateScraperPackagesDocument = gql`
    mutation UpdateScraperPackages($packages: [PackageSpecInput!]!) {
  updatePackages(type: Scraper, packages: $packages)
}
    `;
type UpdateScraperPackagesMutationFn = Apollo.MutationFunction<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>;

/**
 * __useUpdateScraperPackagesMutation__
 *
 * To run a mutation, you first call `useUpdateScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateScraperPackagesMutation, { data, loading, error }] = useUpdateScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useUpdateScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>(UpdateScraperPackagesDocument, options);
      }
type UpdateScraperPackagesMutationHookResult = ReturnType<typeof useUpdateScraperPackagesMutation>;
type UpdateScraperPackagesMutationResult = Apollo.MutationResult<UpdateScraperPackagesMutation>;
type UpdateScraperPackagesMutationOptions = Apollo.BaseMutationOptions<UpdateScraperPackagesMutation, UpdateScraperPackagesMutationVariables>;
const UninstallScraperPackagesDocument = gql`
    mutation UninstallScraperPackages($packages: [PackageSpecInput!]!) {
  uninstallPackages(type: Scraper, packages: $packages)
}
    `;
type UninstallScraperPackagesMutationFn = Apollo.MutationFunction<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>;

/**
 * __useUninstallScraperPackagesMutation__
 *
 * To run a mutation, you first call `useUninstallScraperPackagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUninstallScraperPackagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uninstallScraperPackagesMutation, { data, loading, error }] = useUninstallScraperPackagesMutation({
 *   variables: {
 *      packages: // value for 'packages'
 *   },
 * });
 */
function useUninstallScraperPackagesMutation(baseOptions?: Apollo.MutationHookOptions<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>(UninstallScraperPackagesDocument, options);
      }
type UninstallScraperPackagesMutationHookResult = ReturnType<typeof useUninstallScraperPackagesMutation>;
type UninstallScraperPackagesMutationResult = Apollo.MutationResult<UninstallScraperPackagesMutation>;
type UninstallScraperPackagesMutationOptions = Apollo.BaseMutationOptions<UninstallScraperPackagesMutation, UninstallScraperPackagesMutationVariables>;
const SubmitStashBoxFingerprintsDocument = gql`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;
type SubmitStashBoxFingerprintsMutationFn = Apollo.MutationFunction<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>;

/**
 * __useSubmitStashBoxFingerprintsMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxFingerprintsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxFingerprintsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxFingerprintsMutation, { data, loading, error }] = useSubmitStashBoxFingerprintsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSubmitStashBoxFingerprintsMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>(SubmitStashBoxFingerprintsDocument, options);
      }
type SubmitStashBoxFingerprintsMutationHookResult = ReturnType<typeof useSubmitStashBoxFingerprintsMutation>;
type SubmitStashBoxFingerprintsMutationResult = Apollo.MutationResult<SubmitStashBoxFingerprintsMutation>;
type SubmitStashBoxFingerprintsMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxFingerprintsMutation, SubmitStashBoxFingerprintsMutationVariables>;
const StashBoxBatchPerformerTagDocument = gql`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;
type StashBoxBatchPerformerTagMutationFn = Apollo.MutationFunction<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>;

/**
 * __useStashBoxBatchPerformerTagMutation__
 *
 * To run a mutation, you first call `useStashBoxBatchPerformerTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStashBoxBatchPerformerTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stashBoxBatchPerformerTagMutation, { data, loading, error }] = useStashBoxBatchPerformerTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useStashBoxBatchPerformerTagMutation(baseOptions?: Apollo.MutationHookOptions<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>(StashBoxBatchPerformerTagDocument, options);
      }
type StashBoxBatchPerformerTagMutationHookResult = ReturnType<typeof useStashBoxBatchPerformerTagMutation>;
type StashBoxBatchPerformerTagMutationResult = Apollo.MutationResult<StashBoxBatchPerformerTagMutation>;
type StashBoxBatchPerformerTagMutationOptions = Apollo.BaseMutationOptions<StashBoxBatchPerformerTagMutation, StashBoxBatchPerformerTagMutationVariables>;
const StashBoxBatchStudioTagDocument = gql`
    mutation StashBoxBatchStudioTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchStudioTag(input: $input)
}
    `;
type StashBoxBatchStudioTagMutationFn = Apollo.MutationFunction<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>;

/**
 * __useStashBoxBatchStudioTagMutation__
 *
 * To run a mutation, you first call `useStashBoxBatchStudioTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStashBoxBatchStudioTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stashBoxBatchStudioTagMutation, { data, loading, error }] = useStashBoxBatchStudioTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useStashBoxBatchStudioTagMutation(baseOptions?: Apollo.MutationHookOptions<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>(StashBoxBatchStudioTagDocument, options);
      }
type StashBoxBatchStudioTagMutationHookResult = ReturnType<typeof useStashBoxBatchStudioTagMutation>;
type StashBoxBatchStudioTagMutationResult = Apollo.MutationResult<StashBoxBatchStudioTagMutation>;
type StashBoxBatchStudioTagMutationOptions = Apollo.BaseMutationOptions<StashBoxBatchStudioTagMutation, StashBoxBatchStudioTagMutationVariables>;
const StashBoxBatchTagTagDocument = gql`
    mutation StashBoxBatchTagTag($input: StashBoxBatchTagInput!) {
  stashBoxBatchTagTag(input: $input)
}
    `;
type StashBoxBatchTagTagMutationFn = Apollo.MutationFunction<StashBoxBatchTagTagMutation, StashBoxBatchTagTagMutationVariables>;

/**
 * __useStashBoxBatchTagTagMutation__
 *
 * To run a mutation, you first call `useStashBoxBatchTagTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStashBoxBatchTagTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stashBoxBatchTagTagMutation, { data, loading, error }] = useStashBoxBatchTagTagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useStashBoxBatchTagTagMutation(baseOptions?: Apollo.MutationHookOptions<StashBoxBatchTagTagMutation, StashBoxBatchTagTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StashBoxBatchTagTagMutation, StashBoxBatchTagTagMutationVariables>(StashBoxBatchTagTagDocument, options);
      }
type StashBoxBatchTagTagMutationHookResult = ReturnType<typeof useStashBoxBatchTagTagMutation>;
type StashBoxBatchTagTagMutationResult = Apollo.MutationResult<StashBoxBatchTagTagMutation>;
type StashBoxBatchTagTagMutationOptions = Apollo.BaseMutationOptions<StashBoxBatchTagTagMutation, StashBoxBatchTagTagMutationVariables>;
const SubmitStashBoxSceneDraftDocument = gql`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;
type SubmitStashBoxSceneDraftMutationFn = Apollo.MutationFunction<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>;

/**
 * __useSubmitStashBoxSceneDraftMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxSceneDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxSceneDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxSceneDraftMutation, { data, loading, error }] = useSubmitStashBoxSceneDraftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSubmitStashBoxSceneDraftMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>(SubmitStashBoxSceneDraftDocument, options);
      }
type SubmitStashBoxSceneDraftMutationHookResult = ReturnType<typeof useSubmitStashBoxSceneDraftMutation>;
type SubmitStashBoxSceneDraftMutationResult = Apollo.MutationResult<SubmitStashBoxSceneDraftMutation>;
type SubmitStashBoxSceneDraftMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxSceneDraftMutation, SubmitStashBoxSceneDraftMutationVariables>;
const SubmitStashBoxPerformerDraftDocument = gql`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;
type SubmitStashBoxPerformerDraftMutationFn = Apollo.MutationFunction<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>;

/**
 * __useSubmitStashBoxPerformerDraftMutation__
 *
 * To run a mutation, you first call `useSubmitStashBoxPerformerDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitStashBoxPerformerDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitStashBoxPerformerDraftMutation, { data, loading, error }] = useSubmitStashBoxPerformerDraftMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useSubmitStashBoxPerformerDraftMutation(baseOptions?: Apollo.MutationHookOptions<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>(SubmitStashBoxPerformerDraftDocument, options);
      }
type SubmitStashBoxPerformerDraftMutationHookResult = ReturnType<typeof useSubmitStashBoxPerformerDraftMutation>;
type SubmitStashBoxPerformerDraftMutationResult = Apollo.MutationResult<SubmitStashBoxPerformerDraftMutation>;
type SubmitStashBoxPerformerDraftMutationOptions = Apollo.BaseMutationOptions<SubmitStashBoxPerformerDraftMutation, SubmitStashBoxPerformerDraftMutationVariables>;
const StudioCreateDocument = gql`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;
type StudioCreateMutationFn = Apollo.MutationFunction<StudioCreateMutation, StudioCreateMutationVariables>;

/**
 * __useStudioCreateMutation__
 *
 * To run a mutation, you first call `useStudioCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioCreateMutation, { data, loading, error }] = useStudioCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useStudioCreateMutation(baseOptions?: Apollo.MutationHookOptions<StudioCreateMutation, StudioCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioCreateMutation, StudioCreateMutationVariables>(StudioCreateDocument, options);
      }
type StudioCreateMutationHookResult = ReturnType<typeof useStudioCreateMutation>;
type StudioCreateMutationResult = Apollo.MutationResult<StudioCreateMutation>;
type StudioCreateMutationOptions = Apollo.BaseMutationOptions<StudioCreateMutation, StudioCreateMutationVariables>;
const StudioUpdateDocument = gql`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;
type StudioUpdateMutationFn = Apollo.MutationFunction<StudioUpdateMutation, StudioUpdateMutationVariables>;

/**
 * __useStudioUpdateMutation__
 *
 * To run a mutation, you first call `useStudioUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioUpdateMutation, { data, loading, error }] = useStudioUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useStudioUpdateMutation(baseOptions?: Apollo.MutationHookOptions<StudioUpdateMutation, StudioUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioUpdateMutation, StudioUpdateMutationVariables>(StudioUpdateDocument, options);
      }
type StudioUpdateMutationHookResult = ReturnType<typeof useStudioUpdateMutation>;
type StudioUpdateMutationResult = Apollo.MutationResult<StudioUpdateMutation>;
type StudioUpdateMutationOptions = Apollo.BaseMutationOptions<StudioUpdateMutation, StudioUpdateMutationVariables>;
const BulkStudioUpdateDocument = gql`
    mutation BulkStudioUpdate($input: BulkStudioUpdateInput!) {
  bulkStudioUpdate(input: $input) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;
type BulkStudioUpdateMutationFn = Apollo.MutationFunction<BulkStudioUpdateMutation, BulkStudioUpdateMutationVariables>;

/**
 * __useBulkStudioUpdateMutation__
 *
 * To run a mutation, you first call `useBulkStudioUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkStudioUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkStudioUpdateMutation, { data, loading, error }] = useBulkStudioUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkStudioUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkStudioUpdateMutation, BulkStudioUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkStudioUpdateMutation, BulkStudioUpdateMutationVariables>(BulkStudioUpdateDocument, options);
      }
type BulkStudioUpdateMutationHookResult = ReturnType<typeof useBulkStudioUpdateMutation>;
type BulkStudioUpdateMutationResult = Apollo.MutationResult<BulkStudioUpdateMutation>;
type BulkStudioUpdateMutationOptions = Apollo.BaseMutationOptions<BulkStudioUpdateMutation, BulkStudioUpdateMutationVariables>;
const StudioDestroyDocument = gql`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;
type StudioDestroyMutationFn = Apollo.MutationFunction<StudioDestroyMutation, StudioDestroyMutationVariables>;

/**
 * __useStudioDestroyMutation__
 *
 * To run a mutation, you first call `useStudioDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudioDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studioDestroyMutation, { data, loading, error }] = useStudioDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useStudioDestroyMutation(baseOptions?: Apollo.MutationHookOptions<StudioDestroyMutation, StudioDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudioDestroyMutation, StudioDestroyMutationVariables>(StudioDestroyDocument, options);
      }
type StudioDestroyMutationHookResult = ReturnType<typeof useStudioDestroyMutation>;
type StudioDestroyMutationResult = Apollo.MutationResult<StudioDestroyMutation>;
type StudioDestroyMutationOptions = Apollo.BaseMutationOptions<StudioDestroyMutation, StudioDestroyMutationVariables>;
const StudiosDestroyDocument = gql`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;
type StudiosDestroyMutationFn = Apollo.MutationFunction<StudiosDestroyMutation, StudiosDestroyMutationVariables>;

/**
 * __useStudiosDestroyMutation__
 *
 * To run a mutation, you first call `useStudiosDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStudiosDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [studiosDestroyMutation, { data, loading, error }] = useStudiosDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useStudiosDestroyMutation(baseOptions?: Apollo.MutationHookOptions<StudiosDestroyMutation, StudiosDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StudiosDestroyMutation, StudiosDestroyMutationVariables>(StudiosDestroyDocument, options);
      }
type StudiosDestroyMutationHookResult = ReturnType<typeof useStudiosDestroyMutation>;
type StudiosDestroyMutationResult = Apollo.MutationResult<StudiosDestroyMutation>;
type StudiosDestroyMutationOptions = Apollo.BaseMutationOptions<StudiosDestroyMutation, StudiosDestroyMutationVariables>;
const TagCreateDocument = gql`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
type TagCreateMutationFn = Apollo.MutationFunction<TagCreateMutation, TagCreateMutationVariables>;

/**
 * __useTagCreateMutation__
 *
 * To run a mutation, you first call `useTagCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagCreateMutation, { data, loading, error }] = useTagCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useTagCreateMutation(baseOptions?: Apollo.MutationHookOptions<TagCreateMutation, TagCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagCreateMutation, TagCreateMutationVariables>(TagCreateDocument, options);
      }
type TagCreateMutationHookResult = ReturnType<typeof useTagCreateMutation>;
type TagCreateMutationResult = Apollo.MutationResult<TagCreateMutation>;
type TagCreateMutationOptions = Apollo.BaseMutationOptions<TagCreateMutation, TagCreateMutationVariables>;
const TagDestroyDocument = gql`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;
type TagDestroyMutationFn = Apollo.MutationFunction<TagDestroyMutation, TagDestroyMutationVariables>;

/**
 * __useTagDestroyMutation__
 *
 * To run a mutation, you first call `useTagDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagDestroyMutation, { data, loading, error }] = useTagDestroyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useTagDestroyMutation(baseOptions?: Apollo.MutationHookOptions<TagDestroyMutation, TagDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagDestroyMutation, TagDestroyMutationVariables>(TagDestroyDocument, options);
      }
type TagDestroyMutationHookResult = ReturnType<typeof useTagDestroyMutation>;
type TagDestroyMutationResult = Apollo.MutationResult<TagDestroyMutation>;
type TagDestroyMutationOptions = Apollo.BaseMutationOptions<TagDestroyMutation, TagDestroyMutationVariables>;
const TagsDestroyDocument = gql`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;
type TagsDestroyMutationFn = Apollo.MutationFunction<TagsDestroyMutation, TagsDestroyMutationVariables>;

/**
 * __useTagsDestroyMutation__
 *
 * To run a mutation, you first call `useTagsDestroyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagsDestroyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagsDestroyMutation, { data, loading, error }] = useTagsDestroyMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useTagsDestroyMutation(baseOptions?: Apollo.MutationHookOptions<TagsDestroyMutation, TagsDestroyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagsDestroyMutation, TagsDestroyMutationVariables>(TagsDestroyDocument, options);
      }
type TagsDestroyMutationHookResult = ReturnType<typeof useTagsDestroyMutation>;
type TagsDestroyMutationResult = Apollo.MutationResult<TagsDestroyMutation>;
type TagsDestroyMutationOptions = Apollo.BaseMutationOptions<TagsDestroyMutation, TagsDestroyMutationVariables>;
const TagUpdateDocument = gql`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
type TagUpdateMutationFn = Apollo.MutationFunction<TagUpdateMutation, TagUpdateMutationVariables>;

/**
 * __useTagUpdateMutation__
 *
 * To run a mutation, you first call `useTagUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagUpdateMutation, { data, loading, error }] = useTagUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useTagUpdateMutation(baseOptions?: Apollo.MutationHookOptions<TagUpdateMutation, TagUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagUpdateMutation, TagUpdateMutationVariables>(TagUpdateDocument, options);
      }
type TagUpdateMutationHookResult = ReturnType<typeof useTagUpdateMutation>;
type TagUpdateMutationResult = Apollo.MutationResult<TagUpdateMutation>;
type TagUpdateMutationOptions = Apollo.BaseMutationOptions<TagUpdateMutation, TagUpdateMutationVariables>;
const BulkTagUpdateDocument = gql`
    mutation BulkTagUpdate($input: BulkTagUpdateInput!) {
  bulkTagUpdate(input: $input) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
type BulkTagUpdateMutationFn = Apollo.MutationFunction<BulkTagUpdateMutation, BulkTagUpdateMutationVariables>;

/**
 * __useBulkTagUpdateMutation__
 *
 * To run a mutation, you first call `useBulkTagUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkTagUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkTagUpdateMutation, { data, loading, error }] = useBulkTagUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useBulkTagUpdateMutation(baseOptions?: Apollo.MutationHookOptions<BulkTagUpdateMutation, BulkTagUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BulkTagUpdateMutation, BulkTagUpdateMutationVariables>(BulkTagUpdateDocument, options);
      }
type BulkTagUpdateMutationHookResult = ReturnType<typeof useBulkTagUpdateMutation>;
type BulkTagUpdateMutationResult = Apollo.MutationResult<BulkTagUpdateMutation>;
type BulkTagUpdateMutationOptions = Apollo.BaseMutationOptions<BulkTagUpdateMutation, BulkTagUpdateMutationVariables>;
const TagsMergeDocument = gql`
    mutation TagsMerge($source: [ID!]!, $destination: ID!, $values: TagUpdateInput) {
  tagsMerge(input: {source: $source, destination: $destination, values: $values}) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;
type TagsMergeMutationFn = Apollo.MutationFunction<TagsMergeMutation, TagsMergeMutationVariables>;

/**
 * __useTagsMergeMutation__
 *
 * To run a mutation, you first call `useTagsMergeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTagsMergeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tagsMergeMutation, { data, loading, error }] = useTagsMergeMutation({
 *   variables: {
 *      source: // value for 'source'
 *      destination: // value for 'destination'
 *      values: // value for 'values'
 *   },
 * });
 */
function useTagsMergeMutation(baseOptions?: Apollo.MutationHookOptions<TagsMergeMutation, TagsMergeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TagsMergeMutation, TagsMergeMutationVariables>(TagsMergeDocument, options);
      }
type TagsMergeMutationHookResult = ReturnType<typeof useTagsMergeMutation>;
type TagsMergeMutationResult = Apollo.MutationResult<TagsMergeMutation>;
type TagsMergeMutationOptions = Apollo.BaseMutationOptions<TagsMergeMutation, TagsMergeMutationVariables>;
const DlnaStatusDocument = gql`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `;

/**
 * __useDlnaStatusQuery__
 *
 * To run a query within a React component, call `useDlnaStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useDlnaStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDlnaStatusQuery({
 *   variables: {
 *   },
 * });
 */
function useDlnaStatusQuery(baseOptions?: Apollo.QueryHookOptions<DlnaStatusQuery, DlnaStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DlnaStatusQuery, DlnaStatusQueryVariables>(DlnaStatusDocument, options);
      }
function useDlnaStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DlnaStatusQuery, DlnaStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DlnaStatusQuery, DlnaStatusQueryVariables>(DlnaStatusDocument, options);
        }
function useDlnaStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DlnaStatusQuery, DlnaStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DlnaStatusQuery, DlnaStatusQueryVariables>(DlnaStatusDocument, options);
        }
type DlnaStatusQueryHookResult = ReturnType<typeof useDlnaStatusQuery>;
type DlnaStatusLazyQueryHookResult = ReturnType<typeof useDlnaStatusLazyQuery>;
type DlnaStatusSuspenseQueryHookResult = ReturnType<typeof useDlnaStatusSuspenseQuery>;
type DlnaStatusQueryResult = Apollo.QueryResult<DlnaStatusQuery, DlnaStatusQueryVariables>;
function refetchDlnaStatusQuery(variables?: DlnaStatusQueryVariables) {
      return { query: DlnaStatusDocument, variables: variables }
    }
const FindSavedFilterDocument = gql`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

/**
 * __useFindSavedFilterQuery__
 *
 * To run a query within a React component, call `useFindSavedFilterQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSavedFilterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSavedFilterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindSavedFilterQuery(baseOptions: Apollo.QueryHookOptions<FindSavedFilterQuery, FindSavedFilterQueryVariables> & ({ variables: FindSavedFilterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSavedFilterQuery, FindSavedFilterQueryVariables>(FindSavedFilterDocument, options);
      }
function useFindSavedFilterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSavedFilterQuery, FindSavedFilterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSavedFilterQuery, FindSavedFilterQueryVariables>(FindSavedFilterDocument, options);
        }
function useFindSavedFilterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSavedFilterQuery, FindSavedFilterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSavedFilterQuery, FindSavedFilterQueryVariables>(FindSavedFilterDocument, options);
        }
type FindSavedFilterQueryHookResult = ReturnType<typeof useFindSavedFilterQuery>;
type FindSavedFilterLazyQueryHookResult = ReturnType<typeof useFindSavedFilterLazyQuery>;
type FindSavedFilterSuspenseQueryHookResult = ReturnType<typeof useFindSavedFilterSuspenseQuery>;
type FindSavedFilterQueryResult = Apollo.QueryResult<FindSavedFilterQuery, FindSavedFilterQueryVariables>;
function refetchFindSavedFilterQuery(variables: FindSavedFilterQueryVariables) {
      return { query: FindSavedFilterDocument, variables: variables }
    }
const FindSavedFiltersDocument = gql`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${SavedFilterDataFragmentDoc}`;

/**
 * __useFindSavedFiltersQuery__
 *
 * To run a query within a React component, call `useFindSavedFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSavedFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSavedFiltersQuery({
 *   variables: {
 *      mode: // value for 'mode'
 *   },
 * });
 */
function useFindSavedFiltersQuery(baseOptions?: Apollo.QueryHookOptions<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>(FindSavedFiltersDocument, options);
      }
function useFindSavedFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>(FindSavedFiltersDocument, options);
        }
function useFindSavedFiltersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>(FindSavedFiltersDocument, options);
        }
type FindSavedFiltersQueryHookResult = ReturnType<typeof useFindSavedFiltersQuery>;
type FindSavedFiltersLazyQueryHookResult = ReturnType<typeof useFindSavedFiltersLazyQuery>;
type FindSavedFiltersSuspenseQueryHookResult = ReturnType<typeof useFindSavedFiltersSuspenseQuery>;
type FindSavedFiltersQueryResult = Apollo.QueryResult<FindSavedFiltersQuery, FindSavedFiltersQueryVariables>;
function refetchFindSavedFiltersQuery(variables?: FindSavedFiltersQueryVariables) {
      return { query: FindSavedFiltersDocument, variables: variables }
    }
const FindRootFoldersForSelectDocument = gql`
    query FindRootFoldersForSelect($zip_file_filter: MultiCriterionInput) {
  findFolders(
    filter: {per_page: -1, sort: "path", direction: ASC}
    folder_filter: {parent_folder: {modifier: IS_NULL}, zip_file: $zip_file_filter}
  ) {
    count
    folders {
      ...SelectFolderData
    }
  }
}
    ${SelectFolderDataFragmentDoc}`;

/**
 * __useFindRootFoldersForSelectQuery__
 *
 * To run a query within a React component, call `useFindRootFoldersForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRootFoldersForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRootFoldersForSelectQuery({
 *   variables: {
 *      zip_file_filter: // value for 'zip_file_filter'
 *   },
 * });
 */
function useFindRootFoldersForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>(FindRootFoldersForSelectDocument, options);
      }
function useFindRootFoldersForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>(FindRootFoldersForSelectDocument, options);
        }
function useFindRootFoldersForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>(FindRootFoldersForSelectDocument, options);
        }
type FindRootFoldersForSelectQueryHookResult = ReturnType<typeof useFindRootFoldersForSelectQuery>;
type FindRootFoldersForSelectLazyQueryHookResult = ReturnType<typeof useFindRootFoldersForSelectLazyQuery>;
type FindRootFoldersForSelectSuspenseQueryHookResult = ReturnType<typeof useFindRootFoldersForSelectSuspenseQuery>;
type FindRootFoldersForSelectQueryResult = Apollo.QueryResult<FindRootFoldersForSelectQuery, FindRootFoldersForSelectQueryVariables>;
function refetchFindRootFoldersForSelectQuery(variables?: FindRootFoldersForSelectQueryVariables) {
      return { query: FindRootFoldersForSelectDocument, variables: variables }
    }
const FindFoldersForQueryDocument = gql`
    query FindFoldersForQuery($filter: FindFilterType, $folder_filter: FolderFilterType, $ids: [ID!]) {
  findFolders(filter: $filter, folder_filter: $folder_filter, ids: $ids) {
    count
    folders {
      ...RecursiveFolderData
    }
  }
}
    ${RecursiveFolderDataFragmentDoc}`;

/**
 * __useFindFoldersForQueryQuery__
 *
 * To run a query within a React component, call `useFindFoldersForQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFoldersForQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFoldersForQueryQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      folder_filter: // value for 'folder_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindFoldersForQueryQuery(baseOptions?: Apollo.QueryHookOptions<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>(FindFoldersForQueryDocument, options);
      }
function useFindFoldersForQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>(FindFoldersForQueryDocument, options);
        }
function useFindFoldersForQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>(FindFoldersForQueryDocument, options);
        }
type FindFoldersForQueryQueryHookResult = ReturnType<typeof useFindFoldersForQueryQuery>;
type FindFoldersForQueryLazyQueryHookResult = ReturnType<typeof useFindFoldersForQueryLazyQuery>;
type FindFoldersForQuerySuspenseQueryHookResult = ReturnType<typeof useFindFoldersForQuerySuspenseQuery>;
type FindFoldersForQueryQueryResult = Apollo.QueryResult<FindFoldersForQueryQuery, FindFoldersForQueryQueryVariables>;
function refetchFindFoldersForQueryQuery(variables?: FindFoldersForQueryQueryVariables) {
      return { query: FindFoldersForQueryDocument, variables: variables }
    }
const FindFolderHierarchyForIDsDocument = gql`
    query FindFolderHierarchyForIDs($ids: [ID!]!) {
  findFolders(ids: $ids) {
    count
    folders {
      ...SelectFolderData
      parent_folders {
        ...SelectFolderData
        sub_folders {
          ...SelectFolderData
          zip_file {
            id
          }
        }
      }
    }
  }
}
    ${SelectFolderDataFragmentDoc}`;

/**
 * __useFindFolderHierarchyForIDsQuery__
 *
 * To run a query within a React component, call `useFindFolderHierarchyForIDsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFolderHierarchyForIDsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFolderHierarchyForIDsQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindFolderHierarchyForIDsQuery(baseOptions: Apollo.QueryHookOptions<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables> & ({ variables: FindFolderHierarchyForIDsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>(FindFolderHierarchyForIDsDocument, options);
      }
function useFindFolderHierarchyForIDsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>(FindFolderHierarchyForIDsDocument, options);
        }
function useFindFolderHierarchyForIDsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>(FindFolderHierarchyForIDsDocument, options);
        }
type FindFolderHierarchyForIDsQueryHookResult = ReturnType<typeof useFindFolderHierarchyForIDsQuery>;
type FindFolderHierarchyForIDsLazyQueryHookResult = ReturnType<typeof useFindFolderHierarchyForIDsLazyQuery>;
type FindFolderHierarchyForIDsSuspenseQueryHookResult = ReturnType<typeof useFindFolderHierarchyForIDsSuspenseQuery>;
type FindFolderHierarchyForIDsQueryResult = Apollo.QueryResult<FindFolderHierarchyForIDsQuery, FindFolderHierarchyForIDsQueryVariables>;
function refetchFindFolderHierarchyForIDsQuery(variables: FindFolderHierarchyForIDsQueryVariables) {
      return { query: FindFolderHierarchyForIDsDocument, variables: variables }
    }
const FindGalleriesDocument = gql`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${SlimGalleryDataFragmentDoc}`;

/**
 * __useFindGalleriesQuery__
 *
 * To run a query within a React component, call `useFindGalleriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      gallery_filter: // value for 'gallery_filter'
 *   },
 * });
 */
function useFindGalleriesQuery(baseOptions?: Apollo.QueryHookOptions<FindGalleriesQuery, FindGalleriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleriesQuery, FindGalleriesQueryVariables>(FindGalleriesDocument, options);
      }
function useFindGalleriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleriesQuery, FindGalleriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleriesQuery, FindGalleriesQueryVariables>(FindGalleriesDocument, options);
        }
function useFindGalleriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGalleriesQuery, FindGalleriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGalleriesQuery, FindGalleriesQueryVariables>(FindGalleriesDocument, options);
        }
type FindGalleriesQueryHookResult = ReturnType<typeof useFindGalleriesQuery>;
type FindGalleriesLazyQueryHookResult = ReturnType<typeof useFindGalleriesLazyQuery>;
type FindGalleriesSuspenseQueryHookResult = ReturnType<typeof useFindGalleriesSuspenseQuery>;
type FindGalleriesQueryResult = Apollo.QueryResult<FindGalleriesQuery, FindGalleriesQueryVariables>;
function refetchFindGalleriesQuery(variables?: FindGalleriesQueryVariables) {
      return { query: FindGalleriesDocument, variables: variables }
    }
const FindGalleryDocument = gql`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${GalleryDataFragmentDoc}`;

/**
 * __useFindGalleryQuery__
 *
 * To run a query within a React component, call `useFindGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindGalleryQuery(baseOptions: Apollo.QueryHookOptions<FindGalleryQuery, FindGalleryQueryVariables> & ({ variables: FindGalleryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleryQuery, FindGalleryQueryVariables>(FindGalleryDocument, options);
      }
function useFindGalleryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleryQuery, FindGalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleryQuery, FindGalleryQueryVariables>(FindGalleryDocument, options);
        }
function useFindGallerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGalleryQuery, FindGalleryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGalleryQuery, FindGalleryQueryVariables>(FindGalleryDocument, options);
        }
type FindGalleryQueryHookResult = ReturnType<typeof useFindGalleryQuery>;
type FindGalleryLazyQueryHookResult = ReturnType<typeof useFindGalleryLazyQuery>;
type FindGallerySuspenseQueryHookResult = ReturnType<typeof useFindGallerySuspenseQuery>;
type FindGalleryQueryResult = Apollo.QueryResult<FindGalleryQuery, FindGalleryQueryVariables>;
function refetchFindGalleryQuery(variables: FindGalleryQueryVariables) {
      return { query: FindGalleryDocument, variables: variables }
    }
const FindGalleriesForSelectDocument = gql`
    query FindGalleriesForSelect($filter: FindFilterType, $gallery_filter: GalleryFilterType, $ids: [ID!]) {
  findGalleries(filter: $filter, gallery_filter: $gallery_filter, ids: $ids) {
    count
    galleries {
      ...SelectGalleryData
    }
  }
}
    ${SelectGalleryDataFragmentDoc}`;

/**
 * __useFindGalleriesForSelectQuery__
 *
 * To run a query within a React component, call `useFindGalleriesForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleriesForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleriesForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      gallery_filter: // value for 'gallery_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindGalleriesForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>(FindGalleriesForSelectDocument, options);
      }
function useFindGalleriesForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>(FindGalleriesForSelectDocument, options);
        }
function useFindGalleriesForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>(FindGalleriesForSelectDocument, options);
        }
type FindGalleriesForSelectQueryHookResult = ReturnType<typeof useFindGalleriesForSelectQuery>;
type FindGalleriesForSelectLazyQueryHookResult = ReturnType<typeof useFindGalleriesForSelectLazyQuery>;
type FindGalleriesForSelectSuspenseQueryHookResult = ReturnType<typeof useFindGalleriesForSelectSuspenseQuery>;
type FindGalleriesForSelectQueryResult = Apollo.QueryResult<FindGalleriesForSelectQuery, FindGalleriesForSelectQueryVariables>;
function refetchFindGalleriesForSelectQuery(variables?: FindGalleriesForSelectQueryVariables) {
      return { query: FindGalleriesForSelectDocument, variables: variables }
    }
const FindGalleryImageIdDocument = gql`
    query FindGalleryImageID($id: ID!, $index: Int!) {
  findGallery(id: $id) {
    image(index: $index) {
      id
    }
  }
}
    `;

/**
 * __useFindGalleryImageIdQuery__
 *
 * To run a query within a React component, call `useFindGalleryImageIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGalleryImageIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGalleryImageIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      index: // value for 'index'
 *   },
 * });
 */
function useFindGalleryImageIdQuery(baseOptions: Apollo.QueryHookOptions<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables> & ({ variables: FindGalleryImageIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>(FindGalleryImageIdDocument, options);
      }
function useFindGalleryImageIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>(FindGalleryImageIdDocument, options);
        }
function useFindGalleryImageIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>(FindGalleryImageIdDocument, options);
        }
type FindGalleryImageIdQueryHookResult = ReturnType<typeof useFindGalleryImageIdQuery>;
type FindGalleryImageIdLazyQueryHookResult = ReturnType<typeof useFindGalleryImageIdLazyQuery>;
type FindGalleryImageIdSuspenseQueryHookResult = ReturnType<typeof useFindGalleryImageIdSuspenseQuery>;
type FindGalleryImageIdQueryResult = Apollo.QueryResult<FindGalleryImageIdQuery, FindGalleryImageIdQueryVariables>;
function refetchFindGalleryImageIdQuery(variables: FindGalleryImageIdQueryVariables) {
      return { query: FindGalleryImageIdDocument, variables: variables }
    }
const FindImagesDocument = gql`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    images {
      ...SlimImageData
    }
  }
}
    ${SlimImageDataFragmentDoc}`;

/**
 * __useFindImagesQuery__
 *
 * To run a query within a React component, call `useFindImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      image_filter: // value for 'image_filter'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
function useFindImagesQuery(baseOptions?: Apollo.QueryHookOptions<FindImagesQuery, FindImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImagesQuery, FindImagesQueryVariables>(FindImagesDocument, options);
      }
function useFindImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImagesQuery, FindImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImagesQuery, FindImagesQueryVariables>(FindImagesDocument, options);
        }
function useFindImagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindImagesQuery, FindImagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindImagesQuery, FindImagesQueryVariables>(FindImagesDocument, options);
        }
type FindImagesQueryHookResult = ReturnType<typeof useFindImagesQuery>;
type FindImagesLazyQueryHookResult = ReturnType<typeof useFindImagesLazyQuery>;
type FindImagesSuspenseQueryHookResult = ReturnType<typeof useFindImagesSuspenseQuery>;
type FindImagesQueryResult = Apollo.QueryResult<FindImagesQuery, FindImagesQueryVariables>;
function refetchFindImagesQuery(variables?: FindImagesQueryVariables) {
      return { query: FindImagesDocument, variables: variables }
    }
const FindImagesMetadataDocument = gql`
    query FindImagesMetadata($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    megapixels
    filesize
  }
}
    `;

/**
 * __useFindImagesMetadataQuery__
 *
 * To run a query within a React component, call `useFindImagesMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImagesMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImagesMetadataQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      image_filter: // value for 'image_filter'
 *      image_ids: // value for 'image_ids'
 *   },
 * });
 */
function useFindImagesMetadataQuery(baseOptions?: Apollo.QueryHookOptions<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>(FindImagesMetadataDocument, options);
      }
function useFindImagesMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>(FindImagesMetadataDocument, options);
        }
function useFindImagesMetadataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>(FindImagesMetadataDocument, options);
        }
type FindImagesMetadataQueryHookResult = ReturnType<typeof useFindImagesMetadataQuery>;
type FindImagesMetadataLazyQueryHookResult = ReturnType<typeof useFindImagesMetadataLazyQuery>;
type FindImagesMetadataSuspenseQueryHookResult = ReturnType<typeof useFindImagesMetadataSuspenseQuery>;
type FindImagesMetadataQueryResult = Apollo.QueryResult<FindImagesMetadataQuery, FindImagesMetadataQueryVariables>;
function refetchFindImagesMetadataQuery(variables?: FindImagesMetadataQueryVariables) {
      return { query: FindImagesMetadataDocument, variables: variables }
    }
const FindImageDocument = gql`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${ImageDataFragmentDoc}`;

/**
 * __useFindImageQuery__
 *
 * To run a query within a React component, call `useFindImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *      checksum: // value for 'checksum'
 *   },
 * });
 */
function useFindImageQuery(baseOptions: Apollo.QueryHookOptions<FindImageQuery, FindImageQueryVariables> & ({ variables: FindImageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
      }
function useFindImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
        }
function useFindImageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindImageQuery, FindImageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindImageQuery, FindImageQueryVariables>(FindImageDocument, options);
        }
type FindImageQueryHookResult = ReturnType<typeof useFindImageQuery>;
type FindImageLazyQueryHookResult = ReturnType<typeof useFindImageLazyQuery>;
type FindImageSuspenseQueryHookResult = ReturnType<typeof useFindImageSuspenseQuery>;
type FindImageQueryResult = Apollo.QueryResult<FindImageQuery, FindImageQueryVariables>;
function refetchFindImageQuery(variables: FindImageQueryVariables) {
      return { query: FindImageDocument, variables: variables }
    }
const JobQueueDocument = gql`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

/**
 * __useJobQueueQuery__
 *
 * To run a query within a React component, call `useJobQueueQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobQueueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobQueueQuery({
 *   variables: {
 *   },
 * });
 */
function useJobQueueQuery(baseOptions?: Apollo.QueryHookOptions<JobQueueQuery, JobQueueQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JobQueueQuery, JobQueueQueryVariables>(JobQueueDocument, options);
      }
function useJobQueueLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JobQueueQuery, JobQueueQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JobQueueQuery, JobQueueQueryVariables>(JobQueueDocument, options);
        }
function useJobQueueSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<JobQueueQuery, JobQueueQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JobQueueQuery, JobQueueQueryVariables>(JobQueueDocument, options);
        }
type JobQueueQueryHookResult = ReturnType<typeof useJobQueueQuery>;
type JobQueueLazyQueryHookResult = ReturnType<typeof useJobQueueLazyQuery>;
type JobQueueSuspenseQueryHookResult = ReturnType<typeof useJobQueueSuspenseQuery>;
type JobQueueQueryResult = Apollo.QueryResult<JobQueueQuery, JobQueueQueryVariables>;
function refetchJobQueueQuery(variables?: JobQueueQueryVariables) {
      return { query: JobQueueDocument, variables: variables }
    }
const FindJobDocument = gql`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${JobDataFragmentDoc}`;

/**
 * __useFindJobQuery__
 *
 * To run a query within a React component, call `useFindJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindJobQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindJobQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useFindJobQuery(baseOptions: Apollo.QueryHookOptions<FindJobQuery, FindJobQueryVariables> & ({ variables: FindJobQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindJobQuery, FindJobQueryVariables>(FindJobDocument, options);
      }
function useFindJobLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindJobQuery, FindJobQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindJobQuery, FindJobQueryVariables>(FindJobDocument, options);
        }
function useFindJobSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindJobQuery, FindJobQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindJobQuery, FindJobQueryVariables>(FindJobDocument, options);
        }
type FindJobQueryHookResult = ReturnType<typeof useFindJobQuery>;
type FindJobLazyQueryHookResult = ReturnType<typeof useFindJobLazyQuery>;
type FindJobSuspenseQueryHookResult = ReturnType<typeof useFindJobSuspenseQuery>;
type FindJobQueryResult = Apollo.QueryResult<FindJobQuery, FindJobQueryVariables>;
function refetchFindJobQuery(variables: FindJobQueryVariables) {
      return { query: FindJobDocument, variables: variables }
    }
const SceneWallDocument = gql`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

/**
 * __useSceneWallQuery__
 *
 * To run a query within a React component, call `useSceneWallQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneWallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneWallQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
function useSceneWallQuery(baseOptions?: Apollo.QueryHookOptions<SceneWallQuery, SceneWallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneWallQuery, SceneWallQueryVariables>(SceneWallDocument, options);
      }
function useSceneWallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneWallQuery, SceneWallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneWallQuery, SceneWallQueryVariables>(SceneWallDocument, options);
        }
function useSceneWallSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SceneWallQuery, SceneWallQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SceneWallQuery, SceneWallQueryVariables>(SceneWallDocument, options);
        }
type SceneWallQueryHookResult = ReturnType<typeof useSceneWallQuery>;
type SceneWallLazyQueryHookResult = ReturnType<typeof useSceneWallLazyQuery>;
type SceneWallSuspenseQueryHookResult = ReturnType<typeof useSceneWallSuspenseQuery>;
type SceneWallQueryResult = Apollo.QueryResult<SceneWallQuery, SceneWallQueryVariables>;
function refetchSceneWallQuery(variables?: SceneWallQueryVariables) {
      return { query: SceneWallDocument, variables: variables }
    }
const MarkerWallDocument = gql`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useMarkerWallQuery__
 *
 * To run a query within a React component, call `useMarkerWallQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarkerWallQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarkerWallQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
function useMarkerWallQuery(baseOptions?: Apollo.QueryHookOptions<MarkerWallQuery, MarkerWallQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarkerWallQuery, MarkerWallQueryVariables>(MarkerWallDocument, options);
      }
function useMarkerWallLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarkerWallQuery, MarkerWallQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarkerWallQuery, MarkerWallQueryVariables>(MarkerWallDocument, options);
        }
function useMarkerWallSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MarkerWallQuery, MarkerWallQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MarkerWallQuery, MarkerWallQueryVariables>(MarkerWallDocument, options);
        }
type MarkerWallQueryHookResult = ReturnType<typeof useMarkerWallQuery>;
type MarkerWallLazyQueryHookResult = ReturnType<typeof useMarkerWallLazyQuery>;
type MarkerWallSuspenseQueryHookResult = ReturnType<typeof useMarkerWallSuspenseQuery>;
type MarkerWallQueryResult = Apollo.QueryResult<MarkerWallQuery, MarkerWallQueryVariables>;
function refetchMarkerWallQuery(variables?: MarkerWallQueryVariables) {
      return { query: MarkerWallDocument, variables: variables }
    }
const MarkerStringsDocument = gql`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;

/**
 * __useMarkerStringsQuery__
 *
 * To run a query within a React component, call `useMarkerStringsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarkerStringsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarkerStringsQuery({
 *   variables: {
 *      q: // value for 'q'
 *      sort: // value for 'sort'
 *   },
 * });
 */
function useMarkerStringsQuery(baseOptions?: Apollo.QueryHookOptions<MarkerStringsQuery, MarkerStringsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MarkerStringsQuery, MarkerStringsQueryVariables>(MarkerStringsDocument, options);
      }
function useMarkerStringsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MarkerStringsQuery, MarkerStringsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MarkerStringsQuery, MarkerStringsQueryVariables>(MarkerStringsDocument, options);
        }
function useMarkerStringsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MarkerStringsQuery, MarkerStringsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MarkerStringsQuery, MarkerStringsQueryVariables>(MarkerStringsDocument, options);
        }
type MarkerStringsQueryHookResult = ReturnType<typeof useMarkerStringsQuery>;
type MarkerStringsLazyQueryHookResult = ReturnType<typeof useMarkerStringsLazyQuery>;
type MarkerStringsSuspenseQueryHookResult = ReturnType<typeof useMarkerStringsSuspenseQuery>;
type MarkerStringsQueryResult = Apollo.QueryResult<MarkerStringsQuery, MarkerStringsQueryVariables>;
function refetchMarkerStringsQuery(variables?: MarkerStringsQueryVariables) {
      return { query: MarkerStringsDocument, variables: variables }
    }
const StatsDocument = gql`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    group_count
    tag_count
    total_o_count
    total_play_duration
    total_play_count
    scenes_played
  }
}
    `;

/**
 * __useStatsQuery__
 *
 * To run a query within a React component, call `useStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatsQuery({
 *   variables: {
 *   },
 * });
 */
function useStatsQuery(baseOptions?: Apollo.QueryHookOptions<StatsQuery, StatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StatsQuery, StatsQueryVariables>(StatsDocument, options);
      }
function useStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatsQuery, StatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StatsQuery, StatsQueryVariables>(StatsDocument, options);
        }
function useStatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<StatsQuery, StatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<StatsQuery, StatsQueryVariables>(StatsDocument, options);
        }
type StatsQueryHookResult = ReturnType<typeof useStatsQuery>;
type StatsLazyQueryHookResult = ReturnType<typeof useStatsLazyQuery>;
type StatsSuspenseQueryHookResult = ReturnType<typeof useStatsSuspenseQuery>;
type StatsQueryResult = Apollo.QueryResult<StatsQuery, StatsQueryVariables>;
function refetchStatsQuery(variables?: StatsQueryVariables) {
      return { query: StatsDocument, variables: variables }
    }
const LogsDocument = gql`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

/**
 * __useLogsQuery__
 *
 * To run a query within a React component, call `useLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogsQuery({
 *   variables: {
 *   },
 * });
 */
function useLogsQuery(baseOptions?: Apollo.QueryHookOptions<LogsQuery, LogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogsQuery, LogsQueryVariables>(LogsDocument, options);
      }
function useLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogsQuery, LogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogsQuery, LogsQueryVariables>(LogsDocument, options);
        }
function useLogsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LogsQuery, LogsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LogsQuery, LogsQueryVariables>(LogsDocument, options);
        }
type LogsQueryHookResult = ReturnType<typeof useLogsQuery>;
type LogsLazyQueryHookResult = ReturnType<typeof useLogsLazyQuery>;
type LogsSuspenseQueryHookResult = ReturnType<typeof useLogsSuspenseQuery>;
type LogsQueryResult = Apollo.QueryResult<LogsQuery, LogsQueryVariables>;
function refetchLogsQuery(variables?: LogsQueryVariables) {
      return { query: LogsDocument, variables: variables }
    }
const VersionDocument = gql`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;

/**
 * __useVersionQuery__
 *
 * To run a query within a React component, call `useVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVersionQuery({
 *   variables: {
 *   },
 * });
 */
function useVersionQuery(baseOptions?: Apollo.QueryHookOptions<VersionQuery, VersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VersionQuery, VersionQueryVariables>(VersionDocument, options);
      }
function useVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VersionQuery, VersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VersionQuery, VersionQueryVariables>(VersionDocument, options);
        }
function useVersionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<VersionQuery, VersionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<VersionQuery, VersionQueryVariables>(VersionDocument, options);
        }
type VersionQueryHookResult = ReturnType<typeof useVersionQuery>;
type VersionLazyQueryHookResult = ReturnType<typeof useVersionLazyQuery>;
type VersionSuspenseQueryHookResult = ReturnType<typeof useVersionSuspenseQuery>;
type VersionQueryResult = Apollo.QueryResult<VersionQuery, VersionQueryVariables>;
function refetchVersionQuery(variables?: VersionQueryVariables) {
      return { query: VersionDocument, variables: variables }
    }
const LatestVersionDocument = gql`
    query LatestVersion {
  latestversion {
    version
    shorthash
    release_date
    url
  }
}
    `;

/**
 * __useLatestVersionQuery__
 *
 * To run a query within a React component, call `useLatestVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestVersionQuery({
 *   variables: {
 *   },
 * });
 */
function useLatestVersionQuery(baseOptions?: Apollo.QueryHookOptions<LatestVersionQuery, LatestVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestVersionQuery, LatestVersionQueryVariables>(LatestVersionDocument, options);
      }
function useLatestVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestVersionQuery, LatestVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestVersionQuery, LatestVersionQueryVariables>(LatestVersionDocument, options);
        }
function useLatestVersionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<LatestVersionQuery, LatestVersionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<LatestVersionQuery, LatestVersionQueryVariables>(LatestVersionDocument, options);
        }
type LatestVersionQueryHookResult = ReturnType<typeof useLatestVersionQuery>;
type LatestVersionLazyQueryHookResult = ReturnType<typeof useLatestVersionLazyQuery>;
type LatestVersionSuspenseQueryHookResult = ReturnType<typeof useLatestVersionSuspenseQuery>;
type LatestVersionQueryResult = Apollo.QueryResult<LatestVersionQuery, LatestVersionQueryVariables>;
function refetchLatestVersionQuery(variables?: LatestVersionQueryVariables) {
      return { query: LatestVersionDocument, variables: variables }
    }
const FindGroupsDocument = gql`
    query FindGroups($filter: FindFilterType, $group_filter: GroupFilterType) {
  findGroups(filter: $filter, group_filter: $group_filter) {
    count
    groups {
      ...ListGroupData
    }
  }
}
    ${ListGroupDataFragmentDoc}`;

/**
 * __useFindGroupsQuery__
 *
 * To run a query within a React component, call `useFindGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      group_filter: // value for 'group_filter'
 *   },
 * });
 */
function useFindGroupsQuery(baseOptions?: Apollo.QueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
      }
function useFindGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
        }
function useFindGroupsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGroupsQuery, FindGroupsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupsQuery, FindGroupsQueryVariables>(FindGroupsDocument, options);
        }
type FindGroupsQueryHookResult = ReturnType<typeof useFindGroupsQuery>;
type FindGroupsLazyQueryHookResult = ReturnType<typeof useFindGroupsLazyQuery>;
type FindGroupsSuspenseQueryHookResult = ReturnType<typeof useFindGroupsSuspenseQuery>;
type FindGroupsQueryResult = Apollo.QueryResult<FindGroupsQuery, FindGroupsQueryVariables>;
function refetchFindGroupsQuery(variables?: FindGroupsQueryVariables) {
      return { query: FindGroupsDocument, variables: variables }
    }
const FindGroupDocument = gql`
    query FindGroup($id: ID!) {
  findGroup(id: $id) {
    ...GroupData
  }
}
    ${GroupDataFragmentDoc}`;

/**
 * __useFindGroupQuery__
 *
 * To run a query within a React component, call `useFindGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindGroupQuery(baseOptions: Apollo.QueryHookOptions<FindGroupQuery, FindGroupQueryVariables> & ({ variables: FindGroupQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
      }
function useFindGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupQuery, FindGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
        }
function useFindGroupSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGroupQuery, FindGroupQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupQuery, FindGroupQueryVariables>(FindGroupDocument, options);
        }
type FindGroupQueryHookResult = ReturnType<typeof useFindGroupQuery>;
type FindGroupLazyQueryHookResult = ReturnType<typeof useFindGroupLazyQuery>;
type FindGroupSuspenseQueryHookResult = ReturnType<typeof useFindGroupSuspenseQuery>;
type FindGroupQueryResult = Apollo.QueryResult<FindGroupQuery, FindGroupQueryVariables>;
function refetchFindGroupQuery(variables: FindGroupQueryVariables) {
      return { query: FindGroupDocument, variables: variables }
    }
const FindGroupsForSelectDocument = gql`
    query FindGroupsForSelect($filter: FindFilterType, $group_filter: GroupFilterType, $ids: [ID!]) {
  findGroups(filter: $filter, group_filter: $group_filter, ids: $ids) {
    count
    groups {
      ...SelectGroupData
    }
  }
}
    ${SelectGroupDataFragmentDoc}`;

/**
 * __useFindGroupsForSelectQuery__
 *
 * To run a query within a React component, call `useFindGroupsForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGroupsForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGroupsForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      group_filter: // value for 'group_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindGroupsForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>(FindGroupsForSelectDocument, options);
      }
function useFindGroupsForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>(FindGroupsForSelectDocument, options);
        }
function useFindGroupsForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>(FindGroupsForSelectDocument, options);
        }
type FindGroupsForSelectQueryHookResult = ReturnType<typeof useFindGroupsForSelectQuery>;
type FindGroupsForSelectLazyQueryHookResult = ReturnType<typeof useFindGroupsForSelectLazyQuery>;
type FindGroupsForSelectSuspenseQueryHookResult = ReturnType<typeof useFindGroupsForSelectSuspenseQuery>;
type FindGroupsForSelectQueryResult = Apollo.QueryResult<FindGroupsForSelectQuery, FindGroupsForSelectQueryVariables>;
function refetchFindGroupsForSelectQuery(variables?: FindGroupsForSelectQueryVariables) {
      return { query: FindGroupsForSelectDocument, variables: variables }
    }
const FindPerformersDocument = gql`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType, $performer_ids: [Int!]) {
  findPerformers(
    filter: $filter
    performer_filter: $performer_filter
    performer_ids: $performer_ids
  ) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${PerformerDataFragmentDoc}`;

/**
 * __useFindPerformersQuery__
 *
 * To run a query within a React component, call `useFindPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      performer_filter: // value for 'performer_filter'
 *      performer_ids: // value for 'performer_ids'
 *   },
 * });
 */
function useFindPerformersQuery(baseOptions?: Apollo.QueryHookOptions<FindPerformersQuery, FindPerformersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformersQuery, FindPerformersQueryVariables>(FindPerformersDocument, options);
      }
function useFindPerformersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformersQuery, FindPerformersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformersQuery, FindPerformersQueryVariables>(FindPerformersDocument, options);
        }
function useFindPerformersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPerformersQuery, FindPerformersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPerformersQuery, FindPerformersQueryVariables>(FindPerformersDocument, options);
        }
type FindPerformersQueryHookResult = ReturnType<typeof useFindPerformersQuery>;
type FindPerformersLazyQueryHookResult = ReturnType<typeof useFindPerformersLazyQuery>;
type FindPerformersSuspenseQueryHookResult = ReturnType<typeof useFindPerformersSuspenseQuery>;
type FindPerformersQueryResult = Apollo.QueryResult<FindPerformersQuery, FindPerformersQueryVariables>;
function refetchFindPerformersQuery(variables?: FindPerformersQueryVariables) {
      return { query: FindPerformersDocument, variables: variables }
    }
const FindPerformerDocument = gql`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${PerformerDataFragmentDoc}`;

/**
 * __useFindPerformerQuery__
 *
 * To run a query within a React component, call `useFindPerformerQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindPerformerQuery(baseOptions: Apollo.QueryHookOptions<FindPerformerQuery, FindPerformerQueryVariables> & ({ variables: FindPerformerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformerQuery, FindPerformerQueryVariables>(FindPerformerDocument, options);
      }
function useFindPerformerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformerQuery, FindPerformerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformerQuery, FindPerformerQueryVariables>(FindPerformerDocument, options);
        }
function useFindPerformerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPerformerQuery, FindPerformerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPerformerQuery, FindPerformerQueryVariables>(FindPerformerDocument, options);
        }
type FindPerformerQueryHookResult = ReturnType<typeof useFindPerformerQuery>;
type FindPerformerLazyQueryHookResult = ReturnType<typeof useFindPerformerLazyQuery>;
type FindPerformerSuspenseQueryHookResult = ReturnType<typeof useFindPerformerSuspenseQuery>;
type FindPerformerQueryResult = Apollo.QueryResult<FindPerformerQuery, FindPerformerQueryVariables>;
function refetchFindPerformerQuery(variables: FindPerformerQueryVariables) {
      return { query: FindPerformerDocument, variables: variables }
    }
const FindPerformersForSelectDocument = gql`
    query FindPerformersForSelect($filter: FindFilterType, $performer_filter: PerformerFilterType, $ids: [ID!]) {
  findPerformers(filter: $filter, performer_filter: $performer_filter, ids: $ids) {
    count
    performers {
      ...SelectPerformerData
    }
  }
}
    ${SelectPerformerDataFragmentDoc}`;

/**
 * __useFindPerformersForSelectQuery__
 *
 * To run a query within a React component, call `useFindPerformersForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPerformersForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPerformersForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      performer_filter: // value for 'performer_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindPerformersForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>(FindPerformersForSelectDocument, options);
      }
function useFindPerformersForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>(FindPerformersForSelectDocument, options);
        }
function useFindPerformersForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>(FindPerformersForSelectDocument, options);
        }
type FindPerformersForSelectQueryHookResult = ReturnType<typeof useFindPerformersForSelectQuery>;
type FindPerformersForSelectLazyQueryHookResult = ReturnType<typeof useFindPerformersForSelectLazyQuery>;
type FindPerformersForSelectSuspenseQueryHookResult = ReturnType<typeof useFindPerformersForSelectSuspenseQuery>;
type FindPerformersForSelectQueryResult = Apollo.QueryResult<FindPerformersForSelectQuery, FindPerformersForSelectQueryVariables>;
function refetchFindPerformersForSelectQuery(variables?: FindPerformersForSelectQueryVariables) {
      return { query: FindPerformersForSelectDocument, variables: variables }
    }
const PluginsDocument = gql`
    query Plugins {
  plugins {
    id
    name
    enabled
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
    settings {
      name
      display_name
      description
      type
    }
    requires
    paths {
      css
      javascript
    }
  }
}
    `;

/**
 * __usePluginsQuery__
 *
 * To run a query within a React component, call `usePluginsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePluginsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePluginsQuery({
 *   variables: {
 *   },
 * });
 */
function usePluginsQuery(baseOptions?: Apollo.QueryHookOptions<PluginsQuery, PluginsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PluginsQuery, PluginsQueryVariables>(PluginsDocument, options);
      }
function usePluginsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PluginsQuery, PluginsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PluginsQuery, PluginsQueryVariables>(PluginsDocument, options);
        }
function usePluginsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PluginsQuery, PluginsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PluginsQuery, PluginsQueryVariables>(PluginsDocument, options);
        }
type PluginsQueryHookResult = ReturnType<typeof usePluginsQuery>;
type PluginsLazyQueryHookResult = ReturnType<typeof usePluginsLazyQuery>;
type PluginsSuspenseQueryHookResult = ReturnType<typeof usePluginsSuspenseQuery>;
type PluginsQueryResult = Apollo.QueryResult<PluginsQuery, PluginsQueryVariables>;
function refetchPluginsQuery(variables?: PluginsQueryVariables) {
      return { query: PluginsDocument, variables: variables }
    }
const PluginTasksDocument = gql`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
      enabled
    }
  }
}
    `;

/**
 * __usePluginTasksQuery__
 *
 * To run a query within a React component, call `usePluginTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePluginTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePluginTasksQuery({
 *   variables: {
 *   },
 * });
 */
function usePluginTasksQuery(baseOptions?: Apollo.QueryHookOptions<PluginTasksQuery, PluginTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PluginTasksQuery, PluginTasksQueryVariables>(PluginTasksDocument, options);
      }
function usePluginTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PluginTasksQuery, PluginTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PluginTasksQuery, PluginTasksQueryVariables>(PluginTasksDocument, options);
        }
function usePluginTasksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PluginTasksQuery, PluginTasksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PluginTasksQuery, PluginTasksQueryVariables>(PluginTasksDocument, options);
        }
type PluginTasksQueryHookResult = ReturnType<typeof usePluginTasksQuery>;
type PluginTasksLazyQueryHookResult = ReturnType<typeof usePluginTasksLazyQuery>;
type PluginTasksSuspenseQueryHookResult = ReturnType<typeof usePluginTasksSuspenseQuery>;
type PluginTasksQueryResult = Apollo.QueryResult<PluginTasksQuery, PluginTasksQueryVariables>;
function refetchPluginTasksQuery(variables?: PluginTasksQueryVariables) {
      return { query: PluginTasksDocument, variables: variables }
    }
const InstalledPluginPackagesDocument = gql`
    query InstalledPluginPackages {
  installedPackages(type: Plugin) {
    ...PackageData
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledPluginPackagesQuery__
 *
 * To run a query within a React component, call `useInstalledPluginPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledPluginPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledPluginPackagesQuery({
 *   variables: {
 *   },
 * });
 */
function useInstalledPluginPackagesQuery(baseOptions?: Apollo.QueryHookOptions<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>(InstalledPluginPackagesDocument, options);
      }
function useInstalledPluginPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>(InstalledPluginPackagesDocument, options);
        }
function useInstalledPluginPackagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>(InstalledPluginPackagesDocument, options);
        }
type InstalledPluginPackagesQueryHookResult = ReturnType<typeof useInstalledPluginPackagesQuery>;
type InstalledPluginPackagesLazyQueryHookResult = ReturnType<typeof useInstalledPluginPackagesLazyQuery>;
type InstalledPluginPackagesSuspenseQueryHookResult = ReturnType<typeof useInstalledPluginPackagesSuspenseQuery>;
type InstalledPluginPackagesQueryResult = Apollo.QueryResult<InstalledPluginPackagesQuery, InstalledPluginPackagesQueryVariables>;
function refetchInstalledPluginPackagesQuery(variables?: InstalledPluginPackagesQueryVariables) {
      return { query: InstalledPluginPackagesDocument, variables: variables }
    }
const InstalledPluginPackagesStatusDocument = gql`
    query InstalledPluginPackagesStatus {
  installedPackages(type: Plugin) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledPluginPackagesStatusQuery__
 *
 * To run a query within a React component, call `useInstalledPluginPackagesStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledPluginPackagesStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledPluginPackagesStatusQuery({
 *   variables: {
 *   },
 * });
 */
function useInstalledPluginPackagesStatusQuery(baseOptions?: Apollo.QueryHookOptions<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>(InstalledPluginPackagesStatusDocument, options);
      }
function useInstalledPluginPackagesStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>(InstalledPluginPackagesStatusDocument, options);
        }
function useInstalledPluginPackagesStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>(InstalledPluginPackagesStatusDocument, options);
        }
type InstalledPluginPackagesStatusQueryHookResult = ReturnType<typeof useInstalledPluginPackagesStatusQuery>;
type InstalledPluginPackagesStatusLazyQueryHookResult = ReturnType<typeof useInstalledPluginPackagesStatusLazyQuery>;
type InstalledPluginPackagesStatusSuspenseQueryHookResult = ReturnType<typeof useInstalledPluginPackagesStatusSuspenseQuery>;
type InstalledPluginPackagesStatusQueryResult = Apollo.QueryResult<InstalledPluginPackagesStatusQuery, InstalledPluginPackagesStatusQueryVariables>;
function refetchInstalledPluginPackagesStatusQuery(variables?: InstalledPluginPackagesStatusQueryVariables) {
      return { query: InstalledPluginPackagesStatusDocument, variables: variables }
    }
const AvailablePluginPackagesDocument = gql`
    query AvailablePluginPackages($source: String!) {
  availablePackages(source: $source, type: Plugin) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useAvailablePluginPackagesQuery__
 *
 * To run a query within a React component, call `useAvailablePluginPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailablePluginPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailablePluginPackagesQuery({
 *   variables: {
 *      source: // value for 'source'
 *   },
 * });
 */
function useAvailablePluginPackagesQuery(baseOptions: Apollo.QueryHookOptions<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables> & ({ variables: AvailablePluginPackagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>(AvailablePluginPackagesDocument, options);
      }
function useAvailablePluginPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>(AvailablePluginPackagesDocument, options);
        }
function useAvailablePluginPackagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>(AvailablePluginPackagesDocument, options);
        }
type AvailablePluginPackagesQueryHookResult = ReturnType<typeof useAvailablePluginPackagesQuery>;
type AvailablePluginPackagesLazyQueryHookResult = ReturnType<typeof useAvailablePluginPackagesLazyQuery>;
type AvailablePluginPackagesSuspenseQueryHookResult = ReturnType<typeof useAvailablePluginPackagesSuspenseQuery>;
type AvailablePluginPackagesQueryResult = Apollo.QueryResult<AvailablePluginPackagesQuery, AvailablePluginPackagesQueryVariables>;
function refetchAvailablePluginPackagesQuery(variables: AvailablePluginPackagesQueryVariables) {
      return { query: AvailablePluginPackagesDocument, variables: variables }
    }
const FindSceneMarkersDocument = gql`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useFindSceneMarkersQuery__
 *
 * To run a query within a React component, call `useFindSceneMarkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneMarkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneMarkersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      scene_marker_filter: // value for 'scene_marker_filter'
 *   },
 * });
 */
function useFindSceneMarkersQuery(baseOptions?: Apollo.QueryHookOptions<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>(FindSceneMarkersDocument, options);
      }
function useFindSceneMarkersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>(FindSceneMarkersDocument, options);
        }
function useFindSceneMarkersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>(FindSceneMarkersDocument, options);
        }
type FindSceneMarkersQueryHookResult = ReturnType<typeof useFindSceneMarkersQuery>;
type FindSceneMarkersLazyQueryHookResult = ReturnType<typeof useFindSceneMarkersLazyQuery>;
type FindSceneMarkersSuspenseQueryHookResult = ReturnType<typeof useFindSceneMarkersSuspenseQuery>;
type FindSceneMarkersQueryResult = Apollo.QueryResult<FindSceneMarkersQuery, FindSceneMarkersQueryVariables>;
function refetchFindSceneMarkersQuery(variables?: FindSceneMarkersQueryVariables) {
      return { query: FindSceneMarkersDocument, variables: variables }
    }
const FindScenesDocument = gql`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindScenesQuery__
 *
 * To run a query within a React component, call `useFindScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScenesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      scene_filter: // value for 'scene_filter'
 *      scene_ids: // value for 'scene_ids'
 *   },
 * });
 */
function useFindScenesQuery(baseOptions?: Apollo.QueryHookOptions<FindScenesQuery, FindScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindScenesQuery, FindScenesQueryVariables>(FindScenesDocument, options);
      }
function useFindScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScenesQuery, FindScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindScenesQuery, FindScenesQueryVariables>(FindScenesDocument, options);
        }
function useFindScenesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindScenesQuery, FindScenesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindScenesQuery, FindScenesQueryVariables>(FindScenesDocument, options);
        }
type FindScenesQueryHookResult = ReturnType<typeof useFindScenesQuery>;
type FindScenesLazyQueryHookResult = ReturnType<typeof useFindScenesLazyQuery>;
type FindScenesSuspenseQueryHookResult = ReturnType<typeof useFindScenesSuspenseQuery>;
type FindScenesQueryResult = Apollo.QueryResult<FindScenesQuery, FindScenesQueryVariables>;
function refetchFindScenesQuery(variables?: FindScenesQueryVariables) {
      return { query: FindScenesDocument, variables: variables }
    }
const FindScenesByPathRegexDocument = gql`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindScenesByPathRegexQuery__
 *
 * To run a query within a React component, call `useFindScenesByPathRegexQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScenesByPathRegexQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScenesByPathRegexQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
function useFindScenesByPathRegexQuery(baseOptions?: Apollo.QueryHookOptions<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>(FindScenesByPathRegexDocument, options);
      }
function useFindScenesByPathRegexLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>(FindScenesByPathRegexDocument, options);
        }
function useFindScenesByPathRegexSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>(FindScenesByPathRegexDocument, options);
        }
type FindScenesByPathRegexQueryHookResult = ReturnType<typeof useFindScenesByPathRegexQuery>;
type FindScenesByPathRegexLazyQueryHookResult = ReturnType<typeof useFindScenesByPathRegexLazyQuery>;
type FindScenesByPathRegexSuspenseQueryHookResult = ReturnType<typeof useFindScenesByPathRegexSuspenseQuery>;
type FindScenesByPathRegexQueryResult = Apollo.QueryResult<FindScenesByPathRegexQuery, FindScenesByPathRegexQueryVariables>;
function refetchFindScenesByPathRegexQuery(variables?: FindScenesByPathRegexQueryVariables) {
      return { query: FindScenesByPathRegexDocument, variables: variables }
    }
const FindDuplicateScenesDocument = gql`
    query FindDuplicateScenes($distance: Int, $duration_diff: Float) {
  findDuplicateScenes(distance: $distance, duration_diff: $duration_diff) {
    ...SlimSceneData
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useFindDuplicateScenesQuery__
 *
 * To run a query within a React component, call `useFindDuplicateScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindDuplicateScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindDuplicateScenesQuery({
 *   variables: {
 *      distance: // value for 'distance'
 *      duration_diff: // value for 'duration_diff'
 *   },
 * });
 */
function useFindDuplicateScenesQuery(baseOptions?: Apollo.QueryHookOptions<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>(FindDuplicateScenesDocument, options);
      }
function useFindDuplicateScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>(FindDuplicateScenesDocument, options);
        }
function useFindDuplicateScenesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>(FindDuplicateScenesDocument, options);
        }
type FindDuplicateScenesQueryHookResult = ReturnType<typeof useFindDuplicateScenesQuery>;
type FindDuplicateScenesLazyQueryHookResult = ReturnType<typeof useFindDuplicateScenesLazyQuery>;
type FindDuplicateScenesSuspenseQueryHookResult = ReturnType<typeof useFindDuplicateScenesSuspenseQuery>;
type FindDuplicateScenesQueryResult = Apollo.QueryResult<FindDuplicateScenesQuery, FindDuplicateScenesQueryVariables>;
function refetchFindDuplicateScenesQuery(variables?: FindDuplicateScenesQueryVariables) {
      return { query: FindDuplicateScenesDocument, variables: variables }
    }
const FindSceneDocument = gql`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${SceneDataFragmentDoc}`;

/**
 * __useFindSceneQuery__
 *
 * To run a query within a React component, call `useFindSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneQuery({
 *   variables: {
 *      id: // value for 'id'
 *      checksum: // value for 'checksum'
 *   },
 * });
 */
function useFindSceneQuery(baseOptions: Apollo.QueryHookOptions<FindSceneQuery, FindSceneQueryVariables> & ({ variables: FindSceneQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneQuery, FindSceneQueryVariables>(FindSceneDocument, options);
      }
function useFindSceneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneQuery, FindSceneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneQuery, FindSceneQueryVariables>(FindSceneDocument, options);
        }
function useFindSceneSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSceneQuery, FindSceneQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSceneQuery, FindSceneQueryVariables>(FindSceneDocument, options);
        }
type FindSceneQueryHookResult = ReturnType<typeof useFindSceneQuery>;
type FindSceneLazyQueryHookResult = ReturnType<typeof useFindSceneLazyQuery>;
type FindSceneSuspenseQueryHookResult = ReturnType<typeof useFindSceneSuspenseQuery>;
type FindSceneQueryResult = Apollo.QueryResult<FindSceneQuery, FindSceneQueryVariables>;
function refetchFindSceneQuery(variables: FindSceneQueryVariables) {
      return { query: FindSceneDocument, variables: variables }
    }
const FindFullScenesDocument = gql`
    query FindFullScenes($ids: [Int!]) {
  findScenes(scene_ids: $ids) {
    scenes {
      ...SceneData
    }
  }
}
    ${SceneDataFragmentDoc}`;

/**
 * __useFindFullScenesQuery__
 *
 * To run a query within a React component, call `useFindFullScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindFullScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindFullScenesQuery({
 *   variables: {
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindFullScenesQuery(baseOptions?: Apollo.QueryHookOptions<FindFullScenesQuery, FindFullScenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindFullScenesQuery, FindFullScenesQueryVariables>(FindFullScenesDocument, options);
      }
function useFindFullScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindFullScenesQuery, FindFullScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindFullScenesQuery, FindFullScenesQueryVariables>(FindFullScenesDocument, options);
        }
function useFindFullScenesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindFullScenesQuery, FindFullScenesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindFullScenesQuery, FindFullScenesQueryVariables>(FindFullScenesDocument, options);
        }
type FindFullScenesQueryHookResult = ReturnType<typeof useFindFullScenesQuery>;
type FindFullScenesLazyQueryHookResult = ReturnType<typeof useFindFullScenesLazyQuery>;
type FindFullScenesSuspenseQueryHookResult = ReturnType<typeof useFindFullScenesSuspenseQuery>;
type FindFullScenesQueryResult = Apollo.QueryResult<FindFullScenesQuery, FindFullScenesQueryVariables>;
function refetchFindFullScenesQuery(variables?: FindFullScenesQueryVariables) {
      return { query: FindFullScenesDocument, variables: variables }
    }
const FindSceneMarkerTagsDocument = gql`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${SceneMarkerDataFragmentDoc}`;

/**
 * __useFindSceneMarkerTagsQuery__
 *
 * To run a query within a React component, call `useFindSceneMarkerTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSceneMarkerTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSceneMarkerTagsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindSceneMarkerTagsQuery(baseOptions: Apollo.QueryHookOptions<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables> & ({ variables: FindSceneMarkerTagsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>(FindSceneMarkerTagsDocument, options);
      }
function useFindSceneMarkerTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>(FindSceneMarkerTagsDocument, options);
        }
function useFindSceneMarkerTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>(FindSceneMarkerTagsDocument, options);
        }
type FindSceneMarkerTagsQueryHookResult = ReturnType<typeof useFindSceneMarkerTagsQuery>;
type FindSceneMarkerTagsLazyQueryHookResult = ReturnType<typeof useFindSceneMarkerTagsLazyQuery>;
type FindSceneMarkerTagsSuspenseQueryHookResult = ReturnType<typeof useFindSceneMarkerTagsSuspenseQuery>;
type FindSceneMarkerTagsQueryResult = Apollo.QueryResult<FindSceneMarkerTagsQuery, FindSceneMarkerTagsQueryVariables>;
function refetchFindSceneMarkerTagsQuery(variables: FindSceneMarkerTagsQueryVariables) {
      return { query: FindSceneMarkerTagsDocument, variables: variables }
    }
const ParseSceneFilenamesDocument = gql`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      code
      details
      director
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${SlimSceneDataFragmentDoc}`;

/**
 * __useParseSceneFilenamesQuery__
 *
 * To run a query within a React component, call `useParseSceneFilenamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useParseSceneFilenamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParseSceneFilenamesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      config: // value for 'config'
 *   },
 * });
 */
function useParseSceneFilenamesQuery(baseOptions: Apollo.QueryHookOptions<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables> & ({ variables: ParseSceneFilenamesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>(ParseSceneFilenamesDocument, options);
      }
function useParseSceneFilenamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>(ParseSceneFilenamesDocument, options);
        }
function useParseSceneFilenamesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>(ParseSceneFilenamesDocument, options);
        }
type ParseSceneFilenamesQueryHookResult = ReturnType<typeof useParseSceneFilenamesQuery>;
type ParseSceneFilenamesLazyQueryHookResult = ReturnType<typeof useParseSceneFilenamesLazyQuery>;
type ParseSceneFilenamesSuspenseQueryHookResult = ReturnType<typeof useParseSceneFilenamesSuspenseQuery>;
type ParseSceneFilenamesQueryResult = Apollo.QueryResult<ParseSceneFilenamesQuery, ParseSceneFilenamesQueryVariables>;
function refetchParseSceneFilenamesQuery(variables: ParseSceneFilenamesQueryVariables) {
      return { query: ParseSceneFilenamesDocument, variables: variables }
    }
const SceneStreamsDocument = gql`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `;

/**
 * __useSceneStreamsQuery__
 *
 * To run a query within a React component, call `useSceneStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSceneStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSceneStreamsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useSceneStreamsQuery(baseOptions: Apollo.QueryHookOptions<SceneStreamsQuery, SceneStreamsQueryVariables> & ({ variables: SceneStreamsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SceneStreamsQuery, SceneStreamsQueryVariables>(SceneStreamsDocument, options);
      }
function useSceneStreamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SceneStreamsQuery, SceneStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SceneStreamsQuery, SceneStreamsQueryVariables>(SceneStreamsDocument, options);
        }
function useSceneStreamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SceneStreamsQuery, SceneStreamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SceneStreamsQuery, SceneStreamsQueryVariables>(SceneStreamsDocument, options);
        }
type SceneStreamsQueryHookResult = ReturnType<typeof useSceneStreamsQuery>;
type SceneStreamsLazyQueryHookResult = ReturnType<typeof useSceneStreamsLazyQuery>;
type SceneStreamsSuspenseQueryHookResult = ReturnType<typeof useSceneStreamsSuspenseQuery>;
type SceneStreamsQueryResult = Apollo.QueryResult<SceneStreamsQuery, SceneStreamsQueryVariables>;
function refetchSceneStreamsQuery(variables: SceneStreamsQueryVariables) {
      return { query: SceneStreamsDocument, variables: variables }
    }
const FindScenesForSelectDocument = gql`
    query FindScenesForSelect($filter: FindFilterType, $scene_filter: SceneFilterType, $ids: [ID!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, ids: $ids) {
    count
    scenes {
      ...SelectSceneData
    }
  }
}
    ${SelectSceneDataFragmentDoc}`;

/**
 * __useFindScenesForSelectQuery__
 *
 * To run a query within a React component, call `useFindScenesForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindScenesForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindScenesForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      scene_filter: // value for 'scene_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindScenesForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>(FindScenesForSelectDocument, options);
      }
function useFindScenesForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>(FindScenesForSelectDocument, options);
        }
function useFindScenesForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>(FindScenesForSelectDocument, options);
        }
type FindScenesForSelectQueryHookResult = ReturnType<typeof useFindScenesForSelectQuery>;
type FindScenesForSelectLazyQueryHookResult = ReturnType<typeof useFindScenesForSelectLazyQuery>;
type FindScenesForSelectSuspenseQueryHookResult = ReturnType<typeof useFindScenesForSelectSuspenseQuery>;
type FindScenesForSelectQueryResult = Apollo.QueryResult<FindScenesForSelectQuery, FindScenesForSelectQueryVariables>;
function refetchFindScenesForSelectQuery(variables?: FindScenesForSelectQueryVariables) {
      return { query: FindScenesForSelectDocument, variables: variables }
    }
const ListPerformerScrapersDocument = gql`
    query ListPerformerScrapers {
  listScrapers(types: [PERFORMER]) {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListPerformerScrapersQuery__
 *
 * To run a query within a React component, call `useListPerformerScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPerformerScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPerformerScrapersQuery({
 *   variables: {
 *   },
 * });
 */
function useListPerformerScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>(ListPerformerScrapersDocument, options);
      }
function useListPerformerScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>(ListPerformerScrapersDocument, options);
        }
function useListPerformerScrapersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>(ListPerformerScrapersDocument, options);
        }
type ListPerformerScrapersQueryHookResult = ReturnType<typeof useListPerformerScrapersQuery>;
type ListPerformerScrapersLazyQueryHookResult = ReturnType<typeof useListPerformerScrapersLazyQuery>;
type ListPerformerScrapersSuspenseQueryHookResult = ReturnType<typeof useListPerformerScrapersSuspenseQuery>;
type ListPerformerScrapersQueryResult = Apollo.QueryResult<ListPerformerScrapersQuery, ListPerformerScrapersQueryVariables>;
function refetchListPerformerScrapersQuery(variables?: ListPerformerScrapersQueryVariables) {
      return { query: ListPerformerScrapersDocument, variables: variables }
    }
const ListSceneScrapersDocument = gql`
    query ListSceneScrapers {
  listScrapers(types: [SCENE]) {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListSceneScrapersQuery__
 *
 * To run a query within a React component, call `useListSceneScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSceneScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSceneScrapersQuery({
 *   variables: {
 *   },
 * });
 */
function useListSceneScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>(ListSceneScrapersDocument, options);
      }
function useListSceneScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>(ListSceneScrapersDocument, options);
        }
function useListSceneScrapersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>(ListSceneScrapersDocument, options);
        }
type ListSceneScrapersQueryHookResult = ReturnType<typeof useListSceneScrapersQuery>;
type ListSceneScrapersLazyQueryHookResult = ReturnType<typeof useListSceneScrapersLazyQuery>;
type ListSceneScrapersSuspenseQueryHookResult = ReturnType<typeof useListSceneScrapersSuspenseQuery>;
type ListSceneScrapersQueryResult = Apollo.QueryResult<ListSceneScrapersQuery, ListSceneScrapersQueryVariables>;
function refetchListSceneScrapersQuery(variables?: ListSceneScrapersQueryVariables) {
      return { query: ListSceneScrapersDocument, variables: variables }
    }
const ListGalleryScrapersDocument = gql`
    query ListGalleryScrapers {
  listScrapers(types: [GALLERY]) {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListGalleryScrapersQuery__
 *
 * To run a query within a React component, call `useListGalleryScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGalleryScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGalleryScrapersQuery({
 *   variables: {
 *   },
 * });
 */
function useListGalleryScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>(ListGalleryScrapersDocument, options);
      }
function useListGalleryScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>(ListGalleryScrapersDocument, options);
        }
function useListGalleryScrapersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>(ListGalleryScrapersDocument, options);
        }
type ListGalleryScrapersQueryHookResult = ReturnType<typeof useListGalleryScrapersQuery>;
type ListGalleryScrapersLazyQueryHookResult = ReturnType<typeof useListGalleryScrapersLazyQuery>;
type ListGalleryScrapersSuspenseQueryHookResult = ReturnType<typeof useListGalleryScrapersSuspenseQuery>;
type ListGalleryScrapersQueryResult = Apollo.QueryResult<ListGalleryScrapersQuery, ListGalleryScrapersQueryVariables>;
function refetchListGalleryScrapersQuery(variables?: ListGalleryScrapersQueryVariables) {
      return { query: ListGalleryScrapersDocument, variables: variables }
    }
const ListImageScrapersDocument = gql`
    query ListImageScrapers {
  listScrapers(types: [IMAGE]) {
    id
    name
    image {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListImageScrapersQuery__
 *
 * To run a query within a React component, call `useListImageScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListImageScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListImageScrapersQuery({
 *   variables: {
 *   },
 * });
 */
function useListImageScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListImageScrapersQuery, ListImageScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListImageScrapersQuery, ListImageScrapersQueryVariables>(ListImageScrapersDocument, options);
      }
function useListImageScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListImageScrapersQuery, ListImageScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListImageScrapersQuery, ListImageScrapersQueryVariables>(ListImageScrapersDocument, options);
        }
function useListImageScrapersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListImageScrapersQuery, ListImageScrapersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListImageScrapersQuery, ListImageScrapersQueryVariables>(ListImageScrapersDocument, options);
        }
type ListImageScrapersQueryHookResult = ReturnType<typeof useListImageScrapersQuery>;
type ListImageScrapersLazyQueryHookResult = ReturnType<typeof useListImageScrapersLazyQuery>;
type ListImageScrapersSuspenseQueryHookResult = ReturnType<typeof useListImageScrapersSuspenseQuery>;
type ListImageScrapersQueryResult = Apollo.QueryResult<ListImageScrapersQuery, ListImageScrapersQueryVariables>;
function refetchListImageScrapersQuery(variables?: ListImageScrapersQueryVariables) {
      return { query: ListImageScrapersDocument, variables: variables }
    }
const ListGroupScrapersDocument = gql`
    query ListGroupScrapers {
  listScrapers(types: [GROUP]) {
    id
    name
    group {
      urls
      supported_scrapes
    }
  }
}
    `;

/**
 * __useListGroupScrapersQuery__
 *
 * To run a query within a React component, call `useListGroupScrapersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListGroupScrapersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListGroupScrapersQuery({
 *   variables: {
 *   },
 * });
 */
function useListGroupScrapersQuery(baseOptions?: Apollo.QueryHookOptions<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>(ListGroupScrapersDocument, options);
      }
function useListGroupScrapersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>(ListGroupScrapersDocument, options);
        }
function useListGroupScrapersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>(ListGroupScrapersDocument, options);
        }
type ListGroupScrapersQueryHookResult = ReturnType<typeof useListGroupScrapersQuery>;
type ListGroupScrapersLazyQueryHookResult = ReturnType<typeof useListGroupScrapersLazyQuery>;
type ListGroupScrapersSuspenseQueryHookResult = ReturnType<typeof useListGroupScrapersSuspenseQuery>;
type ListGroupScrapersQueryResult = Apollo.QueryResult<ListGroupScrapersQuery, ListGroupScrapersQueryVariables>;
function refetchListGroupScrapersQuery(variables?: ListGroupScrapersQueryVariables) {
      return { query: ListGroupScrapersDocument, variables: variables }
    }
const ScrapeSingleStudioDocument = gql`
    query ScrapeSingleStudio($source: ScraperSourceInput!, $input: ScrapeSingleStudioInput!) {
  scrapeSingleStudio(source: $source, input: $input) {
    ...ScrapedStudioData
  }
}
    ${ScrapedStudioDataFragmentDoc}`;

/**
 * __useScrapeSingleStudioQuery__
 *
 * To run a query within a React component, call `useScrapeSingleStudioQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleStudioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleStudioQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSingleStudioQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables> & ({ variables: ScrapeSingleStudioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>(ScrapeSingleStudioDocument, options);
      }
function useScrapeSingleStudioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>(ScrapeSingleStudioDocument, options);
        }
function useScrapeSingleStudioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>(ScrapeSingleStudioDocument, options);
        }
type ScrapeSingleStudioQueryHookResult = ReturnType<typeof useScrapeSingleStudioQuery>;
type ScrapeSingleStudioLazyQueryHookResult = ReturnType<typeof useScrapeSingleStudioLazyQuery>;
type ScrapeSingleStudioSuspenseQueryHookResult = ReturnType<typeof useScrapeSingleStudioSuspenseQuery>;
type ScrapeSingleStudioQueryResult = Apollo.QueryResult<ScrapeSingleStudioQuery, ScrapeSingleStudioQueryVariables>;
function refetchScrapeSingleStudioQuery(variables: ScrapeSingleStudioQueryVariables) {
      return { query: ScrapeSingleStudioDocument, variables: variables }
    }
const ScrapeSingleTagDocument = gql`
    query ScrapeSingleTag($source: ScraperSourceInput!, $input: ScrapeSingleTagInput!) {
  scrapeSingleTag(source: $source, input: $input) {
    ...ScrapedSceneTagData
  }
}
    ${ScrapedSceneTagDataFragmentDoc}`;

/**
 * __useScrapeSingleTagQuery__
 *
 * To run a query within a React component, call `useScrapeSingleTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleTagQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSingleTagQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables> & ({ variables: ScrapeSingleTagQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>(ScrapeSingleTagDocument, options);
      }
function useScrapeSingleTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>(ScrapeSingleTagDocument, options);
        }
function useScrapeSingleTagSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>(ScrapeSingleTagDocument, options);
        }
type ScrapeSingleTagQueryHookResult = ReturnType<typeof useScrapeSingleTagQuery>;
type ScrapeSingleTagLazyQueryHookResult = ReturnType<typeof useScrapeSingleTagLazyQuery>;
type ScrapeSingleTagSuspenseQueryHookResult = ReturnType<typeof useScrapeSingleTagSuspenseQuery>;
type ScrapeSingleTagQueryResult = Apollo.QueryResult<ScrapeSingleTagQuery, ScrapeSingleTagQueryVariables>;
function refetchScrapeSingleTagQuery(variables: ScrapeSingleTagQueryVariables) {
      return { query: ScrapeSingleTagDocument, variables: variables }
    }
const ScrapeSinglePerformerDocument = gql`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapeSinglePerformerQuery__
 *
 * To run a query within a React component, call `useScrapeSinglePerformerQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSinglePerformerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSinglePerformerQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSinglePerformerQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables> & ({ variables: ScrapeSinglePerformerQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>(ScrapeSinglePerformerDocument, options);
      }
function useScrapeSinglePerformerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>(ScrapeSinglePerformerDocument, options);
        }
function useScrapeSinglePerformerSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>(ScrapeSinglePerformerDocument, options);
        }
type ScrapeSinglePerformerQueryHookResult = ReturnType<typeof useScrapeSinglePerformerQuery>;
type ScrapeSinglePerformerLazyQueryHookResult = ReturnType<typeof useScrapeSinglePerformerLazyQuery>;
type ScrapeSinglePerformerSuspenseQueryHookResult = ReturnType<typeof useScrapeSinglePerformerSuspenseQuery>;
type ScrapeSinglePerformerQueryResult = Apollo.QueryResult<ScrapeSinglePerformerQuery, ScrapeSinglePerformerQueryVariables>;
function refetchScrapeSinglePerformerQuery(variables: ScrapeSinglePerformerQueryVariables) {
      return { query: ScrapeSinglePerformerDocument, variables: variables }
    }
const ScrapeMultiPerformersDocument = gql`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapeMultiPerformersQuery__
 *
 * To run a query within a React component, call `useScrapeMultiPerformersQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeMultiPerformersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeMultiPerformersQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeMultiPerformersQuery(baseOptions: Apollo.QueryHookOptions<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables> & ({ variables: ScrapeMultiPerformersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>(ScrapeMultiPerformersDocument, options);
      }
function useScrapeMultiPerformersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>(ScrapeMultiPerformersDocument, options);
        }
function useScrapeMultiPerformersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>(ScrapeMultiPerformersDocument, options);
        }
type ScrapeMultiPerformersQueryHookResult = ReturnType<typeof useScrapeMultiPerformersQuery>;
type ScrapeMultiPerformersLazyQueryHookResult = ReturnType<typeof useScrapeMultiPerformersLazyQuery>;
type ScrapeMultiPerformersSuspenseQueryHookResult = ReturnType<typeof useScrapeMultiPerformersSuspenseQuery>;
type ScrapeMultiPerformersQueryResult = Apollo.QueryResult<ScrapeMultiPerformersQuery, ScrapeMultiPerformersQueryVariables>;
function refetchScrapeMultiPerformersQuery(variables: ScrapeMultiPerformersQueryVariables) {
      return { query: ScrapeMultiPerformersDocument, variables: variables }
    }
const ScrapePerformerUrlDocument = gql`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${ScrapedPerformerDataFragmentDoc}`;

/**
 * __useScrapePerformerUrlQuery__
 *
 * To run a query within a React component, call `useScrapePerformerUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapePerformerUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapePerformerUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
function useScrapePerformerUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables> & ({ variables: ScrapePerformerUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>(ScrapePerformerUrlDocument, options);
      }
function useScrapePerformerUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>(ScrapePerformerUrlDocument, options);
        }
function useScrapePerformerUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>(ScrapePerformerUrlDocument, options);
        }
type ScrapePerformerUrlQueryHookResult = ReturnType<typeof useScrapePerformerUrlQuery>;
type ScrapePerformerUrlLazyQueryHookResult = ReturnType<typeof useScrapePerformerUrlLazyQuery>;
type ScrapePerformerUrlSuspenseQueryHookResult = ReturnType<typeof useScrapePerformerUrlSuspenseQuery>;
type ScrapePerformerUrlQueryResult = Apollo.QueryResult<ScrapePerformerUrlQuery, ScrapePerformerUrlQueryVariables>;
function refetchScrapePerformerUrlQuery(variables: ScrapePerformerUrlQueryVariables) {
      return { query: ScrapePerformerUrlDocument, variables: variables }
    }
const ScrapeSingleSceneDocument = gql`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeSingleSceneQuery__
 *
 * To run a query within a React component, call `useScrapeSingleSceneQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleSceneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleSceneQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSingleSceneQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables> & ({ variables: ScrapeSingleSceneQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>(ScrapeSingleSceneDocument, options);
      }
function useScrapeSingleSceneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>(ScrapeSingleSceneDocument, options);
        }
function useScrapeSingleSceneSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>(ScrapeSingleSceneDocument, options);
        }
type ScrapeSingleSceneQueryHookResult = ReturnType<typeof useScrapeSingleSceneQuery>;
type ScrapeSingleSceneLazyQueryHookResult = ReturnType<typeof useScrapeSingleSceneLazyQuery>;
type ScrapeSingleSceneSuspenseQueryHookResult = ReturnType<typeof useScrapeSingleSceneSuspenseQuery>;
type ScrapeSingleSceneQueryResult = Apollo.QueryResult<ScrapeSingleSceneQuery, ScrapeSingleSceneQueryVariables>;
function refetchScrapeSingleSceneQuery(variables: ScrapeSingleSceneQueryVariables) {
      return { query: ScrapeSingleSceneDocument, variables: variables }
    }
const ScrapeMultiScenesDocument = gql`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeMultiScenesQuery__
 *
 * To run a query within a React component, call `useScrapeMultiScenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeMultiScenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeMultiScenesQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeMultiScenesQuery(baseOptions: Apollo.QueryHookOptions<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables> & ({ variables: ScrapeMultiScenesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>(ScrapeMultiScenesDocument, options);
      }
function useScrapeMultiScenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>(ScrapeMultiScenesDocument, options);
        }
function useScrapeMultiScenesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>(ScrapeMultiScenesDocument, options);
        }
type ScrapeMultiScenesQueryHookResult = ReturnType<typeof useScrapeMultiScenesQuery>;
type ScrapeMultiScenesLazyQueryHookResult = ReturnType<typeof useScrapeMultiScenesLazyQuery>;
type ScrapeMultiScenesSuspenseQueryHookResult = ReturnType<typeof useScrapeMultiScenesSuspenseQuery>;
type ScrapeMultiScenesQueryResult = Apollo.QueryResult<ScrapeMultiScenesQuery, ScrapeMultiScenesQueryVariables>;
function refetchScrapeMultiScenesQuery(variables: ScrapeMultiScenesQueryVariables) {
      return { query: ScrapeMultiScenesDocument, variables: variables }
    }
const ScrapeSceneUrlDocument = gql`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${ScrapedSceneDataFragmentDoc}`;

/**
 * __useScrapeSceneUrlQuery__
 *
 * To run a query within a React component, call `useScrapeSceneUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSceneUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSceneUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
function useScrapeSceneUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables> & ({ variables: ScrapeSceneUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>(ScrapeSceneUrlDocument, options);
      }
function useScrapeSceneUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>(ScrapeSceneUrlDocument, options);
        }
function useScrapeSceneUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>(ScrapeSceneUrlDocument, options);
        }
type ScrapeSceneUrlQueryHookResult = ReturnType<typeof useScrapeSceneUrlQuery>;
type ScrapeSceneUrlLazyQueryHookResult = ReturnType<typeof useScrapeSceneUrlLazyQuery>;
type ScrapeSceneUrlSuspenseQueryHookResult = ReturnType<typeof useScrapeSceneUrlSuspenseQuery>;
type ScrapeSceneUrlQueryResult = Apollo.QueryResult<ScrapeSceneUrlQuery, ScrapeSceneUrlQueryVariables>;
function refetchScrapeSceneUrlQuery(variables: ScrapeSceneUrlQueryVariables) {
      return { query: ScrapeSceneUrlDocument, variables: variables }
    }
const ScrapeSingleGalleryDocument = gql`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

/**
 * __useScrapeSingleGalleryQuery__
 *
 * To run a query within a React component, call `useScrapeSingleGalleryQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleGalleryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleGalleryQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSingleGalleryQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables> & ({ variables: ScrapeSingleGalleryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>(ScrapeSingleGalleryDocument, options);
      }
function useScrapeSingleGalleryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>(ScrapeSingleGalleryDocument, options);
        }
function useScrapeSingleGallerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>(ScrapeSingleGalleryDocument, options);
        }
type ScrapeSingleGalleryQueryHookResult = ReturnType<typeof useScrapeSingleGalleryQuery>;
type ScrapeSingleGalleryLazyQueryHookResult = ReturnType<typeof useScrapeSingleGalleryLazyQuery>;
type ScrapeSingleGallerySuspenseQueryHookResult = ReturnType<typeof useScrapeSingleGallerySuspenseQuery>;
type ScrapeSingleGalleryQueryResult = Apollo.QueryResult<ScrapeSingleGalleryQuery, ScrapeSingleGalleryQueryVariables>;
function refetchScrapeSingleGalleryQuery(variables: ScrapeSingleGalleryQueryVariables) {
      return { query: ScrapeSingleGalleryDocument, variables: variables }
    }
const ScrapeSingleImageDocument = gql`
    query ScrapeSingleImage($source: ScraperSourceInput!, $input: ScrapeSingleImageInput!) {
  scrapeSingleImage(source: $source, input: $input) {
    ...ScrapedImageData
  }
}
    ${ScrapedImageDataFragmentDoc}`;

/**
 * __useScrapeSingleImageQuery__
 *
 * To run a query within a React component, call `useScrapeSingleImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeSingleImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeSingleImageQuery({
 *   variables: {
 *      source: // value for 'source'
 *      input: // value for 'input'
 *   },
 * });
 */
function useScrapeSingleImageQuery(baseOptions: Apollo.QueryHookOptions<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables> & ({ variables: ScrapeSingleImageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>(ScrapeSingleImageDocument, options);
      }
function useScrapeSingleImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>(ScrapeSingleImageDocument, options);
        }
function useScrapeSingleImageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>(ScrapeSingleImageDocument, options);
        }
type ScrapeSingleImageQueryHookResult = ReturnType<typeof useScrapeSingleImageQuery>;
type ScrapeSingleImageLazyQueryHookResult = ReturnType<typeof useScrapeSingleImageLazyQuery>;
type ScrapeSingleImageSuspenseQueryHookResult = ReturnType<typeof useScrapeSingleImageSuspenseQuery>;
type ScrapeSingleImageQueryResult = Apollo.QueryResult<ScrapeSingleImageQuery, ScrapeSingleImageQueryVariables>;
function refetchScrapeSingleImageQuery(variables: ScrapeSingleImageQueryVariables) {
      return { query: ScrapeSingleImageDocument, variables: variables }
    }
const ScrapeGalleryUrlDocument = gql`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${ScrapedGalleryDataFragmentDoc}`;

/**
 * __useScrapeGalleryUrlQuery__
 *
 * To run a query within a React component, call `useScrapeGalleryUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeGalleryUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeGalleryUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
function useScrapeGalleryUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables> & ({ variables: ScrapeGalleryUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>(ScrapeGalleryUrlDocument, options);
      }
function useScrapeGalleryUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>(ScrapeGalleryUrlDocument, options);
        }
function useScrapeGalleryUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>(ScrapeGalleryUrlDocument, options);
        }
type ScrapeGalleryUrlQueryHookResult = ReturnType<typeof useScrapeGalleryUrlQuery>;
type ScrapeGalleryUrlLazyQueryHookResult = ReturnType<typeof useScrapeGalleryUrlLazyQuery>;
type ScrapeGalleryUrlSuspenseQueryHookResult = ReturnType<typeof useScrapeGalleryUrlSuspenseQuery>;
type ScrapeGalleryUrlQueryResult = Apollo.QueryResult<ScrapeGalleryUrlQuery, ScrapeGalleryUrlQueryVariables>;
function refetchScrapeGalleryUrlQuery(variables: ScrapeGalleryUrlQueryVariables) {
      return { query: ScrapeGalleryUrlDocument, variables: variables }
    }
const ScrapeImageUrlDocument = gql`
    query ScrapeImageURL($url: String!) {
  scrapeImageURL(url: $url) {
    ...ScrapedImageData
  }
}
    ${ScrapedImageDataFragmentDoc}`;

/**
 * __useScrapeImageUrlQuery__
 *
 * To run a query within a React component, call `useScrapeImageUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeImageUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeImageUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
function useScrapeImageUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables> & ({ variables: ScrapeImageUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>(ScrapeImageUrlDocument, options);
      }
function useScrapeImageUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>(ScrapeImageUrlDocument, options);
        }
function useScrapeImageUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>(ScrapeImageUrlDocument, options);
        }
type ScrapeImageUrlQueryHookResult = ReturnType<typeof useScrapeImageUrlQuery>;
type ScrapeImageUrlLazyQueryHookResult = ReturnType<typeof useScrapeImageUrlLazyQuery>;
type ScrapeImageUrlSuspenseQueryHookResult = ReturnType<typeof useScrapeImageUrlSuspenseQuery>;
type ScrapeImageUrlQueryResult = Apollo.QueryResult<ScrapeImageUrlQuery, ScrapeImageUrlQueryVariables>;
function refetchScrapeImageUrlQuery(variables: ScrapeImageUrlQueryVariables) {
      return { query: ScrapeImageUrlDocument, variables: variables }
    }
const ScrapeGroupUrlDocument = gql`
    query ScrapeGroupURL($url: String!) {
  scrapeGroupURL(url: $url) {
    ...ScrapedGroupData
  }
}
    ${ScrapedGroupDataFragmentDoc}`;

/**
 * __useScrapeGroupUrlQuery__
 *
 * To run a query within a React component, call `useScrapeGroupUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useScrapeGroupUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScrapeGroupUrlQuery({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
function useScrapeGroupUrlQuery(baseOptions: Apollo.QueryHookOptions<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables> & ({ variables: ScrapeGroupUrlQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>(ScrapeGroupUrlDocument, options);
      }
function useScrapeGroupUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>(ScrapeGroupUrlDocument, options);
        }
function useScrapeGroupUrlSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>(ScrapeGroupUrlDocument, options);
        }
type ScrapeGroupUrlQueryHookResult = ReturnType<typeof useScrapeGroupUrlQuery>;
type ScrapeGroupUrlLazyQueryHookResult = ReturnType<typeof useScrapeGroupUrlLazyQuery>;
type ScrapeGroupUrlSuspenseQueryHookResult = ReturnType<typeof useScrapeGroupUrlSuspenseQuery>;
type ScrapeGroupUrlQueryResult = Apollo.QueryResult<ScrapeGroupUrlQuery, ScrapeGroupUrlQueryVariables>;
function refetchScrapeGroupUrlQuery(variables: ScrapeGroupUrlQueryVariables) {
      return { query: ScrapeGroupUrlDocument, variables: variables }
    }
const InstalledScraperPackagesDocument = gql`
    query InstalledScraperPackages {
  installedPackages(type: Scraper) {
    ...PackageData
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledScraperPackagesQuery__
 *
 * To run a query within a React component, call `useInstalledScraperPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledScraperPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledScraperPackagesQuery({
 *   variables: {
 *   },
 * });
 */
function useInstalledScraperPackagesQuery(baseOptions?: Apollo.QueryHookOptions<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>(InstalledScraperPackagesDocument, options);
      }
function useInstalledScraperPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>(InstalledScraperPackagesDocument, options);
        }
function useInstalledScraperPackagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>(InstalledScraperPackagesDocument, options);
        }
type InstalledScraperPackagesQueryHookResult = ReturnType<typeof useInstalledScraperPackagesQuery>;
type InstalledScraperPackagesLazyQueryHookResult = ReturnType<typeof useInstalledScraperPackagesLazyQuery>;
type InstalledScraperPackagesSuspenseQueryHookResult = ReturnType<typeof useInstalledScraperPackagesSuspenseQuery>;
type InstalledScraperPackagesQueryResult = Apollo.QueryResult<InstalledScraperPackagesQuery, InstalledScraperPackagesQueryVariables>;
function refetchInstalledScraperPackagesQuery(variables?: InstalledScraperPackagesQueryVariables) {
      return { query: InstalledScraperPackagesDocument, variables: variables }
    }
const InstalledScraperPackagesStatusDocument = gql`
    query InstalledScraperPackagesStatus {
  installedPackages(type: Scraper) {
    ...PackageData
    source_package {
      ...PackageData
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useInstalledScraperPackagesStatusQuery__
 *
 * To run a query within a React component, call `useInstalledScraperPackagesStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstalledScraperPackagesStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstalledScraperPackagesStatusQuery({
 *   variables: {
 *   },
 * });
 */
function useInstalledScraperPackagesStatusQuery(baseOptions?: Apollo.QueryHookOptions<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>(InstalledScraperPackagesStatusDocument, options);
      }
function useInstalledScraperPackagesStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>(InstalledScraperPackagesStatusDocument, options);
        }
function useInstalledScraperPackagesStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>(InstalledScraperPackagesStatusDocument, options);
        }
type InstalledScraperPackagesStatusQueryHookResult = ReturnType<typeof useInstalledScraperPackagesStatusQuery>;
type InstalledScraperPackagesStatusLazyQueryHookResult = ReturnType<typeof useInstalledScraperPackagesStatusLazyQuery>;
type InstalledScraperPackagesStatusSuspenseQueryHookResult = ReturnType<typeof useInstalledScraperPackagesStatusSuspenseQuery>;
type InstalledScraperPackagesStatusQueryResult = Apollo.QueryResult<InstalledScraperPackagesStatusQuery, InstalledScraperPackagesStatusQueryVariables>;
function refetchInstalledScraperPackagesStatusQuery(variables?: InstalledScraperPackagesStatusQueryVariables) {
      return { query: InstalledScraperPackagesStatusDocument, variables: variables }
    }
const AvailableScraperPackagesDocument = gql`
    query AvailableScraperPackages($source: String!) {
  availablePackages(source: $source, type: Scraper) {
    ...PackageData
    requires {
      package_id
    }
  }
}
    ${PackageDataFragmentDoc}`;

/**
 * __useAvailableScraperPackagesQuery__
 *
 * To run a query within a React component, call `useAvailableScraperPackagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableScraperPackagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableScraperPackagesQuery({
 *   variables: {
 *      source: // value for 'source'
 *   },
 * });
 */
function useAvailableScraperPackagesQuery(baseOptions: Apollo.QueryHookOptions<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables> & ({ variables: AvailableScraperPackagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>(AvailableScraperPackagesDocument, options);
      }
function useAvailableScraperPackagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>(AvailableScraperPackagesDocument, options);
        }
function useAvailableScraperPackagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>(AvailableScraperPackagesDocument, options);
        }
type AvailableScraperPackagesQueryHookResult = ReturnType<typeof useAvailableScraperPackagesQuery>;
type AvailableScraperPackagesLazyQueryHookResult = ReturnType<typeof useAvailableScraperPackagesLazyQuery>;
type AvailableScraperPackagesSuspenseQueryHookResult = ReturnType<typeof useAvailableScraperPackagesSuspenseQuery>;
type AvailableScraperPackagesQueryResult = Apollo.QueryResult<AvailableScraperPackagesQuery, AvailableScraperPackagesQueryVariables>;
function refetchAvailableScraperPackagesQuery(variables: AvailableScraperPackagesQueryVariables) {
      return { query: AvailableScraperPackagesDocument, variables: variables }
    }
const ConfigurationDocument = gql`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${ConfigDataFragmentDoc}`;

/**
 * __useConfigurationQuery__
 *
 * To run a query within a React component, call `useConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
function useConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
      }
function useConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
        }
function useConfigurationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
        }
type ConfigurationQueryHookResult = ReturnType<typeof useConfigurationQuery>;
type ConfigurationLazyQueryHookResult = ReturnType<typeof useConfigurationLazyQuery>;
type ConfigurationSuspenseQueryHookResult = ReturnType<typeof useConfigurationSuspenseQuery>;
type ConfigurationQueryResult = Apollo.QueryResult<ConfigurationQuery, ConfigurationQueryVariables>;
function refetchConfigurationQuery(variables?: ConfigurationQueryVariables) {
      return { query: ConfigurationDocument, variables: variables }
    }
const DirectoryDocument = gql`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;

/**
 * __useDirectoryQuery__
 *
 * To run a query within a React component, call `useDirectoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDirectoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDirectoryQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
function useDirectoryQuery(baseOptions?: Apollo.QueryHookOptions<DirectoryQuery, DirectoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DirectoryQuery, DirectoryQueryVariables>(DirectoryDocument, options);
      }
function useDirectoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DirectoryQuery, DirectoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DirectoryQuery, DirectoryQueryVariables>(DirectoryDocument, options);
        }
function useDirectorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DirectoryQuery, DirectoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DirectoryQuery, DirectoryQueryVariables>(DirectoryDocument, options);
        }
type DirectoryQueryHookResult = ReturnType<typeof useDirectoryQuery>;
type DirectoryLazyQueryHookResult = ReturnType<typeof useDirectoryLazyQuery>;
type DirectorySuspenseQueryHookResult = ReturnType<typeof useDirectorySuspenseQuery>;
type DirectoryQueryResult = Apollo.QueryResult<DirectoryQuery, DirectoryQueryVariables>;
function refetchDirectoryQuery(variables?: DirectoryQueryVariables) {
      return { query: DirectoryDocument, variables: variables }
    }
const ValidateStashBoxDocument = gql`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;

/**
 * __useValidateStashBoxQuery__
 *
 * To run a query within a React component, call `useValidateStashBoxQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateStashBoxQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateStashBoxQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
function useValidateStashBoxQuery(baseOptions: Apollo.QueryHookOptions<ValidateStashBoxQuery, ValidateStashBoxQueryVariables> & ({ variables: ValidateStashBoxQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>(ValidateStashBoxDocument, options);
      }
function useValidateStashBoxLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>(ValidateStashBoxDocument, options);
        }
function useValidateStashBoxSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>(ValidateStashBoxDocument, options);
        }
type ValidateStashBoxQueryHookResult = ReturnType<typeof useValidateStashBoxQuery>;
type ValidateStashBoxLazyQueryHookResult = ReturnType<typeof useValidateStashBoxLazyQuery>;
type ValidateStashBoxSuspenseQueryHookResult = ReturnType<typeof useValidateStashBoxSuspenseQuery>;
type ValidateStashBoxQueryResult = Apollo.QueryResult<ValidateStashBoxQuery, ValidateStashBoxQueryVariables>;
function refetchValidateStashBoxQuery(variables: ValidateStashBoxQueryVariables) {
      return { query: ValidateStashBoxDocument, variables: variables }
    }
const SystemStatusDocument = gql`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
    os
    workingDir
    homeDir
    ffmpegPath
    ffprobePath
  }
}
    `;

/**
 * __useSystemStatusQuery__
 *
 * To run a query within a React component, call `useSystemStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useSystemStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSystemStatusQuery({
 *   variables: {
 *   },
 * });
 */
function useSystemStatusQuery(baseOptions?: Apollo.QueryHookOptions<SystemStatusQuery, SystemStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SystemStatusQuery, SystemStatusQueryVariables>(SystemStatusDocument, options);
      }
function useSystemStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SystemStatusQuery, SystemStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SystemStatusQuery, SystemStatusQueryVariables>(SystemStatusDocument, options);
        }
function useSystemStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SystemStatusQuery, SystemStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SystemStatusQuery, SystemStatusQueryVariables>(SystemStatusDocument, options);
        }
type SystemStatusQueryHookResult = ReturnType<typeof useSystemStatusQuery>;
type SystemStatusLazyQueryHookResult = ReturnType<typeof useSystemStatusLazyQuery>;
type SystemStatusSuspenseQueryHookResult = ReturnType<typeof useSystemStatusSuspenseQuery>;
type SystemStatusQueryResult = Apollo.QueryResult<SystemStatusQuery, SystemStatusQueryVariables>;
function refetchSystemStatusQuery(variables?: SystemStatusQueryVariables) {
      return { query: SystemStatusDocument, variables: variables }
    }
const FindStudiosDocument = gql`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${StudioDataFragmentDoc}`;

/**
 * __useFindStudiosQuery__
 *
 * To run a query within a React component, call `useFindStudiosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindStudiosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindStudiosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      studio_filter: // value for 'studio_filter'
 *   },
 * });
 */
function useFindStudiosQuery(baseOptions?: Apollo.QueryHookOptions<FindStudiosQuery, FindStudiosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, options);
      }
function useFindStudiosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindStudiosQuery, FindStudiosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, options);
        }
function useFindStudiosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindStudiosQuery, FindStudiosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindStudiosQuery, FindStudiosQueryVariables>(FindStudiosDocument, options);
        }
type FindStudiosQueryHookResult = ReturnType<typeof useFindStudiosQuery>;
type FindStudiosLazyQueryHookResult = ReturnType<typeof useFindStudiosLazyQuery>;
type FindStudiosSuspenseQueryHookResult = ReturnType<typeof useFindStudiosSuspenseQuery>;
type FindStudiosQueryResult = Apollo.QueryResult<FindStudiosQuery, FindStudiosQueryVariables>;
function refetchFindStudiosQuery(variables?: FindStudiosQueryVariables) {
      return { query: FindStudiosDocument, variables: variables }
    }
const FindStudioDocument = gql`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${StudioDataFragmentDoc}`;

/**
 * __useFindStudioQuery__
 *
 * To run a query within a React component, call `useFindStudioQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindStudioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindStudioQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindStudioQuery(baseOptions: Apollo.QueryHookOptions<FindStudioQuery, FindStudioQueryVariables> & ({ variables: FindStudioQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, options);
      }
function useFindStudioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindStudioQuery, FindStudioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, options);
        }
function useFindStudioSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindStudioQuery, FindStudioQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindStudioQuery, FindStudioQueryVariables>(FindStudioDocument, options);
        }
type FindStudioQueryHookResult = ReturnType<typeof useFindStudioQuery>;
type FindStudioLazyQueryHookResult = ReturnType<typeof useFindStudioLazyQuery>;
type FindStudioSuspenseQueryHookResult = ReturnType<typeof useFindStudioSuspenseQuery>;
type FindStudioQueryResult = Apollo.QueryResult<FindStudioQuery, FindStudioQueryVariables>;
function refetchFindStudioQuery(variables: FindStudioQueryVariables) {
      return { query: FindStudioDocument, variables: variables }
    }
const FindStudiosForSelectDocument = gql`
    query FindStudiosForSelect($filter: FindFilterType, $studio_filter: StudioFilterType, $ids: [ID!]) {
  findStudios(filter: $filter, studio_filter: $studio_filter, ids: $ids) {
    count
    studios {
      ...SelectStudioData
    }
  }
}
    ${SelectStudioDataFragmentDoc}`;

/**
 * __useFindStudiosForSelectQuery__
 *
 * To run a query within a React component, call `useFindStudiosForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindStudiosForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindStudiosForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      studio_filter: // value for 'studio_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindStudiosForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>(FindStudiosForSelectDocument, options);
      }
function useFindStudiosForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>(FindStudiosForSelectDocument, options);
        }
function useFindStudiosForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>(FindStudiosForSelectDocument, options);
        }
type FindStudiosForSelectQueryHookResult = ReturnType<typeof useFindStudiosForSelectQuery>;
type FindStudiosForSelectLazyQueryHookResult = ReturnType<typeof useFindStudiosForSelectLazyQuery>;
type FindStudiosForSelectSuspenseQueryHookResult = ReturnType<typeof useFindStudiosForSelectSuspenseQuery>;
type FindStudiosForSelectQueryResult = Apollo.QueryResult<FindStudiosForSelectQuery, FindStudiosForSelectQueryVariables>;
function refetchFindStudiosForSelectQuery(variables?: FindStudiosForSelectQueryVariables) {
      return { query: FindStudiosForSelectDocument, variables: variables }
    }
const FindTagsDocument = gql`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...TagData
    }
  }
}
    ${TagDataFragmentDoc}`;

/**
 * __useFindTagsQuery__
 *
 * To run a query within a React component, call `useFindTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      tag_filter: // value for 'tag_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindTagsQuery(baseOptions?: Apollo.QueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
      }
function useFindTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
        }
function useFindTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindTagsQuery, FindTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTagsQuery, FindTagsQueryVariables>(FindTagsDocument, options);
        }
type FindTagsQueryHookResult = ReturnType<typeof useFindTagsQuery>;
type FindTagsLazyQueryHookResult = ReturnType<typeof useFindTagsLazyQuery>;
type FindTagsSuspenseQueryHookResult = ReturnType<typeof useFindTagsSuspenseQuery>;
type FindTagsQueryResult = Apollo.QueryResult<FindTagsQuery, FindTagsQueryVariables>;
function refetchFindTagsQuery(variables?: FindTagsQueryVariables) {
      return { query: FindTagsDocument, variables: variables }
    }
const FindTagDocument = gql`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${TagDataFragmentDoc}`;

/**
 * __useFindTagQuery__
 *
 * To run a query within a React component, call `useFindTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFindTagQuery(baseOptions: Apollo.QueryHookOptions<FindTagQuery, FindTagQueryVariables> & ({ variables: FindTagQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
      }
function useFindTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
        }
function useFindTagSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindTagQuery, FindTagQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTagQuery, FindTagQueryVariables>(FindTagDocument, options);
        }
type FindTagQueryHookResult = ReturnType<typeof useFindTagQuery>;
type FindTagLazyQueryHookResult = ReturnType<typeof useFindTagLazyQuery>;
type FindTagSuspenseQueryHookResult = ReturnType<typeof useFindTagSuspenseQuery>;
type FindTagQueryResult = Apollo.QueryResult<FindTagQuery, FindTagQueryVariables>;
function refetchFindTagQuery(variables: FindTagQueryVariables) {
      return { query: FindTagDocument, variables: variables }
    }
const FindTagsForSelectDocument = gql`
    query FindTagsForSelect($filter: FindFilterType, $tag_filter: TagFilterType, $ids: [ID!]) {
  findTags(filter: $filter, tag_filter: $tag_filter, ids: $ids) {
    count
    tags {
      ...SelectTagData
    }
  }
}
    ${SelectTagDataFragmentDoc}`;

/**
 * __useFindTagsForSelectQuery__
 *
 * To run a query within a React component, call `useFindTagsForSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagsForSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagsForSelectQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      tag_filter: // value for 'tag_filter'
 *      ids: // value for 'ids'
 *   },
 * });
 */
function useFindTagsForSelectQuery(baseOptions?: Apollo.QueryHookOptions<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>(FindTagsForSelectDocument, options);
      }
function useFindTagsForSelectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>(FindTagsForSelectDocument, options);
        }
function useFindTagsForSelectSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>(FindTagsForSelectDocument, options);
        }
type FindTagsForSelectQueryHookResult = ReturnType<typeof useFindTagsForSelectQuery>;
type FindTagsForSelectLazyQueryHookResult = ReturnType<typeof useFindTagsForSelectLazyQuery>;
type FindTagsForSelectSuspenseQueryHookResult = ReturnType<typeof useFindTagsForSelectSuspenseQuery>;
type FindTagsForSelectQueryResult = Apollo.QueryResult<FindTagsForSelectQuery, FindTagsForSelectQueryVariables>;
function refetchFindTagsForSelectQuery(variables?: FindTagsForSelectQueryVariables) {
      return { query: FindTagsForSelectDocument, variables: variables }
    }
const FindTagsForListDocument = gql`
    query FindTagsForList($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagListData
    }
  }
}
    ${TagListDataFragmentDoc}`;

/**
 * __useFindTagsForListQuery__
 *
 * To run a query within a React component, call `useFindTagsForListQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTagsForListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTagsForListQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      tag_filter: // value for 'tag_filter'
 *   },
 * });
 */
function useFindTagsForListQuery(baseOptions?: Apollo.QueryHookOptions<FindTagsForListQuery, FindTagsForListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTagsForListQuery, FindTagsForListQueryVariables>(FindTagsForListDocument, options);
      }
function useFindTagsForListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTagsForListQuery, FindTagsForListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTagsForListQuery, FindTagsForListQueryVariables>(FindTagsForListDocument, options);
        }
function useFindTagsForListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindTagsForListQuery, FindTagsForListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTagsForListQuery, FindTagsForListQueryVariables>(FindTagsForListDocument, options);
        }
type FindTagsForListQueryHookResult = ReturnType<typeof useFindTagsForListQuery>;
type FindTagsForListLazyQueryHookResult = ReturnType<typeof useFindTagsForListLazyQuery>;
type FindTagsForListSuspenseQueryHookResult = ReturnType<typeof useFindTagsForListSuspenseQuery>;
type FindTagsForListQueryResult = Apollo.QueryResult<FindTagsForListQuery, FindTagsForListQueryVariables>;
function refetchFindTagsForListQuery(variables?: FindTagsForListQueryVariables) {
      return { query: FindTagsForListDocument, variables: variables }
    }
const JobsSubscribeDocument = gql`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
      error
      startTime
    }
  }
}
    `;

/**
 * __useJobsSubscribeSubscription__
 *
 * To run a query within a React component, call `useJobsSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useJobsSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
function useJobsSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<JobsSubscribeSubscription, JobsSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<JobsSubscribeSubscription, JobsSubscribeSubscriptionVariables>(JobsSubscribeDocument, options);
      }
type JobsSubscribeSubscriptionHookResult = ReturnType<typeof useJobsSubscribeSubscription>;
type JobsSubscribeSubscriptionResult = Apollo.SubscriptionResult<JobsSubscribeSubscription>;
const LoggingSubscribeDocument = gql`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${LogEntryDataFragmentDoc}`;

/**
 * __useLoggingSubscribeSubscription__
 *
 * To run a query within a React component, call `useLoggingSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLoggingSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoggingSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
function useLoggingSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<LoggingSubscribeSubscription, LoggingSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LoggingSubscribeSubscription, LoggingSubscribeSubscriptionVariables>(LoggingSubscribeDocument, options);
      }
type LoggingSubscribeSubscriptionHookResult = ReturnType<typeof useLoggingSubscribeSubscription>;
type LoggingSubscribeSubscriptionResult = Apollo.SubscriptionResult<LoggingSubscribeSubscription>;
const ScanCompleteSubscribeDocument = gql`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;

/**
 * __useScanCompleteSubscribeSubscription__
 *
 * To run a query within a React component, call `useScanCompleteSubscribeSubscription` and pass it any options that fit your needs.
 * When your component renders, `useScanCompleteSubscribeSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScanCompleteSubscribeSubscription({
 *   variables: {
 *   },
 * });
 */
function useScanCompleteSubscribeSubscription(baseOptions?: Apollo.SubscriptionHookOptions<ScanCompleteSubscribeSubscription, ScanCompleteSubscribeSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ScanCompleteSubscribeSubscription, ScanCompleteSubscribeSubscriptionVariables>(ScanCompleteSubscribeDocument, options);
      }
type ScanCompleteSubscribeSubscriptionHookResult = ReturnType<typeof useScanCompleteSubscribeSubscription>;
type ScanCompleteSubscribeSubscriptionResult = Apollo.SubscriptionResult<ScanCompleteSubscribeSubscription>;