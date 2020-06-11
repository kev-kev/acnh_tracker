import React, { Component } from 'react'
import { connect } from 'react-redux'
import Log from '../components/Log'

export class LogContainer extends Component {
  render() {
    return (
      <div>
        <Log />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)
