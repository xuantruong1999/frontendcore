import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { getAll } from '../api/productAPI';
import * as action from '../actions/Action';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

class ProductContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(this.GetProducts());
    }

    GetProducts(){
        return dispatch => {
            dispatch(action.getProductsBegin());
            getAll()
            .then((res) => {
                if(res.status === 200)
                    return res;
                else{
                    var error = "Unable get products";
                    throw(error);
                }
            })
            .then((res) => {
                dispatch(action.getProductsSuccess(res))
            })
            .catch(err => {
                dispatch(action.getProductsFails(err));
            })
        }
    }

    showProducts(){
        let {listProducts, keyWord, status, message} = this.props;
        if(status === "success"){
            if( keyWord !== ""){
                listProducts = listProducts.filter(product => product.Name.toUpperCase().includes(keyWord.toUpperCase())
                || product.Description.toUpperCase().includes(keyWord.toUpperCase()))
            }
            return(
                <div className="container">
                    <div className="row">
                        {
                            listProducts.map(function (product) {
                                return <Item product={product} key={product.Id}></Item>
                            })
                        }
                    </div>
                </div>
            );
        }
        else if(status === "fail"){
            return <Alert severity="error">{message}</Alert>
        }
        else{
            return(
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
        message: state.products.message
    };
}

export default connect(mapStatetoProps)(ProductContainer);
