import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

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
  isAuthenticated: state.get("user").get("loginStatus")
});
export default connect(mapStatesToProps)(PrivateRoute);
