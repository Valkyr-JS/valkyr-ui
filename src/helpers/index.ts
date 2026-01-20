interface IgetRenderData<T> {
  data: T | undefined;
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

/** Convert a Stash object `rating100` value to a Stash interface rating. */
export const convertRating100 = (
  value: number,
  options: RatingSystemOptions = { type: "stars", starPrecision: "full" },
): number => {
  let ratingNum = 0;
  if (options.type === "decimal") ratingNum = value / 10;
  else {
    switch (options.starPrecision) {
      case "half":
        ratingNum = Math.round(value / 10) / 2; // Math.round(74 / 10 = 7.4) / 2 = 3.5
        break;
      case "quarter":
        ratingNum = Math.round(value / 5) / 4; // Math.round(74 / 5 = 14.8) / 4 = 3.75
        break;
      case "tenth":
        ratingNum = Math.round(value / 2) / 10; // Math.round(74 / 2 = 37) / 10 = 3.7
        break;
      case "full":
      default:
        ratingNum = Math.round(value / 20); // Math.round(74 / 20 = 3.7) = 4
    }
  }

  return ratingNum;
};

/** Returns whether a video file is portrait-orientated. */
export function getFileIsPortrait(file: VideoFileData | undefined): boolean {
  const width = file?.width ? file.width : 0;
  const height = file?.height ? file.height : 0;
  return height > width;
}

/** Adds padding to timestamps to make all units double-figures and include
 * hours. */
export const padTimestamps = (timestamp: string): string => {
  const reverseTimes = timestamp.split(":").reverse();
  if (reverseTimes.length === 1) reverseTimes.push("00", "00");
  if (reverseTimes.length === 2) reverseTimes.push("00");

  timestamp = reverseTimes
    .map((v) => (v.length < 2 ? "0" + v : v))
    .reverse()
    .join(":");

  return timestamp;
};
