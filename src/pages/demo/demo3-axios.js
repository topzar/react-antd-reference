import React from "react";
import { Card, Button } from "antd";
import axios from "@axios";
export default function AxiosDemo() {
  function handleClick() {
    console.log("handle click here");

    axios
      .request({
        url: "/user/info"
      })
      .then(res => console.log("res", res))
      .catch(error => console.log("error"));
  }

  return (
    <div>
      <Card title="网络请求demo">
        <Button onClick={handleClick}>提交请求</Button>
      </Card>
    </div>
  );
}
