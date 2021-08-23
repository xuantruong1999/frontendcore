import * as types from '../constants/ActionTypes';

var initial = {
    username: null,
    avatar: "",
    phonenumber: "",
    message: "",
    isLogin: false
};

const userReducer = (state = initial, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...initial,
                username: action.payload.username,
                avatar: action.payload.avatar,
                phonenumber: action.payload.phonenumber,
                email: action.payload.email,
                isLogin: true
            }
        case types.LOGIN_FAILS:
            return {
                ...initial,
                message: action.payload.message,
            }
        default:
            return state;
    }
}

export default userReducer

