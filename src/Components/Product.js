import React, {useContext} from 'react';
import '../css/product.css';
import AppContext from '../Contexts/AppContext';
import list from '../data/data';

export default function Product()
{
    const search = new useContext(AppContext);
    var result = list.filter((product) => {
            if(search.state.searchString == null){
                return product
            }
            else if(product.name.toUpperCase().includes(search.state.searchString.toUpperCase()) || product.description.toUpperCase().includes(search.state.searchString.toUpperCase())){
                return product
            }
        }
    ).map((product) => {
        return (
            <div className="wrapper p-2 col-sm-6 col-md-4 col-lg-3" key={product.key}>
                <a href={ product.key } className="p-2">
                    <div className="item">
                        <img className="card-img-top" src={product.link} alt="Card cap img-responsive" />
                        <div className="note-like">
                            <span className="note-content">Like</span>
                        </div>
                        <div className="card-body text-center">
                            <p className="card-text">{product.name + " " + product.description }</p>
                            <div>{product.price}</div>
                        </div>
                    </div>
                </a>
            </div>                
        );
    });
               
    return(
        <div className="col col-10">
            <div className="row">
                { result }
            </div>
        </div>
    );
}
    

    