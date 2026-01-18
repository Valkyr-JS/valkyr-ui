/**
 * Converts seconds to a [hh:]mm:ss[.ffff] where hh is only shown if hours is
 * non-zero, and ffff is shown only if frameRate is set, and the seconds
 * includes a fractional component. A negative input will result in a -hh:mm:ss
 * or -mm:ss output.
 *
 * https://github.com/stashapp/stash/blob/5b3785f16490e8bd603dbe71915a6233379e72e1/ui/v2.5/src/utils/text.ts#L155C1-L195C3
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

const TextUtils = { secondsToTimestamp };

export default TextUtils;
