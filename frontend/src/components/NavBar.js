import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const redirectUrl = () => {
    // if signed in, link to /:user, if not, link to /
  }

  return (
    <div className="navbar">
      <Link to={redirectUrl()}>
        <img src={require('../assets/images/leaf.png')} height="100"/>
      </Link>
    </div>
  )
}

export default NavBar
