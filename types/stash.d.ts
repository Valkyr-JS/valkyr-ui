interface IGalleryCardGrid {
  galleries: SlimGalleryDataFragment[];
  selectedIds: Set<string>;
  zoomIndex: number;
  onSelectChange: (id: string, selected: boolean, shiftKey: boolean) => void;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/components/Galleries/GalleryCard.tsx#L57 */
interface IGalleryCardProps {
  gallery: SlimGalleryDataFragment;
  cardWidth?: number;
  selecting?: boolean;
  selected?: boolean | undefined;
  zoomIndex?: number;
  onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
}

interface INamedObject {
  id: string;
  name?: string;
  sort_name?: string | null;
}

interface IPlaySceneOptions {
  sceneIndex?: number;
  newPage?: number;
  autoPlay?: boolean;
  continue?: boolean;
  start?: number;
}

interface ISceneCardGrid {
  scenes: SlimSceneDataFragment[];
  queue?: SceneQueue;
  selectedIds: Set<string>;
  zoomIndex: number;
  onSelectChange: (id: string, selected: boolean, shiftKey: boolean) => void;
  fromGroupId?: string;
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
  advanced?: boolean;
  className?: string;
  heading?: React.ReactNode;
  headingID?: string;
  subHeadingID?: string;
  subHeading?: React.ReactNode;
  tooltip?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disabled?: boolean;
}

interface ITagLinkProps {
  tag: INamedObject;
  linkType?:
    | "scene"
    | "gallery"
    | "image"
    | "details"
    | "performer"
    | "group"
    | "studio"
    | "scene_marker";
  className?: string;
  hoverPlacement?: Placement;
  showHierarchyIcon?: boolean;
  hierarchyTooltipID?: string;
}

type Placement = "top" | "bottom" | "left" | "right";

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/rating.ts#L6 */
type RatingStarPrecision = "full" | "half" | "quarter" | "tenth";

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/rating.ts#L47 */
interface RatingSystemOptions {
  type: RatingSystemType;
  starPrecision?: RatingStarPrecision;
}

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/rating.ts#L1 */
type RatingSystemType = "stars" | "decimal";
