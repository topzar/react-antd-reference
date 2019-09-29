/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Card,
  Table,
  Badge,
  Alert,
  Divider,
  Button,
  Popconfirm,
  message
} from "antd";

export default function TablesPage() {
  const [selectRow, setSelectRow] = useState([]);
  const [selectRow2, setSelectRow2] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号"
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号"
    },
    {
      key: "3",
      name: "胡彦梅",
      age: 42,
      address: "西湖区湖底公园1号"
    }
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address"
    }
  ];
  const columns2 = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: text => <a href="/">{text}</a>
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
      render: text => <Badge count={text} />
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      render: text => (
        <Alert message={text} type="info" style={{ width: 300 }} />
      )
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => message.success("模仿删除")}
          >
            <a href="">Delete</a>
          </Popconfirm>
        ) : null
    }
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    selectedRowKeys: [...selectRow],
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRow(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };
  const rowSelection2 = {
    selectedRowKeys: [...selectRow2],
    hideDefaultSelections: true,

    selections: [
      {
        key: "all-data",
        text: "Select All Data",
        onSelect: () => {
          setSelectRow2(dataSource.map(item => item.key));
        }
      },
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: changableRowKeys => {
          setSelectRow2(
            dataSource
              .filter((item, index) => index % 2 === 0)
              .map(item => item.key)
          );
        }
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: changableRowKeys => {
          setSelectRow2(
            dataSource
              .filter((item, index) => index % 2 !== 0)
              .map(item => item.key)
          );
        }
      }
    ],
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRow2(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };

  return (
    <div>
      <Card className="card-wrap" title="基本展示">
        <Table dataSource={dataSource} columns={columns} />
      </Card>
      <Card className="card-wrap" title="自定义字段">
        <Table dataSource={dataSource} columns={columns2} />
      </Card>
      <Card className="card-wrap" title="可选的table">
        <Table
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns2}
        />
      </Card>
      <Card className="card-wrap" title="点击行就可选的table">
        <Table
          rowSelection={rowSelection2}
          dataSource={dataSource}
          columns={columns2}
          onRow={record => ({
            onClick: () => {
              setSelectRow2([...selectRow2, record.key]);
            }
          })}
        />
      </Card>
      <Card className="card-wrap" title="loading效果的table">
        <Button
          size="large"
          type="primary"
          loading={tableLoading}
          onClick={e => {
            setTableLoading(true);
            setTimeout(() => {
              setTableLoading(false);
            }, 3000);
          }}
        >
          切换加载中状态
        </Button>
        <Divider />
        <Table
          rowSelection={rowSelection2}
          dataSource={dataSource}
          columns={columns2}
          onRow={record => ({
            onClick: () => {
              setSelectRow2([...selectRow2, record.key]);
            }
          })}
          loading={tableLoading}
          pagination={{
            defaultPageSize: 2,
            total: dataSource.length,
            pageSizeOptions: ["2", "20", "30", "40"],
            showSizeChanger: true
          }}
        />
      </Card>
    </div>
  );
}
