import * as types from '../constants/ActionTypes';

export const searchAction = (kw) => ({
    type: types.SEARCH_ACTION,
    payload: kw
});

//User Action
export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        username: user.UserName,
        avatar: user.Avatar,
        phonenumber: user.PhoneNumber,
        email: user.Email,
    }
});

export const loginFails = (err) =>({
    type: types.LOGIN_FAILS,
    payload: {
        message: err.message,
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

//Get product details with id 
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
