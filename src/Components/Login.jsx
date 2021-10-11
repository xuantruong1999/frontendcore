import '../Sass/components/login.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from '../actions/Action';
import { login } from '../api/userAPI';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/CloseSharp';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default function Login(props) {
    var [username, changeUserName] = useState("");
    var [password, changePassword] = useState("");
    var [remember, changeRemember] = useState(false);
    var [errMessage, setErroMessage] = useState("");
    const history = useHistory();
    const [open, setOpen] = useState(true);

   
    var status = useSelector(state => state.userLogin.status)
    var message = useSelector(state => state.userLogin.message)
    var dispatch = useDispatch();
    var {from} = props.location.state || {from: {pathname: "/"}};
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username && password) 
        { 
            dispatch(signin(username, password));
            setErroMessage(message);
        }
        else if(username === ""){
            setErroMessage("UserName is not null")
            setOpen(true)
        }
        else if(password === ""){
            setErroMessage("Password is not null")
            setOpen(true)
        }
    }

    const signin = (username, password) => {
        return dispatch => {
            dispatch(action.loginBegin())
            login(username, password)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(action.loginSuccess(res.data.user));
                        localStorage.setItem("authJWT", res.data.token)
                        localStorage.setItem("refreshToken", res.data.refreshToken);
                        history.push(from.pathname);
                    }
                    else if (res.status === 204) {
                        var err = {
                            message: "UserName or Password is incorrect",
                        };
                        dispatch(action.loginFails(err))
                    }
                })
                .catch(err => {
                    dispatch(action.loginFails(err));
                })
        }
    }

    if (status && status === "begin") {
        return (
            <CircularProgress />
        );
    }
    return (
        <>
            <section className="" id="wrapper-login-form" >
                {
                    errMessage && (
                        <Collapse in={open} className="mb-2">
                            <Alert
                                severity="error"
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            >
                                {errMessage}
                            </Alert>
                        </Collapse>)
                }

                <form className="border" onSubmit={handleSubmit}>
                    <h1 className="text-center">Đăng Nhập</h1>
                    <div className="form-group">
                        <label htmlFor="username">User Name:</label>
                        <input type="text" className="form-control " value={username} id="username" name="username" onChange={event => changeUserName(username = event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input type="password" className="form-control" id="pass" value={password} name="pass" onChange={event => changePassword(password = event.target.value)} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" name="remember" value={remember} className="form-check-input" onChange={event => changeRemember(event.target.checked)} />
                        <label htmlFor="remember" className="form-check-label">Remember me</label>
                    </div>
                    <button className="btn btn-primary">Đăng Nhập</button>
                </form>
            </section>
        </>
    );
}


