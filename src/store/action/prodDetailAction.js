import { actionType } from "../actionTypes";
import axios from "axios";

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: actionType.update_CurrentProduct, payload: currentProduct };
};


export const requestProductDetails = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://192.168.57.19:8080/products/${id}`);
        dispatch(setCurrentProduct_Store(response.data));
        console.log(response.data, "response.data");
    }
}

export const requestProductEdit = (id, product) => {
    return async (dispatch) => {
        const response =
            //await axios.patch(`http://192.168.57.19:8080/products/${id}`);
            fetch(`http://192.168.57.19:8080/products/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    title: "test product",
                    price: 13.5,
                    description: "lorem ipsum set",
                    image: "BASE64",
                    stock: 123,
                    category_id: "1234",
                }),
            })
        console.log(response, "updatae")
        dispatch(setCurrentProduct_Store(response.data));
    }
}

export const requestProductDelete = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://192.168.57.19:8080/products/${id}`);
        console.log(response.status, "del")
        dispatch(setCurrentProduct_Store(null));
    }
}