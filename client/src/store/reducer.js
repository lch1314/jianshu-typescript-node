// redux-immutable中也有combineReducers方法
// 用redux-immutable中的combineReducers方法合并store  这样store中的header也是个immutable对象了
import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';

// 合并各个小的reducer
const reducer = combineReducers({
    header: headerReducer
})

export default reducer;