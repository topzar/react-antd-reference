import React from "react";

import { Icon, Menu } from "antd";
import HeaderDropdown from "../header-drop-down";
import classNames from "classnames";
import "./index.less";
const locales = ["zh-CN", "zh-TW", "en-US", "pt-BR"];
const languageLabels = {
  "zh-CN": "简体中文",
  "zh-TW": "繁体中文",
  "en-US": "English",
  "pt-BR": "Português"
};
const languageIcons = {
  "zh-CN": "🇨🇳",
  "zh-TW": "🇭🇰",
  "en-US": "🇺🇸",
  "pt-BR": "🇧🇷"
};

function SelectLang(props) {
  const langMenu = (
    <Menu className="menu">
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
      <span className={classNames("action", "dropDown", props.className || "")}>
        <Icon type="global" />
      </span>
    </HeaderDropdown>
  );
}

export default SelectLang;
