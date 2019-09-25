import React from "react";
import { Layout } from "antd";

import "./index.less";

const { Header, Content, Footer, Sider } = Layout;
export default function BaseLayout() {
  return (
    <Layout className="full-container">
      <Sider className="sider">
        <div className="logo" />
        leftNav
      </Sider>
      <Layout className="main-frame">
        <Header className="header">Header</Header>
        <Content className="content">
          <div className="content-container">Main content area</div>
        </Content>
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
