import { combineReducers } from "redux";
import searchReducer  from './searchReducer';
import userReducer from './userReducer';
import productsReducer from './productsReducer';
import productDetailReducer from "./productDetailReducer";
import cartReducer from './cartReducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist'

const authPersistConfig = {
    key: 'auth',
    storage,
    //blacklist: ['message']
};

export default combineReducers({
    searchString: searchReducer,
    userLogin: persistReducer(authPersistConfig, userReducer),
    products: productsReducer,
    product: productDetailReducer,
    cart: cartReducer,
})

