const getAge = (dateString?: string | null, fromDateString?: string | null) => {
  if (!dateString) return 0;

  const birthdate = stringToFuzzyDate(dateString);
  const fromDate = fromDateString
    ? stringToFuzzyDate(fromDateString)
    : new Date();

  if (!birthdate || !fromDate) return 0;

  let age = fromDate.getFullYear() - birthdate.getFullYear();
  if (
    birthdate.getMonth() > fromDate.getMonth() ||
    (birthdate.getMonth() >= fromDate.getMonth() &&
      birthdate.getDate() > fromDate.getDate())
  ) {
    age -= 1;
  }

  return age;
};

/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/text.ts#L363C1-L407C3 */
const resolution = (width: number, height: number) => {
  const number = width > height ? height : width;
  if (number >= 6144) {
    return "HUGE";
  }
  if (number >= 3840) {
    return "8K";
  }
  if (number >= 3584) {
    return "7K";
  }
  if (number >= 3000) {
    return "6K";
  }
  if (number >= 2560) {
    return "5K";
  }
  if (number >= 1920) {
    return "4K";
  }
  if (number >= 1440) {
    return "1440p";
  }
  if (number >= 1080) {
    return "1080p";
  }
  if (number >= 720) {
    return "720p";
  }
  if (number >= 540) {
    return "540p";
  }
  if (number >= 480) {
    return "480p";
  }
  if (number >= 360) {
    return "360p";
  }
  if (number >= 240) {
    return "240p";
  }
  if (number >= 144) {
    return "144p";
  }
  return `${number}p`;
};

/**
 * Converts seconds to a [hh:]mm:ss[.ffff] where hh is only shown if hours is
 * non-zero, and ffff is shown only if frameRate is set, and the seconds
 * includes a fractional component. A negative input will result in a -hh:mm:ss
 * or -mm:ss output.
 *
 * https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/text.ts#L155C1-L195C3
 */
const secondsToTimestamp = (
  secondsInput: number,
  includeMS?: boolean,
): string => {
  let neg = false;
  if (secondsInput < 0) {
    neg = true;
    secondsInput = -secondsInput;
  }

  const fracSeconds = secondsInput % 1;
  const ms = Math.round(fracSeconds * 1000);

  let seconds = Math.trunc(secondsInput);

  const s = seconds % 60;
  seconds = (seconds - s) / 60;

  const m = seconds % 60;
  seconds = (seconds - m) / 60;

  const h = seconds;

  let ret = String(s).padStart(2, "0");
  if (h === 0) {
    ret = String(m) + ":" + ret;
  } else {
    ret = String(m).padStart(2, "0") + ":" + ret;
    ret = String(h) + ":" + ret;
  }

  if (includeMS && ms > 0) {
    ret += "." + ms.toString().padStart(3, "0");
  }

  if (neg) {
    return "-" + ret;
  } else {
    return ret;
  }
};

const stringToFuzzyDate = (dateString: string) => {
  if (!dateString) return null;

  const parts = dateString.split("-");
  // Invalid date string
  let year = Number(parts[0]);
  if (isNaN(year)) year = new Date().getFullYear();
  let monthIndex = 0;
  if (parts.length > 1) {
    monthIndex = Math.max(0, Number(parts[1]) - 1);
    if (monthIndex > 11 || isNaN(monthIndex)) monthIndex = 0;
  }
  let day = 1;
  if (parts.length > 2) {
    day = Number(parts[2]);
    if (day > 31 || isNaN(day)) day = 1;
  }

  return new Date(year, monthIndex, day, 0, 0, 0, 0);
};

const TextUtils = { age: getAge, resolution, secondsToTimestamp };

export default TextUtils;
