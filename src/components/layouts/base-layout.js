import React from "react";
import { Layout } from "antd";

import "./base-layout.less";

import LeftNav from "../left-nav";
import CustomHeader from "../header";
import CustomFooter from "../footer";

const { Header, Content, Footer, Sider } = Layout;

export default function BaseLayout(props) {
  return (
    <Layout className="full-container">
      <Sider className="sider">
        <LeftNav />
      </Sider>
      <Layout className="main-frame">
        <Header className="header">
          <CustomHeader />
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
