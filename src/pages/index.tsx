import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import { ROUTE } from "@/constants";
const { PluginApi } = window;

interface TabData {
  key: string;
  component: React.ReactNode;
  title: string;
}

const tabs: TabData[] = [
  {
    key: "about",
    component: <h1>About Valkyr UI</h1>,
    title: "About",
  },
  { key: "cards", component: "This is the cards panel", title: "Cards" },
] as const;

const validTabs = ["about", "cards"] as const;
type TabKey = (typeof validTabs)[number];

const defaultTab: TabKey = "about";

function isTabKey(tab: string | null): tab is TabKey {
  return validTabs.includes(tab as TabKey);
}

const SettingsTabs: React.FC<{ tab: TabKey }> = ({ tab }) => {
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

export const Settings: React.FC = () => {
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
