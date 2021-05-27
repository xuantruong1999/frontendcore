import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
import '../Sass/components/header.scss';
import Logo from '../images/momyandbaby.png';

class Header extends React.Component{
    render() {
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-dark static-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="https://google.com">
                        <img src={Logo} alt="logo" id="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link item-menu" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link item-menu" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link item-menu" to={'/contact'}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link item-menu" to={'/products'}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link item-menu" to={'/users/login'}>Login</Link>
                            </li>
                        </ul>
                         <Search />
                    </div>
                </div>
            </nav>
            </>
        );
    }
}

export default Header;