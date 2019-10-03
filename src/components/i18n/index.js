import React from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

import zhCN from "@locale/zh-CN";
import enUS from "@locale/en-US";

function chooseLocale(val) {
  let _val = val || navigator.language.split("_")[0];
  switch (_val) {
    case "en":
      return enUS;
    case "zh":
      return zhCN;
    default:
      return zhCN;
  }
}
// const { locale, messages } = chooseLocale("en");

function I18N(props) {
  return (
    <IntlProvider
      key={props.locale}
      locale={props.locale}
      messages={props.messages}
    >
      {props.children}
    </IntlProvider>
  );
}
const mapStateToProps = ({ language }, ownProps) => {
  const langData = chooseLocale(language);
  return {
    locale: langData.locale,
    messages: langData.messages
  };
};

export default connect(mapStateToProps)(I18N);
