import { useContext } from 'react';
import Item from './Item';


export default function Product(props)
{

    debugger
    return(
        <div className="col col-10">
            <div className="row">
                {
                    props.products.map(function(product, index){
                        return <Item data={product} key={index} />
                    })
                }
            </div>
        </div>
    );
}