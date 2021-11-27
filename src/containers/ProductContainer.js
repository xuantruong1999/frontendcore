import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { getAll } from '../api/productAPI';
import * as action from '../actions/Action';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import FilterBar from '../components/modules/FilterBar';
import '../Sass/components/products.scss';

class ProductContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(this.GetProducts());
    }

    state = {
        history: this.props.history,
    };


    GetProducts() {
        return dispatch => {
            dispatch(action.getProductsBegin());
            getAll()
                .then((res) => {
                    if (res.status === 200) {
                        return res;
                    }
                    else {
                        var error = "Unable get products";
                        throw (error);
                    }
                })
                .then((res) => {
                    dispatch(action.getProductsSuccess(res))
                })
                .catch(err => {
                    if (err.status === 400)
                        dispatch(action.getProductsFails(err));
                    this.state.history.push('/users/login');
                })
        }
    }

    showProducts() {
        let { listProducts, keyWord, status, message, sort } = this.props;
        if (status === "success") {
            if (keyWord !== "" && listProducts.length > 0) {
                listProducts = listProducts.filter(function (product) {
                    return product.Name?.toUpperCase().includes(keyWord.toUpperCase()) || product.Description?.includes(keyWord.toUpperCase());
                });
            }

            if (sort) {
                if (sort === "increasing") {
                    listProducts = listProducts.sort(function (firstProduct, secondProduct) {
                        return firstProduct.Price - secondProduct.Price;
                    });
                }
                else if (sort === "descreasing") {
                    listProducts = listProducts.sort(function (firstProduct, secondProduct) {
                        return secondProduct.Price - firstProduct.Price;
                    });
                }
                else if (sort === "latest") {
                    listProducts = listProducts.sort(function (firstProduct, secondProduct) {
                        let firstDate = new Date(firstProduct.CreateDate)
                        let secondDate = new Date(secondProduct.CreateDate)
                        return secondDate - firstDate;
                    });
                }
            }


            return (
                <div className="container">
                    <FilterBar />
                    <div id="products-list">
                        <div className="row" style={{ marginLeft: "0", marginRight: "0" }}>
                            {
                                listProducts.map(function (product) {
                                    return <Item product={product} key={product.Id}></Item>
                                })
                            }
                        </div>
                    </div>
                </div>
            );
        }
        else if (status === "fail") {
            return <Alert severity="error">{message}</Alert>
        }
        else {
            return (
                <CircularProgress />
            )
        }
    }

    render() {
        return (
            this.showProducts()
        );
    }
}

//Extracting data from state in store end then passing props gave by component
const mapStatetoProps = state => {
    return {
        keyWord: state.searchString.kw,
        listProducts: state.products.data,
        status: state.products.status,
        message: state.products.message,
        sort: state.searchString.sort
    };
}

export default connect(mapStatetoProps)(ProductContainer);
