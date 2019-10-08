import { Avatar, Icon, Menu } from "antd";
import React from "react";
import "./index.less";

import HeaderDropdown from "../header-drop-down";

function AvatarDropdown(props) {
  const menuHeaderDropdown = (
    <Menu className="menu">
      <Menu.Item key="center">
        <Icon type="user" />
        个人中心
      </Menu.Item>

      <Menu.Item key="settings">
        <Icon type="setting" />
        个人设置
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span className="action account">
        <Avatar
          className="avatar"
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        />
        <span className="name">SilvaQ</span>
      </span>
    </HeaderDropdown>
  );
}
export default AvatarDropdown;
