import Search from './Search';
import '../Sass/components/header.scss';
import Logo from '../images/logo-frontend.png';
import Menu from '../images/menu.svg';
import { connect } from 'react-redux';
import '../icon/index';
import { NavBar, NavBarMobile } from './NavBar';
import React from 'react';
import BackDrop from './modules/BackDrop';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: this.props.isLogin,
            avatar: this.props.avatar,
            isOpenNavBarMobile: false,
            windowDemension: window.innerWidth
        }
        this.handleClickHamburger = this.handleClickHamburger.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize() {
        this.setState({ windowDemension: window.innerWidth, isOpenNavBarMobile: false })
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleClickHamburger(event) {
        this.setState({ isOpenNavBarMobile: !this.state.isOpenNavBarMobile })
    }

    render() {
        var isMobile = this.state.windowDemension <= 992;
        return (
            <>
                <nav className="navbar navbar-expand-lg static-top shadow-sm  bg-white">
                    <div className="container-fluid">
                        <div className="navbar-brand mr-2">
                            <a href="/">
                                <img src={Logo} alt="logo" id="logo" />
                            </a>
                        </div>

                        <div className="nav-item" id="search">
                            <Search />
                        </div>

                        <button className="navbar-toggler" onClick={this.handleClickHamburger} type="button" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><img src={Menu} className="icon" alt="icon collapse menu" style={{ height: "35px", width: "35px" }} /></span>
                        </button>

                        {this.state.isOpenNavBarMobile && isMobile === true? <NavBarMobile handleClickHamburger={this.handleClickHamburger} /> : <NavBar />}

                    </div>
                </nav>
                {this.state.isOpenNavBarMobile && isMobile === true? <BackDrop handleClickHamburger={this.handleClickHamburger} /> : ""}
            </>
        );
    }
}

var mapStatetoProps = (state) => ({
    isLogin: state.userLogin.isLogin,
    avatar: state.userLogin.avatar,
    totalItem: state.cart.totalItem,
});

export default connect(mapStatetoProps)(Header)


