import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';


// 存放action
const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});


// 获取搜索框热门搜索数据
export const getList = () => {
    // 使用react-thunk之后这个地方不仅可以返回一个对象了还可以返回一个函数了，并且这个函数会接受一个dispatch参数
    return (dispatch) => {
        console.log(123)
        axios.get('/api/headerList.json').then(res => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error')
        })
    }
}