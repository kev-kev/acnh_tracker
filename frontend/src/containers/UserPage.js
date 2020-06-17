import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import LogForm from '../components/LogForm'
import LogContainer from '../containers/LogContainer'
import { logUserOut } from '../actions/userActions'
import { fetchVisitors } from '../actions/visitorActions'
import LogDisplay from '../components/LogDisplay'


export class UserPage extends Component {

  componentDidMount(){
    this.props.fetchVisitors()
  }

  renderUserPage = () => {
    if(this.props.loggedIn && this.props.user.username === this.props.match.params.username.toString()){
      return(
        <div>
          <h1>{this.props.user.username}</h1><br />
          <h1>{this.props.user.island_name}</h1>
          <LogContainer />
          <LogDisplay />
          <LogForm className="logForm"/><br />
          <button onClick={this.props.logUserOut}>Log Out</button>
        </div>
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
    loggedIn: state.userReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVisitors: () => dispatch(fetchVisitors()),    
    logUserOut: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

