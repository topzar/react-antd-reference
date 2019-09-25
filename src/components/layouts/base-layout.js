import React, { useState } from "react";
import { Layout } from "antd";

import "./base-layout.less";

import LeftNav from "../left-nav";
import CustomHeader from "../header";
import CustomFooter from "../footer";

const { Header, Content, Footer, Sider } = Layout;

export default function BaseLayout(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="full-container">
      <Sider className="sider" collapsed={collapsed}>
        <LeftNav />
      </Sider>
      <Layout className="main-frame">
        <Header style={{ padding: "0px" }}>
          <CustomHeader
            handleTriggerClick={event => setCollapsed(!collapsed)}
          />
        </Header>
        <Content className="content">
          <div className="content-container">{props.children}</div>
        </Content>
        <Footer className="footer">
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}
