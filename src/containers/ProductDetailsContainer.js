import { getById } from "../services/httpService";
import { useState} from "react";
import ProductDetails from "../components/ProductDetails";
import { useSelector } from "react-redux";

export default function ProductDetailsContainer(){
    var [product, setProduct] = useState({})
    var id = useSelector(state => state.productID.id);
    debugger
    getById(`http://127.0.0.1:5000/api/products/${id}`)
            .then( data => {
                setProduct({product: data });
            })
            .catch( error => {
                console.log(error);
            })
    return(
        <>
            <ProductDetails product={product}></ProductDetails>
        </>
    )
}