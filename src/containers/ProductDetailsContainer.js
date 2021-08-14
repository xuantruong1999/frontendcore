import { getById } from "../api/productAPI";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails";
import * as action from "../actions/Action";
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProductDetailsContainer({match}) {
    var dispatch = useDispatch();
    var product = useSelector(state => state.product.data)
    var status = useSelector(state => state.product.status)
    var message = useSelector(state => state.product.message)
    
    function getProduct(id){
        return dispatch => {
            dispatch(action.getProductDetailBegin());
            getById(id)
            .then(data => {
                return dispatch(action.getProductDetailSuccess(data))
            })
            .catch(err => {
                console.log(err)
                return dispatch(action.getProductDetailFails(err))
            })
        }
    }

    useEffect( () =>{
        dispatch(getProduct(match.params.id))
    }, []);

    if (status === "fail") {
        return <Alert severity="error">{message}</Alert>
    }

    if (status === "success") {
        return <ProductDetails product={product}></ProductDetails>
    }
    
    return(
        <CircularProgress />
    );
}

