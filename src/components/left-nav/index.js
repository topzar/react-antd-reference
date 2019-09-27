import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Icon } from "antd";

import "./index.less";

import { menuList, menuConfig } from "@configs/menuConfig";

const { SubMenu } = Menu;

export default function LeftNav() {
  function menuDefaultSelectedKeys(data) {
    return data
      .filter(item => {
        return item.is_selected;
      })
      .map(item => {
        return item.key;
      });
  }
  function menuDefaultOpenKeys(data) {
    return data
      .filter(item => {
        return item.is_open;
      })
      .map(item => {
        return item.key;
      });
  }
  function renderMenu(data) {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.title}</span>
              </span>
            }
            key={item.key}
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>
            <span>
              {item.icon && <Icon type={item.icon} />}
              <span>{item.title}</span>
            </span>
          </NavLink>
        </Menu.Item>
      );
    });
  }

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
        {renderMenu(menuList)}
      </Menu>
    </div>
  );
}
