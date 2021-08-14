import * as types from '../constants/ActionTypes';

export const searchAction = (kw) => ({
    type: types.SEARCH_ACTION,
    payload: kw
});

//User Action
export const loginAction = (userName, password) => ({
    type: types.LOGIN_ACTION,
    payload: {
        userName: userName,
        password: password
    }
});

//Product Action
export const getProductsBegin = () => ({
    type: types.GET_PRODUCTS_BEGIN,
    payload: {
        status: "begin",
        message: "Loading...",
        data: [],
    }
});

export const getProductsFails = (err) => ({
    type: types.GET_PRODUCTS_FAILS,
    payload: {
        status: "fail",
        message: err.message === undefined ? err : err.message
    }
});

export const getProductsSuccess = (products) => ({
    type: types.GET_PRODUCTS_SUCCESS,
    payload: {
        status: "success",
        data: products.data
    }
});

//Details
export const getProductDetailSuccess = (product) => ({
    type: types.GET_PRODUCT_DETAILS_SUCCESS,
    payload: {
        status: "success",
        data: product.data,
    }
});

export const getProductDetailBegin = () => ({
    type: types.GET_PRODUCT_DETAILS_BEGIN,
    payload: {
        status: "begin",
        message: "Loading...",
        data: {}
    }
})

export const getProductDetailFails = (error) => ({
    type: types.GET_PRODUCT_DETAILS_FAILS,
    payload: {
        status: "fail",
        message: error.message === undefined ? error : error.message
    }
})
