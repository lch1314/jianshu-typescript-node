import * as constants from './constants';
// 可以将js对象转换为immutable对象
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
})

export default (state=defaultState, action) => {
    if(action.type === constants.SEARCH_FOCUS) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = true;
        // return newState;

        // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }
    if(action.type === constants.SEARCH_BLUR) {
        // const newState = JSON.parse(JSON.stringify(state));
        // newState.focused = false;
        // return newState;

        return state.set('focused', false)
    }
    return state;
}