import React from 'react';
import '../Sass/components/Item.scss';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

export default function Item(props){
    return (
        <div className="col col-sm-4 col-md-3 position-relative mr-3 mb-3" id="item"  key={props.product.key}>
            <p className="coupon position-absolute">
                <span  className="d-block text-center" style={{color: "red"}}>35%</span>
                <span>Giảm</span>
            </p>
            <span className="position-absolute like-flash">Yêu thích</span>
            <a href={ props.product.key }>
                <img className="card-img-top" src={props.product.link} alt="Card cap img-responsive" />
                <div className="card-body">
                    <div className="intro-product"><p className="card-text text-justify">{props.product.name + " " + props.product.description }</p></div>
                    <div className="price"><strike className="pre-price">{props.product.price}</strike>&nbsp;&nbsp;{props.product.price}</div>
                    <div className="rating">
                        <Box component="fieldset" mb={1} borderColor="transparent">
                            <Rating name="read-only" value={4} readOnly size="small" />
                        </Box>
                    </div>
                </div>
                <div className="address"> <FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;Hà Nội</div>
            </a>
        </div>                
    );
}