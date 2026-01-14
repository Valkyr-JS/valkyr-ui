import React from "react";
import { IntlProvider } from "react-intl";
import { DecoratorFunction } from "storybook/internal/csf";
import messages from "./locales/en-GB.json";
import { ReactRenderer } from "@storybook/react-vite";
import { Card } from "react-bootstrap";

type NestedMessage = { [key: string]: NestedMessage | string };
/** https://github.com/stashapp/stash/blob/develop/ui/v2.5/src/utils/flattenMessages.ts */
const flattenMessages = (
  nestedMessages: NestedMessage | null,
  prefix = ""
): Record<string, string> => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    const flatRecord =
      typeof value === "string"
        ? { [prefixedKey]: value }
        : flattenMessages(value, prefixedKey);

    Object.assign(messages, flatRecord);

    return messages;
  }, {});
};

/** Wraps a story in react-intl's `IntlProvider` component and provides access
 * to Stash's `en-GB` locale messages. */
export const WithIntlProvider: DecoratorFunction<ReactRenderer> = (Story) => (
  <IntlProvider locale="en-GB" messages={flattenMessages(messages)}>
    <Story />
  </IntlProvider>
);

/** Wraps a story in simple React Bootstrap card component. */
export const WithCard: DecoratorFunction<ReactRenderer> = (Story) => (
  <Card>
    <Story />
  </Card>
);
