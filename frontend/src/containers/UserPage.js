import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import NavBar  from '../components/NavBar'
import LogContainer from './LogContainer'

export class UserPage extends Component {
  render() {
    const renderUserPage = () => {
    if(this.props.user.username === this.props.match.params.username.toString()){
      return(
        <div>
          <NavBar />
          <h1>{this.props.user.username}</h1><br />
          <h1>{this.props.user.island_name}</h1>
          {/* <LogContainer /> */}
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

export default connect(mapStateToProps)(UserPage)

