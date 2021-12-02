import '../Sass/components/ShoppingCartItem.scss';
import {useDispatch} from 'react-redux';
import * as actions from '../actions/Action';
import { useState } from 'react';

export default function ShoppingCart({ item, quantity }) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(quantity);
    const handleChangeQuantity = (event) => {
       let value = event.target.value;
       value = parseInt(value);
        if(value < 0){
            alert("Quantity must be  more than zero");
            setAmount(quantity);
            return false;
        }
        else if(value === 0){
            handleRemoveItem(event);
        }
        else{
            if(value > Number(item.UnitStock))
            {
                alert(`Quantity out of range, Unit Stock is ${item.UnitStock}`)
                return false;
            }
            dispatch(actions.updateToCart(item.Id, value))
            setAmount(value);
        }
        event.preventDefault();
    }
    const handleRemoveItem = (event) => {
        let isRemove = window.confirm("Are you sure?");
        if(isRemove){
            dispatch(actions.removeItem(item.Id));
        }
        event.preventDefault();
    }

    return (
        <div className="border p-2 rounded mt-2">
            <button type="button" className="close" aria-label="Close" onClick={handleRemoveItem}>
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="row">
                <div className="col-2 image">
                    <img className="img-responsive" alt={item.Name} src={item.Image} />
                </div>
                <div className="col-4 name">
                    <div className="center"><span className="font-weight-bold">{item.Name}</span></div>
                    <div className="center">{item.Description}</div>
                </div>
                <div className="col-2 quantity text-center">
                    <span className="text-secondary">Quantity</span><br/>
                    <input className="form-control" type="number" value={amount} onChange={handleChangeQuantity}/>
                </div>
                <div className="col-2 unit-price text-center">
                    <span className="text-secondary">Price</span>
                    <input  className="form-control" value={item.Price} />
                </div>
                <div className="col-2 total text-center">
                    <span className="text-secondary">Total</span>
                    <input className="form-control" value={parseInt(amount) * parseFloat(item.Price)} />
                </div>
            </div>
        </div>
    );
}

