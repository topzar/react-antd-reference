import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Routes from "@routes";
import { loginIn, loginOut } from "./store/user/actions";
import storage from "@storage";
import "./App.less";

function App(props) {
  props.lastLoginStatus();
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
      if (storage.get("loginStatus") === "true") {
        dispatch(loginIn());
      } else {
        dispatch(loginOut());
      }
    };
  }
};
export default connect(
  null,
  mapDispatchToProps
)(App);
