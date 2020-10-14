import React from "react";

import { Link } from 'react-router-dom';
class Header extends React.Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="../../images/React-logo.png" alt="" />BC
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
                        <form class="form-inline my-2 my-lg-0 ml-5">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;