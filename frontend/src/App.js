import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import SignupForm from './components/signupForm'
import { fetchUser, signUserUp, autoLogin } from './actions/userActions'
import Navbar from './components/NavBar'
import { Link } from 'react-router-dom'

class App extends Component {

  componentDidMount(){
    // this.props.autoLogin()
  }

  render() {
    return (
      <div id="App">
        <Navbar />   
        <SignupForm /><br />
        <Link to='/login'>Log In</Link> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser(this.props.userReducer.user)),
    signUserUp: () => dispatch(signUserUp(this.props.userReducer.user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)