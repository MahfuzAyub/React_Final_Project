import { actionType } from "../actionTypes";
import axios from "axios";

const initialState = {
    productList: [],    
};

const prodListReducer = (state = initialState, action) => {
    // if (action.type === "update_product_list") {
    //     return { ...state, productList: action.payload };
    // }
    // else {
    //     return state;
    // }
    switch (action.type) {
        case actionType.update_product_list:
            return { ...state, productList: action.payload };
        default: return state;
    }
};
export default prodListReducer;