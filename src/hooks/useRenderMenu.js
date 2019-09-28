import React, { useState, useEffect } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
//递归提取菜单配置中的所有子菜单，最终返回展开后的整个items组成的数组
export default function useMenuRender(menuData) {
  const [renderedMenu, setRenderedMenu] = useState("");

  useEffect(() => {
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

    let result = renderMenu(menuData);
    setRenderedMenu(result);
  }, [menuData]);

  return renderedMenu;
}
