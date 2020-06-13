import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisitorBox from '../components/VisitorBox'

export class LogContainer extends Component {

  state = {
    date: ""
  }

  componentDidMount(){
    this.setState({
      date: (new Date()).toISOString().substr(0,10)
    })
  }

  renderVisitorHeaders = () => {
    if (this.props.visitors){
      return this.props.visitors.map(visitor => {
        return (
          <VisitorBox visitor={visitor}/>
        )
      })
    }
  }

  getWeekday = () => {
    let d = new Date(this.state.date)
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

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  render() {
    return (
      <>
        <p className="date">{this.getWeekday()}</p><br />
        <label htmlFor="date">Date</label>
        <input type="date" value={this.state.date} id="date" min="2020-03-20" onChange={this.handleDateChange}/>
        <div className="logTable">
          <div className="visitorHeaders">
            {this.renderVisitorHeaders()} 
          </div> <br />
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  visitors: state.visitorReducer.visitors
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)
