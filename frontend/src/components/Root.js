import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import LoginPage from '../containers/LoginPage'
import UserPageV2 from '../containers/UserPageV2'
import LogForm from '../components/LogFormV2'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/:username" component={UserPageV2} />
        <Route exact path="/log/new" component={LogForm} />
        <Route exact path="/log/:date/edit" component={LogForm}/>
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
