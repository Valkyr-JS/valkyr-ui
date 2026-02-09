import {
  faBox,
  faCirclePlay,
  faEye,
  faFilm,
  faHeart,
  faImage,
  faImages,
  faLocationDot,
  faStar,
  faTag,
  faUser,
  faVideo,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

/** Get the Font Awesome icon used in Stash, from the correct library. */
export const getStashFaIcon = (
  icon:
    | "favorite"
    | "gallery"
    | "group"
    | "image"
    | "marker"
    | "organized"
    | "performer"
    | "playCount"
    | "rating"
    | "scene"
    | "studio"
    | "tag",
): IconDefinition => {
  switch (icon) {
    case "favorite":
      return faHeart;
    case "gallery":
      return faImages;
    case "group":
      return faFilm;
    case "image":
      return faImage;
    case "marker":
      return faLocationDot;
    case "organized":
      return faBox;
    case "performer":
      return faUser;
    case "playCount":
      return faEye;
    case "rating":
      return faStar;
    case "scene":
      return faCirclePlay;
    case "studio":
      return faVideo;
    case "tag":
      return faTag;
  }
};
