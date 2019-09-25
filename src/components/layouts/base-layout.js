import React from "react";
import { Layout } from "antd";

import { connect } from "react-redux";

import "./base-layout.less";

import LeftNav from "../left-nav";
import CustomHeader from "../header";
import CustomFooter from "../footer";

const { Header, Content, Footer, Sider } = Layout;

function BaseLayout(props) {
  return (
    <Layout className="full-container">
      <Sider className="sider" collapsed={props.collapsed}>
        <LeftNav />
      </Sider>
      <Layout className="main-frame">
        <Header style={{ padding: "0px" }}>
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

const mapStateToProps = state => {
  return {
    collapsed: state.collapsedMenu
  };
};
export default connect(mapStateToProps)(BaseLayout);
