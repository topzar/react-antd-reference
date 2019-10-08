import { Avatar, Icon, Menu } from "antd";
import React from "react";

import HeaderDropdown from "../header-drop-down";

function AvatarDropdown(props) {
  const menuHeaderDropdown = (
    <Menu>
      <Menu.Item key="center">
        <Icon type="user" />
        account center
      </Menu.Item>

      <Menu.Item key="settings">
        <Icon type="setting" />
        account settings
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="logout">
        <Icon type="logout" />
        logout
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderDropdown overlay={menuHeaderDropdown}>
      <span>
        <Avatar
          style={{
            width: "24px",
            height: "24px",
            lineHeight: "24px",
            borderRadius: "50%",
            margin: " 20px 8px 20px 0",
            padding: "0px",
            verticalAlign: "top",
            color: "#1890ff"
          }}
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        />
        <span
          style={{
            padding: "0px"
          }}
        >
          SilvaQ
        </span>
      </span>
    </HeaderDropdown>
  );
}
export default AvatarDropdown;
