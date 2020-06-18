import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLogs, selectLog } from '../actions/logActions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import NoteIcon from '@material-ui/icons/Note';
import { Link } from 'react-router-dom'

const useStyles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
})

export class LogContainer extends Component {

  componentDidMount(){
    this.props.fetchLogs()
  }

  handleOnClick = (date) => {
    let targetLog = this.props.logs.find(prop => {
      return prop.date === date
    }) 
    this.props.selectLog(targetLog)

  }

  // convert YYYY-MM-DD to MM/DD/YYYY
  getPrettyDate = (date) => {
    const parts = date.split('-')
    return parts[1] + "/" + parts[2] + "/" + parts[0]
  }

  render() {
    return (
      <>
        <List className="logContainer">
          {this.props.logs.map(log => {
            return (
              <ListItem>
                <Chip color="primary" icon={<NoteIcon />} key={log.date} label={this.getPrettyDate(log.date)} onClick={() => this.handleOnClick(log.date)} />
              </ListItem>
            )
          })}
        </List>
      </>
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

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(LogContainer))
