import {Link} from 'react-router-dom';
import ShoppingCart from '../images/shopping-cart.svg';
import IconSetting from '../images/settings.svg';
import NotifyIcon from '../images/bell.svg';
import { useSelector } from 'react-redux';
import UserPanelTooltip from './modules/UserPanelTooltip';
import {useState} from 'react';

export const NavBar = (props) => {
    var { isLogin, avatar } = useSelector(state => state.userLogin);
    var { totalItem } = useSelector(state => state.cart.totalItem);
    return <>
        <div className="row ml-4 w-100" id="navbar-pc">
            <ul className="navbar-nav align-items-center mr-auto p-2 d-flex col-sm-6">
                <li className="nav-item mr-2">
                    <Link className="nav-link item-menu" to={'/'}>Home</Link>
                </li>
                <li className="nav-item mx-2">
                    <Link className="nav-link item-menu" to={'/products'}>Products</Link>
                </li>
            </ul>

            <ul className="navbar-nav d-flex justify-content-end align-items-center col-sm-6">
                <li className="nav-item mr-4">
                    <Link className="nav-link item-menu" to={'/settings'}><img src={IconSetting} alt="settings" className="icon" /></Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link item-menu" to={'/notifications'}><img src={NotifyIcon} alt="Notify message" className="icon" /></Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="nav-link item-menu d-flex" id="icon-shoppingcart" to={'/cart'}>
                        <img src={ShoppingCart} alt="shopping card" className="icon" />
                        {
                            (totalItem && isLogin) ? <span className="icon-cart-badge">{totalItem}</span> : ""
                        }
                    </Link>
                </li>
                <UserPanelTooltip avatar={avatar} isLogin={isLogin}/>
            </ul>
        </div>
    </>
}

export const NavBarMobile = (props) =>{
    var { isLogin, avatar } = useSelector(state => state.userLogin);
    var { totalItem } = useSelector(state => state.cart.totalItem);

    return <>
        <div id="navbar-mobile">
                <div className="btn-close" onClick={props.handleClickHamburger}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
                <ul className="navbar-nav d-flex flex-column p-2">
                    <li className="nav-item">
                        <Link className="nav-link item-menu" to={'/'}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link item-menu" to={'/products'}>Products</Link>
                    </li>
            
                    <li className="nav-item">
                        <Link className="nav-link item-menu" to={'/settings'}><img src={IconSetting} alt="settings" className="icon" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link item-menu" to={'/notifications'}><img src={NotifyIcon} alt="Notify message" className="icon" /></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link item-menu d-flex" id="icon-shoppingcart-mobile" to={'/cart'}>
                            <img src={ShoppingCart} alt="shopping card" className="icon" />
                            {
                                (totalItem && isLogin) ? <span className="icon-cart-badge">{totalItem}</span> : ""
                            }
                        </Link>
                    </li>
                    <UserPanelTooltip avatar={avatar} isLogin={isLogin}/>
                </ul>
            </div>
    </>
}
