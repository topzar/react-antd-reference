import React, { useState } from "react";
import { Card, Button, message, Radio, Divider } from "antd";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import axios from "@axios";

import { languageActions } from "../../store/language/index";

function LocaleDemo(props, context) {
  return (
    <div>
      <FormattedMessage id="app.demo.test" />
    </div>
  );
}
function AxiosDemo(props) {
  const [loading, setLoading] = useState(false);

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

  return (
    <div>
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
    </div>
  );
}

export default connect(
  null,
  {
    changeLanguage: lang => (dispatch, getState) =>
      dispatch(languageActions.changeLanguage(lang))
  }
)(AxiosDemo);
