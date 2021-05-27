import React from 'react';
import '../Sass/components/Item.scss';

export default function Item(props){
    return (
        <div className="col col-sm-4 col-md-3 position-relative mr-3 mb-3" id="item"  key={props.product.key}>
            <p className="coupon position-absolute">
                <span  className="d-block text-center" style={{color: "red"}}>35%</span>
                <span>Giảm</span>
            </p>
            <span className="position-absolute like-flash">Yêu thích</span>
            <a href={ props.product.key } className="">
                <img className="card-img-top" src={props.product.link} alt="Card cap img-responsive" />
                <div className="card-body">
                    <p className="card-text text-justify">{props.product.name + " " + props.product.description }</p>
                    <div className="price text-left">{props.product.price}</div>
                    <div classNme="prev-price"><strike>{props.product.price}</strike></div>
                </div>
            </a>
        </div>                
    );
}