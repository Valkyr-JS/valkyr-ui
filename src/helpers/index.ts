export const getTitleFromObject = (object: SlimStashObject): string => {
  const file =
    "files" in object && object.files.length ? object.files[0] : undefined;
  const objectTitle = "name" in object ? object.name : object.title;

  // Title should be the given title > filename > "Untitled"
  const filePath = file?.path.split("/") ?? [];
  const title = objectTitle || filePath[filePath.length - 1] || "Untitled";

  return title;
};

/** Create a url link to a scene page. */
export const makeSceneUrl = ({ cont, index, scene, queue }: ImakeSceneUrl) => {
  const link = queue
    ? queue.makeLink(scene.id, {
        sceneIndex: index,
        continue: cont,
      })
    : `/scenes/${scene.id}`;

  return link as string;
};

interface ImakeSceneUrl {
  cont?: IPlaySceneOptions["continue"];
  queue?: {
    makeLink(sceneID: string, options: IPlaySceneOptions): string;
  };
  scene: SlimSceneDataFragment;
  index?: number;
}
