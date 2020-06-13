import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import NavBar  from '../components/NavBar'
import LogContainer from './LogContainer'
import { logUserOut } from '../actions/userActions'

export class UserPage extends Component {
  render() {
    const renderUserPage = () => {
    if(this.props.user.username === this.props.match.params.username.toString()){
      return(
        <div>
         <NavBar />
          <h1>{this.props.user.username}</h1><br />
          <h1>{this.props.user.island_name}</h1>
          <LogContainer /><br />
          <button onClick={this.props.logUserOut}>Log Out</button>
        </div>
      )
    } else {
      return(
        <Redirect to="/login"/>
      )
    }
    }
    return (
      <div>
        {renderUserPage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

