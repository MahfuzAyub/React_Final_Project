import { actionType } from "../actionTypes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RequestCartList } from "./cartAction";
export const getMyOrder_Action = (product) => ({
    type: actionType.getMyOrder,
    payload: product
});

// also used for remove product from cart q=0
export const requestAddCartAPI = (id, token,q) => {
    return async (dispatch) => {

        const data = {
            product: {
                id: id,
                quantity:q
            }
        }
        const response = await axios.post(`http://localhost:8080/cart/`,
            data,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            })
        console.log(response.data, "response")
        dispatch(RequestCartList(token));
    }
}
export const RequestMyOrderList = (token) => {
    // const tokens = useSelector((store) => store.authStore.token.token);
    
    return async (dispatch) => {
        const response = await axios.get("http://localhost:8080/order/my-order", {
            headers: {
                Accept: "application/json",
                authorization: `bearer ${token}`
            }
        });
        dispatch(getMyOrder_Action(response.data));
        console.log(response.data, "getMyOrder_Action")
    };
};
