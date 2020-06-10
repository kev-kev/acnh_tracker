import userReducer from './userReducer'
import logReducer from './logReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  logReducer
})

export default rootReducer
