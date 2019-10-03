import { CHANGE_LANGUAGE } from "./types";

export default function languageReducer(language = "zh", action) {
  if (action.type === CHANGE_LANGUAGE) {
    if (action.payload === "zh") return "zh";
    if (action.payload === "en") return "en";
  }
  return language;
}
