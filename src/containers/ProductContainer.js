import React, { useContext } from 'react';
import Product from '../components/Product';
import AppContext from '../contexts/AppContext';
import { axios } from "axios";

class ProductContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            searchString: {}
        }

        this.getData = this.getData.bind(this);
    };

    getData(){
        return(
            axios.get('http://localhost:3000/products')
            .then((response) => {
                debugger
                var products = response.data.filter((product) => {
                if (this.state.searchString === ''){
                    return product;
                }
                else (product.name.toUpperCase().includes(this.state.searchString.toUpperCase()) || product.description.toUpperCase().includes(this.state.searchString.toUpperCase()))
                // eslint-disable-next-line no-lone-blocks
                {
                    return product;
                }
                })
                return products;
            }) 
            .catch( error => {console.log("ERROR: " + error)})
        );
    }

    setState({
        products: getData
    });

    render(){
        return(
            <Product products = {this.state.products} />
        );
    }
}

export default ProductContainer;