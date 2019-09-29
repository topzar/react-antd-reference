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
function menuDefaultSelectedKeys(data) {
  return data.filter(item => item.is_selected).map(item => item.key);
}
function menuDefaultOpenKeys(data) {
  return data.filter(item => item.is_open).map(item => item.key);
}

//递归提取菜单配置中的所有子菜单，最终返回展开后的整个items组成的数组
export default function MenuItemsHandler(menuList) {
  let expanded = expandAllItems(menuList);
  return {
    expandAllItems: expanded,
    menuDefaultSelectedKeys: menuDefaultSelectedKeys(expanded),
    menuDefaultOpenKeys: menuDefaultOpenKeys(expanded),
    data: menuList
  };
}
