import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import '../Sass/components/cart.scss';

export default function CartContainer() {
    var [listItem, setListItem] = useState([]);
    var { products } = useSelector(state => state.cart);
   
    useEffect(() => {
        setListItem(products)
    }, [products])

    const caculatePrice = (listItem) => {
        var total = 0;
        if(listItem.length > 0){
            listItem.forEach(product => {
               total += product.item.Price * product.quantity;
            }) 
        }
        return total;
    }

    var currencyUnit = "VND";
    return (
        <div className="container">
            {
                listItem.map((product, index) => {
                   return <ShoppingCart item={product.item} quantity={product.quantity} key={index} />
                })
            }
            <div className="text-right p-2" id="checkout">
                Total: <span>{caculatePrice(listItem) + " " + currencyUnit }</span>
            </div>
        </div>
    );
}