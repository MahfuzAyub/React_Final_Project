import { actionType } from "../actionTypes";
import axios from "axios";

export const AddCart_Action = (id) => ({
    type: actionType.addtoCart,
    payload: id
});

export const requestAddCartAPI = (id, token) => {
    return async (dispatch) => {
        
        const data = {
            product: {
                id: id,
                quantity: 1
            }
        }
        const response = await axios.post(`http://192.168.57.19:8080/cart/`,
            data,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            })
        //dispatch(AddCart_Action(response.data));
        //alert(response.status, "Cart UpdDate Status!!");
        console.log(response.data,id,token, "response")
    }
}