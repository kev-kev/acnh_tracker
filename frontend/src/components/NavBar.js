import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const NavBar = () => {

  const redirectUrl = () => {
    // if signed in, link to /:user, if not, link to /
    // debugger
    // if(this.props.user){
    //   return "logged in"
    // } else {
    //   return "not logged in"
    // }
  }

  return (
    <div className="navbar">
      <Link to={redirectUrl()}>
        <img src={require('../assets/images/leaf.png')} height="100"/>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(NavBar)
