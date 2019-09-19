import React, { useState } from "react";
import { Layout, Icon, Card } from "antd";

import "./layout.css";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="mainLayout">
      <Layout>
        <Sider
          className="left-nav"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <span
            style={{
              textAlign: "center",
              display: "block",
              lineHeight: "100px",
              color: "#fff"
            }}
          >
            leftNav
          </span>
        </Sider>
        <Layout className={`main-frame ${collapsed && "left-nav-collapsed"}`}>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={event => setCollapsed(!collapsed)}
            />
            Header
          </Header>
          <Content className="main-content">
            <Card style={{ height: "100%" }}>Content Area</Card>
          </Content>
          <Footer style={{ textAlign: "center" }}>这里是Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
