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
    key: "/home/ui",
    is_open: true,
    icon: "compass",
    children: [
      {
        title: "按钮",
        key: "/home/ui/buttons"
      },
      {
        title: "弹框",
        key: "/home/ui/modals"
      },
      {
        title: "Loading",
        key: "/home/ui/loadings"
      },
      {
        title: "通知提醒",
        key: "/home/ui/notification"
      },
      {
        title: "全局Message",
        key: "/home/ui/messages"
      },
      {
        title: "Tab页签",
        key: "/home/ui/tabs"
      },
      {
        title: "图片画廊",
        key: "/home/ui/gallery"
      },
      {
        title: "轮播图",
        key: "/home/ui/carousel"
      }
    ]
  }
];
//菜单配置项
export const menuConfig = {
  // theme: "light"
};
