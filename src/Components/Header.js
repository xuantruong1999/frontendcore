import React from "react";
import { Link } from 'react-router-dom';
import AppContext from "../contexts/AppContext";
import Search from './Search';

class Header extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            searchString: null,
        }
    }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <a className="navbar-brand" href="https://google.com">
                        <img src="" alt="" />BC
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/products'}>Products</Link>
                            </li>
                        </ul>
                        <AppContext.Consumer>
                           {
                               (value) => (<Search onCallback={value.callBack}/>)
                           }
                        </AppContext.Consumer>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;