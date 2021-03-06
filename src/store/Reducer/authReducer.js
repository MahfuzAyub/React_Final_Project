import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    token: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.RegisterData:
            return { ...state, token: action.payload };
        case actionType.setLogin:
            return { ...state, token: action.payload };
        case actionType.setLogOut:
            return { ...state, token: action.payload };
        default: return state;
    }
};
export default authReducer;