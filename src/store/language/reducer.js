import { CHANGE_LANGUAGE } from "./types";
import { fromJS } from "immutable";
const defaultState = fromJS({
  locale: "zh"
});
export default function languageReducer(state = defaultState, action) {
  if (action.type === CHANGE_LANGUAGE) {
    if (action.payload === "zh") return state.set("locale", "zh");
    if (action.payload === "en") return state.set("locale", "en");
  }
  return state;
}
