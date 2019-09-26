import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import HomeDefault from "@pages/home/default";
import HomePage from "@pages/home";
import Page404 from "@pages/404";
import LoginPage from "@pages/login";

import Demo1 from "@pages/demo/demo1";
import Demo2 from "@pages/demo/demo2";

// 当用户访问的是 / 的时候，登陆过的重定向到/home下，否则/login下
function Guard() {
  return true ? <Redirect push to="/home" /> : <Redirect push to="/login" />;
}

//主页面控制器
function MainFrame({ match }) {
  return (
    <HomePage>
      <Switch>
        <Route exact path={`${match.path}`} component={HomeDefault} />
        <Route path={`${match.path}/demo1`} component={Demo1} />
        <Route path={`${match.path}/demo2`} component={Demo2} />
        <Route exact path="*" component={Page404} />
      </Switch>
    </HomePage>
  );
}
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Guard} />
      <Route path="/home" component={withRouter(MainFrame)} />
      <Route path="/login" component={LoginPage} />
      <Route children={Page404} />
    </Switch>
  );
}
