import { combineReducers } from "redux";

import languageReducer from "@store/language/reducer";
import menuReducer from "@store/menu/reducer";

export default combineReducers({
  menuCollapsed: menuReducer,
  language: languageReducer
});
