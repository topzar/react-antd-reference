import { COLLAPSED_MENU } from "./types";

export default function collapsedMenu(collapsedMenu = false, action) {
  if (action.type === COLLAPSED_MENU) {
    return !collapsedMenu;
  }
  return collapsedMenu;
}
