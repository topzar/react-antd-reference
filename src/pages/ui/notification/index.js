import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  notification,
  Radio,
  Divider,
  Icon,
  message
} from "antd";

import "./index.less";

const keyFlag = "updatable";

export default function Notification() {
  const [placement, setPlacement] = useState("topRight");

  useEffect(() => {
    notification.config({
      placement: placement
    });
  }, [placement]);

  function openNotification() {
    notification.open({
      message: "友好提醒",
      description: "这个通知提示框内容非常重要，所以你会看到这么长时间哟",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />,
      style: {
        width: 600,
        marginLeft: 335 - 600
      },
      duration: 0
    });
  }
  function openDifferentPlacementNotification() {
    notification.open({
      message: "友好提醒",
      description: "这个通知提示框内容非常重要，所以你会看到这么长时间哟",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />
    });
  }

  function openNotificationWithIcon(type) {
    notification[type]({
      message: "Notification Title",
      description:
        "This is the content of the notification. This is the content of the notification. This is the content of the notification."
    });
  }

  function openNotificationWithConfirm() {
    console.log("openNotificationWithConfirm");
    const btn = (
      <Button
        type="primary"
        size="small"
        onClick={() => {
          message.success("点击了确认按钮");
          notification.close(keyFlag);
          notification.destroy();
        }}
      >
        Confirm
      </Button>
    );
    notification.open({
      message: "Notification Title",
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      keyFlag,
      onClose: () => message.warning("你关闭了通知")
    });
  }

  return (
    <div className="notofication-page-container">
      <Card title="自定义样式和 Icon 的通知提示框" className="card-wrap">
        <Button type="primary" onClick={openNotification}>
          显示一个正常提示框
        </Button>
      </Card>
      <Card title="不同类型自定义 Icon 的通知提示框" className="card-wrap">
        <div>
          <Button
            type="primary"
            onClick={() => openNotificationWithIcon("success")}
          >
            Success
          </Button>
          <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
          <Button
            type="dashed"
            onClick={() => openNotificationWithIcon("warning")}
          >
            Warning
          </Button>
          <Button
            type="danger"
            onClick={() => openNotificationWithIcon("error")}
          >
            Error
          </Button>
        </div>
      </Card>
      <Card title="不同位置显示的通知提示框" className="card-wrap">
        <div>
          {/* ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']; */}
          <Radio.Group
            onChange={e => {
              console.log("e.target.value", e.target.value);
              //设置位置，顺便显示效果
              setPlacement(e.target.value);
            }}
            defaultValue="a"
          >
            <Radio.Button value="topLeft">左上角</Radio.Button>
            <Radio.Button value="topRight">右上角</Radio.Button>
            <Radio.Button value="bottomLeft">左下角</Radio.Button>
            <Radio.Button value="bottomRight">右下角</Radio.Button>
          </Radio.Group>
        </div>
        <Divider />
        <div>
          <Button type="primary" onClick={openDifferentPlacementNotification}>
            显示一个正常提示框
          </Button>
        </div>
      </Card>
      <Card title="有确认选项的的通知提示框" className="card-wrap">
        <Button onClick={openNotificationWithConfirm}>带确认的通知框</Button>
      </Card>
    </div>
  );
}
