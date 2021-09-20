import { combineReducers } from "redux";
import prodDetailReducer from "./prodDetailReducer";
import prodListReducer from "./prodListReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authReducer";
import categoryReducer from "./categories/categoryReducer";
import cartReducer from "./cartReducer"

const persistConfig = {
    key: 'root',
    storage: storage,
}
const persistConfigCart = {
    key: 'cart',
    storage: storage,
}
const persistedStore = persistReducer(persistConfig, authReducer);
const persistedCart = persistReducer(persistConfigCart, cartReducer);

export const mainReducer = combineReducers({
    listStore: prodListReducer,
    detailStore: prodDetailReducer,
    authStore: persistedStore,
    categoryStore: categoryReducer,
    cartStore: persistedCart
})
