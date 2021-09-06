import { actionType } from "../actionTypes";
import axios from "axios";

export const setCurrentProduct_Store = (currentProduct) => {
    return { type: actionType.update_CurrentProduct, payload: currentProduct };
};


export const requestProductEdit = (id) => {
    console.log(id, "id");
    return async (dispatch) => {
        const response =
            //await axios.put(`https://fakestoreapi.com/products/${id}`);

            fetch(`http://192.168.57.19:8080/products/${id}`, {
                method: "PATCH",
                headers: {
                    authorization: "bearer {TOKEN}",
                },
                body: JSON.stringify({
                    title: "test product",
                    price: 13.5,
                    description: "lorem ipsum set",
                    image: "BASE64",
                    stock: 123,
                    category_id: "1234",
                }),
            })
        console.log(response.status, "updatae 22222");
        dispatch(setCurrentProduct_Store(response.data));
    }
}