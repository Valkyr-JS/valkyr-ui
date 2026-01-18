import React, { useState } from "react";
import { BooleanSetting } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { DEFAULT } from "@/constants";

const SharedCardDataSection: React.FC<SettingsTabProps> = (props) => {
  const FooterCountsEnabled = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.card__shared__enableCounts ??
        DEFAULT.CARDS.SHARED.ENABLE_FOOTER_BUTTON_COUNTS,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Enable counts on footer buttons"
        id="valkyr-ui-card__shared__enableCounts"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            card__shared__enableCounts: newState,
          });
        }}
        subHeading="Displays the related object count for each footer button. E.g., the tags button will display the tag count."
      />
    );
  };

  const HideZeroValueData = () => {
    const [checked, setChecked] = useState(
      props.pluginConfig.cards__shared__hideZeroValue ??
        DEFAULT.CARDS.SHARED.HIDE_ZERO_VALUE,
    );
    return (
      <BooleanSetting
        checked={checked}
        heading="Hide zero-value data"
        id="valkyr-ui-cards__shared__hideZeroValue"
        onChange={() => {
          const newState = !checked;
          setChecked(newState);
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__shared__hideZeroValue: newState,
          });
        }}
        subHeading="Hides numerical data where the value is zero."
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

  return (
    <SettingSection id="cards-shared" heading="Shared card settings">
      <FooterCountsEnabled />
      <HideZeroValueData />
      <PadTimestamps />
    </SettingSection>
  );
};

export default SharedCardDataSection;
