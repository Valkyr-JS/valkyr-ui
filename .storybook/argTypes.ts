import { ArgTypes } from "storybook/internal/csf";

/** Common arg types used for data components  */
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
