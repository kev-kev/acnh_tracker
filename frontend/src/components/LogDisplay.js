import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VisitorBox from '../components/VisitorBox'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip'
import { clearSelectedLog } from '../actions/logActions'

export class LogDisplay extends Component {

  componentDidMount(){
    this.props.clearSelectedLog()
  }

  displayedLog = () => {
    if(this.props.selectedLog.visitors.length > 0){
      return this.props.selectedLog.visitors.map(visitor => {
        return <VisitorBox key={visitor.name} visitor={visitor} displayCheckbox={false}/>
      })
    } else {
      return <p> No visitors were logged for this day. </p>
    }
  }

  renderDisplay = () => {
    if (this.props.selectedLog) {
      console.log(this.props.selectedLog);
      return (
      <div>
        {this.displayedLog()}
        <Button variant="contained" color="primary" component={Link} to={`/log/${this.props.selectedLog.date}/edit`}> 
            Edit Log
        </Button>
      </div>
      )
    } else {
      return (
        <h3 className="displayPrompt"> Please select a log </h3>
      )
    }
    
  }

  getWeekday = (date) => {
    let d = new Date(date)
    let weekday = new Array(7)
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";
    return weekday[d.getDay()]
  }

  renderDate = () => {
    if(this.props.selectedLog){
      console.log(this.props.selectedLog.date)
      const parts = this.props.selectedLog.date.split('-')
      const headerDate = parts[1] + "/" + parts[2] + "/" + parts[0]
      return (
        <div className="logDisplayDate">
          <Typography variant="h6">{headerDate}</Typography>
          <Typography variant="subtitle"> {this.getWeekday(this.props.selectedLog.date)}</Typography>
        </div>
      )
    } else {
      return ""
    }
  }

  render() {
    return (
      <>
        {this.renderDate()} <br />
        {this.renderDisplay()} <br />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLog: state.logReducer.selectedLog
})

const mapDispatchToProps = (dispatch) => ({
  clearSelectedLog: () => dispatch(clearSelectedLog())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogDisplay)
