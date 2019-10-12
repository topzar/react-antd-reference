import React, { useState, useEffect } from "react";
import { Card, Table, message, Divider, Button, Form } from "antd";

import { projectList } from "@api/project";

function ListPage(props) {
  const [tableDataLoading, setTableDataLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [tableSelectedPage, setTableSelectedPage] = useState(1);

  useEffect(() => {
    setTableDataLoading(true);
    projectList()
      .then(({ data: res }) => {
        if (res.code !== 0) {
          message.error("回去数据失败");
          return false;
        }
        setTableData(res.data);
        setTableDataLoading(false);
      })
      .catch(err => console.log("变量信息->: ListPage -> err", err))
      .finally(() => setTableDataLoading(false));
  }, [tableSelectedPage]);

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

  return (
    <div className="container project-list-page">
      <Card>
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
