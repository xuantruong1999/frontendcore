import React, {useContext} from 'react';
import '../css/product.css';
import AppContext from '../Contexts/AppContext';
import list from '../data/data';

export default function Product()
{
    const search = new useContext(AppContext);
    var result = list.filter((product) =>
        {
            if(search.state.searchString == null){
                return product
            }
            else if(product.name.toUpperCase().includes(search.state.searchString.toUpperCase()) || product.description.toUpperCase().includes(search.state.searchString.toUpperCase())){
                return product
            }
        }
    ).map((product) => {
        return (
                <div className="col-sm-6 col-md-4 col-lg-3 wrapper mt-2">
                    <div className="item">
                        <img className="card-img-top" src={ product.image } alt="Card image cap img-responsive" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{ product.name }</h5>
                            <p className="card-text">{ product.description }</p>
                            <a href={ product.key } className="btn btn-primary link">Add To Cart</a>
                        </div>
                    </div>
                </div>
        );
    });
               
    return(
        <div className="row">
            { result }
        </div>
    );
}
    

    