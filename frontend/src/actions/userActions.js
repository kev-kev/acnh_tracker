const setUser = (payload) => ({type: "SET_USER", payload})

export const fetchUser = (userInfo) => dispatch => {
  fetch('http://localhost:4000/login/', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(userInfo)
})
    .then(r => r.json())
    .then(data => {
      console.log(data)
      if (data.message){
        alert(data.message)
      } else {
        localStorage.setItem('token', data.token)
        dispatch(setUser(data.user))
      }
    })
}

export const signUserUp = (userInfo) => dispatch => {
  console.log(userInfo);
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
      console.log(data)
      if(data.message){
        alert(data.message)
      } else {
        localStorage.setItem('token', data.token)
        dispatch(setUser(data.user))
      }
    })
}


export const autoLogin = () => dispatch => {
  fetch('http://localhost:4000/auto_login', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
  })
    .then(r => r.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      dispatch(setUser(data.user))
    })
}