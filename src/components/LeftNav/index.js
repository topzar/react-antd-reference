import React, { useMemo } from "react";
import { Menu } from "antd";
import ClassNames from "classnames";
import styles from "./index.less";

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
          ? ClassNames(styles["left-nav"], styles["left-nav-light"])
          : styles["left-nav"]
      }
    >
      <div className={styles.logo} />
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
