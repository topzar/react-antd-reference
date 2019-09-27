import React from "react";
import { Card, message, Button } from "antd";

import "../index.less";

export default function LoadingButton() {
  function success() {
    const hide = message.loading("Action in progress..", 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  }
  function successPromise() {
    message
      .loading("Action in progress..", 2.5)
      .then(() => message.warning("Loading finished", 2.5))
      .then(() => message.info("Loading finished is finished", 2.5));
  }

  return (
    <div>
      {/* <Card title="加载控制器" className="card-wrap">
        <div style={{ marginTop: 16 }}>
          tonggle Loading state：
          <Switch checked={loading} onChange={e => setLoading(!loading)} />
        </div>
        <Divider />
      </Card> */}
      <Card title="Message 加载总效果" className="card-wrap">
        <Button size="large" onClick={success}>
          显示一个加载中的全局提示
        </Button>
      </Card>
      <Card title="模拟网络请求的加载中提示 " className="card-wrap">
        <Button type="primary" size="large" onClick={successPromise}>
          Promise 形式的加载中效果
        </Button>
      </Card>
    </div>
  );
}
