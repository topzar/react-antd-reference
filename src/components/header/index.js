import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";

import "./index.less";

import { menuActions } from "@store/menu/index";

function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="left-icon">
        <Icon
          className="trigger"
          type={props.collapsed ? "menu-unfold" : "menu-fold"}
          onClick={event => {
            props.collapsedMenu();
          }}
        />
      </div>
      <div className="header-wrapper-content">other content</div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    collapsed: state.collapsedMenu
  };
};
//第一种写法
const mapDispatchToProps = {
  collapsedMenu: menuActions.collapsedMenu
};
//第二种写法
// const mapDispatchToProps = {
//   collapsedMenu: () => {
//     return (dispatch, getState) => {
//       dispatch(menuActions.collapsedMenu());
//     };
//   }
// };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
