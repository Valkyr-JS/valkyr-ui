import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { Redirect, useLocation } from "react-router-dom";
import { ROUTE } from "@/constants";
const { PluginApi } = window;

const validTabs = ["about", "cards"] as const;
type TabKey = (typeof validTabs)[number];

const defaultTab: TabKey = "cards";

function isTabKey(tab: string | null): tab is TabKey {
  return validTabs.includes(tab as TabKey);
}

const SettingsTabs: React.FC<{ tab: TabKey }> = ({ tab }) => {
  return (
    <Tab.Container activeKey={tab} id="valkyr-ui-configuration-tabs">
      <Row>
        <Col id="valkyr-ui-settings-menu-container" sm={3} xl={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="about">About Valkyr UI</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cards">Cards</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col
          id="valkyr-ui-settings-container"
          sm={{ offset: 3 }}
          xl={{ offset: 2 }}
        >
          <Tab.Content className="mx-auto">
            <Tab.Pane eventKey="about">All about Valkyr UI</Tab.Pane>
            <Tab.Pane eventKey="cards">This is the cards panel</Tab.Pane>
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
