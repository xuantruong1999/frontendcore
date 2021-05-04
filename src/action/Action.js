import * as types from '../constants/ActionTypes';

export const searchAction = (kw) =>({
    type: types.SEARCH_ACTION,
    payload: kw
}); 