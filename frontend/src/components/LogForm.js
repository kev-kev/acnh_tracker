import React, { Component } from 'react'
import { connect } from 'react-redux'
import VisitorBox from '../components/VisitorBox'
import { saveLog } from '../actions/logActions'
import { fetchVisitors } from '../actions/visitorActions'
import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  visitorGrid: {
      margin: '10px'
   },
});

export class LogForm extends Component {

  classes = useStyles();

  state = {
    date: "",
    selectedVisitors: []
  }

  componentDidMount(){
    this.props.fetchVisitors()
    let newDate = new Date()
    let modifiedDate =  (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' +  newDate.getFullYear();
    this.setState({
      date: modifiedDate
    })
  }

  handleOnChange = (e) => {
    let targetVisitor = e.target.id
    if (e.target.checked){
      this.setState({
        selectedVisitors: [...this.state.selectedVisitors, targetVisitor]
      })
    } else {
      let visitorsArr = this.state.selectedVisitors
      let idx = visitorsArr.findIndex(visitor => visitor === targetVisitor)
      let newVisitors = [...this.state.selectedVisitors.slice(0, idx), ...this.state.selectedVisitors.slice(idx + 1)]
      this.setState({
        selectedVisitors: newVisitors
      })
    }
  }

  renderVisitorHeaders = (classes) => {
    if (this.props.visitors){
      return this.props.visitors.map(visitor => {
        return (
          <Grid item xs={3} className={classes.visitorGrid}>
            <Paper variant="outlined">
              <VisitorBox key={visitor.name} visitor={visitor} handleOnChange={this.handleOnChange} displayCheckbox={true} />
            </Paper>
          </Grid>
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
    this.props.saveLog(this.state.date, this.state.selectedVisitors)
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <p className="date">{this.getWeekday()}</p><br />
        <label htmlFor="date">Date</label>
        <input type="date" value={this.state.date} id="date" min="2020-03-20" onChange={this.handleDateChange}/>
        <Grid container spacing={1}>
          {this.renderVisitorHeaders(classes)} 
        </Grid>
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
  saveLog: (date, visitors) => dispatch(saveLog(date, visitors)),
  fetchVisitors: () => dispatch(fetchVisitors())
})

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(LogForm))
