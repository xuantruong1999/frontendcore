import * as types from '../constants/ActionTypes';

var initialState = { 
    status: "begin",
    message: "",
    data: {},
}

const productsReducer = (state = initialState, action) =>{
    switch(action.type){
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
                data: action.payload.data,
                message: ""
            })
        default:
            return state;
    }
}
 export default productsReducer;