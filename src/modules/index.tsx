import { PropsWithChildren } from "react";
import "../scss/global.scss";
import "./cards";
import { mergeConfig } from "@/helpers";

/* ---------------------------------------------------------------------------------------------- */
/*                                         Global changes                                         */
/* ---------------------------------------------------------------------------------------------- */

// ? Use the `MainNavBar.MenuItems` patchable component to add and control
// global changes such as the accessibile color palette while still being able
// to access the config. This would preferably be done outside of a component,
// but I haven't figured it out yet.

const { PluginApi } = window;

PluginApi.patch.before<PropsWithChildren>(
  "MainNavBar.MenuItems",
  function (props) {
    console.log("props: ", props);
    const { data, loading } = PluginApi.GQL.useConfigurationQuery();
    if (!loading && data) {
      const stashConfig: ExtendedConfigResult = data.configuration;
      const pluginConfig = mergeConfig(stashConfig.plugins["valkyr-ui"]);
      const accessiblePaletteClass = "vui-accessible-palette";

      pluginConfig.general__accessibleColorPalette
        ? document.body.classList.add(accessiblePaletteClass)
        : document.body.classList.remove(accessiblePaletteClass);
      return [props];
    }

    return [props];
  },
);
