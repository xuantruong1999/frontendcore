import React from 'react'
import '../css/product.css';

export default function Item(props){
    return (
        <div className="wrapper p-2 col-sm-6 col-md-4 col-lg-3"  key={props.data.key}>
            <a href={ props.data.key } className="p-2">
                <div className="item">
                    <img className="card-img-top" src={props.data.link} alt="Card cap img-responsive" />
                    <div className="note-like">
                        <span className="note-content">Like</span>
                    </div>
                    <div className="card-body text-center">
                        <p className="card-text">{props.data.name + " " + props.data.description }</p>
                        <div>{props.data.price}</div>
                    </div>
                </div>
            </a>
        </div>                
    );
}