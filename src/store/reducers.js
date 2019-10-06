import { combineReducers } from "redux-immutable";

import languageReducer from "@store/language/reducer";
import menuReducer from "@store/menu/reducer";

export default combineReducers({
  menu: menuReducer,
  language: languageReducer
});
