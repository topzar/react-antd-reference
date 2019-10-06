import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import PrivateRoute from "@components/private-route";

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

// notification
import NotificationPage from "@pages/ui/notification";
//messages
import MessagesPage from "@pages/ui/messages";
//modals
import ModalsPage from "@pages/ui/modals";
//tables
import TablesPage from "@pages/ui/tables";
//form
import FormsPage from "@pages/ui/forms";

import Demo1 from "@pages/demo/demo1";
import Demo2 from "@pages/demo/demo2";
import Demo3 from "@pages/demo/demo3";
import GridLayoutPage from "@pages/demo/demo-grid-layout";

import AntdProHeaderRightIndex from "@pages/demo/antd-pro-header";

// 引导用户到/home下
function Guard() {
  return <Redirect push to="/home" />;
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
        <Route
          path={`${match.path}/ui/notification`}
          component={NotificationPage}
        />
        <Route path={`${match.path}/ui/messages`} component={MessagesPage} />
        <Route path={`${match.path}/ui/modals`} component={ModalsPage} />
        <Route path={`${match.path}/ui/tables`} component={TablesPage} />
        <Route path={`${match.path}/ui/forms`} component={FormsPage} />

        <Route path={`${match.path}/demo/demo1`} component={Demo1} />
        <Route path={`${match.path}/demo/demo2`} component={Demo2} />
        <Route path={`${match.path}/demo/demo3`} component={Demo3} />
        <Route
          path={`${match.path}/demo/grid-layout`}
          component={GridLayoutPage}
        />
        <Route
          path={`${match.path}/demo/antd-pro-header`}
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
      <PrivateRoute path="/home" component={withRouter(MainFrame)} />
      <Route path="/login" component={LoginPage} />
      <Route children={Page404} />
    </Switch>
  );
}
