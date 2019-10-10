import React from "react";

import { Icon, Menu } from "antd";
import HeaderDropdown from "../HeaderDropDown";
import classNames from "classnames";
import { connect } from "react-redux";

import styles from "./index.less";
import { changeLanguage } from "@store/language/actions";

const locales = ["zh", "en"];
const languageLabels = {
  zh: "简体中文",
  en: "English"
};
const languageIcons = {
  zh: "🇨🇳",
  en: "🇺🇸"
};

function SelectLang(props) {
  function changeLang({ key }) {
    props.changeStoreLanguage(key);
  }

  const langMenu = (
    <Menu className={styles.menu} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{" "}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span
        className={classNames(
          styles.action,
          styles.dropDown,
          props.className || ""
        )}
      >
        <Icon type="global" />
      </span>
    </HeaderDropdown>
  );
}

const mapDispatchToProps = {
  changeStoreLanguage: locale => {
    return dispatch => {
      dispatch(changeLanguage(locale));
    };
  }
};
export default connect(
  null,
  mapDispatchToProps
)(SelectLang);
