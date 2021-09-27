import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    orderList: null,
    temp:null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.getMyOrder:
            return { ...state, orderList: action.payload };
        case actionType.setCartBfLogin:
            return { ...state, temp: action.payload };

        default: return state;
    }
};
export default orderReducer;