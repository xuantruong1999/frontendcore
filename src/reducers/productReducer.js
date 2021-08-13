import * as types from '../constants/ActionTypes';

var initialState = { 
    id: "",
    products: [],
    status: "begin",
    message: ""
}

const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_PRODUCT_DETAILS_SUCCESS:
            return {id: action.payload.id};
        case types.GET_PRODUCTS_BEGIN:
            return({
                ...state,
                status: action.payload.status,
                message: action.payload.message
            });
        case types.GET_PRODUCTS_FAILS:
            return ({
                ...state,
                status: action.payload.status,
                message: action.payload.message,
            })
        case types.GET_PRODUCTS_SUCCESS:
            return({
                ...state,
                status: action.payload.status,
                data: action.payload.data
            })
        default:
            return state;
    }
}
 export default productReducer;