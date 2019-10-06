import { COLLAPSED_MENU } from "./types";
import { fromJS } from "immutable";

const defaultState = fromJS({
  collapsed: false
});

export default function collapsedMenu(state = defaultState, action) {
  if (action.type === COLLAPSED_MENU) {
    return state.set("collapsed", !state.get("collapsed"));
  }
  return state;
}
