import React from 'react';
import Item from '../components/Item';
import { connect } from 'react-redux';
import { getAll } from '../services/httpService';
import * as action from '../action/Action';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';

class ProductContainer extends React.Component {
    
    componentDidMount() {
        this.props.dispatch(this.GetProducts());
    }

    GetProducts(){
        return dispatch => {
            dispatch(action.getProductsBegin());
            getAll('http://127.0.0.1:5000/api/products')
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
                console.log(err)
                dispatch(action.getProductsFails(err));
            })
        }
    }

    showProducts(){
        let {listProducts, keyWord, status, message} = this.props;
        if(status === "success"){
            if( keyWord !== ""){
                listProducts = listProducts.filter(product => product.name.toUpperCase().includes(keyWord.toUpperCase())
                || product.description.toUpperCase().includes(keyWord.toUpperCase()))
            }
            return(
                <div className="container">
                    <div className="row">
                        {
                            listProducts.map(function (product) {
                                return <Item product={product} key={product.id}></Item>
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
            // status === begin
            return(
                <div className="mx-auto align-center">
                    <CircularProgress />
                </div>
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