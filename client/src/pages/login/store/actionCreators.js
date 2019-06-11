import axios from 'axios';
import * as constants from './constants';

const changeLogin = (loginState) => ({
    type: constants.CHANGE_LOGIN,
    login: loginState
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('./api/login.json?account=' + account + '&password=' + password).then((res) => {
            console.log(res)
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin(result))
            } else {
                alert('登录失败')
            }
        })
    }
}

export const loginOut = () => ({
    type: constants.CHANGE_LOGIN_OUT,
    login: false
})