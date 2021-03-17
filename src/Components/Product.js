import { useContext } from 'react';
import Item from './Item';
import AppContext from "../contexts/AppContext";

export default function Product(props)
{
    debugger
   var value = useContext(AppContext);
    return(
        <div className="col col-10">
            <div className="row">
                {
                    props.products.filter((product) =>{
                        if (value.searchString === '')
                            return product;
                        else (product.name.toUpperCase().includes(value.searchString.toUpperCase()) || product.description.toUpperCase().includes(value.searchString.toUpperCase()))
                            return product;
                    })
                    .map(function(product, index){
                        return <Item data={product} key={index} />
                    })

                }
            </div>
        </div>
    );
}