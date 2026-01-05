import React from "react";
import { ROUTE } from "@/constants";
const { PluginApi } = window;

const Settings: React.FC = () => (
  <div>
    <h1>Valkyr UI settings</h1>
  </div>
);

PluginApi.register.route(ROUTE.INDEX, Settings);
