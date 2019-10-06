import { fromJS } from "immutable";
import { LOGIN_IN, LOGIN_OUT } from "./types";

const defaultState = fromJS({
  loginStatus: false
});

export default function user(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_IN:
      return state.set("loginStatus", true);
    case LOGIN_OUT:
      return state.set("loginStatus", false);
    default:
      return state;
  }
}
