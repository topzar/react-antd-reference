import React, { useState } from "react";
import { Layout, Icon, Card } from "antd";
import PropTypes from "prop-types";
import "./layout.css";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
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
            {/* 这里需要传递左侧菜单 leftNav 组件 */}
            {props.leftNav}
          </span>
        </Sider>
        <Layout className={`main-frame ${collapsed && "left-nav-collapsed"}`}>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={event => setCollapsed(!collapsed)}
            />
            {/* 这里需要传递header 组件 */}
            {props.header}
          </Header>
          <Content className="main-content">
            <Card style={{ height: "100%" }}>
              {/* 这里需要传递mainFrame 组件，填充右侧内容区域的组件 */}
              {props.mainFrame}
            </Card>
          </Content>
          <Footer style={{ textAlign: "center" }}>
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
  mainFrame: PropTypes.node.isRequired,
  footer: PropTypes.node
};
