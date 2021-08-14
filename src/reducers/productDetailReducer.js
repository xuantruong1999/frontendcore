import * as types from '../constants/ActionTypes';

var initialState = { 
    status: "begin",
    message: "",
    data: {},
}

const productDetailReducer = (state = initialState, action) =>{
    debugger
    switch(action.type){
        case types.GET_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                status:"success",
                data: action.payload.data,
                message: ""
            }
        case types.GET_PRODUCT_DETAILS_FAILS:
            return {
                ...state,
                status: "fail",
                message: action.payload.message,
            }
        case types.GET_PRODUCT_DETAILS_BEGIN:
            return {
                ...state,
                status: "begin",
                message: action.payload.message
            }
        default:
            return state;
    }
}
 export default productDetailReducer;