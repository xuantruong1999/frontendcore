import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "./reducers";
import "./Sass/base/index.scss";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage,
    blacklist: ['userLogin', 'searchString', 'products', 'product']
};
 
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export default store;
  