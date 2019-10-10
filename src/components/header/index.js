import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";

import styles from "./index.less";

import { collapsedMenu } from "@store/menu/actions";
import SelectLang from "./SelectLang";
import AvatarDropDown from "./AvatarDropDown";

function Header(props) {
  return (
    <div className={styles.globalHeader}>
      <span className={styles.globalHeaderTrigger}>
        <Icon
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={event => {
            props.collapsedMenu();
          }}
        />
      </span>
      <div className={styles.globalHeaderIndexRight}>
        <div className={styles.antdProHeader}>
          <AvatarDropDown />
          <SelectLang />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  collapsed: state.get("menu").get("collapsed")
});
//第二种写法
const mapDispatchToProps = {
  collapsedMenu: () => {
    return (dispatch, getState) => {
      dispatch(collapsedMenu());
    };
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
