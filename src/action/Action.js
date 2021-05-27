import * as types from '../constants/ActionTypes';

export const searchAction = (kw) =>({
    type: types.SEARCH_ACTION,
    payload: kw
}); 

export const loginAction = ({username, password}) =>({
    type: types.LOGIN_ACTION,
    payload: {username, password}
       
});