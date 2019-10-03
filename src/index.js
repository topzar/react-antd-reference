import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "@/App";

import store from "@/store";
import I18N from "@components/i18n";
if (process.env.NODE_ENV !== "production") {
  require("@mocks");
}

ReactDOM.render(
  <Provider store={store}>
    <I18N>
      <App />
    </I18N>
  </Provider>,
  document.getElementById("root")
);
