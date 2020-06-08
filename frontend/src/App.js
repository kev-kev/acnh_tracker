import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import LoginForm from './components/loginForm'
import SignupForm from './components/signupForm'
import { fetchUser, signUserUp, autoLogin } from './actions/userActions'

class App extends Component {

  componentDidMount(){
    this.props.autoLogin()
  }

  render() {
    return (
      <div id="App">
        {
          !this.props.userReducer.loggedIn ? <h1>Sign up or Login!</h1> : <h1>Welcome, {this.props.userReducer.user.username}</h1>
        }
        <SignupForm />
        <LoginForm />
        <button>Logout</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userReducer: state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // check this.props.userReducer.user
    // do i use something else to get the userinfo? how do i know....

    fetchUser: () => dispatch(fetchUser(this.props.userReducer.user)),
    signUserUp: () => dispatch(signUserUp(this.props.userReducer.user)),
    autoLogin: () => dispatch(autoLogin())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)