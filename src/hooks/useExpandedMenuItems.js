import { useState, useEffect } from "react";

//递归提取菜单配置中的所有子菜单，最终返回展开后的整个items组成的数组
export default function useExpandedMenuItems(menuData) {
  const [expandedMenu, setExpandedMenu] = useState(menuData);
  // console.log("out side of effect", expandedMenu);
  useEffect(() => {
    // console.log("inside of effect", expandedMenu);
    //展开菜单自选项
    function expandAllItems(data) {
      let all_items = [];
      for (let index = 0; index < data.length; index++) {
        if (data[index].children) {
          all_items.push(...expandAllItems(data[index].children));
        }
        all_items.push(data[index]);
      }
      return all_items;
    }
    let result = expandAllItems(menuData);
    setExpandedMenu(result);
  }, [menuData]);

  return expandedMenu;
}
