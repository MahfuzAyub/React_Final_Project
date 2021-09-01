import { actionType } from "../actionTypes";

const initialState = {
    currentProduct: null,
};

const prodDetailReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionType.update_CurrentProduct:
            return { ...state, currentProduct: action.payload };
        default: return state;
    }
};
export default prodDetailReducer;