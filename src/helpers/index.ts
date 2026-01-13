/** A helper function that runs common checks to see if the component can be
 * rendered. Returns either the required data object if it will render, or null
 * if it won't. */
export const getRenderData = <T>(
  currentBreakpoint: number,
  renderBreakpoint: number,
  data: T | undefined,
  hideZeroValueData?: boolean
): T | null => {
  // Return null if no data is available
  if (data === undefined) return null;

  // Return null if the breakpoint is invalid
  if (
    renderBreakpoint < 0 ||
    renderBreakpoint > 3 ||
    !Number.isInteger(renderBreakpoint)
  )
    return null;

  // Return null if hiding zero-value data is enabled, and the data equals `0`.
  if (hideZeroValueData && data === 0) return null;

  // Return null if the render breakpoint is greater than the current
  // breakpoint.
  if (renderBreakpoint > currentBreakpoint) return null;

  return data;
};

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
