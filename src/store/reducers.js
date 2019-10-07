import { combineReducers } from "redux-immutable";

import languageReducer from "@store/language/reducer";
import menuReducer from "@store/menu/reducer";
import userReducer from "@store/user/reducer";

export default combineReducers({
  menu: menuReducer,
  language: languageReducer,
  user: userReducer
});
