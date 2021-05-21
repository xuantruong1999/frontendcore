import { isEmptyObject } from 'jquery';
import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

const axios = require('axios').default;
class ProductContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/products')
            .then((response) => {
                const data = response.data;
                if (!isEmptyObject(data)) {
                    var arrayTemp = [];
                    for (var prop in data) {
                        arrayTemp.push(data[prop]);
                    }
                    this.setState({ products: arrayTemp });
                }
            })
            .catch(error => { console.log("ERROR: " + error) })
    };

    render() {
        const products = this.state.products;
        var finallyListproduct = [];
        if (this.props.keyWord.kw !== "") {
            let kw = this.props.keyWord.kw;
            products.forEach(product => {
                if (product.name.toUpperCase() === kw.toUpperCase() || product.description.toUpperCase().includes(kw.toUpperCase())) {
                    finallyListproduct.push(product);
                }
            });
        }
        else {
            finallyListproduct = products;
        }

        if (finallyListproduct.length > 0) {
            return (
                <>
                    <Row>
                        {
                            finallyListproduct.map(function (product) {
                                return <Item product={product} key={product.key} />
                            })
                        }
                    </Row>
                </>
            )
        }
        else {
            return (<p>Loading products failed, Please check connect to server</p>)
        }
    }
}

const mapStatetoProps = state => {
    return {
        keyWord: state.searchString
    };
}

export default connect(mapStatetoProps)(ProductContainer);