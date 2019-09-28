import React from "react";
import { Menu } from "antd";

import "./index.less";

import { menuList, menuConfig } from "@configs/menuConfig";

import useExpandedMenuItems from "@hooks/useExpandedMenuItems";
import useRenderMenu from "@hooks/useRenderMenu";

export default function LeftNav() {
  let expandedMenuItems = useExpandedMenuItems(menuList);
  let renderedMenu = useRenderMenu(menuList);

  let menuDefaultSelectedKeys = data =>
    expandedMenuItems.filter(item => item.is_selected).map(item => item.key);

  let menuDefaultOpenKeys = data =>
    expandedMenuItems.filter(item => item.is_open).map(item => item.key);

  return (
    <div
      className={
        menuConfig.theme === "light"
          ? ["left-nav", "left-nav-light"].join(" ")
          : "left-nav"
      }
    >
      <div className="logo" />
      <Menu
        theme={menuConfig.theme || "dark"}
        defaultOpenKeys={menuDefaultOpenKeys(menuList)}
        defaultSelectedKeys={menuDefaultSelectedKeys(menuList)}
        mode="inline"
      >
        {renderedMenu}
      </Menu>
    </div>
  );
}
