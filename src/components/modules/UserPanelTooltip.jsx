import React from 'react';
import DefaultIcon from '../../images/profile-icon.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/Action';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const UserPanelTooltip = (props) => {
    let dispatch = useDispatch();
    useEffect(() => {
        document.addEventListener("mousedown", handleOutSideClick)
    }, []);
    
    var [isOpen, setIsOpen] = useState('d-none');

    const panelUser = useRef("");

    const handleOutSideClick = (event) => {
        var isClickOn = panelUser.current?.contains(event.target);

        if (isClickOn) {
            setIsOpen("d-block");
        }
        else {
            setIsOpen("d-none");
        }
    }

    const SignOut = () => {
        localStorage.removeItem("authJWT");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("persist:auth");
        localStorage.removeItem("persist:cartStorage");
        dispatch(actions.logOut());
        window.location.href = '/';
    };

    if (props.isLogin) {
        return <div className="nav-link item-menu position-relative" ref={panelUser}>
            <img src={props.avatar} className="img-fluid user-avatar" onClick={handleOutSideClick} alt="" />
            {
                isOpen && <div className={isOpen} id="dropdown-abc">
                    <ul className="pointer-cursor">
                        <li className="dropdown-item text-center"><FontAwesomeIcon icon="id-badge" />Profile</li>
                        <li className="dropdown-item text-center" onClick={SignOut}><FontAwesomeIcon icon="sign-out-alt" />Logout</li>
                    </ul>
                </div>
            }
        </div>
    }
    else {
        return <div>
            {
                <li className="nav-item">
                    <div className="nav-link item-menu position-relative" ref={panelUser}>
                        <img src={DefaultIcon} className="img-fluid user-avatar" onClick={handleOutSideClick} alt="" />
                        {
                            isOpen && <div className={isOpen} id="dropdown-abc">
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
};

export default UserPanelTooltip