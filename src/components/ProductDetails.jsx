import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import '../Sass/components/productDetails.scss';
import {useDispatch} from 'react-redux';
import * as actions from '../actions/Action';

function ProductDetails({ product }) {
    const dispatch = useDispatch();
    const handleBooking = () => {
        dispatch(actions.addToCard({product}));
    }
    return (
        <>
            <div id="conver p-2">
                <div className="row shadow-none mx-2 mb-2 bg-light rounded">
                    <div id="image" className="col-md-4 col-sm-6">
                        <img src={product.Image} alt="" className="img-fluid" />
                    </div>
                    <div id="product-infor" className="col-md-8 col-sm-6">
                        <div className="name">{product.Name}</div>
                        <Box mb={1} borderColor="transparent" className="rating">
                            <Rating name="read-only" value={product.Rating} readOnly size="medium" />
                        </Box>
                        <div className="price">{product.Price}</div>
                        <button className="btn btn-danger my-2" onClick={handleBooking}>Thêm vào Giỏ Hàng</button>
                    </div>
                </div>
                <div id="description">{product.Description}</div>
            </div>
        </>
    );
}

export default ProductDetails;