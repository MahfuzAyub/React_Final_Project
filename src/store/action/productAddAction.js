import { useHistory, useLocation, useParams } from "react-router";
import { requestProductList } from "./productListAction";
import axios from "axios";

// export const setCurrentProduct_Store = (currentProduct) => {
//     return { type: actionType.update_CurrentProduct, payload: currentProduct };
// };
export const requestProductAdd = (product, token) => {
  //  const history = useHistory();

    return async (dispatch) => {
        const data = {
            title: product.title,
            price: Number(product.price),
            description: product.description,
            image: product.image,
            stock: Number(product.stock),
            //category_id: product.category_id,
            category: {
                _id: product.category_id,
            },
        }
        const response = await axios.post(`http://192.168.57.19:8080/products/`,
            data,
            {
                headers: {
                    Accept: "application/json",
                    authorization: `bearer ${token}`
                }
            })
        dispatch(requestProductList());
        console.log(response, "Post Status!!");
       // history.push("/");
    };
}
