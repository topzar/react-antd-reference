import React from "react";
import { Layout } from "antd";

import { connect } from "react-redux";

import "./base-layout.less";

import LeftNav from "@components/left-nav";
import CustomHeader from "@components/header";
import CustomFooter from "@components/footer";

const { Header, Content, Footer, Sider } = Layout;

function BaseLayout(props) {
  return (
    <Layout className="top-container">
      <Sider collapsed={props.collapsed} className="top-container-sider">
        <LeftNav />
      </Sider>
      <Layout className="main-frame">
        <Header className="main-frame-header">
          <CustomHeader />
        </Header>
        <Content className="main-frame-content">{props.children}</Content>
        <Footer className="footer">
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    collapsed: state.collapsedMenu
  };
};
export default connect(mapStateToProps)(BaseLayout);
