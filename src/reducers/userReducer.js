import * as types from '../constants/ActionTypes';

var initialInforLogin = {
    username: null,
    password: null,
};

const Login = (state = initialInforLogin, loginAction) =>{
    switch(loginAction.type)
    {
        case types.LOGIN_ACTION: {
            return {...state, inforLogin: loginAction.payLoad};
        }
        default:
            return state;

    }
} 

export default Login

