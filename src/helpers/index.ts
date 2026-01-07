export const getTitleFromObject = (object: SlimStashObject): string => {
  const file =
    "files" in object && object.files.length ? object.files[0] : undefined;
  const objectTitle = "name" in object ? object.name : object.title;

  // Title should be the given title > filename > "Untitled"
  const filePath = file?.path.split("/") ?? [];
  const title = objectTitle || filePath[filePath.length - 1] || "Untitled";

  return title;
};
