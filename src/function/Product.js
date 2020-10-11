import React from 'react';
import '../css/product.css';

class Product extends React.Component
{
    render() {
        var list = [ 
            { 
                key: 1,
                name: "Iphone",
                description: "this is demo", 
                image: "https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg",
                price: "16700000"
            },
            { 
                key: 2,
                name: "Iphone",
                description: "this is demo", 
                image: "https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg",
                price: "16700000"
            },
            { 
                key: 3,
                name: "Iphone",
                description: "this is demo", 
                image: "https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg",
                price: "16700000"
            }, 

            { 
                key: 4,
                name: "Iphone",
                description: "this is demo", 
                image: "https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg",
                price: "16700000"
            },
            { 
                key: 5,
                name: "Iphone",
                description: "this is demo", 
                image: "https://product.hstatic.net/1000391896/product/iphone-8-plus-dai-loan-loai-1-23-800x800_17133c6f90bb4bc3b9e4a566fae32605_grande.jpg",
                price: "16700000"
            }      
    ]

    var result = list.map(function(currentValue, index){
        return (
        <div className="col-sm-6 col-md-4 col-lg-3 wrapper"  key={index}>
            <div className="item">
                <img className="card-img-top" src={ currentValue.image } alt="Card image cap img-responsive" />
                <div className="card-body text-center">
                    <h5 className="card-title">{ currentValue.name}</h5>
                    <p className="card-text">{ currentValue.description}</p>
                    <a href={currentValue.key} className="btn btn-primary link">Add To Cart</a>
                </div>
            </div>
        </div>);
    });
           
    return(
        <div className="row">
            { result }
        </div>
    );
}
        
    
}

export default Product;