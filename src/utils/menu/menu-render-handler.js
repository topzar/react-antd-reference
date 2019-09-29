import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

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

export default function MenuRenderHandler(menuData) {
  return renderMenu(menuData);
}
