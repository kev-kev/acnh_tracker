import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import LoginPage from '../containers/LoginPage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/login" component={LoginPage} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
