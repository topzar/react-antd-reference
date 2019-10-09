import React, { useMemo } from "react";
import { Menu } from "antd";

import "./index.less";

import { menuList, menuConfig } from "@configs/menu";

import MenuItemsHandler from "@utils/menu/menu-items-handler";
import MenuRenderHandler from "@utils/menu/menu-render-handler";

export default function LeftNav() {
  const { menuDefaultOpenKeys, menuDefaultSelectedKeys } = useMemo(
    () => MenuItemsHandler(menuList),
    []
  );
  const renderedMenu = useMemo(() => MenuRenderHandler(menuList), []);

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
        defaultOpenKeys={menuDefaultOpenKeys}
        defaultSelectedKeys={menuDefaultSelectedKeys}
        mode="inline"
      >
        {renderedMenu}
      </Menu>
    </div>
  );
}
