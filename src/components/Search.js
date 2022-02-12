import React, {Component} from 'react';
import { connect } from 'react-redux';
import {searchAction} from '../actions/Action';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../icon/index';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 5px 0 0 5px !important;
    position: relative;
    width: 80% !important;
    margin: 0 auto;
    @media (max-width: 390px){
       width: 50%;
    }

    
`;
const SearchForm = styled.form`
    margin-left: 25px;
    min-width: 200px;
    
    @media (max-width: 992px){
        width: 500px;
    }
    @media (max-width: 768px){
        width: 400px;
        margin-left: 0
    }
    @media (max-width: 600px){
        width: 300px;
    }
    @media (max-width: 576px){
        width: 250px;
    
    @media (max-width: 390px){
        width: 200px;
    }
`;
const ButtonSearch = styled.button`
    border-radius: 0 5px 5px 0;
    postion: absolute;
    top: 0;
    left: 0;
    width: 20%
`
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
            <SearchForm className="form-inline" onSubmit={ this.handleSubmit}  id="search">
                <Input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange}></Input>
                <ButtonSearch className="btn btn-success" type="submit">
                    <FontAwesomeIcon icon="search" />
                </ButtonSearch>
            </SearchForm>
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