import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import questionReducer from "./questionReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  questions: questionReducer
});