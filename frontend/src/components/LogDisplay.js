import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VisitorBox from '../components/VisitorBox'
import Button from '@material-ui/core/Button'
import { RouterLink } from 'react-router'


export class LogDisplay extends Component {

  displayedLog = () => {
    if(this.props.selectedLog.visitors.length > 0){
      return this.props.selectedLog.visitors.map(visitor => {
        return <VisitorBox key={visitor.name} visitor={visitor}/>
      })
    } else {
      return <p> No visitors were logged for this day. </p>
    }
  }

  renderDisplay = () => {
    if (this.props.selectedLog) {
      return (
      <>
        {this.displayedLog()}
        <Button variant="contained" color="primary" component={Link} to={`/log/${this.props.selectedLog.id}/edit`}> 
            Edit Log
        </Button>
        {/* <Link to={`/log/${this.props.selectedLog.id}/edit`}> Edit Log </Link> */}
      </>
      )
    } else {
      return (
        <p> No log exists for selected date. </p>
      )
    }
    
  }


  render() {
    // if a log exists for the selected date already, display the log and an edit button
    // if not, show a message and new log button


    return (
      <div>
        Log Display <br />
        {this.renderDisplay()} <br />
        <Button variant="contained" color="primary" component={Link} to="/log/new"> 
            Create New Log
        </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLog: state.logReducer.selectedLog
})

export default connect(mapStateToProps)(LogDisplay)
