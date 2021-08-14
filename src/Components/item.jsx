import React from 'react';
import '../Sass/components/Item.scss';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Item({ product }) {
    return (
        <div className="col col-sm-4 col-md-2 position-relative mr-3 mb-3" id="item">
            <a id={product.id} href={"product/details/" + product.id}>
                <p className="coupon position-absolute">
                    <span className="d-block text-center" style={{ color: "red" }}>35%</span>
                    <span>Giảm</span>
                </p>
                <span className="position-absolute like-flash">Yêu thích</span>
                <img className="card-img-top" src={product.image} alt="Card cap img-responsive" />
                <div className="card-body">
                    <div className="intro-product"><p className="card-text text-justify">{product.name}</p></div>
                    <div className="price"><strike className="pre-price">{product.price}</strike>&nbsp;&nbsp;{product.price}</div>
                    <div className="rating">
                        <Box mb={1} borderColor="transparent">
                            <Rating name="read-only" value={product.rating} readOnly size="small" />
                        </Box>
                    </div>
                </div>
                <div className="mb-0 p-1">
                    <div className="address"> <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;Hà Nội</div>
                </div>
            </a>
        </div>
    );
}