import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  message,
  Divider,
  Button,
  Form,
  Input,
  Row,
  Col
} from "antd";

import { projectList } from "@api/project";

function ListPage(props) {
  const [tableDataLoading, setTableDataLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableSelectedPage, setTableSelectedPage] = useState(1);
  const [formData, setFormData] = useState({});

  const { resetFields, getFieldDecorator, validateFields } = props.form;

  useEffect(() => {
    setTableDataLoading(true);
    projectList(formData)
      .then(({ data: res }) => {
        if (res.code !== 0) {
          message.error("获取数据失败");
          return false;
        }
        setTableData(res.data);
        setTableDataLoading(false);
      })
      .catch(err => console.log("变量信息->: ListPage -> err", err))
      .finally(() => setTableDataLoading(false));
  }, [formData, tableSelectedPage]);

  const columns = [
    {
      title: "项目",
      dataIndex: "project_name",
      key: "project_name",
      // width: "150px",
      render: text => <a href="?test=1">{text}</a>
    },
    {
      title: "代号",
      dataIndex: "project_code",
      key: "project_code"
      // width: "100px"
    },
    {
      title: "项目简介",
      dataIndex: "project_desc",
      key: "project_desc"
    },
    {
      title: "操作",
      key: "actions",
      render: record => {
        return (
          <div>
            <Button type="primary" size="small">
              编辑{" "}
            </Button>
            <Button type="danger" size="small">
              删除
            </Button>
          </div>
        );
      }
    }
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    validateFields((error, values) => {
      console.log("变量信息->: handleFormSubmit -> values", values);
      if (!error) {
        setFormData(values);
      }
    });
  }

  return (
    <div className="container project-list-page">
      <Card>
        <Form layout="inline" onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <Form.Item label="项目名">
                {getFieldDecorator("project_name", {
                  rules: [
                    {
                      required: true,
                      message: "项目名必能为空哟"
                    }
                  ]
                })(<Input placeholder="按项目名查询" />)}
              </Form.Item>
              <Form.Item label="代号">
                {getFieldDecorator("project_code")(
                  <Input placeholder="按项目代号查询" />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  搜索
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={e => resetFields()}>
                  重置
                </Button>
              </Form.Item>
            </Col>
            <Col style={{ textAlign: "right" }}></Col>
          </Row>
        </Form>
        <Divider />
        <Table
          size="middle"
          rowSelection={rowSelection}
          loading={tableDataLoading}
          dataSource={tableData}
          columns={columns}
          pagination={{
            total: 100,
            onChange: (page, pageSize) => {
              setTableSelectedPage(page);
            }
          }}
        />
      </Card>
    </div>
  );
}

export default Form.create()(ListPage);
