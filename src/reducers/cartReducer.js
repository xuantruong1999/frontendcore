import * as types from '../constants/ActionTypes';

var initialCartState = {
    products: [],
    totalItem: 0,
}

function cartReducer(cart = initialCartState, action) {
    switch (action.type) {
        case types.ADD_TO_CART:
            let newItemID = action.payload.item.Id;
            let product = cart.products.find( (p) => p.item.Id === newItemID);
            if(product){
                let index = cart.products.findIndex(product => product.item.Id === newItemID);
                cart.products[index].quantity += Number(action.payload.quantity);
            }
            else{
                cart.products.push(action.payload);
            }
            return {
                ...cart,
                totalItem: cart.products.length
            }
        case types.REMOVE_TO_CART:
            let id = action.payload;
            let index = cart.products.findIndex( p => p.item.Id === id);
            if(index > -1){
                cart.products.splice(index,1);
            }
            return{
                ...cart,
                totalItem: cart.products.length
            }
        default:
            return cart;
    }
}

export default cartReducer;