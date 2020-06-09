import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import LoginPage from '../containers/LoginPage'
import UserPage from '../containers/UserPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}/>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/:username" component={UserPage} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
