import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Log extends Component {
  render() {
    return (
      <div>
        <table classname="logTable">
          <tr>
            <td></td>
            {/* fetch villager info here */}
            <th><img src={"../assets/images/bae.png"}/><br />Celeste</th>
          </tr>
          <tr>
            <th>Sunday</th>
          </tr>
          <tr>
            <th>Monday</th>
          </tr>
          <tr>
            <th>Tuesday</th>
          </tr>
          <tr>
            <th>Wednesday</th>
          </tr>
          <tr>
            <th>Thursday</th>
          </tr>
          <tr>
            <th>Friday</th>
          </tr>
          <tr>
            <th>Saturday</th>
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

export default connect(mapStateToProps, mapDispatchToProps)(Log)
