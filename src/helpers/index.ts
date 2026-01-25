/* -------------------------------------- convertRating100 -------------------------------------- */

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

/* -------------------------------------- getFileIsPortrait ------------------------------------- */

/** Returns whether a video file is portrait-orientated. */
export function getFileIsPortrait(
  file: VideoFileDataFragment | undefined,
): boolean {
  const width = file?.width ? file.width : 0;
  const height = file?.height ? file.height : 0;
  return height >= width;
}

/* ---------------------------------------- getRenderData --------------------------------------- */

interface IgetRenderData<T> {
  data: T | undefined;
  zoomIndex: {
    current?: number;
    user: number;
  };
}

/** A helper function that runs common checks to see if the component can be
 * rendered. Returns either the required data object if it will render, or null
 * if it won't. */
export const getRenderData = <T>(args: IgetRenderData<T>): T | null => {
  // Return null if no data is available
  if (args.data === undefined) return null;

  // Return null if the user has disabled the data, i.e. `zoomIndex.user`
  // equals `-1`.
  if (args.zoomIndex?.user === -1) return null;

  // Return the data if no zoom index data is provided, i.e. not in a zoom
  // context
  if (args.zoomIndex.current === undefined) return args.data;

  // Return null if the user zoom index is invalid
  if (
    args.zoomIndex.user < 0 ||
    args.zoomIndex.user > 3 ||
    !Number.isInteger(args.zoomIndex.user)
  )
    return null;

  // Return null if the user zoom index is greater than the current
  // zoom index.
  if (args.zoomIndex.user > args.zoomIndex.current) return null;

  return args.data;
};

/* ------------------------------------- getTitleFromObject ------------------------------------- */

interface IgetTitleFromObject {
  files?: Array<GalleryFileDataFragment> | Array<VideoFileDataFragment>;
  name?: Maybe<string>;
  title?: Maybe<string>;
}

/** Get the title from a Stash object, or create one from file data. */
export const getTitleFromObject = (object: IgetTitleFromObject): string => {
  const file =
    object.files && object.files.length ? object.files[0] : undefined;
  const objectTitle = "name" in object ? object.name : object.title;

  // Title should be the given title > filename > "Untitled"
  const filePath = file?.path.split("/") ?? [];
  const title = objectTitle || filePath[filePath.length - 1] || "Untitled";

  return title;
};

/* ---------------------------------------- makeSceneUrl ---------------------------------------- */

interface ImakeSceneUrl {
  cont?: IPlaySceneOptions["continue"];
  queue?: {
    makeLink(sceneID: string, options: IPlaySceneOptions): string;
  };
  scene: SceneDataFragment | SlimSceneDataFragment;
  index?: number;
}

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

/* ---------------------------------------- padTimestamps --------------------------------------- */

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
