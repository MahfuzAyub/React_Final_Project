import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    cart: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.addtoCart:
            return { ...state, cart: action.payload };

        default: return state;
    }
};
export default cartReducer;