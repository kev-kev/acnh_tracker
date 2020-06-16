import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogs, selectLog } from '../actions/logActions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dashboard from '../dashboard/Dashboard'

export class LogContainer extends Component {

  componentDidMount(){
    this.props.fetchLogs()
  }

  handleOnClick = (date) => {
    // debugger
    let targetLog = this.props.logs.find(prop => {
      return prop.date === date
    }) 
    this.props.selectLog(targetLog)

  }

  getPrettyDate = (date) => {
    const prettyDate = new Date(date).toLocaleDateString()
    return prettyDate
  }

  render() {
    return (
      <List className="logContainer">
        {this.props.logs.map(log => {
          return (
            <ListItem>
              <ListItemText key={log.date} onClick={() => this.handleOnClick(log.date)}>{this.getPrettyDate(log.date)}</ListItemText>
            </ListItem>
          )
        })}
      </List>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  logs: state.logReducer.logs,
  selectedLog: state.logReducer.selectedLog
})

const mapDispatchToProps = (dispatch) => ({
  fetchLogs: () => dispatch(fetchLogs()),
  selectLog: (log) => dispatch(selectLog(log))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)
