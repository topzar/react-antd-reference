import React from "react";
import { Dropdown } from "antd";

const HeaderDropdown = ({ overlayClassName: cls, ...restProps }) => (
  <Dropdown overlayClassName={cls} {...restProps} />
);

export default HeaderDropdown;
