import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUserUp } from '../actions/userActions'

export class signupForm extends Component {
  
  state = {
    username: "",
    password: "",
    password_confirmation: "",
    island_name: "",
    profile_pic: ""
  }

  handleOnChange = (e) => {
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.signUserUp(this.state)
  }

  render() {
    return (
      <div className="signup-form">
        <h4>Sign Up</h4>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleOnChange} /> <br />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange} /> <br />
          <input type="password" name="password_confirmation" placeholder="Confirm Password" value={this.state.passwordConfirmation} onChange={this.handleOnChange} /> <br />
          <input type="text" name="island_name" placeholder="Island Name" value={this.state.island_name} onChange={this.handleOnChange} /> <br />
          <input type="text" name="profile_pic" placeholder="Profile Picture (image links only)" value={this.state.profile_pic} onChange={this.handleOnChange} /> <br />
          <input type="submit" value="Create Account"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUserUp: (userInfo) => dispatch(signUserUp(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(signupForm)
