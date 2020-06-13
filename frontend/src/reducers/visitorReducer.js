const defaultState = {
  visitors: []
}

const visitorReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SET_VISITORS":
      return {
        visitors: action.payload
      }
    default: return state
  }
}

export default visitorReducer
