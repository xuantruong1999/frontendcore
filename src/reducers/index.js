import { combineReducers } from "redux";
import searchReducer  from './searchReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';

export default combineReducers({
    searchString: searchReducer,
    userLogin: userReducer,
    products: productReducer
})

