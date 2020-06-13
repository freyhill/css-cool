import { combineReducers } from 'redux';//Redux 提供了 combineReducers() 工具类整合reducer

import systemReducer from './systemReducer';

const reducers = combineReducers({
    systemReducer
});

export default reducers;