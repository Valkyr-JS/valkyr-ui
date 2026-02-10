import React, { PropsWithChildren } from "react";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { Table } from "react-bootstrap";

const CssVariablesTab: React.FC = () => {
  const prefix = "valkyr-ui";

  const copyToClipboard: React.MouseEventHandler = (e) => {
    navigator.clipboard.writeText((e.target as HTMLElement).innerText);
  };

  const RowHeader: React.FC<PropsWithChildren> = (props) => (
    <th scope="row" className="vui-copiable-text">
      <code onClick={copyToClipboard}>{props.children}</code>
    </th>
  );

  return (
    <>
      <h1>CSS Variables</h1>
      <p>
        The following is a list of all CSS variables used in Valkyr UI. These
        can be customised using Stash’s custom CSS feature found in Settings{" "}
        {">"} Interface {">"} Custom CSS. For example:
      </p>
      <pre>
        <code>{`:root { --${prefix}-body-color: aquamarine; --${prefix}-card-title-font-size: 1.5rem; }`}</code>
      </pre>
      <p>
        Default settings either match native Stash settings, or are as close to
        them as possible whilst remaining accessible.
      </p>
      <p>Click on a variable to copy it to the clipboard for naming accuracy.</p>
      <SettingSection id="general" heading="Global">
        <Table striped className="vui-table">
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <RowHeader>--{prefix}-body-color</RowHeader>
              <td>The font color for most text.</td>
              <td>
                <code>#f5f8fa</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-link-color</RowHeader>
              <td>The font color for most links.</td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-title-color</RowHeader>
              <td>The font color for most headings.</td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-code-color</RowHeader>
              <td>The font color for code snippets.</td>
              <td>
                <code>#f391bd</code>
              </td>
            </tr>
          </tbody>
        </Table>
      </SettingSection>
      <SettingSection id="general" heading="Cards">
        <Table striped className="vui-table">
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <RowHeader>--{prefix}-card-bg</RowHeader>
              <td>The background color for cards and card modals.</td>
              <td>
                <code>#30404d</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-font-sm</RowHeader>
              <td>The font size used in places with smaller text.</td>
              <td>
                <code>12px</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-resolution-icon-bg</RowHeader>
              <td>
                The background color for the resolution icon on cards and card
                modals.
              </td>
              <td>
                <code>var(--{prefix}-body-color)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-resolution-icon-color</RowHeader>
              <td>
                The font color for the resolution icon on cards and card modals.
              </td>
              <td>
                <code>var(--{prefix}-card-bg)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-title-color</RowHeader>
              <td>
                The font color used for titles and headings on cards and card
                modals.
              </td>
              <td>
                <code>var(--{prefix}-title-color)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-title-font-size</RowHeader>
              <td>
                The font size used for titles and headings on cards and card
                modals.
              </td>
              <td>
                <code>1.25rem</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-top-line-font-size</RowHeader>
              <td>
                The font size of data on the top line above the title on cards
                and card modals.
              </td>
              <td>
                <code>var(--{prefix}-cards-font-sm)</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-top-line-opacity</RowHeader>
              <td>
                The opacity of data on the top line above the title on cards and
                card modals.
              </td>
              <td>
                <code>0.8</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-fileless-bg</RowHeader>
              <td>
                The background color for cards and card modals with no
                associated file.
              </td>
              <td>
                <code>#26333d</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-card-modal-max-width</RowHeader>
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
        <Table striped className="vui-table">
          <thead>
            <tr>
              <th scope="col">CSS variable</th>
              <th scope="col">Description</th>
              <th scope="col">Default value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <RowHeader>--{prefix}-gender-female</RowHeader>
              <td>
                The font and background color used in various places to denote a
                female performer.
              </td>
              <td>
                <code>#f38cac</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-intersex</RowHeader>
              <td>
                The font and background color used in various places to denote
                an intersex performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-male</RowHeader>
              <td>
                The font and background color used in various places to denote a
                male performer.
              </td>
              <td>
                <code>#89cff0</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-nonbinary</RowHeader>
              <td>
                The font and background color used in various places to denote a
                nonbinary performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-transfemale</RowHeader>
              <td>
                The font and background color used in various places to denote a
                transgender female performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-transmale</RowHeader>
              <td>
                The font and background color used in various places to denote a
                transgender male performer.
              </td>
              <td>
                <code>#c8a2c8</code>
              </td>
            </tr>
            <tr>
              <RowHeader>--{prefix}-gender-unknown</RowHeader>
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
