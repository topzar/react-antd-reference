import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "@routes";
import { loginIn } from "./store/user/actions";
import { isLogin } from "@utils/user";

import "./App.less";

function App(props) {
  const { lastLoginStatus } = props;

  lastLoginStatus();

  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  lastLoginStatus: () => {
    return (dispatch, getState) => {
      const loginStatus = getState()
        .get("user")
        .get("loginStatus");

      if (loginStatus) return; //不需要重新出发登录、退出
      //重新标记为登录
      isLogin() && dispatch(loginIn());
    };
  }
};

export default connect(
  null,
  mapDispatchToProps
)(App);
