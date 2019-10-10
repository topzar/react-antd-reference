import storage from "@storage";

export function setUserLoginStatus(newStatus) {
  storage.set("loginStatus", newStatus);
}
export function getUserLoginStatus() {
  return storage.get("loginStatus");
}

export function isLogin() {
  return getUserLoginStatus() === "true";
}
