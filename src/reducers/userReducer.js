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
        case types.LOGOUT:
            return {                
                ...initial,
            }
        case types.LOGIN_BEGIN:
            return {
                ...initial,
                status: action.payload.status,
            }
        case types.LOGIN_SUCCESS:
            return {
                ...initial,
                username: action.payload.username,
                avatar: action.payload.avatar,
                email: action.payload.email,
                isLogin: true,
                status: action.payload.status,
            }
        case types.LOGIN_FAILS:
            return {
                ...initial,
                message: action.payload.message,
                status: action.payload.status
            }
        default:
            return state;
    }
}


export default userReducer

