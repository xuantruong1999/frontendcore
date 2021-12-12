import * as types from '../constants/ActionTypes';

var initial = {
    username: null,
    avatar: "",
    phonenumber: "",
    message: "",
    isLogin: false,
    status: null
};

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case types.LOGOUT_FAILS:
            return {                
                ...state,
                status: "fails",
                message: "Logout is fails",
            }
        case types.LOGOUT:
            return {                
                ...state,
                isLogin: false,
            }
        case types.LOGIN_BEGIN:
            return {
                ...state,
                status: action.payload.status,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                avatar: action.payload.avatar,
                email: action.payload.email,
                isLogin: true,
                status: action.payload.status,
            }
        case types.LOGIN_FAILS:
            return {
                ...state,
                isLogin: false,
                message: action.payload.message,
                status: action.payload.status
            }
        default:
            return state;
    }
}


export default userReducer

