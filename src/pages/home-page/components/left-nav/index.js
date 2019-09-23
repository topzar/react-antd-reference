import React from "react";
import { Menu, Icon } from "antd";

import { Link } from "react-router-dom";

import "./index.less";
function LeftNav() {
  return (
    <div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span>
            <Link to="/demo1">demo 1</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />

          <span>
            <Link to="/demo2">demo 2</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />

          <span>
            <Link to="/demo3">demo 3</Link>
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default LeftNav;
