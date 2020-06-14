const defaultState = {
  isSaving: false
}

const logReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SAVING_LOG":
      return {
        isSaving: true
      }
    case "LOG_SAVED":
      return {
        isSaved: false
      }
    default: return state
  }
}

export default logReducer