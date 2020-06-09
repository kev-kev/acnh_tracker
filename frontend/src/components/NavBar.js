import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NavBar extends Component {
  render() {
    const redirectUrl = () => {
      // if signed in, link to /:user, if not, link to /
      // debugger
      if(this.props.user.username){
        return `/${this.props.user.username}`
      } else {
        return "/"
      }
    }
    return (
      <div className="navbar">
        <Link to={redirectUrl()}>
          <img src={require('../assets/images/leaf.png')} height="100"/>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps)(NavBar)
