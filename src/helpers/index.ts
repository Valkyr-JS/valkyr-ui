interface IgetRenderData<T> {
  data: T | undefined;
  hideZeroValueData?: boolean;
  zoomBreakpoint: {
    current?: number;
    user: number;
  };
}

/** A helper function that runs common checks to see if the component can be
 * rendered. Returns either the required data object if it will render, or null
 * if it won't. */
export const getRenderData = <T>(args: IgetRenderData<T>): T | null => {
  console.log(args);
  // Return null if no data is available
  if (args.data === undefined) return null;

  // Return null if hiding zero-value data is enabled, and the data equals `0`.
  if (args.hideZeroValueData && args.data === 0) return null;

  // Return null if the user has disabled the data, i.e. `zoomBreakpoint.user`
  // equals `-1`.
  if (args.zoomBreakpoint?.user === -1) return null;

  // Return the data if no breakpoint data is provided, i.e. not in a zoom
  // context
  if (args.zoomBreakpoint.current === undefined) return args.data;

  // Return null if the user breakpoint is invalid
  if (
    args.zoomBreakpoint.user < 0 ||
    args.zoomBreakpoint.user > 3 ||
    !Number.isInteger(args.zoomBreakpoint.user)
  )
    return null;

  // Return null if the user breakpoint is greater than the current
  // breakpoint.
  if (args.zoomBreakpoint.user > args.zoomBreakpoint.current) return null;

  return args.data;
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
