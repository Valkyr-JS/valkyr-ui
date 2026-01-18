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

  return (
    <SettingSection id="cards-shared" heading="Shared card settings">
      <FooterCountsEnabled />
    </SettingSection>
  );
};

export default SharedCardDataSection;
