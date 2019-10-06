import React, { useState, useEffect } from "react";
import { Card, Button, message, Radio, Divider, Input } from "antd";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import localforage from "localforage";

import axios from "@axios";

import { changeLanguage } from "@store/language/actions";

function LocaleDemo(props, context) {
  return (
    <div>
      <FormattedMessage id="app.demo.test" />
    </div>
  );
}
function AxiosDemo(props) {
  const [loading, setLoading] = useState(false);
  const [storageData, setStorageData] = useState("");

  useEffect(() => {
    console.log("数据正在还原");
    localforage.getItem("test").then(value => {
      console.log("正在领取仓库中的数据");
      if (value) {
        setStorageData(value);
      } else {
        console.log("仓库中保存的数据为空");
      }
    });
  }, []);

  function handleClick() {
    console.log("handle click here");

    setLoading(true);

    axios
      .request({
        url: "/user/info"
      })
      .then(res => {
        console.log("res", res);
        setLoading(false);
        message.success("网络请求成功被mock 拦截了");
      })
      .catch(error => {
        console.log("error");
        setLoading(false);
        message.error("网络请求出错了");
      });
  }
  function handleDataToLocal(event) {
    console.log("storageData", storageData);

    localforage.removeItem("test");
    localforage.setItem("test", storageData).catch(error => {
      console.log("error", error);
    });
  }
  return (
    <div className="container">
      <Card title="网络请求demo" className="card-wrap">
        <Button loading={loading} onClick={handleClick}>
          提交请求
        </Button>
      </Card>
      <Card title="国际化之中文、英文切换" className="card-wrap">
        <div>
          <Radio.Group
            onChange={e => props.changeLanguage(e.target.value)}
            defaultValue="zh"
          >
            <Radio.Button value="zh">中文</Radio.Button>
            <Radio.Button value="en">English</Radio.Button>
          </Radio.Group>
        </div>
        <Divider />
        <LocaleDemo />
      </Card>
      <Card title="数据本地保存" className="card-wrap">
        <Input
          placeholder="请你输入想要保存下来的内容"
          onChange={e => {
            const value = e.target.value;
            setStorageData(value);
          }}
        />
        <Divider />
        <Button type="primary" onClick={handleDataToLocal}>
          保存数据
        </Button>
        <Divider />
        <div>
          <p>{JSON.stringify(storageData)}</p>
        </div>
      </Card>
    </div>
  );
}

export default connect(
  null,
  {
    changeLanguage: lang => (dispatch, getState) =>
      dispatch(changeLanguage(lang))
  }
)(AxiosDemo);
