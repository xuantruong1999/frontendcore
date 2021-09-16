import React, {Component} from 'react';
import { connect } from 'react-redux';
import {searchAction} from '../actions/Action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../icon/index';

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
        this.props.search(this.state.searchString) 
        event.preventDefault(); 
    }


    render(){
        return(
            <form className="form-inline" onSubmit={ this.handleSubmit} style={{width: "100%"}}>
                <input className="form-control" style={{borderRadius: "0", width: "80%"}} type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
                <button className="btn btn-success" style={{borderRadius: "0"}} type="submit">
                    <FontAwesomeIcon icon="search" />
                </button>
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