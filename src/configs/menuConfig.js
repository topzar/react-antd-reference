//左侧菜单
export const menuList = [
  {
    title: "首页",
    key: "/home",
    is_selected: true,
    icon: "home"
  },
  {
    title: "UI",
    key: "/ui",
    is_open: true,
    icon: "compass",
    children: [
      {
        title: "按钮",
        key: "/ui/buttons"
      },
      {
        title: "弹框",
        key: "/ui/modals"
      },
      {
        title: "Loading",
        key: "/ui/loadings"
      },
      {
        title: "通知提醒",
        key: "/ui/notification"
      },
      {
        title: "全局Message",
        key: "/ui/messages"
      },
      {
        title: "Tab页签",
        key: "/ui/tabs"
      },
      {
        title: "图片画廊",
        key: "/ui/gallery"
      },
      {
        title: "轮播图",
        key: "/ui/carousel"
      }
    ]
  }
];
//菜单配置项
export const menuConfig = {
  // theme: "light"
};
