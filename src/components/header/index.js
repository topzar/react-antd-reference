import React from "react";
import { Icon, Avatar } from "antd";
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
        <div className="antd-pro-header">
          <span>
            <Icon type="search" />
          </span>
          <span>
            <Icon type="question-circle" />
          </span>
          <span>
            <Icon type="bell" />
          </span>
          <span>
            <Avatar icon="user" size="small" style={{ padding: "0px" }} />
            <span>SilvaQ</span>
          </span>
          <span>
            <Icon type="global" />
          </span>
        </div>
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
