import React, { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "antd";

import "./index.less";

function Header(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="header-wrapper">
      <div className="left-icon">
        <Icon
          className="trigger"
          type={collapsed ? "menu-unfold" : "menu-fold"}
          onClick={event => {
            setCollapsed(!collapsed);
            props.handleTriggerClick && props.handleTriggerClick(event);
          }}
        />
      </div>
      <div className="header-wrapper-content">other content</div>
    </div>
  );
}
Header.propTypes = {
  handleTriggerClick: PropTypes.func
};

export default Header;
