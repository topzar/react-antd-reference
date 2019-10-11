import React from "react";
import { Row, Col, Card } from "antd";
import styles from "./index.less";
export default function GridLayoutPage() {
  return (
    <div className="container">
      <Card title="guatter的响应式设置" className={styles.demoGridLayout}>
        <div className="gutter-example">
          <Row gutter={{ xs: 10, sm: 40, md: 80, lg: 120 }}>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
