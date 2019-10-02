import React, { useState } from "react";
import { Card, Button, message } from "antd";
import axios from "@axios";
export default function AxiosDemo() {
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
      <Card title="网络请求demo">
        <Button loading={loading} onClick={handleClick}>
          提交请求
        </Button>
      </Card>
    </div>
  );
}
