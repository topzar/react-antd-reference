import React, { useState } from "react";
import { Card, Button, Icon, Radio } from "antd";

import "../index.less";

export default function ButtonsPage() {
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("default");

  return (
    <>
      <Card title="基础按钮" className="card-wrap">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button disabled>Disabled</Button>
      </Card>
      <Card title="图形按钮" className="card-wrap">
        <Button icon="plus">创建</Button>
        <Button icon="edit">编辑</Button>
        <Button icon="delete">删除</Button>
        <Button shape="circle" icon="search"></Button>
        <Button type="primary" icon="search">
          搜索
        </Button>
        <Button type="primary" icon="download">
          下载
        </Button>
      </Card>
      <Card title="Loading按钮" className="card-wrap">
        <Button type="primary" shape="circle" loading={loading}></Button>
        <Button type="primary" loading={loading}>
          确定
        </Button>
        <Button shape="circle" loading={loading}></Button>
        <Button loading={loading} onClick={e => setLoading(true)}>
          点击加载
          {loading && <Icon type="frown" theme="twoTone" />}
        </Button>
        <Button type="primary" onClick={e => setLoading(false)}>
          停止加载
          {!loading && <Icon type="smile" theme="twoTone" />}
        </Button>
      </Card>
      <Card title="按钮组" style={{ marginBottom: 10 }}>
        <Button.Group>
          <Button type="primary" icon="left">
            返回
          </Button>
          <Button type="primary">
            前进
            <Icon type="right" />
          </Button>
        </Button.Group>
      </Card>
      <Card title="按钮禁用、可用" className="card-wrap">
        <Radio.Group
          onChange={e => setDisabled(!disabled)}
          defaultValue="default"
        >
          <Radio.Button value="default">可用</Radio.Button>
          <Radio.Button value="large">禁用</Radio.Button>
        </Radio.Group>
        <Radio.Group disabled={disabled}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <Button.Group>
          <Button type="primary" disabled={disabled}>
            Ok
          </Button>
          <Button type="danger" disabled={disabled}>
            Cancle
          </Button>
        </Button.Group>

        <Button disabled={disabled}>Default</Button>
        <Button type="primary" disabled={disabled}>
          Primary
        </Button>
      </Card>
      <Card title="按钮尺寸" className="card-wrap">
        <Radio.Group
          defaultValue="default"
          onChange={e => setSize(e.target.value)}
          size={size}
        >
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <Radio.Group size={size}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>

        <Button.Group>
          <Button type="primary" size={size}>
            Ok
          </Button>
          <Button type="danger" size={size}>
            Cancle
          </Button>
        </Button.Group>

        <Button size={size}>Default</Button>
        <Button type="primary" size={size}>
          Primary
        </Button>
      </Card>
    </>
  );
}
