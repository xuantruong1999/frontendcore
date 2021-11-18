import * as types from '../constants/ActionTypes';

var initialCardState = {
    products: [],
    total: 0,
}

function cardReducer(state = initialCardState, action) {
    debugger
    switch(action.type) {
        case types.ADD_TO_CARD:
            state.products.push(action.payload); 
            state.total = state.products.length; 
            return state;
        default:
            return state;
    }
}

export default cardReducer;