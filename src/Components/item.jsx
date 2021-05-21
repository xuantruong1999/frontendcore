import React from 'react';
import '../Sass/components/Item.scss';

export default function Item(props){
    return (
        <div className="col-sm-6 col-md-4 col-lg-2 position-relative mr-2 mb-2" id="item"  key={props.product.key}>
            <p className="coupon position-absolute">
                <span  className="d-block text-center" style={{color: "red"}}>35%</span>
                <span>Giảm</span>
            </p>
            <span className="position-absolute like-flash">Yêu thích</span>
            <a href={ props.product.key } className="">
                <img className="card-img-top" src={props.product.link} alt="Card cap img-responsive" />
                <div className="card-body">
                    <p className="card-text text-justify">{props.product.name + " " + props.product.description }</p>
                    <div>{props.product.price}</div>
                    <div style={{color: "#9e9e9", fontSize: "12px"}}><strike>{props.product.price}</strike><span className="ml-1">15%</span></div>
                </div>
            </a>
        </div>                
    );
}