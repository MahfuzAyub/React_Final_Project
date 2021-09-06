import { combineReducers } from "redux";
import prodDetailReducer from "./prodDetailReducer";
import prodListReducer from "./prodListReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";

const persistConfig = {
    key: 'root',
    storage:storage,
}
const persistedStore = persistReducer(persistConfig, authReducer);

export const mainReducer = combineReducers({
    listStore: prodListReducer,
    detailStore: prodDetailReducer,
    authStore: persistedStore
})
