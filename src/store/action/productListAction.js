import { actionType } from "../actionTypes";
import axios from "axios";

export const setProductList_Store = (productList) => ({
    type: actionType.update_product_list,
    payload: productList
});

export const requestProductList = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:8080/products');
        dispatch(setProductList_Store(response.data));
        console.log(response.data, "Product LIst")
    };
};