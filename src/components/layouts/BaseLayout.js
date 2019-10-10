import React from "react";
import { Layout } from "antd";

import { connect } from "react-redux";

import styles from "./BaseLayout.less";

import LeftNav from "@components/LeftNav";
import CustomHeader from "@components/Header";
import CustomFooter from "@components/Footer";

const { Header, Content, Footer, Sider } = Layout;

function BaseLayout(props) {
  return (
    <Layout className={styles["top-container"]}>
      <Sider
        collapsed={props.collapsed}
        className={styles["top-container-sider"]}
      >
        <LeftNav />
      </Sider>
      <Layout className={styles["main-frame"]}>
        <Header className={styles["main-frame-header"]}>
          <CustomHeader />
        </Header>
        <Content className={styles["main-frame-content"]}>
          {props.children}
        </Content>
        <Footer className={styles["footer"]}>
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    collapsed: state.get("menu").get("collapsed")
  };
};
export default connect(mapStateToProps)(BaseLayout);
