const savingLog = () => ({type: "SAVING_LOG"})
const logSaved = () => ({type: "LOG_SAVED"})
const fetchingLogs = () => ({type: "FETCHING_LOGS"})
const logFetchSuccess = (payload) => ({type: "LOG_FETCH_SUCCESS", payload})

// action creators here
export const saveLog = (date, visitors) => dispatch => {
  dispatch(savingLog())
  fetch('http://localhost:4000/log/save', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({
      date,
      visitors
    })
    })
    .then(r => {
      if (r.ok) {
        return r.json()
      } else {

      }
    })
    .then(data => {
      dispatch(logSaved())
    })
}

export const fetchLogs = () => dispatch => {
  dispatch(fetchingLogs())
  fetch('http://localhost:4000/logs', {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(r => {
      if (r.ok) {
        return r.json()
      } else {

      }
    })
    .then(data => {
      dispatch(logFetchSuccess(data["logs"]))
    })
}