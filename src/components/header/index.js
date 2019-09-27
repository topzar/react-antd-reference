import React from "react";
import { Icon } from "antd";
import { connect } from "react-redux";

import "./index.less";

import { menuActions } from "@store/menu/index";

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
        <span>hello</span>
      </div>
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
