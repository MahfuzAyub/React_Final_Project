import { actionType } from "../actionTypes";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const getCart_Action_store = (product) => ({
    type: actionType.getCart,
    payload: product
});
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
export const RequestCartList = (token) => {
    // const tokens = useSelector((store) => store.authStore.token.token);
    return async (dispatch) => {
        const response = await axios.get("http://localhost:8080/cart", {
            headers: {
                Accept: "application/json",
                authorization: `bearer ${token}`
            }
        });
        dispatch(getCart_Action_store(response.data));
        console.log(response.data, "request cart LIst")
    };
};