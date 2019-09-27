import React, { useState } from "react";
import { Card, Icon, Spin, Alert, Switch, Divider } from "antd";

import "../index.less";

const anticon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export default function LoadingButton() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Card title="加载控制器" className="card-wrap">
        <div style={{ marginTop: 16 }}>
          tonggle Loading state：
          <Switch checked={loading} onChange={e => setLoading(!loading)} />
        </div>
        <Divider />
      </Card>
      <Card title="基础 Spin 加载中效果" className="card-wrap">
        <Spin indicator={anticon} spinning={loading}></Spin>
        <Divider />
        <Spin size="small" />
        <Divider />
        <Spin />
        <Divider />
        <Spin size="large" />
      </Card>
      <Card title="放入一个容器中" className="card-wrap">
        <div className="spin-example">
          <Spin spinning={loading} />
        </div>
      </Card>
      <Card title="卡片加载中效果" className="card-wrap">
        <Spin spinning={loading}>
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Card>
    </div>
  );
}
