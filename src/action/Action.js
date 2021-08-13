import * as types from '../constants/ActionTypes';

export const searchAction = (kw) =>({
    type: types.SEARCH_ACTION,
    payload: kw
}); 

//User Action
export const loginAction = (userName, password) =>({
    type: types.LOGIN_ACTION,
    payload: {
        userName: userName,
        password: password
    }
});

//Product Action
export const getProductsBegin = () =>({
        type: types.GET_PRODUCTS_BEGIN,
        payload: {
            status: "begin",
            message: "Loading..."
        }
    });

export const getProductsFails = (err) =>({ 
    type: types.GET_PRODUCTS_FAILS,
    payload: {
        status: "fail",
        message: !err.message === undefined ? err.message : err 
    }
});

export const getProductsSuccess = (products) => ({
    type: types.GET_PRODUCTS_SUCCESS,
    payload: {
        status: "success",
        data: products.data
    }
});

export const getProductDetailSuccess = (id) =>({
    type: types.GET_PRODUCT_DETAILS_SUCCESS,
    payload: {
        id: id,
        status: "success",
    }
});

export const getProductDetailFails = (id) =>({
    type: types.GET_PRODUCT_DETAILS_FAILS,
    payload: {
        id: id,
        status: "fail",
    }
})

