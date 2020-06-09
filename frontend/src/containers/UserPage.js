import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

export const UserPage = () => {
  return (
    <div>
      <NavBar />
      <h1>{this.props.user.username}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(UserPage)
