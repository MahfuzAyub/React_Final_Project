import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { mainReducer } from "./Reducer/index";

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, composeEnhancers);
