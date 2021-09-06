import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "./Reducer/index";
import { persistStore } from "redux-persist";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, composeEnhancers);

export const persistor = persistStore(store);
