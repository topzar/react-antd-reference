import React from "react";
import { Card } from "antd";

import Login from "./Login";
export default function FormsPage() {
  return (
    <div className="container">
      <Card title="登录表单">
        <Login />
      </Card>
    </div>
  );
}
