import type { Preview } from "@storybook/react-vite";
import { WithIntlProvider } from "./decorators";

// Stash app CSS bundle - v0.30.1
import "./index-DkM4iYzr.css";
import "../src/scss/global.scss";
import "./overrides.css";

const preview: Preview = {
  decorators: [WithIntlProvider],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: "requiredFirst",
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
