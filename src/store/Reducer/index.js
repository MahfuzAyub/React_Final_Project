import { combineReducers } from "redux";
import prodDetailReducer from "./prodDetailReducer";
import prodListReducer from "./prodListReducer";

export const mainReducer = combineReducers({
    listStore: prodListReducer,
    detailStore: prodDetailReducer
})
