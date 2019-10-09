import React from "react";
import { Avatar, Icon, Menu } from "antd";
import { connect } from "react-redux";

import storage from "@storage";
import { loginOut } from "@store/user/actions";
import "./index.less";

import HeaderDropdown from "../HeaderDropDown";

function AvatarDropdown(props) {
  function handleMenuItemClick({ key }) {
    if (key === "logout") {
      storage.remove("loginStatus");
      props.userLogout();
    }
  }

  const menuHeaderDropdown = (
    <Menu className="menu" onClick={handleMenuItemClick}>
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

const mapDispatchToProps = {
  userLogout: () => {
    return dispatch => {
      dispatch(loginOut());
    };
  }
};
export default connect(
  null,
  mapDispatchToProps
)(AvatarDropdown);
