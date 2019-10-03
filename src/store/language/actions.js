import { CHANGE_LANGUAGE } from "./types";

export function changeLanguage(lang = "zh") {
  return {
    type: CHANGE_LANGUAGE,
    payload: lang
  };
}
