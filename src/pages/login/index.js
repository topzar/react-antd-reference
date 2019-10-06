import React from "react";
import { Card, Form, Button, Input } from "antd";

import "./index.less";
export default function LoginPage() {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 5 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 }
    }
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 }
  };

  return (
    <div className="container login-page-container">
      <div className="login-area">
        <Card title="后台管理系统-用户登录页">
          <Form {...formItemLayout}>
            <Form.Item label="账户">
              <Input placeholder="请您输入账户名" />
            </Form.Item>
            <Form.Item label="密码">
              <Input placeholder="请您输入账户密码" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
