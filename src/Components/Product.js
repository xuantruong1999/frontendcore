import React, {useContext, useState, useEffect} from 'react';
import Item from './item';
import AppContext from '../Contexts/AppContext';
const axios = require('axios').default;

export default function Product()
{
    const search = new useContext(AppContext);
    const [ result, setResult]  = useState([])

   // useEffect(() => alert("begin!"));
    
    axios.get('http://localhost:3000/products')
    .then((response) => {
        setResult( response.data.filter((product) => {
        if (search.state.searchString == null){
            return product;
        }
        else (product.name.toUpperCase().includes(search.state.searchString.toUpperCase()) || product.description.toUpperCase().includes(search.state.searchString.toUpperCase()))
        // eslint-disable-next-line no-lone-blocks
        {
            return product;
        }
        }))
    }) 
    .catch( error => {console.log("ERROR: " + error)});

    return(
        <div className="col col-10">
            <div className="row">
                {
                   result.map(product => (
                        <Item data={product} />
                    ))
                }
            </div>
        </div>
    );
}