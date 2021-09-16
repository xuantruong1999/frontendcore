import React, { createRef } from "react";
import { Link } from 'react-router-dom';
import Search from './Search';
import '../Sass/components/header.scss';
import Logo from '../images/logo-frontend.png';
import IconSetting from '../images/settings.svg';
import NotifyIcon from '../images/bell.svg';
import Menu from '../images/menu.svg';
import ShoppingCart from '../images/shopping-cart.svg';
import { connect } from 'react-redux';
import '../icon/index';
import DefaultIcon from '../images/profile-icon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createMemoryHistory } from 'history';
import { useDispatch } from 'react-redux';
import * as action from '../actions/Action';

let history = createMemoryHistory();

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: "d-none"
        }
        this.handleOutSideClick = this.handleOutSideClick.bind(this);
        this.dropdown = createRef();
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleOutSideClick)
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleOutSideClick);
    }

    handleOutSideClick(event) {
        var isClickOn = this.dropdown.current && this.dropdown.current.contains(event.target);

        if (isClickOn) {
            this.setState({ isOpen: "d-block" })
        }
        else {
            this.setState({ isOpen: "d-none" })
        }
    }

    render() {
        var { isLogin, avatar } = this.props;
        return (
            <>
                <nav className="navbar navbar-expand-lg static-top shadow-sm  bg-white">
                    <div className="container-fluid">
                        <div className="navbar-brand">
                            <a href="/">
                                <img src={Logo} alt="logo" id="logo" />
                            </a>
                        </div>
                        <div className="nav-item ml-sm-5" id="search">
                            <Search />
                        </div>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><img src={Menu} className="icon" alt="icon collapse menu" style={{ height: "35px", width: "35px" }} /></span>
                        </button>

                        <div className="collapse navbar-collapse row" id="navbarResponsive">
                            <ul className="navbar-nav d-flex col-lg-6 col-md-6 col-sm-6">
                                <li className="nav-item ml-sm-2 ml-lg-4 ml-md-4 mr-2">
                                    <Link className="nav-link item-menu" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link className="nav-link item-menu" to={'/products'}>Products</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav d-flex justify-content-end align-items-center mx-auto col-lg-6 col-md-6 col-sm-6">
                                <li className="nav-item mr-4">
                                    <Link className="nav-link item-menu" to={'/settings'}><img src={IconSetting} alt="settings" className="icon" /></Link>
                                </li>
                                <li className="nav-item mr-4">
                                    <Link className="nav-link item-menu" to={'/notifications'}><img src={NotifyIcon} alt="Notify message" className="icon" /></Link>
                                </li>
                                <li className="nav-item mr-4">
                                    <Link className="nav-link item-menu" to={'/cart'}><img src={ShoppingCart} alt="shopping card" className="icon" /></Link>
                                </li>
                                <DisplayUserInfor ref={this.dropdown} avatar={avatar} isLogin={isLogin} isOpen={this.state.isOpen} />
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

var mapStatetoProps = (state) => ({
    isLogin: state.userLogin.isLogin,
    avatar: state.userLogin.avatar
});

export default connect(mapStatetoProps)(Header)

const DisplayUserInfor = React.forwardRef((props, ref) => {
    var dispatch = useDispatch();
    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("persist:auth");
        dispatch(action.logOut());
        history.push('/')
    };

    if (props.isLogin) {
        return <div className="nav-link item-menu position-relative" ref={ref}>
            <img src={props.avatar} className="img-fluid user-avatar" alt="" />
            {
                props.isOpen && <div className={props.isOpen} id="dropdown-abc" ref={ref}>
                    <ul className="pointer-cursor">
                        <li className="dropdown-item text-center"><FontAwesomeIcon icon="id-badge" />Profile</li>
                        <li className="dropdown-item text-center" onClick={logOut}><FontAwesomeIcon icon="sign-out-alt" />Logout</li>
                    </ul>
                </div>
            }
        </div>
    }
    else{
        return <div>
        {
            <li className="nav-item">
                <div className="nav-link item-menu position-relative" ref={ref}>
                    <img src={DefaultIcon} className="img-fluid user-avatar" alt="" />
                    {
                        props.isOpen && <div className={props.isOpen} id="dropdown-abc" ref={ref}>
                            <ul className="pointer-cursor">
                                <li className="dropdown-item text-center"><Link to={'/users/login'}>Login</Link></li>
                            </ul>
                        </div>
                    }
                </div>
            </li>
        }
    </div>
    }
});
