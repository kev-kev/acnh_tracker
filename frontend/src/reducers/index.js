import userReducer from './userReducer'
import logReducer from './logReducer'
import visitorReducer from './visitorReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  logReducer,
  visitorReducer
})

export default rootReducer
