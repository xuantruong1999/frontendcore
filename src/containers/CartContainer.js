import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';

export default function CartContainer() {
    var [listItem, setListItem] = useState([]);
    var { products } = useSelector(state => state.cart);
   
    useEffect(() => {
        setListItem(products)
    }, [products])
    
    return (
        <div className="container">
            {
                listItem.map((product, index) => {
                   return <ShoppingCart item={product.item} quantity={product.quantity} key={index} />
                })
            }
        </div>
    );
}