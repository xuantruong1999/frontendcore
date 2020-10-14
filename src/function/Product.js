import React, {useContext} from 'react';
import context from 'react-bootstrap/esm/AccordionContext';
import '../css/product.css';
import AppContext from '../Contexts/AppContext';
import { useRouteMatch } from 'react-router-dom';

export default function Product()
{
        const list = useContext(AppContext);
        var result = list.map(function(currentValue, index){
            return (
                <div className="col-sm-6 col-md-4 col-lg-3 wrapper mt-2"  key={index}>
                    <div className="item">
                        <img className="card-img-top" src={ currentValue.image } alt="Card image cap img-responsive" />
                        <div className="card-body text-center">
                            <h5 className="card-title">{ currentValue.name}</h5>
                            <p className="card-text">{ currentValue.description}</p>
                            <a href={currentValue.key} className="btn btn-primary link">Add To Cart</a>
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
    

    