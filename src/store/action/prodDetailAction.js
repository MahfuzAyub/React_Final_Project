import { actionType } from "../actionTypes";
import axios from "axios";
import { requestProductList } from "./productListAction";

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: actionType.update_CurrentProduct, payload: currentProduct };
};


export const requestProductDetails = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:8080/products/${id}`);
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
        const response = await axios.patch(`http://localhost:8080/products/${id}`,
            data,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            })
        dispatch(requestProductList());
        alert(response, "UpdDate Status!!");
    };
}

export const requestProductDelete = (id, token) => {
    return async (dispatch) => {
        console.log(id, "id Status")
        const response = await axios.delete(`http://localhost:8080/products/${id}`,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            }
        );
        alert(response.status, "Delete Status");
        dispatch(requestProductList());
        return id;
    }
}