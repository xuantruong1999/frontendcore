import React from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
import '../Sass/components/header.scss';
import Logo from '../images/momyandbaby.png';
import { connect } from 'react-redux';
class Header extends React.Component {
    render() {
        var {isLogin} = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark static-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="logo" id="logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <Search />
                                <li className="nav-item active">
                                    <Link className="nav-link item-menu" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link item-menu" to={'/products'}>Products</Link>
                                </li>                 
                                {
                                    !isLogin &&( <li className="nav-item"><Link className="nav-link item-menu" to={'/users/login'}>Login</Link></li>)
                                }            
                                {
                                    isLogin && (<li className="nav-item"><Link className="nav-link item-menu" to={'/users/logout'}>Logout</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

var mapStatetoProps = (state) => ({
    isLogin: state.userLogin.isLogin
});
export default connect(mapStatetoProps)(Header)