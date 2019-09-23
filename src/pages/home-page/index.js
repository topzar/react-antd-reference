import React from "react";
import { Card } from "antd";

import { Route, Switch } from "react-router-dom";

import MainLayout from "./components/main-layout/";
import LeftNav from "./components/left-nav";
import Header from "./components/header/";
import Footer from "./components/footer/";

import Demo1 from "../demo-1/";
import Demo2 from "../demo-2/";
import Demo3 from "../demo-3/";
export default function HomePage() {
  return (
    <MainLayout leftNav={<LeftNav />} header={<Header />} footer={<Footer />}>
      {/* 主页面的内容放在这里 */}
      <Card style={{ height: "100%" }}>
        <Switch>
          <Route path="/" exact component={Demo1} />
          <Route path="/demo2" component={Demo2} />
          <Route path="/demo3" component={Demo3} />
        </Switch>
      </Card>
    </MainLayout>
  );
}
