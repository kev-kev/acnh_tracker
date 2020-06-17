const defaultState = {
  signedUp: null,
  loggedIn: false,
  loginFailed: false,
  user: {},
}

const userReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SET_USER":
      return {
        ...state,
        loggedIn: true,
        loginFailed: false,
        user: {...action.payload}
      }
    case "LOG_OUT":
      return {
        ...state,
        loggedIn: null,
        user: {}
      }
    case "SIGNED_UP":
      return {
        ...state,
        signedUp: true,
      }
    case "SIGN_UP_FAILED":
      return {
        ...state,
        signedUp: false
      }
    case "LOG_IN_FAILED":
      return {
        ...state,
        loginFailed: true
      }
    default: return state
  }
}

export default userReducer