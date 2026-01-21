import React, { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import { PLUGIN, ROUTE } from "@/constants";
import { useConfigurePlugin } from "@/hooks";
import GereralTab from "./general";
import CardsTab from "./cards";
import "./pages.scss";
const { PluginApi } = window;
const { LoadingIndicator } = PluginApi.components;

interface TabData {
  key: string;
  component: React.ReactNode;
  title: string;
}

const validTabs = ["general", "cards", "styling"] as const;
type TabKey = (typeof validTabs)[number];

const defaultTab: TabKey = "general";

function isTabKey(tab: string | null): tab is TabKey {
  return validTabs.includes(tab as TabKey);
}

const SettingsTabs: React.FC<{ tab: TabKey }> = ({ tab }) => {
  /* -------------------------------------- Fetch config data ------------------------------------- */

  const qConfig = PluginApi.GQL.useConfigurationQuery();
  if (qConfig.loading) return <LoadingIndicator />;

  const stashConfig: ExtendedConfigResult = qConfig.data.configuration;

  const [updatePluginConfig] = useConfigurePlugin();
  const [pluginConfig, setPluginConfig] = useState(
    stashConfig.plugins[PLUGIN.ID] ?? {},
  );

  const handlePluginConfigUpdate = async (updatedConfig: ValkyrUiConfigMap) => {
    const updated = await updatePluginConfig({
      variables: {
        plugin_id: PLUGIN.ID,
        input: updatedConfig,
      },
    });
    console.log(updated);
    setPluginConfig(updated.data.configurePlugin);
  };

  /* ------------------------------------------ Tab data ------------------------------------------ */

  const tabs: TabData[] = [
    {
      key: "general",
      component: (
        <GereralTab
          configUpdateHandler={handlePluginConfigUpdate}
          pluginConfig={pluginConfig}
        />
      ),
      title: "General",
    },
    {
      key: "cards",
      component: (
        <CardsTab
          configUpdateHandler={handlePluginConfigUpdate}
          pluginConfig={pluginConfig}
        />
      ),
      title: "Cards",
    },
  ] as const;

  /* ------------------------------------------ Component ----------------------------------------- */

  return (
    <Tab.Container activeKey={tab} id="valkyr-ui-configuration-tabs">
      <Row>
        <Col id="valkyr-ui-settings-menu-container" sm={3} xl={2}>
          <Nav variant="pills" className="flex-column">
            {tabs.map((t, i) => (
              <Nav.Item key={i}>
                <LinkContainer to={`${ROUTE.INDEX}?tab=${t.key}`}>
                  <Nav.Link eventKey={t.key}>{t.title}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col
          id="valkyr-ui-settings-container"
          sm={{ offset: 3 }}
          xl={{ offset: 2 }}
        >
          <Tab.Content className="mx-auto">
            {tabs.map((t, i) => (
              <Tab.Pane eventKey={t.key} key={i}>
                {t.component}
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

const Settings: React.FC = () => {
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("tab");

  if (!isTabKey(tab)) {
    return (
      <Redirect
        to={{
          ...location,
          search: `tab=${defaultTab}`,
        }}
      />
    );
  }

  return <SettingsTabs tab={tab} />;
};

PluginApi.register.route(ROUTE.INDEX, Settings);
