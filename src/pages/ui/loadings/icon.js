import React from "react";
import { Card, Row, Col, Icon } from "antd";

import "../index.less";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1250017_o43nqr6728j.js" // 在 iconfont.cn 上生成
});

export default function LoadingIcon() {
  return (
    <div>
      <Card title="加载中 icons" className="card-wrap block_span">
        <Row>
          <Col span={3}>
            <span>
              <Icon type="loading" />
            </span>
            <span>loading</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="loading-3-quarters" />
            </span>
            <span>loading-3-quarters</span>
            <span>默认不旋转</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="loading-3-quarters" spin />
            </span>
            <span>loading-3-quarters</span>
            <span>旋转</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="reload" />
            </span>
            <span>reload</span>
            <span>默认不旋转</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="reload" spin />
            </span>
            <span>reload</span>
            <span>默认不旋转</span>
          </Col>
        </Row>
      </Card>

      <Card title="强制旋转任意 icon" className="card-wrap block_span">
        <Row>
          <Col span={3}>
            <span>
              <Icon type="up-circle" spin />
            </span>
            <span>up-circle</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="play-circle" spin />
            </span>
            <span>play-circle</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="redo" spin />
            </span>
            <span>redo</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="undo" spin />
            </span>
            <span>undo</span>
          </Col>
          <Col span={3}>
            <span>
              <Icon type="bug" spin />
            </span>
            <span>bug</span>
          </Col>
        </Row>
      </Card>

      <Card title="基于 icon-font 的加载效果" className="card-wrap block_span">
        <Row>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading" spin />
            </span>
            <span>icon-loading</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-xingzhuang1" spin />
            </span>
            <span>icon-xingzhuang1</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading5" spin />
            </span>
            <span>icon-loading5</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-xingzhuang" spin />
            </span>
            <span>icon-xingzhuang</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading4" spin />
            </span>
            <span>icon-loading4</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading3" spin />
            </span>
            <span>icon-loading3</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading2" spin />
            </span>
            <span>icon-loading2</span>
          </Col>
          <Col span={3}>
            <span>
              <IconFont type="icon-loading1" spin />
            </span>
            <span>icon-loading1</span>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
