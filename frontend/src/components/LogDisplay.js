import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VisitorBox from '../components/VisitorBox'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

export class LogDisplay extends Component {

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
      <>
        {this.displayedLog()}
        <Button variant="contained" color="primary" component={Link} to={`/log/${this.props.selectedLog.date}/edit`}> 
            Edit Log
        </Button> <br />
      </>
      )
    } else {
      return (
        <p> No log exists for selected date. </p>
      )
    }
    
  }

  renderDate = () => {
    if(this.props.selectedLog){

    }
  }

  render() {
    return (
      <div>
        Log Display <br />
        {this.renderDisplay()} <br />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLog: state.logReducer.selectedLog
})

export default connect(mapStateToProps)(LogDisplay)
