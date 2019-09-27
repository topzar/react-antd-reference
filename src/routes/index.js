import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import HomeDefault from "@pages/home/default";
import HomePage from "@pages/home";
import Page404 from "@pages/404";
import LoginPage from "@pages/login";

//  pages/ui/
import ButtonsPage from "@pages/ui/buttons";
import LoadingIcon from "@pages/ui/loadings/icon";
import LoadingButton from "@pages/ui/loadings/button";
import LoadingSpin from "@pages/ui/loadings/spin";
import LoadingMessage from "@pages/ui/loadings/message";

import Demo1 from "@pages/demo/demo1";
import Demo2 from "@pages/demo/demo2";

import AntdProHeaderRightIndex from "@pages/demo/antd-pro-header";
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
        <Route path={`${match.path}/ui/buttons`} component={ButtonsPage} />
        <Route
          path={`${match.path}/ui/loadings/icon`}
          component={LoadingIcon}
        />
        <Route
          path={`${match.path}/ui/loadings/button`}
          component={LoadingButton}
        />
        <Route
          path={`${match.path}/ui/loadings/spin`}
          component={LoadingSpin}
        />
        <Route
          path={`${match.path}/ui/loadings/message`}
          component={LoadingMessage}
        />

        <Route path={`${match.path}/demo1`} component={Demo1} />
        <Route path={`${match.path}/demo2`} component={Demo2} />
        <Route
          path={`${match.path}/antd-pro-header`}
          component={AntdProHeaderRightIndex}
        />

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
