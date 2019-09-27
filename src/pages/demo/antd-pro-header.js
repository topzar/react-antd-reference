import React from "react";
import { Card, Icon } from "antd";

import "./index.less";

export default function AntdProHeaderRightIndex() {
  return (
    <div className="antd-pro-header">
      <Card title="顶部小图标demo">
        <span>
          <Icon type="search" />
        </span>
        <span>
          <Icon type="question-circle" />
        </span>
        <span>
          <Icon type="bell" />
        </span>
        <span>
          <Icon type="user" />
        </span>
        <span>
          <Icon type="global" />
        </span>
      </Card>
    </div>
  );
}
