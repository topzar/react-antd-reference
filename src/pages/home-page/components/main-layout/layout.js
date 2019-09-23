import React, { useState } from "react";
import { Layout, Icon } from "antd";
import PropTypes from "prop-types";
import "./layout.less";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  const children = props.children;

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
          {/* 这里需要传递左侧菜单 leftNav 组件 */}
          {props.leftNav}
        </Sider>
        <Layout className={`main-frame ${collapsed && "left-nav-collapsed"}`}>
          <Header className="head-wrapper">
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={event => setCollapsed(!collapsed)}
            />
            <div className="header-area">
              {/* 这里需要传递header 组件 */}
              {props.header}
            </div>
          </Header>
          <Content className="main-content">
            {/* 这里需要传递mainFrame 组件，填充右侧内容区域的组件 */}
            {children}
          </Content>
          <Footer style={{ textAlign: "center", padding: "0px" }}>
            {/* 这里需要传递footer 组件,可选 */}
            {props.footer}
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

// 需要的参数说明
MainLayout.propTypes = {
  leftNav: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.node
};
