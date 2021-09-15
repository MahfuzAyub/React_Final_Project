import { actionType } from "../../actionTypes";
const initialState = {
    List: [],
};

const categoryReducer = (state = initialState, action) => {
    // if (action.type === "update_product_list") {
    //     return { ...state, productList: action.payload };
    // }
    // else {
    //     return state;
    // }
    switch (action.type) {
        case actionType.getCatList:
            return { ...state, List: action.payload };
        default: return state;
    }
};
export default categoryReducer;