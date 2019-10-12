//左侧菜单
export const menuList = [
  {
    title: "首页",
    key: "/home",
    is_selected: true,
    icon: "home"
  },
  {
    title: "项目管理",
    key: "/home/project",
    is_open: true,
    icon: "project",
    children: [
      {
        title: "项目列表",
        key: "/home/project/list",
        icon: "unordered-list"
      }
    ]
  },
  {
    title: "UI",
    key: "/home/ui",
    is_open: false,
    icon: "compass",
    children: [
      {
        title: "按钮",
        key: "/home/ui/buttons",
        icon: "border"
      },
      {
        title: "Loading",
        key: "/home/ui/loadings",
        icon: "loading-3-quarters",
        is_open: false,
        children: [
          {
            title: "icon 加载中",
            key: "/home/ui/loadings/icon",
            icon: "loading"
          },
          {
            title: "button 加载中",
            key: "/home/ui/loadings/button",
            icon: "border"
          },
          {
            title: "Spin 加载中",
            key: "/home/ui/loadings/spin",
            icon: "redo"
          },
          {
            title: "Message 提示",
            key: "/home/ui/loadings/message",
            icon: "message"
          }
        ]
      },
      {
        title: "通知提醒",
        key: "/home/ui/notification",
        icon: "notification"
      },
      {
        title: "全局Message",
        key: "/home/ui/messages",
        icon: "message"
      },
      {
        title: "弹框",
        key: "/home/ui/modals",
        icon: "windows"
      },
      {
        title: "表格",
        key: "/home/ui/tables",
        icon: "table"
      },
      {
        title: "表单",
        key: "/home/ui/forms",
        icon: "form"
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
    key: "/home/demo",
    is_open: false,
    icon: "smile",
    children: [
      {
        title: "demo1",
        key: "/home/demo/demo1"
      },
      {
        title: "demo2",
        key: "/home/demo/demo2"
      },
      {
        title: "网络请求-国际化",
        key: "/home/demo/demo3"
      },
      {
        title: "antdPro 的 Header",
        key: "/home/demo/antd-pro-header"
      },
      {
        title: "Grid 栅格",
        key: "/home/demo/grid-layout"
      }
    ]
  }
];
//菜单配置项
export const menuConfig = {
  // theme: "light"
};
