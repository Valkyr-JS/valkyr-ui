import React, { useState } from "react";
import {
  BooleanSetting,
  ModalSetting,
  NumberSetting,
  SettingGroup,
} from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const SharedCardDataSection: React.FC<SettingsTabProps> = (props) => {
  const FooterCountsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__shared__enableCounts ??
        DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable counts on footer buttons"
        id="valkyr-ui-cards__shared__enableCounts"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__enableCounts: newState,
          });
        }}
        subHeading="Displays the related object count for each footer button. E.g., the tags button will display the tag count."
      />
    );
  };

  const PadTimestamps = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__shared__timestampPadding ??
        DEFAULT.CARDS.SHARED.TIMESTAMP_PADDING,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Timestamp padding"
        id="valkyr-ui-cards__shared__timestampPadding"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__timestampPadding: newState,
          });
        }}
        subHeading="Adds padding to timestamps to make all units double-figures and include hours. For example, a timestamp of '6:38' will appear as '00:06:38'."
      />
    );
  };

  const PerformerListGenderColors = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__shared__performerListGenderColors ??
        DEFAULT.CARDS.SHARED.PERFORMER_LIST_GENDER_COLORS,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Gendered colors"
        id="valkyr-ui-cards__shared__performerListGenderColors"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__performerListGenderColors: newState,
          });
        }}
        subHeading="Sets the font color of names in performer lists according to their gender."
      />
    );
  };

  const PerformerListSortFilter = () => {
    const [value, setValue] = useState<GenderEnum[]>(
      props.pluginConfig.cards__shared__performerListSortFilter ??
        DEFAULT.CARDS.SHARED.PERFORMER_LIST_SORT_FILTER,
    );

    return (
      <ModalSetting
        heading="Sort and filter by gender"
        id="valkyr-ui-cards__shared__performerListSortFilter"
        value={value}
        onChange={(v) => {
          setValue(v);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__performerListSortFilter: v,
          });
        }}
        renderField={(value, setValue) => <span>Hello there</span>}
        renderValue={(val) => {
          return (
            <>
              {val?.map((v) => (
                <span>{v}</span>
              ))}
            </>
          );
        }}
        subHeading="Customise the order of performer names by gender, as well as filtering out genders. Leave empty to leave unfiltered and order alphabetically."
      />
    );
  };

  const PerformerListMaxItems = () => (
    <NumberSetting
      heading="Max list length"
      id="valkyr-ui-cards__shared__performerListMaxItems"
      onChange={(v) => {
        if (v >= 0 && Number.isInteger(v)) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__performerListMaxItems: v,
          });
        }
      }}
      subHeading="Sets the maximum number of names displayed in the performer list. Cards will display 'and X more' if more performers are featured. Set to 0 for no limit."
      value={
        props.pluginConfig.cards__shared__performerListMaxItems ??
        DEFAULT.CARDS.SHARED.PERFORMER_LIST_MAX_ITEMS
      }
    />
  );

  return (
    <SettingSection id="cards-shared" heading="Shared card settings">
      <FooterCountsEnabled />
      <SettingGroup
        collapsible
        settingProps={{ heading: "Performer list settings" }}
      >
        <PerformerListGenderColors />
        <PerformerListMaxItems />
        <PerformerListSortFilter />
      </SettingGroup>
      <PadTimestamps />
    </SettingSection>
  );
};

export default SharedCardDataSection;
