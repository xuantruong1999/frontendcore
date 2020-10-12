import React from "react";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <Router>
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
                                <Link className="nav-link" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/contact'}>Contact</Link>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Router exact path='/home' Component={Home}/>
                    <Router path='/about' Component={About}/>
                    <Router  path='/contact' Component={Contact}/>
                </Switch>
            </Router>
        );
    }
}

export default Header;