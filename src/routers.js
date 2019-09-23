import React from "react";
import { Route, Switch } from "react-router-dom";

import { Card } from "antd";

import HomePage from "./pages/home-page";

import Demo1 from "./pages/demo-1/";
import Demo2 from "./pages/demo-2/";
import Demo3 from "./pages/demo-3/";

export default function Routers() {
  return (
    <div className="main">
      <Route
        path="/"
        render={() => {
          return (
            <HomePage>
              <Card style={{ height: "100%" }}>
                <Switch>
                  <Route path="/demo1" component={Demo1} />
                  <Route path="/demo2" component={Demo2} />
                  <Route path="/demo3" component={Demo3} />
                </Switch>
              </Card>
            </HomePage>
          );
        }}
      />
    </div>
  );
}
