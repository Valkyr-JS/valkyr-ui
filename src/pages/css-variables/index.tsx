import React from "react";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { Table } from "react-bootstrap";

const CssVariablesTab: React.FC = () => {
  const prefix = "valkyr-ui";

  return (
    <>
      <h1>CSS Variables</h1>
      <p>
        The following is a list of all CSS variables used in Valkyr UI. These
        can be customised using Stash’s custom CSS feature found in Settings{" "}
        {">"} Interface {">"} Custom CSS. For example:
      </p>
      <code>{`:root { --${prefix}-body-color: aquamarine; }`}</code>
      <SettingSection id="general" heading="Global">
        <Table striped>
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <code>--{prefix}-body-color</code>
              </th>
              <td>The font color for most text.</td>
              <td>
                <code>#f5f8fa</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-link-color</code>
              </th>
              <td>The font color for most links.</td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-title-color</code>
              </th>
              <td>The font color for most headings.</td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-code-color</code>
              </th>
              <td>The font color for code snippets.</td>
              <td>
                <code>#f391bd</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </SettingSection>
      <SettingSection id="general" heading="Cards">
        <Table striped>
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-bg</code>
              </th>
              <td>The background color for cards and card modals.</td>
              <td>
                <code>#30404d</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-font-sm</code>
              </th>
              <td>The font size used in places with smaller text.</td>
              <td>
                <code>12px</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-resolution-icon-bg</code>
              </th>
              <td>
                The background color for the resolution icon on cards and card
                modals.
              </td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-resolution-icon-color</code>
              </th>
              <td>
                The font color for the resolution icon on cards and card modals.
              </td>
              <td>
                <code>var(--{prefix}-card-bg)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-title-color</code>
              </th>
              <td>
                The font color used for titles and headings on cards and card
                modals.
              </td>
              <td>
                <code>var(--{prefix}-title-color)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-title-font-size</code>
              </th>
              <td>
                The font size used for titles and headings on cards and card
                modals.
              </td>
              <td>
                <code>1.25rem</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-top-line-font-size</code>
              </th>
              <td>
                The font size of data on the top line above the title on cards
                and card modals.
              </td>
              <td>
                <code>var(--{prefix}-cards-font-sm)</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-top-line-opacity</code>
              </th>
              <td>
                The opacity of data on the top line above the title on cards and
                card modals.
              </td>
              <td>
                <code>0.8</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-fileless-bg</code>
              </th>
              <td>
                The background color for cards and card modals with no
                associated file.
              </td>
              <td>
                <code>#26333d</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-card-modal-max-width</code>
              </th>
              <td>
                The maximum width of card modals at browser window sizes of
                992px or larger.
              </td>
              <td>
                <code>640px</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </SettingSection>
      <SettingSection id="general" heading="Gender colors">
        <Table striped>
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-female</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                female performer.
              </td>
              <td>
                <code>#f38cac</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-intersex</code>
              </th>
              <td>
                The font and background color used in various places to denote
                an intersex performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-male</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                male performer.
              </td>
              <td>
                <code>#89cff0</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-nonbinary</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                nonbinary performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-transfemale</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                transgender female performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-transmale</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                transgender male performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <code>--{prefix}-gender-unknown</code>
              </th>
              <td>
                The font and background color used in various places to denote a
                performer with no gender data.
              </td>
              <td>
                <code>#f5f8fa</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </SettingSection>
    </>
  );
};

export default CssVariablesTab;
