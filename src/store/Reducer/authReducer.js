import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.setLogin:
            return { ...state, token: action.payload };
        default: return state;
    }
};
export default authReducer;