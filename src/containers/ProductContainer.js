import React from 'react';
import Product from '../components/Product';

const axios = require('axios').default;
class ProductContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/products')
            .then((response) => {
                let data= {};
                data = response.data;
                if(data !== {}){
                    this.setState({products: data})
                }
            }) 
            .catch( error => {console.log("ERROR: " + error)})
    }
   
    render(){
        if(this.state.products !== []){
            debugger
            return(
                <Product products = {this.state.products} searchString= {this.props.searchString}/>
            );
        }
        else{
            return <p>Failed loading</p>
        }
    }
}

export default ProductContainer;