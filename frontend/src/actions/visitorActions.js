const setVisitors = (payload) =>  ({type: "SET_VISITORS", payload})

export const fetchVisitors = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/visitors/')
      .then(r => {
        if (r.ok){
          return r.json()
        } else {
          // redirect here?
          throw new Error("uWu oh no! something went horribly wrong T_T")
        }
        }
      )
      .then(data => {
        dispatch(setVisitors(data))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
