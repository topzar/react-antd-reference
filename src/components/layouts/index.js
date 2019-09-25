import React from "react";
import { Layout } from "antd";

import "./index.less";

const { Header, Content, Footer, Sider } = Layout;
export default function BaseLayout() {
  return (
    <Layout className="base-layout">
      <Sider className="leftNav">
        <div className="logo" />
        leftNav
      </Sider>
      <Layout className="main-layout">
        <Header className="header">Header</Header>
        <Content className="container">
          <div className="content">Main content area</div>
        </Content>
        <Footer className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}
