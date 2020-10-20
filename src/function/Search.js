import React, {Component} from 'react';

 class Search extends Component {   
    constructor(props){
        super(props);
        this.state = {
            searchString: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ searchString: event.target.value });
    }

    handleSubmit(event){
        this.props.onCallback(this.state.searchString);
        event.preventDefault();
    }
    
    render(){
        return(
            <form className="form-inline my-2 my-lg-0 ml-5" onSubmit={ this.handleSubmit }>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={ this.state.searchString} onChange={this.handleChange} />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
            </form>
        );
    }
}

export default Search;