import { combineReducers } from "redux";
import searchReducer  from './searchReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import productDetailReducer from "./productDetailReducer";

export default combineReducers({
    searchString: searchReducer,
    userLogin: userReducer,
    products: productsReducer,
    product: productDetailReducer,
})

