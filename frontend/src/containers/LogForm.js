import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisitorBox from '../components/VisitorBox'
import { saveLog } from '../actions/logActions'

export class LogForm extends Component {

  state = {
    date: "",
    visitors: []
  }

  componentDidMount(){
    this.setState({
      date: new Date().toISOString().substr(0,10)
    })
  }

  handleOnChange = (e) => {
    let targetVisitor = e.target.id
    if (e.target.checked){
      this.setState({
        visitors: [...this.state.visitors, targetVisitor]
      })
    } else {
      let visitorsArr = this.state.visitors
      let idx = visitorsArr.findIndex(visitor => visitor === targetVisitor)
      let newVisitors = [...this.state.visitors.slice(0, idx), ...this.state.visitors.slice(idx + 1)]
      this.setState({
        visitors: newVisitors
      })
    }
  }

  renderVisitorHeaders = () => {
    if (this.props.visitors){
      return this.props.visitors.map(visitor => {
        return (
          <VisitorBox key={visitor.name} visitor={visitor} handleOnChange={this.handleOnChange}/>
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

  saveLog = () => {
    this.props.saveLog(this.state.date, this.state.visitors)
  }

  getPrettyDate = (date) => {

  }

  render() {
    return (
      <>
        <p className="date">{this.getWeekday()}</p><br />
        <label htmlFor="date">Date</label>
        <input type="date" value={this.state.date} id="date" min="2020-03-20" onChange={this.handleDateChange}/>
        <div className="logTable"></div>
          <div className="visitorHeaders">
            {this.renderVisitorHeaders()} 
          </div> <br />
        <button onClick={this.saveLog}> Save Log </button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  visitors: state.visitorReducer.visitors,
  selectedLog: state.logReducer.selectedLog
})

const mapDispatchToProps = (dispatch) => ({
  saveLog: (date, visitors) => dispatch(saveLog(date, visitors))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogForm)
