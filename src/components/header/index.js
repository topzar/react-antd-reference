import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";

import "./index.less";

import { collapsedMenu } from "@store/menu/actions";
import SelectLang from "./SelectLang";
import AvatarDropDown from "./AvatarDropDown";

function Header(props) {
  return (
    <div className="global-header">
      <span className="global-header-trigger">
        <Icon
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={event => {
            props.collapsedMenu();
          }}
        />
      </span>
      <div className="global-header-index-right">
        <div className="antd-pro-header">
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
