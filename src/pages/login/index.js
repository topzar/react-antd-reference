import React, { useState } from "react";
import { Card, Form, Button, Input, Spin, Icon, message } from "antd";
import { connect } from "react-redux";
import ClassNames from "classnames";
import { loginIn } from "@store/user/actions";
import { userLogin } from "@models/user";

import styles from "./index.less";

function LoginPage(props) {
  const [loading, setLoading] = useState(false);

  const { getFieldDecorator, validateFields, resetFields } = props.form;
  const { history, location } = props;

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
    wrapperCol: { span: 14, offset: 6 }
  };

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors, values) => !errors && submitForm(values));
  }

  async function submitForm(data) {
    setLoading(true);
    try {
      await userLogin(data);
      props.doLogin();
      await message.success("登录成功");
      resetFields();
      setLoading(false);
      history.replace("/home", location.state);
    } catch (error) {
      setLoading(false);
      message.error(error.message);
    }
  }

  return (
    <div className={ClassNames("container", styles.loginPageContainer)}>
      <div className="login-area">
        <Card title="管理系统-管理员登录页">
          <Spin spinning={loading}>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item label="账户">
                {getFieldDecorator("userName", {
                  rules: [
                    {
                      required: true,
                      message: "用户名必须要填写"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="请您输入账户名"
                  />
                )}
              </Form.Item>
              <Form.Item label="密码">
                {getFieldDecorator("userPass", {
                  rules: [
                    {
                      required: true,
                      message: "用户密码必须要填写"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="请您输入账户密码"
                  />
                )}
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </Card>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  doLogin: () => {
    return (dispatch, getState) => {
      dispatch(loginIn());
    };
  }
};
export default connect(
  null,
  mapDispatchToProps
)(Form.create()(LoginPage));
