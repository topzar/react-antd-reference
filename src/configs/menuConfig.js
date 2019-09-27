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
        title: "Loading",
        key: "/home/ui/loadings",
        icon: "loading-3-quarters",
        is_open: true,
        children: [
          {
            title: "icon 加载中",
            key: "/home/ui/loadings/icon"
          },
          {
            title: "Spin 加载中",
            key: "/home/ui/loadings/spin"
          },
          {
            title: "Message 加载中",
            key: "/home/ui/loadings/message"
          },
          {
            title: "button 加载中",
            key: "/home/ui/loadings/button"
          }
        ]
      },
      {
        title: "通知提醒",
        key: "/home/ui/notification"
      },
      {
        title: "弹框",
        key: "/home/ui/modals"
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
  },
  {
    title: "Demo",
    key: "/home/Demo",
    is_open: true,
    icon: "compass",
    children: [
      {
        title: "demo1",
        key: "/home/demo1"
      },
      {
        title: "demo2",
        key: "/home/demo2"
      },
      {
        title: "antdPro 的 Header",
        key: "/home/antd-pro-header"
      }
    ]
  }
];
//菜单配置项
export const menuConfig = {
  // theme: "light"
};
