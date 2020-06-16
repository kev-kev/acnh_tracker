import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import LoginPage from '../containers/LoginPage'
import UserPage from '../containers/UserPage'
import Dashboard from '../dashboard/Dashboard'
import UserPageV2 from '../containers/UserPageV2'
import LogForm from '../containers/LogForm'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:username" component={UserPageV2} />
        <Route exact path="/log/new" component={LogForm} />
        <Route exact path="/log/:id/edit" component={LogForm}/>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
