import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import TripDetail from './views/trip-detail'
import Home from './views/home'
import LoginPage from './views/login-page'
import RegisterPage from './views/register-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={TripDetail} exact path="/trip-detail" />
        <Route component={Home} exact path="/" />
        <Route component={LoginPage} exact path="/login-page" />
        <Route component={RegisterPage} exact path="/register-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
