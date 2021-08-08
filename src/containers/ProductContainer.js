import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import {getAll} from '../services/httpService';

class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        getAll('http://127.0.0.1:5000/api/products')
            .then((res) => {
                return this.setState({products: res.data});
            })
            .catch(err => {
                return console.log("Please check error:" + err);
            })      
    };

    render() {
        var kw = this.props.keyWord.kw;
        var products = this.state.products;
        debugger
        if(products.length > 0){
            var result = products.filter(product => product.name.toUpperCase() === kw.toUpperCase() 
            || product.description.toUpperCase().includes(kw.toUpperCase()))                
            return (
                <>
                    <div className="container">
                        <div className="row">
                            {
                                result.map(function (product) {
                                    return <Item product={product} key={product.id} />
                                })
                            }
                        </div>
                    </div>
                </>
            )
        }
        else{
            return <div></div>
        }
        
        
    }
}

const mapStatetoProps = state => {
    return {
        keyWord: state.searchString
    };
}

export default connect(mapStatetoProps)(ProductContainer);