const defaultState = {
  isSaving: false,
  isFetchingLogs: false,
  logs: [],
  selectedLog: null,
  selectedLogVisitors: null
}

const logReducer = (state = defaultState, action) => {
  switch(action.type){
    case "SAVING_LOG":
      return {
        ...state,
        isSaving: true
      }
    case "LOG_SAVED":
      return {
        ...state,
        isSaving: false
      }
    case "FETCHING_LOGS":
      return {
        ...state,
        isFetchingLogs: true
      }
    case "LOG_FETCH_SUCCESS":
      return {
        ...state,
        isFetchingLogs: false,
        logs: action.payload
      }
    case "SELECT_LOG":
      return {
          ...state,
          selectedLog: action.payload,
        }
      
    default: return state
  }
}

export default logReducer