import React from "react";
import { Route } from "react-router-dom";

import { Card } from "antd";

import HomePage from "./pages/home-page";

import MenuDemo from "./pages/menu-demo";

export default function Routers() {
  return (
    <div className="main">
      <Route
        path="/"
        render={() => {
          return (
            <HomePage>
              <Card style={{ height: "100%" }}>
                <Route path="/menu-demo" component={MenuDemo} />
              </Card>
            </HomePage>
          );
        }}
      />
    </div>
  );
}
