const defaultState = {
  signedUp: false,
  loggedIn: false,
  user: {},
}

const userReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SET_USER":
      return {
        ...state,
        loggedIn: true,
        user: {...action.payload}
      }
    case "LOG_OUT":
      return {
        ...state,
        loggedIn: false,
        user: {}
      }
    case "SIGNED_UP":
      return {
        ...state,
        signedUp: true,
      }
    default: return state
  }
}

export default userReducer