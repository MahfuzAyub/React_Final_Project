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

export const requestProductEdit = (id, product, token) => {
    return async (dispatch) => {
        const data = {
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            stock: product.stock,
            category_id: product.category._id,
        }
        const response = await axios.patch(`http://192.168.57.19:8080/products/${id}`,
            data,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            })
        //dispatch(setCurrentProduct_Store(response));
        console.log(response.status, "Update Status!!");
    };
}

export const requestProductDelete = (id) => {
    return async (dispatch) => {
        const response = await axios.delete(`http://192.168.57.19:8080/products/${id}`);
        console.log(response.status, "del Status")
        //dispatch(setCurrentProduct_Store(null));
    }
}