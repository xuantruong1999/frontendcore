import React from 'react';

export default function Item(props){
    return (
        <div className="wrapper p-2 col-sm-6 col-md-4 col-lg-3"  key={props.product.key}>
            <a href={ props.product.key } className="p-2">
                <div className="item">
                    <img className="card-img-top" src={props.product.link} alt="Card cap img-responsive" />
                    <div className="note-like">
                        <span className="note-content">Like</span>
                    </div>
                    <div className="card-body" style={{paddingTop: "5px", paddingBottom: "5px"}}>
                        <p className="card-text">{props.product.name + " " + props.product.description }</p>
                        <div>{props.product.price}</div>
                        <div style={{color: "#9e9e9", fontSize: "12px"}}><strike>{props.product.price}</strike><span className="ml-1">15%</span></div>
                    </div>
                </div>
            </a>
        </div>                
    );
}