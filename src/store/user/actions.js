import { LOGIN_IN, LOGIN_OUT } from "./types";

export function loginIn() {
  return {
    type: LOGIN_IN
  };
}
export function loginOut() {
  return {
    type: LOGIN_OUT
  };
}
