import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./Auth";

export default combineReducers({ loginReducer, registerReducer });
