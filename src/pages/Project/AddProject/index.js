import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Row, Col, Spin } from "antd";

function AddProject(props) {
  const [loading, setLoading] = useState(false);

  const { getFieldDecorator, resetFields } = props.form;

  function handleAddProject(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      props.onFinish && props.onFinish();
      resetFields();
    }, 3000);
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 4 },
      sm: { span: 4 }
    },
    wrapperCol: {
      xs: { span: 20 },
      sm: { span: 20 }
    }
  };
  return (
    <div>
      <Spin spinning={loading}>
        <Form {...formItemLayout} onSubmit={handleAddProject}>
          <Row>
            <Col>
              <Form.Item label="项目名">
                {getFieldDecorator("project_name")(
                  <Input placeholder="项目名" />
                )}
              </Form.Item>
              <Form.Item label="项目号">
                {getFieldDecorator("project_code")(
                  <Input placeholder="项目代号" />
                )}
              </Form.Item>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  新增
                </Button>
                <Button
                  type="danger"
                  onClick={e => resetFields()}
                  style={{ marginLeft: 8 }}
                >
                  重置
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Spin>
    </div>
  );
}

AddProject.propTypes = {
  onFinish: PropTypes.func
};

AddProject.defaultProps = {
  onFinish: () => {}
};
export default Form.create({})(AddProject);
