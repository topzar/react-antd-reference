import React, { useState } from "react";
import { Card, Menu, Icon, Button } from "antd";

const { SubMenu } = Menu;

function MenuDemo1(props) {
  const [selectedKey, setSelectedKey] = useState("mail");

  function handleClick(event) {
    //设置选中的item
    setSelectedKey(event.key);
    console.log("变量信息->: handleClick -> event.key", event.key);
  }

  return (
    <div>
      <Menu
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[selectedKey]}
      >
        <Menu.Item key="mail">
          <Icon type="mail" />
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />
          Navigation Two
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

function MenuDemo2(props) {
  function handleClick(event) {
    console.log(event);
  }
  const [collepsed, setCollepsed] = useState(false);

  function handleHidecollepsed(event) {
    setCollepsed(!collepsed);
  }
  return (
    <div>
      <Button
        type="primary"
        style={{ margin: "20px" }}
        onClick={handleHidecollepsed}
      >
        显示/隐藏菜单
      </Button>
      <Menu
        style={!collepsed ? { width: "220px" } : { minHeight: "200px" }}
        onClick={handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collepsed}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}
function MenuDemo3(props) {
  const [collapsed, setCollapsed] = useState(true);
  const [lightTheme, setLightTheme] = useState(false);
  const [lineMode, setLineMode] = useState(false);

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={e => setCollapsed(!collapsed)}
        style={{ marginBottom: 16 }}
      >
        <Icon type={collapsed ? "menu-unfold" : "menu-fold"} />
      </Button>
      <Button
        type="primary"
        onClick={e => setLightTheme(!lightTheme)}
        style={{ margin: 16 }}
      >
        切换主题
      </Button>
      <Button
        type="primary"
        onClick={e => setLineMode(!lineMode)}
        style={{ margin: 16 }}
      >
        切换显示方式
      </Button>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={lineMode ? "inline" : "vertical"}
        theme={lightTheme ? "light" : "dark"}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="inbox" />
          <span>Option 3</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default function MenuDemo() {
  return (
    <div>
      <Card title="顶部导航">
        <MenuDemo1 />
      </Card>
      <Card
        title="垂直菜单，子菜单内嵌在菜单区域"
        style={{ marginTop: "20px" }}
      >
        <MenuDemo2 />
      </Card>
      <Card
        title="缩起内嵌菜单、切换主题、  切换显示方式"
        style={{ marginTop: "20px" }}
      >
        <MenuDemo3 />
      </Card>
    </div>
  );
}
