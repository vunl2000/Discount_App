import { combineReducers } from 'redux';
import loginReducer from "./authReducre"

export default combineReducers({
    account: loginReducer,

});