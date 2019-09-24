import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import "./index.less";

function LeftNav() {
  return (
    <div>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="menu" />
          <span>
            <Link to="/menu-demo">菜单展示页</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="ordered-list" />
          <span>
            <Link to="/pagination">分页</Link>
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default LeftNav;
