const setUser = (payload) => ({type: "SET_USER", payload})
const logOut = () => ({type: "LOG_OUT"})
const signedUp = () => ({type: "SIGNED_UP"})

export const fetchUser = userInfo => {
  return (dispatch) => {
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
        return r.json()
      } else {
        dispatch(logOut())
        throw new Error("uWu oh no! something went horribly wrong T_T")
      }
    })
    .then(data => {
      localStorage.setItem('token', data.jwt)
      dispatch(setUser(data.user));
    })
    .catch((error) => {
      console.log(error)
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
    .then(r => {
      if (r.ok){
        return r.json()
      } else {
        throw new Error("uWu oh no! something went horribly wrong T_T")
      }
    })
    .then(data => {
      dispatch(signedUp())
    })
    .catch((error) => {
      console.log(error)
    })
}

export const logUserOut = () => dispatch => {
  console.log("logging out")
  dispatch(logOut())
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