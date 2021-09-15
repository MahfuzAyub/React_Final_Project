import { actionType } from "../../actionTypes";
import axios from "axios";

export const setCategoryList_Store = (categories) => ({
    type: actionType.getCatList,
    payload: categories
});

export const requestCategorytList = () => {
    return async (dispatch) => {
        const response = await axios.get('http://192.168.57.19:8080/category');
        dispatch(setCategoryList_Store(response.data));
        console.log(response.data, "category LIst")
    };
};

//export default requestProductList;