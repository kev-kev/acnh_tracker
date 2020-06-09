import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/userActions'

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

  render() {
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userInfo) => dispatch(fetchUser({auth: userInfo}))
  }
}

export default connect(null, mapDispatchToProps)(LoginForm)
