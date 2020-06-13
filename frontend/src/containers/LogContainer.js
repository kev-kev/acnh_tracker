import React, { Component } from 'react'
import { connect } from 'react-redux'
import Log from '../components/Log'

export class LogContainer extends Component {

  state = {
    date: ""
  }

  componentDidMount(){
    this.setState({
      date: (new Date()).toISOString().substr(0,10)
    })
  }

  visitorHeaders = () => {
    return(
    <tr>
      <td></td>
      <th><img src={require("../assets/images/bae.png")} height="50"/><br />Celeste</th>
      <th><img src={require("../assets/images/cj.png")} height="50"/><br />C.J.</th>
      <th><img src={require("../assets/images/daisy_mae.png")} height="50"/><br />Daisy Mae</th>
      <th><img src={require("../assets/images/flick.png")} height="50"/><br />Flick</th>
      <th><img src={require("../assets/images/gulliver.png")} height="50"/><br />Gulliver</th>
      <th><img src={require("../assets/images/kicks.png")} height="50"/><br />Kicks</th>
      <th><img src={require("../assets/images/kk.png")} height="50"/><br />K.K. Slider</th>
      <th><img src={require("../assets/images/label.png")} height="50"/><br />Label</th>
      <th><img src={require("../assets/images/leif.png")} height="50"/><br />Leif</th>
      <th><img src={require("../assets/images/redd.png")} height="50"/><br />Redd</th>
      <th><img src={require("../assets/images/sahara.png")} height="50"/><br />Sahara</th>
      <th><img src={require("../assets/images/wisp.png")} height="50"/><br />Wisp</th>
    </tr>
  )}

  render() {
    return (
      <div>
        <label for="date">Date</label>
        <input type="date" value={this.state.date} id="date" min="2020-03-20"/>
        <table classname="logTable">
          {this.visitorHeaders}
          <tr>
            <th>Current Day Here</th>
            {/* add on change handlers to checkboxes */}
            <Log />
            
          </tr>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(LogContainer)
