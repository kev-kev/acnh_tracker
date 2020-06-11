const setUser = (payload) => ({type: "SET_USER", payload})
const logOut = () => ({type: "LOG_OUT"})

export const fetchUser = userInfo => {
  return (dispatch) => {
    // dispatch({type: "FETCH_USERS"});
    fetch('http://localhost:4000/login/', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
      },
      body: JSON.stringify(userInfo)
      })
    .then(r => {
      if (r.ok){
        r.json()
      } else {
        dispatch(logOut())
      }
    })
    .then(data => {
      localStorage.setItem('token', data.token)
      dispatch(setUser(data.user));
    })
  };
}

export const signUserUp = (userInfo) => dispatch => {
  fetch('http://localhost:4000/users/', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(userInfo)
})
    .then(r => r.json())
    .then(data => {
      if(data.message){
      } else {
        localStorage.setItem('token', data.token)
        dispatch(setUser(data.user))
      }
    })
}


// export const autoLogin = () => dispatch => {
//   fetch('http://localhost:4000/auto_login', {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem("token")}`
//     }
//   })
//     .then(r => r.json())
//     .then(data => {
//       localStorage.setItem('token', data.token)
//       dispatch(setUser(data.user))
//     })
// }