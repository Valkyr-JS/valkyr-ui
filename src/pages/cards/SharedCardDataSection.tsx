import React from "react";
import { SettingGroup } from "@/components/stash/Settings/Inputs";
import { SettingSection } from "@/components/stash/Settings/SettingSection";
import { NumberSetting } from "@/components/stash/Settings/Inputs/NumberSetting";

const SharedCardDataSection: React.FC<SettingsTabProps> = (props) => {
  const StudioBreakpoint = () => (
    <NumberSetting
      heading="Studio"
      id="valkyr-ui-cards__generalData__studio"
      onChange={(v) => {
        if (v === -1 || v === 0 || v === 1 || v === 2 || v === 3) {
          props.configUpdateHandler({
            ...props.pluginConfig,
            cards__generalData__studio: v,
          });
        }
      }}
      value={props.pluginConfig.cards__generalData__studio ?? 0}
    />
  );

  return (
    <SettingSection id="shared-data" heading="Shared card data">
      <SettingGroup
        collapsible
        settingProps={{
          heading: "Shared card data",
          subHeading:
            "For each piece of data, you can set the card zoom at which it appears. This allows you to display only select data when cards are smaller, and more data as they get bigger. The value must be between 0 and 3. Alternatively, set it to -1 to turn it off completely.",
        }}
      >
        <StudioBreakpoint />
      </SettingGroup>
    </SettingSection>
  );
};

export default SharedCardDataSection;
