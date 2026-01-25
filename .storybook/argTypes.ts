import { ArgTypes } from "storybook/internal/csf";

/** Common arg types used for data components.  */
export const dataComponentArgTypes: Partial<
  ArgTypes<DataComponentProps | DataComponentModalProps>
> = {
  context: {
    control: { type: "select", options: ["card", "modal"] },
  },
  currentBreakpoint: {
    control: { type: "range", min: 0, max: 3 },
  },
  userBreakpoint: {
    control: { type: "range", min: -1, max: 3 },
  },
};

export const ratingSystemOptions = {
  decimal: {
    type: "decimal",
  },
  starsFull: {
    type: "stars",
    starPrecision: "full",
  },
  starsHalf: {
    type: "stars",
    starPrecision: "half",
  },
  starsQuarter: {
    type: "stars",
    starPrecision: "quarter",
  },
  starsTenth: {
    type: "stars",
    starPrecision: "tenth",
  },
};

/** Common arg types used for ratings data. */
export const ratingArgType: Partial<ArgTypes> = {
  rating100: {
    control: { type: "range", min: 0, max: 100 },
  },
  ratingSystem: {
    options: Object.keys(ratingSystemOptions),
    mapping: ratingSystemOptions,
    control: {
      type: "select",
      labels: {
        decimal: "Decimal",
        starsFull: "Stars (full)",
        starsHalf: "Stars (half)",
        starsQuarter: "Stars (quarter)",
        starsTenth: "Stars (tenth)",
      },
    },
  },
};
