import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import PrivateRoute from "@components/PrivateRoute";

import HomeDefault from "@pages/Home/Default";
import HomePage from "@pages/Home";
import Page404 from "@pages/404";
import LoginPage from "@pages/Login";

//  pages/UI/
import ButtonsPage from "@pages/UI/Buttons";
import LoadingIcon from "@pages/UI/Loadings/Icon";
import LoadingButton from "@pages/UI/Loadings/Button";
import LoadingSpin from "@pages/UI/Loadings/Spin";
import LoadingMessage from "@pages/UI/Loadings/Message";

// notification
import NotificationPage from "@pages/UI/Notification";
//messages
import MessagesPage from "@pages/UI/Messages";
//modals
import ModalsPage from "@pages/UI/Modals";
//tables
import TablesPage from "@pages/UI/Tables";
//form
import FormsPage from "@pages/UI/Forms";

import Demo1 from "@pages/Demo/Demo1";
import Demo2 from "@pages/Demo/Demo2";
import Demo3 from "@pages/Demo/Demo3";
import GridLayoutPage from "@pages/Demo/DemoGridLayout";

import AntdProHeaderRightIndex from "@pages/Demo/AntdProHeader";

//project
import ProjectListPage from "@pages/Project/ListPage";

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
        {/* project */}
        <Route
          path={`${match.path}/project/list`}
          component={ProjectListPage}
        />
        {/* ui */}
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

        <Route path={`${match.path}/Demo/Demo1`} component={Demo1} />
        <Route path={`${match.path}/Demo/Demo2`} component={Demo2} />
        <Route path={`${match.path}/Demo/Demo3`} component={Demo3} />
        <Route
          path={`${match.path}/Demo/grid-layout`}
          component={GridLayoutPage}
        />
        <Route
          path={`${match.path}/Demo/antd-pro-header`}
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
