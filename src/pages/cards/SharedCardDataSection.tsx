import React, { useState } from "react";
import {
  BooleanSetting,
  SettingGroup,
} from "@/components/stash/Settings/Inputs";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";
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
      </SettingGroup>
      <PadTimestamps />
    </SettingSection>
  );
};

export default SharedCardDataSection;
