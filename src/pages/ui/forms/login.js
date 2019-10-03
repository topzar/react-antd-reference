import React, { useState, useEffect } from "react";
import { Card, Button, Form, Icon, Input, Radio } from "antd";

function Login(props) {
  const [formLayout, setFormLayout] = useState("horizontal");
  const { validateFields } = props.form;

  useEffect(() => {
    validateFields();
  }, [validateFields]);

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = props.form;

  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }

  // Only show error after a field is touched.
  const usernameError = isFieldTouched("username") && getFieldError("username");
  const passwordError = isFieldTouched("password") && getFieldError("password");

  return (
    <div>
      <Card>
        <Form layout={formLayout}>
          <Form.Item label="Form Layout">
            <Radio.Group
              defaultValue="horizontal"
              onChange={e => setFormLayout(e.target.value)}
            >
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            validateStatus={usernameError ? "error" : ""}
            help={usernameError || ""}
          >
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "用户名必须要填写..." }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? "error" : ""}
            help={passwordError || ""}
          >
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "密码不需要填写..." }]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
export default Form.create("silvaq_login")(Login);
