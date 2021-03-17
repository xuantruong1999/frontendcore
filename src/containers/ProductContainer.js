import React from 'react';
import Product from '../components/Product';
const axios = require('axios').default;



class ProductContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: [],
            searchString: this.props.searchString,
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3000/products')
            .then((response) => {
                const data= response.data;
                this.setState({products: data})
            }) 
            .catch( error => {console.log("ERROR: " + error)})
    }
   
    render(){
        return(
            <Product products = {this.state.products} />
        );
    }
}

export default ProductContainer;