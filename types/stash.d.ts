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
  scene: Scene;
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
