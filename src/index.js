import React from "react";
import ReactDOM from "react-dom";

import App from "@/App";

import { Provider } from "react-redux";
import store from "@/store";
if (process.env.NODE_ENV !== "production") {
  require("@mocks");
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
