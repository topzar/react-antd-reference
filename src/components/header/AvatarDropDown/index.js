import React from "react";
import { Avatar, Icon, Menu } from "antd";
import { connect } from "react-redux";
import ClassNames from "classnames";

import HeaderDropdown from "../HeaderDropDown";

import storage from "@storage";
import { loginOut } from "@store/user/actions";
import styles from "./index.less";

import { getUserInfo } from "@utils/user";

function AvatarDropdown(props) {
  const { user } = getUserInfo();

  function handleMenuItemClick({ key }) {
    switch (key) {
      case "logout":
        storage.clear();
        props.userLogout();
        break;

      default:
        break;
    }
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} onClick={handleMenuItemClick}>
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
      <span className={ClassNames(styles.action, styles.account)}>
        <Avatar
          className={styles.avatar}
          size="small"
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        />
        <span className={styles.name}>{user}</span>
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
