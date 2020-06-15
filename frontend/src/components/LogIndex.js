import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogs } from '../actions/logActions'

export class LogIndex extends Component {

  componentDidMount(){
    this.props.fetchLogs()
  }

  render() {
    return (
      <div className="logIndex">
        {this.props.logs.map(log => {
          // when clicked, these should load the log on the page
          return <div key={log.date}>{log.date}</div>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  logs: state.logReducer.logs
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogs: () => dispatch(fetchLogs())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIndex)
