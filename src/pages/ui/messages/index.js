import React from "react";
import { Card, message, Button, Divider, Radio } from "antd";

import "./index.less";
export default function MessagePage() {
  return (
    <div>
      <Card title="全局提示" className="card-wrap">
        <Button type="primary" onClick={e => message.info("这是最普通的提示")}>
          普通提示
        </Button>

        <Divider />

        <Button
          type="primary"
          onClick={e => message.info("这是最普通的提示", 10)}
        >
          这个提示延时10秒
        </Button>

        <Divider />

        <Button
          type="danger"
          onClick={e => {
            message
              .loading("正在请求数据，请等待...", 2.5)
              .then(() => message.success("已获取数据，正在解压分析...", 2.5))
              .then(() => message.info("数据完整无存，请放心使用!!!", 2.5));
          }}
        >
          异步请求显示新更新的提示
        </Button>

        <Divider />

        <Button
          type="dashed"
          onClick={e => {
            const hide = message.loading("正在提交数据，请耐心等待...", 0);
            // Dismiss manually and asynchronously
            setTimeout(hide, 2500);
          }}
        >
          异步请求显示新更新的提示
        </Button>

        <Divider />

        <Radio.Group
          onChange={e =>
            message[e.target.value](`当前的提示类型为:${e.target.value}`)
          }
          defaultValue="seat"
        >
          <Radio.Button disabled value="seat">
            占位
          </Radio.Button>
          <Radio.Button value="success">success</Radio.Button>
          <Radio.Button value="error">error</Radio.Button>
          <Radio.Button value="info">info</Radio.Button>
          <Radio.Button value="warning">warning</Radio.Button>
          <Radio.Button value="warn">warn</Radio.Button>
          <Radio.Button value="loading">loading</Radio.Button>
        </Radio.Group>
      </Card>
    </div>
  );
}
