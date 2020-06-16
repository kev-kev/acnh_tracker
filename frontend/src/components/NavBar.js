import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NavBar extends Component {
  render() {
    const url = () => {
      if(this.props.user.username){
        return `/${this.props.user.username}`
      } else {
        return "/"
      }
    }
    return (
      <div className="navbar">
        <Link to={url()}>
          <img src={require('../assets/images/leaf.png')} alt="leaf" height="100"/>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user
})

export default connect(mapStateToProps)(NavBar)
