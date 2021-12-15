import { combineReducers } from "redux";
import LoginReducter from "./loginReducer";

const rootReducer = combineReducers({
    login: LoginReducter
})

export default rootReducer;