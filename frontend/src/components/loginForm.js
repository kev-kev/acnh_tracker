import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'
import { Redirect } from 'react-router'


export class LoginForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleOnChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.fetchUser(this.state)
  }

  renderLoginFormOrRedirect = () => {
    if (this.props.successfulLogin) {
      return (
        <Redirect to={`/${this.state.username}`}/>
        // <Redirect to="/user" />
      )
    } else {
      return (
        <div className="login-form">
          <form onSubmit={this.onSubmit}>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleOnChange} /> <br />
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} /> <br />
            <input type="submit" value="Login"/>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      this.renderLoginFormOrRedirect()
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser({auth: userInfo}))
  }
}

const mapStateToProps = (state) => {
  return {
    successfulLogin: state.userReducer.loggedIn
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
