import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { LOGIN_FLAG } from "@utils/user";
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={prop =>
        isAuthenticated ? (
          <Component {...prop} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: prop.location }
            }}
          />
        )
      }
    />
  );
}

const mapStatesToProps = state => ({
  isAuthenticated: state.get("user").get(LOGIN_FLAG)
});
export default connect(mapStatesToProps)(PrivateRoute);
