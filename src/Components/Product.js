import React from 'react';
import Item from './Item';

export default function Product(props)
{
    debugger
    return(
        <div className="col col-10">
            <div className="row">
                {
                    props.products.map(product => (
                        <Item data={product} />
                    ))
                }
            </div>
        </div>
    );
}