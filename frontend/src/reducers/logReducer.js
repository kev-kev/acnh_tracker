const defaultState = {

}

const logReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SET_LOG":
      return {
        
      }
      
    default: return state
  }
}

export default logReducer