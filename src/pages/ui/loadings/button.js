import React, { useState } from "react";
import { Button, Card, Icon, Divider } from "antd";

import "../index.less";

export default function LoadingButton() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Card title="加载中按钮" className="card-wrap">
        <Button
          type="primary"
          loading={loading}
          onClick={e => setLoading(true)}
        >
          Click me to loading!
        </Button>

        <Button type="primary" icon="poweroff" onClick={e => setLoading(false)}>
          Click me to stop!
        </Button>

        <Divider />

        <Button type="primary" loading={loading}>
          loading
        </Button>
        <Button type="primary" size="small" loading={loading}>
          loading
        </Button>

        <Divider />

        <Button type="primary" loading={loading} />
        <Button type="primary" shape="circle" loading={loading} />
        <Button type="danger" shape="round" loading={loading} />
      </Card>
      <Card title="按钮+icon的加载中效果" className="card-wrap">
        <Button type="primary" icon="loading">
          button 的icon 属性
        </Button>

        <Divider />

        <Button type="primary">
          <Icon type="loading"></Icon>
          button 套icon
        </Button>

        <Divider />

        <Button type="primary" disabled>
          <Icon type="loading"></Icon>
          loading
        </Button>

        <Divider />

        <Button type="primary" disabled>
          <Icon type="home" spin></Icon>
          强制旋转icon
        </Button>
      </Card>
    </div>
  );
}
