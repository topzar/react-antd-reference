import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "@routes";
import { loginIn } from "./store/user/actions";
import { isLogin, LOGIN_FLAG } from "@utils/user";

import "./App.less";

function App(props) {
  const { syncLoginStatus } = props;

  syncLoginStatus();

  return (
    <div className="App">
      <Router>
        <Routes></Routes>
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  syncLoginStatus: () => {
    return (dispatch, getState) => {
      const loginStatus = getState()
        .get("user")
        .get(LOGIN_FLAG);

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
