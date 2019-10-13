import storage from "@storage";

/**
 * 针对用户信息的storage 管理逻辑都将放在这里
 */

export const LOGIN_FLAG = "loginStatus";
export const LOGIN_FLAG_VALUE = "true";

export const USER_INFO_FLAG = "userInfo";

export function setUserLoginStatus(newStatus) {
  storage.set(LOGIN_FLAG, newStatus);
}

export function getUserLoginStatus() {
  return storage.get(LOGIN_FLAG);
}

export function isLogin() {
  return getUserLoginStatus() === LOGIN_FLAG_VALUE;
}

export function setUserInfo(data) {
  storage.set(USER_INFO_FLAG, data);
}

export function getUserInfo() {
  return storage.get(USER_INFO_FLAG);
}
