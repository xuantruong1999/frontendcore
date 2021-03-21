import { isEmptyObject } from 'jquery';
import React from 'react';
import Product from '../components/Product';

const axios = require('axios').default;
class ProductContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: {}
        }
    }

    componentDidMount(){
         axios.get('http://localhost:3000/products')
            .then((response) => {
                const data= response.data;
                if(!isEmptyObject(data))
                {
                    this.setState({products: data})
                }
            }) 
            .catch( error => {console.log("ERROR: " + error)})
    }
   
    render(){
        const data = this.state.products;
        if(!isEmptyObject(data)){
            return(
                <Product products = {this.state.products} />
            );
        }
        else{
            return(<p>Load failed</p>);
        }
    }
}

export default ProductContainer;