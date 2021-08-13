import React, {Component} from 'react';
import { connect } from 'react-redux';
import {searchAction} from '../action/Action';

class Search extends Component {   
    constructor(props){
        super(props);
        this.state = {
            searchString: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){    
        this.setState({ searchString: event.target.value });
    }

    handleSubmit(event){
        debugger
        this.props.search(this.state.searchString) 
        event.preventDefault(); 
    }
    
    render(){
        return(
            <form className="form-inline my-2 my-lg-0 ml-5" onSubmit={ this.handleSubmit}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        search: (kw) => {
            return dispatch(searchAction(kw)); // map dispatch to props
        }
    }
};

// using hook in react redux: useDispatch, useSelector
//connect


export default connect(null, mapDispatchToProps)(Search);