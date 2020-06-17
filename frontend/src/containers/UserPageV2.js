import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import NavBar  from '../components/NavBar'

import LogContainer from '../containers/LogContainer'
import { logUserOut } from '../actions/userActions'
import { fetchVisitors } from '../actions/visitorActions'
import LogDisplay from '../components/LogDisplay'
import Dashboard from '../dashboard/Dashboard'



export class UserPage extends Component {

  componentDidMount(){
    this.props.fetchVisitors()
  }

  

  renderUserPage = () => {
    if(this.props.loggedIn && this.props.user.username === this.props.match.params.username.toString()){
      return(
        <Dashboard logs={this.props.logs} handleLogOut={this.props.logUserOut}/>
      )
    } else {
      return(
        <Redirect to="/login"/>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderUserPage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn,
    logs: state.logReducer.logs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVisitors: () => dispatch(fetchVisitors()),    
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

