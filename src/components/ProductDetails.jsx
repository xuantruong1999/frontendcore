import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import '../Sass/components/productDetails.scss';
import { useDispatch } from 'react-redux';
import * as actions from '../actions/Action';
import { useState } from 'react';

function ProductDetails({ product }) {
    var [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const handleBooking = (event) => {
        if(quantity <= 0){
            alert("The minimum amount allowed is 1");
            return false;
        }
        dispatch(actions.addToCart({ product, quantity }));
        event.preventDefault();
    }

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
        event.preventDefault();
    };

    return (
        <>
            <form id="cover p-2" onSubmit={(e) => e.preventDefault()}>
                <div className="row shadow-none mx-2 mb-2 bg-light rounded">
                    <div id="image" className="col-md-4 col-sm-6">
                        <img src={product.Image} alt="" className="img-fluid" />
                    </div>
                    <div id="product-infor" className="col-md-8 col-sm-6">
                        <div className="name">{product.Name}</div>
                        <Box mb={1} borderColor="transparent" className="rating">
                            <Rating name="read-only" value={product.Rating} readOnly size="medium" />
                        </Box>
                        <div className="price">{product.Price} VND</div>
                        <div className="form-inline">
                            <input type="number" className="form-control mr-2" name="quantity" value={quantity} onChange={handleChangeQuantity} />
                            <button className="btn btn-danger my-2" onClick={handleBooking}>Thêm vào Giỏ Hàng</button>
                        </div>
                    </div>
                </div>
                <div id="description">{product.Description}</div>
            </form>
        </>
    );
}

export default ProductDetails;