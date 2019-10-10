import React from "react";
import { Card, Icon } from "antd";
import ClassNames from "classnames";
import styles from "./index.less";

export default function AntdProHeaderRightIndex() {
  return (
    <div className={ClassNames("container", styles.demoAntdProHeader)}>
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
