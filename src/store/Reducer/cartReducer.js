import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    cart: null,
    temp:null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.getCart:
            return { ...state, cart: action.payload };
        case actionType.setCartBfLogin:
            return { ...state, temp: action.payload };

        default: return state;
    }
};
export default cartReducer;